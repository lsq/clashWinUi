const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    KeyCode: () => yc,
    KeyMod: () => Cc,
    Selection: () => xc,
    editor: () => Sc,
    languages: () => kc
  });
  const Lg = new Language(modifyState.language);
  var n,
    o,
    s,
    r,
    a,
    l,
    c,
    d,
    h,
    u,
    g,
    p,
    f,
    m,
    v,
    _,
    b,
    w,
    y,
    C,
    x,
    S,
    k,
    L,
    N,
    D,
    I,
    E,
    T,
    M,
    A,
    O,
    P,
    R,
    F,
    B = i(64141),
    V = i(71050),
    W = i(4669),
    H = i(22258),
    z = i(70666),
    j = i(50187),
    U = i(24314),
    $ = i(3860),
    K = i(85600);
  (!(function (e) {
    ((e[(e.Unknown = 0)] = "Unknown"), (e[(e.Disabled = 1)] = "Disabled"), (e[(e.Enabled = 2)] = "Enabled"));
  })(n || (n = {})), (function (e) {
    ((e[(e.KeepWhitespace = 1)] = "KeepWhitespace"), (e[(e.InsertAsSnippet = 4)] = "InsertAsSnippet"));
  })(o || (o = {})), (function (e) {
    ((e[(e.Method = 0)] = "Method"), (e[(e.Function = 1)] = "Function"), (e[(e.Constructor = 2)] = "Constructor"), (e[(e.Field = 3)] = "Field"), (e[(e.Variable = 4)] = "Variable"), (e[(e.Class = 5)] = "Class"), (e[(e.Struct = 6)] = "Struct"), (e[(e.Interface = 7)] = "Interface"), (e[(e.Module = 8)] = "Module"), (e[(e.Property = 9)] = "Property"), (e[(e.Event = 10)] = "Event"), (e[(e.Operator = 11)] = "Operator"), (e[(e.Unit = 12)] = "Unit"), (e[(e.Value = 13)] = "Value"), (e[(e.Constant = 14)] = "Constant"), (e[(e.Enum = 15)] = "Enum"), (e[(e.EnumMember = 16)] = "EnumMember"), (e[(e.Keyword = 17)] = "Keyword"), (e[(e.Text = 18)] = Lg.text()), (e[(e.Color = 19)] = "Color"), (e[(e.File = 20)] = "File"), (e[(e.Reference = 21)] = "Reference"), (e[(e.Customcolor = 22)] = "Customcolor"), (e[(e.Folder = 23)] = "Folder"), (e[(e.TypeParameter = 24)] = "TypeParameter"), (e[(e.User = 25)] = "User"), (e[(e.Issue = 26)] = "Issue"), (e[(e.Snippet = 27)] = "Snippet"));
  })(s || (s = {})), (function (e) {
    e[(e.Deprecated = 1)] = "Deprecated";
  })(r || (r = {})), (function (e) {
    ((e[(e.Invoke = 0)] = "Invoke"), (e[(e.TriggerCharacter = 1)] = "TriggerCharacter"), (e[(e.TriggerForIncompleteCompletions = 2)] = "TriggerForIncompleteCompletions"));
  })(a || (a = {})), (function (e) {
    ((e[(e.EXACT = 0)] = "EXACT"), (e[(e.ABOVE = 1)] = "ABOVE"), (e[(e.BELOW = 2)] = "BELOW"));
  })(l || (l = {})), (function (e) {
    ((e[(e.NotSet = 0)] = "NotSet"), (e[(e.ContentFlush = 1)] = "ContentFlush"), (e[(e.RecoverFromMarkers = 2)] = "RecoverFromMarkers"), (e[(e.Explicit = 3)] = "Explicit"), (e[(e.Paste = 4)] = "Paste"), (e[(e.Undo = 5)] = "Undo"), (e[(e.Redo = 6)] = "Redo"));
  })(c || (c = {})), (function (e) {
    ((e[(e.LF = 1)] = "LF"), (e[(e.CRLF = 2)] = "CRLF"));
  })(d || (d = {})), (function (e) {
    ((e[(e.Text = 0)] = Lg.text()), (e[(e.Read = 1)] = "Read"), (e[(e.Write = 2)] = "Write"));
  })(h || (h = {})), (function (e) {
    ((e[(e.None = 0)] = "None"), (e[(e.Keep = 1)] = "Keep"), (e[(e.Brackets = 2)] = "Brackets"), (e[(e.Advanced = 3)] = "Advanced"), (e[(e.Full = 4)] = "Full"));
  })(u || (u = {})), (function (e) {
    ((e[(e.acceptSuggestionOnCommitCharacter = 0)] = "acceptSuggestionOnCommitCharacter"), (e[(e.acceptSuggestionOnEnter = 1)] = "acceptSuggestionOnEnter"), (e[(e.accessibilitySupport = 2)] = "accessibilitySupport"), (e[(e.accessibilityPageSize = 3)] = "accessibilityPageSize"), (e[(e.ariaLabel = 4)] = "ariaLabel"), (e[(e.autoClosingBrackets = 5)] = "autoClosingBrackets"), (e[(e.autoClosingDelete = 6)] = "autoClosingDelete"), (e[(e.autoClosingOvertype = 7)] = "autoClosingOvertype"), (e[(e.autoClosingQuotes = 8)] = "autoClosingQuotes"), (e[(e.autoIndent = 9)] = "autoIndent"), (e[(e.automaticLayout = 10)] = "automaticLayout"), (e[(e.autoSurround = 11)] = "autoSurround"), (e[(e.bracketPairColorization = 12)] = "bracketPairColorization"), (e[(e.guides = 13)] = "guides"), (e[(e.codeLens = 14)] = "codeLens"), (e[(e.codeLensFontFamily = 15)] = "codeLensFontFamily"), (e[(e.codeLensFontSize = 16)] = "codeLensFontSize"), (e[(e.colorDecorators = 17)] = "colorDecorators"), (e[(e.columnSelection = 18)] = "columnSelection"), (e[(e.comments = 19)] = "comments"), (e[(e.contextmenu = 20)] = "contextmenu"), (e[(e.copyWithSyntaxHighlighting = 21)] = "copyWithSyntaxHighlighting"), (e[(e.cursorBlinking = 22)] = "cursorBlinking"), (e[(e.cursorSmoothCaretAnimation = 23)] = "cursorSmoothCaretAnimation"), (e[(e.cursorStyle = 24)] = "cursorStyle"), (e[(e.cursorSurroundingLines = 25)] = "cursorSurroundingLines"), (e[(e.cursorSurroundingLinesStyle = 26)] = "cursorSurroundingLinesStyle"), (e[(e.cursorWidth = 27)] = "cursorWidth"), (e[(e.disableLayerHinting = 28)] = "disableLayerHinting"), (e[(e.disableMonospaceOptimizations = 29)] = "disableMonospaceOptimizations"), (e[(e.domReadOnly = 30)] = "domReadOnly"), (e[(e.dragAndDrop = 31)] = "dragAndDrop"), (e[(e.emptySelectionClipboard = 32)] = "emptySelectionClipboard"), (e[(e.extraEditorClassName = 33)] = "extraEditorClassName"), (e[(e.fastScrollSensitivity = 34)] = "fastScrollSensitivity"), (e[(e.find = 35)] = "find"), (e[(e.fixedOverflowWidgets = 36)] = "fixedOverflowWidgets"), (e[(e.folding = 37)] = "folding"), (e[(e.foldingStrategy = 38)] = "foldingStrategy"), (e[(e.foldingHighlight = 39)] = "foldingHighlight"), (e[(e.foldingImportsByDefault = 40)] = "foldingImportsByDefault"), (e[(e.unfoldOnClickAfterEndOfLine = 41)] = "unfoldOnClickAfterEndOfLine"), (e[(e.fontFamily = 42)] = "fontFamily"), (e[(e.fontInfo = 43)] = "fontInfo"), (e[(e.fontLigatures = 44)] = "fontLigatures"), (e[(e.fontSize = 45)] = "fontSize"), (e[(e.fontWeight = 46)] = "fontWeight"), (e[(e.formatOnPaste = 47)] = "formatOnPaste"), (e[(e.formatOnType = 48)] = "formatOnType"), (e[(e.glyphMargin = 49)] = "glyphMargin"), (e[(e.gotoLocation = 50)] = "gotoLocation"), (e[(e.hideCursorInOverviewRuler = 51)] = "hideCursorInOverviewRuler"), (e[(e.hover = 52)] = "hover"), (e[(e.inDiffEditor = 53)] = "inDiffEditor"), (e[(e.inlineSuggest = 54)] = "inlineSuggest"), (e[(e.letterSpacing = 55)] = "letterSpacing"), (e[(e.lightbulb = 56)] = "lightbulb"), (e[(e.lineDecorationsWidth = 57)] = "lineDecorationsWidth"), (e[(e.lineHeight = 58)] = "lineHeight"), (e[(e.lineNumbers = 59)] = "lineNumbers"), (e[(e.lineNumbersMinChars = 60)] = "lineNumbersMinChars"), (e[(e.linkedEditing = 61)] = "linkedEditing"), (e[(e.links = 62)] = "links"), (e[(e.matchBrackets = 63)] = "matchBrackets"), (e[(e.minimap = 64)] = "minimap"), (e[(e.mouseStyle = 65)] = "mouseStyle"), (e[(e.mouseWheelScrollSensitivity = 66)] = "mouseWheelScrollSensitivity"), (e[(e.mouseWheelZoom = 67)] = "mouseWheelZoom"), (e[(e.multiCursorMergeOverlapping = 68)] = "multiCursorMergeOverlapping"), (e[(e.multiCursorModifier = 69)] = "multiCursorModifier"), (e[(e.multiCursorPaste = 70)] = "multiCursorPaste"), (e[(e.occurrencesHighlight = 71)] = "occurrencesHighlight"), (e[(e.overviewRulerBorder = 72)] = "overviewRulerBorder"), (e[(e.overviewRulerLanes = 73)] = "overviewRulerLanes"), (e[(e.padding = 74)] = "padding"), (e[(e.parameterHints = 75)] = "parameterHints"), (e[(e.peekWidgetDefaultFocus = 76)] = "peekWidgetDefaultFocus"), (e[(e.definitionLinkOpensInPeek = 77)] = "definitionLinkOpensInPeek"), (e[(e.quickSuggestions = 78)] = "quickSuggestions"), (e[(e.quickSuggestionsDelay = 79)] = "quickSuggestionsDelay"), (e[(e.readOnly = 80)] = "readOnly"), (e[(e.renameOnType = 81)] = "renameOnType"), (e[(e.renderControlCharacters = 82)] = "renderControlCharacters"), (e[(e.renderFinalNewline = 83)] = "renderFinalNewline"), (e[(e.renderLineHighlight = 84)] = "renderLineHighlight"), (e[(e.renderLineHighlightOnlyWhenFocus = 85)] = "renderLineHighlightOnlyWhenFocus"), (e[(e.renderValidationDecorations = 86)] = "renderValidationDecorations"), (e[(e.renderWhitespace = 87)] = "renderWhitespace"), (e[(e.revealHorizontalRightPadding = 88)] = "revealHorizontalRightPadding"), (e[(e.roundedSelection = 89)] = "roundedSelection"), (e[(e.rulers = 90)] = "rulers"), (e[(e.scrollbar = 91)] = "scrollbar"), (e[(e.scrollBeyondLastColumn = 92)] = "scrollBeyondLastColumn"), (e[(e.scrollBeyondLastLine = 93)] = "scrollBeyondLastLine"), (e[(e.scrollPredominantAxis = 94)] = "scrollPredominantAxis"), (e[(e.selectionClipboard = 95)] = "selectionClipboard"), (e[(e.selectionHighlight = 96)] = "selectionHighlight"), (e[(e.selectOnLineNumbers = 97)] = "selectOnLineNumbers"), (e[(e.showFoldingControls = 98)] = "showFoldingControls"), (e[(e.showUnused = 99)] = "showUnused"), (e[(e.snippetSuggestions = 100)] = "snippetSuggestions"), (e[(e.smartSelect = 101)] = "smartSelect"), (e[(e.smoothScrolling = 102)] = "smoothScrolling"), (e[(e.stickyTabStops = 103)] = "stickyTabStops"), (e[(e.stopRenderingLineAfter = 104)] = "stopRenderingLineAfter"), (e[(e.suggest = 105)] = "suggest"), (e[(e.suggestFontSize = 106)] = "suggestFontSize"), (e[(e.suggestLineHeight = 107)] = "suggestLineHeight"), (e[(e.suggestOnTriggerCharacters = 108)] = "suggestOnTriggerCharacters"), (e[(e.suggestSelection = 109)] = "suggestSelection"), (e[(e.tabCompletion = 110)] = "tabCompletion"), (e[(e.tabIndex = 111)] = "tabIndex"), (e[(e.unusualLineTerminators = 112)] = "unusualLineTerminators"), (e[(e.useShadowDOM = 113)] = "useShadowDOM"), (e[(e.useTabStops = 114)] = "useTabStops"), (e[(e.wordSeparators = 115)] = "wordSeparators"), (e[(e.wordWrap = 116)] = "wordWrap"), (e[(e.wordWrapBreakAfterCharacters = 117)] = "wordWrapBreakAfterCharacters"), (e[(e.wordWrapBreakBeforeCharacters = 118)] = "wordWrapBreakBeforeCharacters"), (e[(e.wordWrapColumn = 119)] = "wordWrapColumn"), (e[(e.wordWrapOverride1 = 120)] = "wordWrapOverride1"), (e[(e.wordWrapOverride2 = 121)] = "wordWrapOverride2"), (e[(e.wrappingIndent = 122)] = "wrappingIndent"), (e[(e.wrappingStrategy = 123)] = "wrappingStrategy"), (e[(e.showDeprecated = 124)] = "showDeprecated"), (e[(e.inlayHints = 125)] = "inlayHints"), (e[(e.editorClassName = 126)] = "editorClassName"), (e[(e.pixelRatio = 127)] = "pixelRatio"), (e[(e.tabFocusMode = 128)] = "tabFocusMode"), (e[(e.layoutInfo = 129)] = "layoutInfo"), (e[(e.wrappingInfo = 130)] = "wrappingInfo"));
  })(g || (g = {})), (function (e) {
    ((e[(e.TextDefined = 0)] = "TextDefined"), (e[(e.LF = 1)] = "LF"), (e[(e.CRLF = 2)] = "CRLF"));
  })(p || (p = {})), (function (e) {
    ((e[(e.LF = 0)] = "LF"), (e[(e.CRLF = 1)] = "CRLF"));
  })(f || (f = {})), (function (e) {
    ((e[(e.None = 0)] = "None"), (e[(e.Indent = 1)] = "Indent"), (e[(e.IndentOutdent = 2)] = "IndentOutdent"), (e[(e.Outdent = 3)] = "Outdent"));
  })(m || (m = {})), (function (e) {
    ((e[(e.Other = 0)] = "Other"), (e[(e.Type = 1)] = Lg.type()), (e[(e.Parameter = 2)] = "Parameter"));
  })(v || (v = {})), (function (e) {
    ((e[(e.Automatic = 0)] = "Automatic"), (e[(e.Explicit = 1)] = "Explicit"));
  })(_ || (_ = {})), (function (e) {
    ((e[(e.DependsOnKbLayout = -1)] = "DependsOnKbLayout"), (e[(e.Unknown = 0)] = "Unknown"), (e[(e.Backspace = 1)] = "Backspace"), (e[(e.Tab = 2)] = "Tab"), (e[(e.Enter = 3)] = "Enter"), (e[(e.Shift = 4)] = "Shift"), (e[(e.Ctrl = 5)] = "Ctrl"), (e[(e.Alt = 6)] = "Alt"), (e[(e.PauseBreak = 7)] = "PauseBreak"), (e[(e.CapsLock = 8)] = "CapsLock"), (e[(e.Escape = 9)] = "Escape"), (e[(e.Space = 10)] = "Space"), (e[(e.PageUp = 11)] = "PageUp"), (e[(e.PageDown = 12)] = "PageDown"), (e[(e.End = 13)] = "End"), (e[(e.Home = 14)] = "Home"), (e[(e.LeftArrow = 15)] = "LeftArrow"), (e[(e.UpArrow = 16)] = "UpArrow"), (e[(e.RightArrow = 17)] = "RightArrow"), (e[(e.DownArrow = 18)] = "DownArrow"), (e[(e.Insert = 19)] = "Insert"), (e[(e.Delete = 20)] = "Delete"), (e[(e.Digit0 = 21)] = "Digit0"), (e[(e.Digit1 = 22)] = "Digit1"), (e[(e.Digit2 = 23)] = "Digit2"), (e[(e.Digit3 = 24)] = "Digit3"), (e[(e.Digit4 = 25)] = "Digit4"), (e[(e.Digit5 = 26)] = "Digit5"), (e[(e.Digit6 = 27)] = "Digit6"), (e[(e.Digit7 = 28)] = "Digit7"), (e[(e.Digit8 = 29)] = "Digit8"), (e[(e.Digit9 = 30)] = "Digit9"), (e[(e.KeyA = 31)] = "KeyA"), (e[(e.KeyB = 32)] = "KeyB"), (e[(e.KeyC = 33)] = "KeyC"), (e[(e.KeyD = 34)] = "KeyD"), (e[(e.KeyE = 35)] = "KeyE"), (e[(e.KeyF = 36)] = "KeyF"), (e[(e.KeyG = 37)] = "KeyG"), (e[(e.KeyH = 38)] = "KeyH"), (e[(e.KeyI = 39)] = "KeyI"), (e[(e.KeyJ = 40)] = "KeyJ"), (e[(e.KeyK = 41)] = "KeyK"), (e[(e.KeyL = 42)] = "KeyL"), (e[(e.KeyM = 43)] = "KeyM"), (e[(e.KeyN = 44)] = "KeyN"), (e[(e.KeyO = 45)] = "KeyO"), (e[(e.KeyP = 46)] = "KeyP"), (e[(e.KeyQ = 47)] = "KeyQ"), (e[(e.KeyR = 48)] = "KeyR"), (e[(e.KeyS = 49)] = "KeyS"), (e[(e.KeyT = 50)] = "KeyT"), (e[(e.KeyU = 51)] = "KeyU"), (e[(e.KeyV = 52)] = "KeyV"), (e[(e.KeyW = 53)] = "KeyW"), (e[(e.KeyX = 54)] = "KeyX"), (e[(e.KeyY = 55)] = "KeyY"), (e[(e.KeyZ = 56)] = "KeyZ"), (e[(e.Meta = 57)] = "Meta"), (e[(e.ContextMenu = 58)] = "ContextMenu"), (e[(e.F1 = 59)] = "F1"), (e[(e.F2 = 60)] = "F2"), (e[(e.F3 = 61)] = "F3"), (e[(e.F4 = 62)] = "F4"), (e[(e.F5 = 63)] = "F5"), (e[(e.F6 = 64)] = "F6"), (e[(e.F7 = 65)] = "F7"), (e[(e.F8 = 66)] = "F8"), (e[(e.F9 = 67)] = "F9"), (e[(e.F10 = 68)] = "F10"), (e[(e.F11 = 69)] = "F11"), (e[(e.F12 = 70)] = "F12"), (e[(e.F13 = 71)] = "F13"), (e[(e.F14 = 72)] = "F14"), (e[(e.F15 = 73)] = "F15"), (e[(e.F16 = 74)] = "F16"), (e[(e.F17 = 75)] = "F17"), (e[(e.F18 = 76)] = "F18"), (e[(e.F19 = 77)] = "F19"), (e[(e.NumLock = 78)] = "NumLock"), (e[(e.ScrollLock = 79)] = "ScrollLock"), (e[(e.Semicolon = 80)] = "Semicolon"), (e[(e.Equal = 81)] = "Equal"), (e[(e.Comma = 82)] = "Comma"), (e[(e.Minus = 83)] = "Minus"), (e[(e.Period = 84)] = "Period"), (e[(e.Slash = 85)] = "Slash"), (e[(e.Backquote = 86)] = "Backquote"), (e[(e.BracketLeft = 87)] = "BracketLeft"), (e[(e.Backslash = 88)] = "Backslash"), (e[(e.BracketRight = 89)] = "BracketRight"), (e[(e.Quote = 90)] = "Quote"), (e[(e.OEM_8 = 91)] = "OEM_8"), (e[(e.IntlBackslash = 92)] = "IntlBackslash"), (e[(e.Numpad0 = 93)] = "Numpad0"), (e[(e.Numpad1 = 94)] = "Numpad1"), (e[(e.Numpad2 = 95)] = "Numpad2"), (e[(e.Numpad3 = 96)] = "Numpad3"), (e[(e.Numpad4 = 97)] = "Numpad4"), (e[(e.Numpad5 = 98)] = "Numpad5"), (e[(e.Numpad6 = 99)] = "Numpad6"), (e[(e.Numpad7 = 100)] = "Numpad7"), (e[(e.Numpad8 = 101)] = "Numpad8"), (e[(e.Numpad9 = 102)] = "Numpad9"), (e[(e.NumpadMultiply = 103)] = "NumpadMultiply"), (e[(e.NumpadAdd = 104)] = "NumpadAdd"), (e[(e.NUMPAD_SEPARATOR = 105)] = "NUMPAD_SEPARATOR"), (e[(e.NumpadSubtract = 106)] = "NumpadSubtract"), (e[(e.NumpadDecimal = 107)] = "NumpadDecimal"), (e[(e.NumpadDivide = 108)] = "NumpadDivide"), (e[(e.KEY_IN_COMPOSITION = 109)] = "KEY_IN_COMPOSITION"), (e[(e.ABNT_C1 = 110)] = "ABNT_C1"), (e[(e.ABNT_C2 = 111)] = "ABNT_C2"), (e[(e.AudioVolumeMute = 112)] = "AudioVolumeMute"), (e[(e.AudioVolumeUp = 113)] = "AudioVolumeUp"), (e[(e.AudioVolumeDown = 114)] = "AudioVolumeDown"), (e[(e.BrowserSearch = 115)] = "BrowserSearch"), (e[(e.BrowserHome = 116)] = "BrowserHome"), (e[(e.BrowserBack = 117)] = "BrowserBack"), (e[(e.BrowserForward = 118)] = "BrowserForward"), (e[(e.MediaTrackNext = 119)] = "MediaTrackNext"), (e[(e.MediaTrackPrevious = 120)] = "MediaTrackPrevious"), (e[(e.MediaStop = 121)] = "MediaStop"), (e[(e.MediaPlayPause = 122)] = "MediaPlayPause"), (e[(e.LaunchMediaPlayer = 123)] = "LaunchMediaPlayer"), (e[(e.LaunchMail = 124)] = "LaunchMail"), (e[(e.LaunchApp2 = 125)] = "LaunchApp2"), (e[(e.MAX_VALUE = 126)] = "MAX_VALUE"));
  })(b || (b = {})), (function (e) {
    ((e[(e.Hint = 1)] = "Hint"), (e[(e.Info = 2)] = "Info"), (e[(e.Warning = 4)] = "Warning"), (e[(e.Error = 8)] = "错误"));
  })(w || (w = {})), (function (e) {
    ((e[(e.Unnecessary = 1)] = "Unnecessary"), (e[(e.Deprecated = 2)] = "Deprecated"));
  })(y || (y = {})), (function (e) {
    ((e[(e.Inline = 1)] = "Inline"), (e[(e.Gutter = 2)] = "Gutter"));
  })(C || (C = {})), (function (e) {
    ((e[(e.UNKNOWN = 0)] = "UNKNOWN"), (e[(e.TEXTAREA = 1)] = "TEXTAREA"), (e[(e.GUTTER_GLYPH_MARGIN = 2)] = "GUTTER_GLYPH_MARGIN"), (e[(e.GUTTER_LINE_NUMBERS = 3)] = "GUTTER_LINE_NUMBERS"), (e[(e.GUTTER_LINE_DECORATIONS = 4)] = "GUTTER_LINE_DECORATIONS"), (e[(e.GUTTER_VIEW_ZONE = 5)] = "GUTTER_VIEW_ZONE"), (e[(e.CONTENT_TEXT = 6)] = "CONTENT_TEXT"), (e[(e.CONTENT_EMPTY = 7)] = "CONTENT_EMPTY"), (e[(e.CONTENT_VIEW_ZONE = 8)] = "CONTENT_VIEW_ZONE"), (e[(e.CONTENT_WIDGET = 9)] = "CONTENT_WIDGET"), (e[(e.OVERVIEW_RULER = 10)] = "OVERVIEW_RULER"), (e[(e.SCROLLBAR = 11)] = "SCROLLBAR"), (e[(e.OVERLAY_WIDGET = 12)] = "OVERLAY_WIDGET"), (e[(e.OUTSIDE_EDITOR = 13)] = "OUTSIDE_EDITOR"));
  })(x || (x = {})), (function (e) {
    ((e[(e.TOP_RIGHT_CORNER = 0)] = "TOP_RIGHT_CORNER"), (e[(e.BOTTOM_RIGHT_CORNER = 1)] = "BOTTOM_RIGHT_CORNER"), (e[(e.TOP_CENTER = 2)] = "TOP_CENTER"));
  })(S || (S = {})), (function (e) {
    ((e[(e.Left = 1)] = "Left"), (e[(e.Center = 2)] = "Center"), (e[(e.Right = 4)] = "Right"), (e[(e.Full = 7)] = "Full"));
  })(k || (k = {})), (function (e) {
    ((e[(e.Off = 0)] = "Off"), (e[(e.On = 1)] = "On"), (e[(e.Relative = 2)] = "Relative"), (e[(e.Interval = 3)] = "Interval"), (e[(e.Custom = 4)] = Lg.custom()));
  })(L || (L = {})), (function (e) {
    ((e[(e.None = 0)] = "None"), (e[(e.Text = 1)] = Lg.text()), (e[(e.Blocks = 2)] = "Blocks"));
  })(N || (N = {})), (function (e) {
    ((e[(e.Smooth = 0)] = "Smooth"), (e[(e.Immediate = 1)] = "Immediate"));
  })(D || (D = {})), (function (e) {
    ((e[(e.Auto = 1)] = "Auto"), (e[(e.Hidden = 2)] = "Hidden"), (e[(e.Visible = 3)] = "Visible"));
  })(I || (I = {})), (function (e) {
    ((e[(e.LTR = 0)] = "LTR"), (e[(e.RTL = 1)] = "RTL"));
  })(E || (E = {})), (function (e) {
    ((e[(e.Invoke = 1)] = "Invoke"), (e[(e.TriggerCharacter = 2)] = "TriggerCharacter"), (e[(e.ContentChange = 3)] = "ContentChange"));
  })(T || (T = {})), (function (e) {
    ((e[(e.File = 0)] = "File"), (e[(e.Module = 1)] = "Module"), (e[(e.Namespace = 2)] = "Namespace"), (e[(e.Package = 3)] = "Package"), (e[(e.Class = 4)] = "Class"), (e[(e.Method = 5)] = "Method"), (e[(e.Property = 6)] = "Property"), (e[(e.Field = 7)] = "Field"), (e[(e.Constructor = 8)] = "Constructor"), (e[(e.Enum = 9)] = "Enum"), (e[(e.Interface = 10)] = "Interface"), (e[(e.Function = 11)] = "Function"), (e[(e.Variable = 12)] = "Variable"), (e[(e.Constant = 13)] = "Constant"), (e[(e.String = 14)] = "String"), (e[(e.Number = 15)] = "Number"), (e[(e.Boolean = 16)] = "Boolean"), (e[(e.Array = 17)] = "Array"), (e[(e.Object = 18)] = "Object"), (e[(e.Key = 19)] = "Key"), (e[(e.Null = 20)] = "Null"), (e[(e.EnumMember = 21)] = "EnumMember"), (e[(e.Struct = 22)] = "Struct"), (e[(e.Event = 23)] = "Event"), (e[(e.Operator = 24)] = "Operator"), (e[(e.TypeParameter = 25)] = "TypeParameter"));
  })(M || (M = {})), (function (e) {
    e[(e.Deprecated = 1)] = "Deprecated";
  })(A || (A = {})), (function (e) {
    ((e[(e.Hidden = 0)] = "Hidden"), (e[(e.Blink = 1)] = "Blink"), (e[(e.Smooth = 2)] = "Smooth"), (e[(e.Phase = 3)] = "Phase"), (e[(e.Expand = 4)] = "Expand"), (e[(e.Solid = 5)] = "Solid"));
  })(O || (O = {})), (function (e) {
    ((e[(e.Line = 1)] = "Line"), (e[(e.Block = 2)] = "Block"), (e[(e.Underline = 3)] = "Underline"), (e[(e.LineThin = 4)] = "LineThin"), (e[(e.BlockOutline = 5)] = "BlockOutline"), (e[(e.UnderlineThin = 6)] = "UnderlineThin"));
  })(P || (P = {})), (function (e) {
    ((e[(e.AlwaysGrowsWhenTypingAtEdges = 0)] = "AlwaysGrowsWhenTypingAtEdges"), (e[(e.NeverGrowsWhenTypingAtEdges = 1)] = "NeverGrowsWhenTypingAtEdges"), (e[(e.GrowsOnlyWhenTypingBefore = 2)] = "GrowsOnlyWhenTypingBefore"), (e[(e.GrowsOnlyWhenTypingAfter = 3)] = "GrowsOnlyWhenTypingAfter"));
  })(R || (R = {})), (function (e) {
    ((e[(e.None = 0)] = "None"), (e[(e.Same = 1)] = "Same"), (e[(e.Indent = 2)] = "Indent"), (e[(e.DeepIndent = 3)] = "DeepIndent"));
  })(F || (F = {})));
  class q {
    static chord(e, t) {
      return (0, H.gx)(e, t);
    }
  }
  function Z() {
    return {
      editor: void 0,
      languages: void 0,
      CancellationTokenSource: V.A,
      Emitter: W.Q5,
      KeyCode: b,
      KeyMod: q,
      Position: j.L,
      Range: U.e,
      Selection: $.Y,
      SelectionDirection: E,
      MarkerSeverity: w,
      MarkerTag: y,
      Uri: z.o,
      Token: K.WU
    };
  }
  ((q.CtrlCmd = 2048), (q.Shift = 1024), (q.Alt = 512), (q.WinCtrl = 256));
  i(4172);
  var G,
    Y = i(11640),
    Q = i(65321),
    X = i(91741),
    J = i(43702),
    ee = i(23897),
    te = i(66663),
    ie = i(95935),
    ne = i(94565);
  !(function (e) {
    ((e[(e.API = 0)] = "API"), (e[(e.USER = 1)] = "USER"));
  })(G || (G = {}));
  var oe = i(50988),
    se = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    re = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    ae = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  let le = class {
    constructor(e) {
      this._commandService = e;
    }
    open(e, t) {
      return ae(this, void 0, void 0, function* () {
        if (!(0, oe.xn)(e, te.lg.command)) return !1;
        if (!(null == t ? void 0 : t.allowCommands)) return !0;
        "string" == typeof e && (e = z.o.parse(e));
        let i = [];
        try {
          i = (0, ee.Q)(decodeURIComponent(e.query));
        } catch (t) {
          try {
            i = (0, ee.Q)(e.query);
          } catch (e) {}
        }
        return (Array.isArray(i) || (i = [i]), yield this._commandService.executeCommand(e.path, ...i), !0);
      });
    }
  };
  le = se([re(0, ne.H)], le);
  let ce = class {
    constructor(e) {
      this._editorService = e;
    }
    open(e, t) {
      return ae(this, void 0, void 0, function* () {
        let i;
        "string" == typeof e && (e = z.o.parse(e));
        const n = /^L?(\d+)(?:,(\d+))?/.exec(e.fragment);
        return (n && ((i = {
          startLineNumber: parseInt(n[1]),
          startColumn: n[2] ? parseInt(n[2]) : 1
        }), (e = e.with({
          fragment: ""
        }))), e.scheme === te.lg.file && (e = (0, ie.AH)(e)), yield this._editorService.openCodeEditor({
          resource: e,
          options: Object.assign({
            selection: i,
            context: (null == t ? void 0 : t.fromUserGesture) ? G.USER : G.API
          }, null == t ? void 0 : t.editorOptions)
        }, this._editorService.getFocusedCodeEditor(), null == t ? void 0 : t.openToSide), !0);
      });
    }
  };
  ce = se([re(0, Y.$)], ce);
  let de = class {
    constructor(e, t) {
      ((this._openers = new X.S()), (this._validators = new X.S()), (this._resolvers = new X.S()), (this._resolvedUriTargets = new J.Y9(e => e.with({
        path: null,
        fragment: null,
        query: null
      }).toString())), (this._externalOpeners = new X.S()), (this._defaultExternalOpener = {
        openExternal: e => ae(this, void 0, void 0, function* () {
          return ((0, oe.xn)(e, te.lg.http) || (0, oe.xn)(e, te.lg.https) ? Q.V3(e) : (window.location.href = e), !0);
        })
      }), this._openers.push({
        open: (e, t) => ae(this, void 0, void 0, function* () {
          return (!!((null == t ? void 0 : t.openExternal) || (0, oe.xn)(e, te.lg.mailto) || (0, oe.xn)(e, te.lg.http) || (0, oe.xn)(e, te.lg.https)) && (yield this._doOpenExternal(e, t), !0));
        })
      }), this._openers.push(new le(t)), this._openers.push(new ce(e)));
    }
    registerOpener(e) {
      return {
        dispose: this._openers.unshift(e)
      };
    }
    registerValidator(e) {
      return {
        dispose: this._validators.push(e)
      };
    }
    registerExternalUriResolver(e) {
      return {
        dispose: this._resolvers.push(e)
      };
    }
    setDefaultExternalOpener(e) {
      this._defaultExternalOpener = e;
    }
    registerExternalOpener(e) {
      return {
        dispose: this._externalOpeners.push(e)
      };
    }
    open(e, t) {
      var i;
      return ae(this, void 0, void 0, function* () {
        const n = "string" == typeof e ? z.o.parse(e) : e,
          o = null !== (i = this._resolvedUriTargets.get(n)) && void 0 !== i ? i : e;
        for (const e of this._validators) if (!(yield e.shouldOpen(o))) return !1;
        for (const i of this._openers) {
          if (yield i.open(e, t)) return !0;
        }
        return !1;
      });
    }
    resolveExternalUri(e, t) {
      return ae(this, void 0, void 0, function* () {
        for (const i of this._resolvers) try {
          const n = yield i.resolveExternalUri(e, t);
          if (n) return (this._resolvedUriTargets.has(n.resolved) || this._resolvedUriTargets.set(n.resolved, e), n);
        } catch (e) {}
        throw new Error("Could not resolve external URI: " + e.toString());
      });
    }
    _doOpenExternal(e, t) {
      return ae(this, void 0, void 0, function* () {
        const i = "string" == typeof e ? z.o.parse(e) : e;
        let n, o;
        try {
          n = (yield this.resolveExternalUri(i, t)).resolved;
        } catch (e) {
          n = i;
        }
        if (((o = "string" == typeof e && i.toString() === n.toString() ? e : encodeURI(n.toString(!0))), null == t ? void 0 : t.allowContributedOpeners)) {
          const e = "string" == typeof (null == t ? void 0 : t.allowContributedOpeners) ? null == t ? void 0 : t.allowContributedOpeners : void 0;
          for (const t of this._externalOpeners) {
            if (yield t.openExternal(o, {
              sourceUri: i,
              preferredOpenerId: e
            }, V.T.None)) return !0;
          }
        }
        return this._defaultExternalOpener.openExternal(o, {
          sourceUri: i
        }, V.T.None);
      });
    }
    dispose() {
      this._validators.clear();
    }
  };
  de = se([re(0, Y.$), re(1, ne.H)], de);
  var he = i(35146),
    ue = i(5976),
    ge = i(36248);
  const pe = {
    followsCaret: !0,
    ignoreCharChanges: !0,
    alwaysRevealFirst: !0
  };
  class fe extends ue.JT {
    constructor(e, t = {}) {
      (super(), (this._onDidUpdate = this._register(new W.Q5())), (this._editor = e), (this._options = ge.jB(t, pe, !1)), (this.disposed = !1), (this.nextIdx = -1), (this.ranges = []), (this.ignoreSelectionChange = !1), (this.revealFirst = Boolean(this._options.alwaysRevealFirst)), this._register(this._editor.onDidDispose(() => this.dispose())), this._register(this._editor.onDidUpdateDiff(() => this._onDiffUpdated())), this._options.followsCaret && this._register(this._editor.getModifiedEditor().onDidChangeCursorPosition(e => {
        this.ignoreSelectionChange || (this.nextIdx = -1);
      })), this._options.alwaysRevealFirst && this._register(this._editor.getModifiedEditor().onDidChangeModel(e => {
        this.revealFirst = !0;
      })), this._init());
    }
    _init() {
      this._editor.getLineChanges();
    }
    _onDiffUpdated() {
      (this._init(), this._compute(this._editor.getLineChanges()), this.revealFirst && null !== this._editor.getLineChanges() && ((this.revealFirst = !1), (this.nextIdx = -1), this.next(1)));
    }
    _compute(e) {
      ((this.ranges = []), e && e.forEach(e => {
        !this._options.ignoreCharChanges && e.charChanges ? e.charChanges.forEach(e => {
          this.ranges.push({
            rhs: !0,
            range: new U.e(e.modifiedStartLineNumber, e.modifiedStartColumn, e.modifiedEndLineNumber, e.modifiedEndColumn)
          });
        }) : 0 === e.modifiedEndLineNumber ? this.ranges.push({
          rhs: !0,
          range: new U.e(e.modifiedStartLineNumber, 1, e.modifiedStartLineNumber + 1, 1)
        }) : this.ranges.push({
          rhs: !0,
          range: new U.e(e.modifiedStartLineNumber, 1, e.modifiedEndLineNumber + 1, 1)
        });
      }), this.ranges.sort((e, t) => U.e.compareRangesUsingStarts(e.range, t.range)), this._onDidUpdate.fire(this));
    }
    _initIdx(e) {
      let t = !1,
        i = this._editor.getPosition();
      if (i) {
        for (let n = 0, o = this.ranges.length; n < o && !t; n++) {
          let o = this.ranges[n].range;
          i.isBeforeOrEqual(o.getStartPosition()) && ((this.nextIdx = n + (e ? 0 : -1)), (t = !0));
        }
        (t || (this.nextIdx = e ? 0 : this.ranges.length - 1), this.nextIdx < 0 && (this.nextIdx = this.ranges.length - 1));
      } else this.nextIdx = 0;
    }
    _move(e, t) {
      if ((he.ok(!this.disposed, "Illegal State - diff navigator has been disposed"), !this.canNavigate())) return;
      -1 === this.nextIdx ? this._initIdx(e) : e ? ((this.nextIdx += 1), this.nextIdx >= this.ranges.length && (this.nextIdx = 0)) : ((this.nextIdx -= 1), this.nextIdx < 0 && (this.nextIdx = this.ranges.length - 1));
      let i = this.ranges[this.nextIdx];
      this.ignoreSelectionChange = !0;
      try {
        let e = i.range.getStartPosition();
        (this._editor.setPosition(e), this._editor.revealRangeInCenter(i.range, t));
      } finally {
        this.ignoreSelectionChange = !1;
      }
    }
    canNavigate() {
      return this.ranges && this.ranges.length > 0;
    }
    next(e = 0) {
      this._move(!0, e);
    }
    previous(e = 0) {
      this._move(!1, e);
    }
    dispose() {
      (super.dispose(), (this.ranges = []), (this.disposed = !0));
    }
  }
  var me = i(27374),
    ve = i(96518),
    _e = i(84973),
    be = i(44101),
    we = i(28111),
    ye = i(90469),
    Ce = i(71531),
    xe = i(88216),
    Se = i(15393),
    ke = i(17301),
    Le = i(1432),
    Ne = i(98401),
    De = i(97295);
  const Ie = "$initialize";
  let Ee = !1;
  function Te(e) {
    Le.$L && (Ee || ((Ee = !0), console.warn("Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq")), console.warn(e.message));
  }
  class Me {
    constructor(e, t, i, n) {
      ((this.vsWorker = e), (this.req = t), (this.method = i), (this.args = n), (this.type = 0));
    }
  }
  class Ae {
    constructor(e, t, i, n) {
      ((this.vsWorker = e), (this.seq = t), (this.res = i), (this.err = n), (this.type = 1));
    }
  }
  class Oe {
    constructor(e, t, i, n) {
      ((this.vsWorker = e), (this.req = t), (this.eventName = i), (this.arg = n), (this.type = 2));
    }
  }
  class Pe {
    constructor(e, t, i) {
      ((this.vsWorker = e), (this.req = t), (this.event = i), (this.type = 3));
    }
  }
  class Re {
    constructor(e, t) {
      ((this.vsWorker = e), (this.req = t), (this.type = 4));
    }
  }
  class Fe {
    constructor(e) {
      ((this._workerId = -1), (this._handler = e), (this._lastSentReq = 0), (this._pendingReplies = Object.create(null)), (this._pendingEmitters = new Map()), (this._pendingEvents = new Map()));
    }
    setWorkerId(e) {
      this._workerId = e;
    }
    sendMessage(e, t) {
      const i = String(++this._lastSentReq);
      return new Promise((n, o) => {
        ((this._pendingReplies[i] = {
          resolve: n,
          reject: o
        }), this._send(new Me(this._workerId, i, e, t)));
      });
    }
    listen(e, t) {
      let i = null;
      const n = new W.Q5({
        onFirstListenerAdd: () => {
          ((i = String(++this._lastSentReq)), this._pendingEmitters.set(i, n), this._send(new Oe(this._workerId, i, e, t)));
        },
        onLastListenerRemove: () => {
          (this._pendingEmitters.delete(i), this._send(new Re(this._workerId, i)), (i = null));
        }
      });
      return n.event;
    }
    handleMessage(e) {
      e && e.vsWorker && ((-1 !== this._workerId && e.vsWorker !== this._workerId) || this._handleMessage(e));
    }
    _handleMessage(e) {
      switch (e.type) {
        case 1:
          return this._handleReplyMessage(e);
        case 0:
          return this._handleRequestMessage(e);
        case 2:
          return this._handleSubscribeEventMessage(e);
        case 3:
          return this._handleEventMessage(e);
        case 4:
          return this._handleUnsubscribeEventMessage(e);
      }
    }
    _handleReplyMessage(e) {
      if (!this._pendingReplies[e.seq]) return void console.warn("Got reply to unknown seq");
      let t = this._pendingReplies[e.seq];
      if ((delete this._pendingReplies[e.seq], e.err)) {
        let i = e.err;
        return (e.err.$isError && ((i = new Error()), (i.name = e.err.name), (i.message = e.err.message), (i.stack = e.err.stack)), void t.reject(i));
      }
      t.resolve(e.res);
    }
    _handleRequestMessage(e) {
      let t = e.req;
      this._handler.handleMessage(e.method, e.args).then(e => {
        this._send(new Ae(this._workerId, t, e, void 0));
      }, e => {
        (e.detail instanceof Error && (e.detail = (0, ke.ri)(e.detail)), this._send(new Ae(this._workerId, t, void 0, (0, ke.ri)(e))));
      });
    }
    _handleSubscribeEventMessage(e) {
      const t = e.req,
        i = this._handler.handleEvent(e.eventName, e.arg)(e => {
          this._send(new Pe(this._workerId, t, e));
        });
      this._pendingEvents.set(t, i);
    }
    _handleEventMessage(e) {
      this._pendingEmitters.has(e.req) ? this._pendingEmitters.get(e.req).fire(e.event) : console.warn("Got event for unknown req");
    }
    _handleUnsubscribeEventMessage(e) {
      this._pendingEvents.has(e.req) ? (this._pendingEvents.get(e.req).dispose(), this._pendingEvents.delete(e.req)) : console.warn("Got unsubscribe for unknown req");
    }
    _send(e) {
      let t = [];
      if (0 === e.type) for (let i = 0; i < e.args.length; i++) e.args[i] instanceof ArrayBuffer && t.push(e.args[i]);else 1 === e.type && e.res instanceof ArrayBuffer && t.push(e.res);
      this._handler.sendMessage(e, t);
    }
  }
  class Be extends ue.JT {
    constructor(e, t, i) {
      super();
      let n = null;
      ((this._worker = this._register(e.create("vs/base/common/worker/simpleWorker", e => {
        this._protocol.handleMessage(e);
      }, e => {
        n && n(e);
      }))), (this._protocol = new Fe({
        sendMessage: (e, t) => {
          this._worker.postMessage(e, t);
        },
        handleMessage: (e, t) => {
          if ("function" != typeof i[e]) return Promise.reject(new Error("Missing method " + e + " on main thread host."));
          try {
            return Promise.resolve(i[e].apply(i, t));
          } catch (e) {
            return Promise.reject(e);
          }
        },
        handleEvent: (e, t) => {
          if (We(e)) {
            const n = i[e].call(i, t);
            if ("function" != typeof n) throw new Error(`Missing dynamic event ${e} on main thread host.`);
            return n;
          }
          if (Ve(e)) {
            const t = i[e];
            if ("function" != typeof t) throw new Error(`Missing event ${e} on main thread host.`);
            return t;
          }
          throw new Error(`Malformed event name ${e}`);
        }
      })), this._protocol.setWorkerId(this._worker.getId()));
      let o = null;
      void 0 !== Le.li.require && "function" == typeof Le.li.require.getConfig ? (o = Le.li.require.getConfig()) : void 0 !== Le.li.requirejs && (o = Le.li.requirejs.s.contexts._.config);
      const s = Ne.$E(i);
      this._onModuleLoaded = this._protocol.sendMessage(Ie, [this._worker.getId(), JSON.parse(JSON.stringify(o)), t, s]);
      const r = (e, t) => this._request(e, t),
        a = (e, t) => this._protocol.listen(e, t);
      this._lazyProxy = new Promise((e, i) => {
        ((n = i), this._onModuleLoaded.then(t => {
          e(He(t, r, a));
        }, e => {
          (i(e), this._onError("Worker failed to load " + t, e));
        }));
      });
    }
    getProxyObject() {
      return this._lazyProxy;
    }
    _request(e, t) {
      return new Promise((i, n) => {
        this._onModuleLoaded.then(() => {
          this._protocol.sendMessage(e, t).then(i, n);
        }, n);
      });
    }
    _onError(e, t) {
      (console.error(e), console.info(t));
    }
  }
  function Ve(e) {
    return "o" === e[0] && "n" === e[1] && De.df(e.charCodeAt(2));
  }
  function We(e) {
    return /^onDynamic/.test(e) && De.df(e.charCodeAt(9));
  }
  function He(e, t, i) {
    const n = e => function () {
        const i = Array.prototype.slice.call(arguments, 0);
        return t(e, i);
      },
      o = e => function (t) {
        return i(e, t);
      };
    let s = {};
    for (const t of e) We(t) ? (s[t] = o(t)) : Ve(t) ? (s[t] = i(t, void 0)) : (s[t] = n(t));
    return s;
  }
  var ze;
  const je = null === (ze = window.trustedTypes) || void 0 === ze ? void 0 : ze.createPolicy("defaultWorkerFactory", {
    createScriptURL: e => e
  });
  class Ue {
    constructor(e, t, i, n, o) {
      this.id = t;
      const s = (function (e, t) {
        if (Le.li.MonacoEnvironment) {
          if ("function" == typeof Le.li.MonacoEnvironment.getWorker) return Le.li.MonacoEnvironment.getWorker(e, t);
          if ("function" == typeof Le.li.MonacoEnvironment.getWorkerUrl) {
            const i = Le.li.MonacoEnvironment.getWorkerUrl(e, t);
            return new Worker(je ? je.createScriptURL(i) : i, {
              name: t
            });
          }
        }
        throw new Error("You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker");
      })("workerMain.js", i);
      ("function" == typeof s.then ? (this.worker = s) : (this.worker = Promise.resolve(s)), this.postMessage(e, []), this.worker.then(e => {
        ((e.onmessage = function (e) {
          n(e.data);
        }), (e.onmessageerror = o), "function" == typeof e.addEventListener && e.addEventListener("error", o));
      }));
    }
    getId() {
      return this.id;
    }
    postMessage(e, t) {
      this.worker && this.worker.then(i => i.postMessage(e, t));
    }
    dispose() {
      (this.worker && this.worker.then(e => e.terminate()), (this.worker = null));
    }
  }
  class $e {
    constructor(e) {
      ((this._label = e), (this._webWorkerFailedBeforeError = !1));
    }
    create(e, t, i) {
      let n = ++$e.LAST_WORKER_ID;
      if (this._webWorkerFailedBeforeError) throw this._webWorkerFailedBeforeError;
      return new Ue(e, n, this._label || "anonymous" + n, t, e => {
        (Te(e), (this._webWorkerFailedBeforeError = e), i(e));
      });
    }
  }
  $e.LAST_WORKER_ID = 0;
  var Ke = i(83831),
    qe = i(2484);
  function Ze(e, t, i, n) {
    return new qe.Hs(e, t, i).ComputeDiff(n);
  }
  class Ge {
    constructor(e) {
      const t = [],
        i = [];
      for (let n = 0, o = e.length; n < o; n++) ((t[n] = et(e[n], 1)), (i[n] = tt(e[n], 1)));
      ((this.lines = e), (this._startColumns = t), (this._endColumns = i));
    }
    getElements() {
      const e = [];
      for (let t = 0, i = this.lines.length; t < i; t++) e[t] = this.lines[t].substring(this._startColumns[t] - 1, this._endColumns[t] - 1);
      return e;
    }
    getStrictElement(e) {
      return this.lines[e];
    }
    getStartLineNumber(e) {
      return e + 1;
    }
    getEndLineNumber(e) {
      return e + 1;
    }
    createCharSequence(e, t, i) {
      const n = [],
        o = [],
        s = [];
      let r = 0;
      for (let a = t; a <= i; a++) {
        const t = this.lines[a],
          i = e ? this._startColumns[a] : 1,
          l = e ? this._endColumns[a] : t.length + 1;
        for (let e = i; e < l; e++) ((n[r] = t.charCodeAt(e - 1)), (o[r] = a + 1), (s[r] = e), r++);
      }
      return new Ye(n, o, s);
    }
  }
  class Ye {
    constructor(e, t, i) {
      ((this._charCodes = e), (this._lineNumbers = t), (this._columns = i));
    }
    getElements() {
      return this._charCodes;
    }
    getStartLineNumber(e) {
      return this._lineNumbers[e];
    }
    getStartColumn(e) {
      return this._columns[e];
    }
    getEndLineNumber(e) {
      return this._lineNumbers[e];
    }
    getEndColumn(e) {
      return this._columns[e] + 1;
    }
  }
  class Qe {
    constructor(e, t, i, n, o, s, r, a) {
      ((this.originalStartLineNumber = e), (this.originalStartColumn = t), (this.originalEndLineNumber = i), (this.originalEndColumn = n), (this.modifiedStartLineNumber = o), (this.modifiedStartColumn = s), (this.modifiedEndLineNumber = r), (this.modifiedEndColumn = a));
    }
    static createFromDiffChange(e, t, i) {
      let n, o, s, r, a, l, c, d;
      return (0 === e.originalLength ? ((n = 0), (o = 0), (s = 0), (r = 0)) : ((n = t.getStartLineNumber(e.originalStart)), (o = t.getStartColumn(e.originalStart)), (s = t.getEndLineNumber(e.originalStart + e.originalLength - 1)), (r = t.getEndColumn(e.originalStart + e.originalLength - 1))), 0 === e.modifiedLength ? ((a = 0), (l = 0), (c = 0), (d = 0)) : ((a = i.getStartLineNumber(e.modifiedStart)), (l = i.getStartColumn(e.modifiedStart)), (c = i.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1)), (d = i.getEndColumn(e.modifiedStart + e.modifiedLength - 1))), new Qe(n, o, s, r, a, l, c, d));
    }
  }
  class Xe {
    constructor(e, t, i, n, o) {
      ((this.originalStartLineNumber = e), (this.originalEndLineNumber = t), (this.modifiedStartLineNumber = i), (this.modifiedEndLineNumber = n), (this.charChanges = o));
    }
    static createFromDiffResult(e, t, i, n, o, s, r) {
      let a, l, c, d, h;
      if ((0 === t.originalLength ? ((a = i.getStartLineNumber(t.originalStart) - 1), (l = 0)) : ((a = i.getStartLineNumber(t.originalStart)), (l = i.getEndLineNumber(t.originalStart + t.originalLength - 1))), 0 === t.modifiedLength ? ((c = n.getStartLineNumber(t.modifiedStart) - 1), (d = 0)) : ((c = n.getStartLineNumber(t.modifiedStart)), (d = n.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1))), s && t.originalLength > 0 && t.originalLength < 20 && t.modifiedLength > 0 && t.modifiedLength < 20 && o())) {
        const s = i.createCharSequence(e, t.originalStart, t.originalStart + t.originalLength - 1),
          a = n.createCharSequence(e, t.modifiedStart, t.modifiedStart + t.modifiedLength - 1);
        let l = Ze(s, a, o, !0).changes;
        (r && (l = (function (e) {
          if (e.length <= 1) return e;
          const t = [e[0]];
          let i = t[0];
          for (let n = 1, o = e.length; n < o; n++) {
            const o = e[n],
              s = o.originalStart - (i.originalStart + i.originalLength),
              r = o.modifiedStart - (i.modifiedStart + i.modifiedLength);
            Math.min(s, r) < 3 ? ((i.originalLength = o.originalStart + o.originalLength - i.originalStart), (i.modifiedLength = o.modifiedStart + o.modifiedLength - i.modifiedStart)) : (t.push(o), (i = o));
          }
          return t;
        })(l)), (h = []));
        for (let e = 0, t = l.length; e < t; e++) h.push(Qe.createFromDiffChange(l[e], s, a));
      }
      return new Xe(a, l, c, d, h);
    }
  }
  class Je {
    constructor(e, t, i) {
      ((this.shouldComputeCharChanges = i.shouldComputeCharChanges), (this.shouldPostProcessCharChanges = i.shouldPostProcessCharChanges), (this.shouldIgnoreTrimWhitespace = i.shouldIgnoreTrimWhitespace), (this.shouldMakePrettyDiff = i.shouldMakePrettyDiff), (this.originalLines = e), (this.modifiedLines = t), (this.original = new Ge(e)), (this.modified = new Ge(t)), (this.continueLineDiff = it(i.maxComputationTime)), (this.continueCharDiff = it(0 === i.maxComputationTime ? 0 : Math.min(i.maxComputationTime, 5e3))));
    }
    computeDiff() {
      if (1 === this.original.lines.length && 0 === this.original.lines[0].length) return 1 === this.modified.lines.length && 0 === this.modified.lines[0].length ? {
        quitEarly: !1,
        changes: []
      } : {
        quitEarly: !1,
        changes: [{
          originalStartLineNumber: 1,
          originalEndLineNumber: 1,
          modifiedStartLineNumber: 1,
          modifiedEndLineNumber: this.modified.lines.length,
          charChanges: [{
            modifiedEndColumn: 0,
            modifiedEndLineNumber: 0,
            modifiedStartColumn: 0,
            modifiedStartLineNumber: 0,
            originalEndColumn: 0,
            originalEndLineNumber: 0,
            originalStartColumn: 0,
            originalStartLineNumber: 0
          }]
        }]
      };
      if (1 === this.modified.lines.length && 0 === this.modified.lines[0].length) return {
        quitEarly: !1,
        changes: [{
          originalStartLineNumber: 1,
          originalEndLineNumber: this.original.lines.length,
          modifiedStartLineNumber: 1,
          modifiedEndLineNumber: 1,
          charChanges: [{
            modifiedEndColumn: 0,
            modifiedEndLineNumber: 0,
            modifiedStartColumn: 0,
            modifiedStartLineNumber: 0,
            originalEndColumn: 0,
            originalEndLineNumber: 0,
            originalStartColumn: 0,
            originalStartLineNumber: 0
          }]
        }]
      };
      const e = Ze(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff),
        t = e.changes,
        i = e.quitEarly;
      if (this.shouldIgnoreTrimWhitespace) {
        const e = [];
        for (let i = 0, n = t.length; i < n; i++) e.push(Xe.createFromDiffResult(this.shouldIgnoreTrimWhitespace, t[i], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
        return {
          quitEarly: i,
          changes: e
        };
      }
      const n = [];
      let o = 0,
        s = 0;
      for (let e = -1, i = t.length; e < i; e++) {
        const r = e + 1 < i ? t[e + 1] : null,
          a = r ? r.originalStart : this.originalLines.length,
          l = r ? r.modifiedStart : this.modifiedLines.length;
        for (; o < a && s < l;) {
          const e = this.originalLines[o],
            t = this.modifiedLines[s];
          if (e !== t) {
            {
              let i = et(e, 1),
                r = et(t, 1);
              for (; i > 1 && r > 1;) {
                if (e.charCodeAt(i - 2) !== t.charCodeAt(r - 2)) break;
                (i--, r--);
              }
              (i > 1 || r > 1) && this._pushTrimWhitespaceCharChange(n, o + 1, 1, i, s + 1, 1, r);
            }
            {
              let i = tt(e, 1),
                r = tt(t, 1);
              const a = e.length + 1,
                l = t.length + 1;
              for (; i < a && r < l;) {
                if (e.charCodeAt(i - 1) !== e.charCodeAt(r - 1)) break;
                (i++, r++);
              }
              (i < a || r < l) && this._pushTrimWhitespaceCharChange(n, o + 1, i, a, s + 1, r, l);
            }
          }
          (o++, s++);
        }
        r && (n.push(Xe.createFromDiffResult(this.shouldIgnoreTrimWhitespace, r, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), (o += r.originalLength), (s += r.modifiedLength));
      }
      return {
        quitEarly: i,
        changes: n
      };
    }
    _pushTrimWhitespaceCharChange(e, t, i, n, o, s, r) {
      if (this._mergeTrimWhitespaceCharChange(e, t, i, n, o, s, r)) return;
      let a;
      (this.shouldComputeCharChanges && (a = [new Qe(t, i, t, n, o, s, o, r)]), e.push(new Xe(t, t, o, o, a)));
    }
    _mergeTrimWhitespaceCharChange(e, t, i, n, o, s, r) {
      const a = e.length;
      if (0 === a) return !1;
      const l = e[a - 1];
      return (0 !== l.originalEndLineNumber && 0 !== l.modifiedEndLineNumber && l.originalEndLineNumber + 1 === t && l.modifiedEndLineNumber + 1 === o && ((l.originalEndLineNumber = t), (l.modifiedEndLineNumber = o), this.shouldComputeCharChanges && l.charChanges && l.charChanges.push(new Qe(t, i, t, n, o, s, o, r)), !0));
    }
  }
  function et(e, t) {
    const i = De.LC(e);
    return -1 === i ? t : i + 1;
  }
  function tt(e, t) {
    const i = De.ow(e);
    return -1 === i ? t : i + 2;
  }
  function it(e) {
    if (0 === e) return () => !0;
    const t = Date.now();
    return () => Date.now() - t < e;
  }
  var nt = i(3544);
  class ot {
    constructor(e, t, i, n) {
      ((this._uri = e), (this._lines = t), (this._eol = i), (this._versionId = n), (this._lineStarts = null), (this._cachedTextValue = null));
    }
    dispose() {
      this._lines.length = 0;
    }
    get version() {
      return this._versionId;
    }
    getText() {
      return (null === this._cachedTextValue && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue);
    }
    onEvents(e) {
      e.eol && e.eol !== this._eol && ((this._eol = e.eol), (this._lineStarts = null));
      const t = e.changes;
      for (const e of t) (this._acceptDeleteRange(e.range), this._acceptInsertText(new j.L(e.range.startLineNumber, e.range.startColumn), e.text));
      ((this._versionId = e.versionId), (this._cachedTextValue = null));
    }
    _ensureLineStarts() {
      if (!this._lineStarts) {
        const e = this._eol.length,
          t = this._lines.length,
          i = new Uint32Array(t);
        for (let n = 0; n < t; n++) i[n] = this._lines[n].length + e;
        this._lineStarts = new nt.o(i);
      }
    }
    _setLineText(e, t) {
      ((this._lines[e] = t), this._lineStarts && this._lineStarts.changeValue(e, this._lines[e].length + this._eol.length));
    }
    _acceptDeleteRange(e) {
      if (e.startLineNumber !== e.endLineNumber) (this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber));else {
        if (e.startColumn === e.endColumn) return;
        this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1));
      }
    }
    _acceptInsertText(e, t) {
      if (0 === t.length) return;
      let i = (0, De.uq)(t);
      if (1 === i.length) return void this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + i[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
      ((i[i.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1)), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + i[0]));
      let n = new Uint32Array(i.length - 1);
      for (let t = 1; t < i.length; t++) (this._lines.splice(e.lineNumber + t - 1, 0, i[t]), (n[t - 1] = i[t].length + this._eol.length));
      this._lineStarts && this._lineStarts.insertValues(e.lineNumber, n);
    }
  }
  var st = i(97461),
    rt = i(44906);
  class at {
    constructor(e, t, i) {
      const n = new Uint8Array(e * t);
      for (let o = 0, s = e * t; o < s; o++) n[o] = i;
      ((this._data = n), (this.rows = e), (this.cols = t));
    }
    get(e, t) {
      return this._data[e * this.cols + t];
    }
    set(e, t, i) {
      this._data[e * this.cols + t] = i;
    }
  }
  class lt {
    constructor(e) {
      let t = 0,
        i = 0;
      for (let n = 0, o = e.length; n < o; n++) {
        let [o, s, r] = e[n];
        (s > t && (t = s), o > i && (i = o), r > i && (i = r));
      }
      (t++, i++);
      let n = new at(i, t, 0);
      for (let t = 0, i = e.length; t < i; t++) {
        let [i, o, s] = e[t];
        n.set(i, o, s);
      }
      ((this._states = n), (this._maxCharCode = t));
    }
    nextState(e, t) {
      return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t);
    }
  }
  let ct = null;
  let dt = null;
  class ht {
    static _createLink(e, t, i, n, o) {
      let s = o - 1;
      do {
        const i = t.charCodeAt(s);
        if (2 !== e.get(i)) break;
        s--;
      } while (s > n);
      if (n > 0) {
        const e = t.charCodeAt(n - 1),
          i = t.charCodeAt(s);
        ((40 === e && 41 === i) || (91 === e && 93 === i) || (123 === e && 125 === i)) && s--;
      }
      return {
        range: {
          startLineNumber: i,
          startColumn: n + 1,
          endLineNumber: i,
          endColumn: s + 2
        },
        url: t.substring(n, s + 1)
      };
    }
    static computeLinks(e, t = (function () {
      return (null === ct && (ct = new lt([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])), ct);
    })()) {
      const i = (function () {
        if (null === dt) {
          dt = new rt.N(0);
          const e = " \t<>'\"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…";
          for (let t = 0; t < e.length; t++) dt.set(e.charCodeAt(t), 1);
          const t = ".,;";
          for (let e = 0; e < t.length; e++) dt.set(t.charCodeAt(e), 2);
        }
        return dt;
      })();
      let n = [];
      for (let o = 1, s = e.getLineCount(); o <= s; o++) {
        const s = e.getLineContent(o),
          r = s.length;
        let a = 0,
          l = 0,
          c = 0,
          d = 1,
          h = !1,
          u = !1,
          g = !1,
          p = !1;
        for (; a < r;) {
          let e = !1;
          const r = s.charCodeAt(a);
          if (13 === d) {
            let t;
            switch (r) {
              case 40:
                ((h = !0), (t = 0));
                break;
              case 41:
                t = h ? 0 : 1;
                break;
              case 91:
                ((g = !0), (u = !0), (t = 0));
                break;
              case 93:
                ((g = !1), (t = u ? 0 : 1));
                break;
              case 123:
                ((p = !0), (t = 0));
                break;
              case 125:
                t = p ? 0 : 1;
                break;
              case 39:
                t = 34 === c || 96 === c ? 0 : 1;
                break;
              case 34:
                t = 39 === c || 96 === c ? 0 : 1;
                break;
              case 96:
                t = 39 === c || 34 === c ? 0 : 1;
                break;
              case 42:
                t = 42 === c ? 1 : 0;
                break;
              case 124:
                t = 124 === c ? 1 : 0;
                break;
              case 32:
                t = g ? 0 : 1;
                break;
              default:
                t = i.get(r);
            }
            1 === t && (n.push(ht._createLink(i, s, o, l, a)), (e = !0));
          } else if (12 === d) {
            let t;
            (91 === r ? ((u = !0), (t = 0)) : (t = i.get(r)), 1 === t ? (e = !0) : (d = 13));
          } else ((d = t.nextState(d, r)), 0 === d && (e = !0));
          (e && ((d = 1), (h = !1), (u = !1), (p = !1), (l = a + 1), (c = r)), a++);
        }
        13 === d && n.push(ht._createLink(i, s, o, l, r));
      }
      return n;
    }
  }
  class ut {
    constructor() {
      this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]];
    }
    navigateValueSet(e, t, i, n, o) {
      if (e && t) {
        let i = this.doNavigateValueSet(t, o);
        if (i) return {
          range: e,
          value: i
        };
      }
      if (i && n) {
        let e = this.doNavigateValueSet(n, o);
        if (e) return {
          range: i,
          value: e
        };
      }
      return null;
    }
    doNavigateValueSet(e, t) {
      let i = this.numberReplace(e, t);
      return null !== i ? i : this.textReplace(e, t);
    }
    numberReplace(e, t) {
      let i = Math.pow(10, e.length - (e.lastIndexOf(".") + 1)),
        n = Number(e),
        o = parseFloat(e);
      return isNaN(n) || isNaN(o) || n !== o ? null : 0 !== n || t ? ((n = Math.floor(n * i)), (n += t ? i : -i), String(n / i)) : null;
    }
    textReplace(e, t) {
      return this.valueSetsReplace(this._defaultValueSet, e, t);
    }
    valueSetsReplace(e, t, i) {
      let n = null;
      for (let o = 0, s = e.length; null === n && o < s; o++) n = this.valueSetReplace(e[o], t, i);
      return n;
    }
    valueSetReplace(e, t, i) {
      let n = e.indexOf(t);
      return n >= 0 ? ((n += i ? 1 : -1), n < 0 ? (n = e.length - 1) : (n %= e.length), e[n]) : null;
    }
  }
  ut.INSTANCE = new ut();
  var gt = i(84013),
    pt = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  class ft extends ot {
    get uri() {
      return this._uri;
    }
    get eol() {
      return this._eol;
    }
    getValue() {
      return this.getText();
    }
    getLinesContent() {
      return this._lines.slice(0);
    }
    getLineCount() {
      return this._lines.length;
    }
    getLineContent(e) {
      return this._lines[e - 1];
    }
    getWordAtPosition(e, t) {
      let i = (0, st.t2)(e.column, (0, st.eq)(t), this._lines[e.lineNumber - 1], 0);
      return i ? new U.e(e.lineNumber, i.startColumn, e.lineNumber, i.endColumn) : null;
    }
    words(e) {
      const t = this._lines,
        i = this._wordenize.bind(this);
      let n = 0,
        o = "",
        s = 0,
        r = [];
      return {
        *[Symbol.iterator]() {
          for (;;) if (s < r.length) {
            const e = o.substring(r[s].start, r[s].end);
            ((s += 1), yield e);
          } else {
            if (!(n < t.length)) break;
            ((o = t[n]), (r = i(o, e)), (s = 0), (n += 1));
          }
        }
      };
    }
    getLineWords(e, t) {
      let i = this._lines[e - 1],
        n = this._wordenize(i, t),
        o = [];
      for (const e of n) o.push({
        word: i.substring(e.start, e.end),
        startColumn: e.start + 1,
        endColumn: e.end + 1
      });
      return o;
    }
    _wordenize(e, t) {
      const i = [];
      let n;
      for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length;) i.push({
        start: n.index,
        end: n.index + n[0].length
      });
      return i;
    }
    getValueInRange(e) {
      if ((e = this._validateRange(e)).startLineNumber === e.endLineNumber) return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
      let t = this._eol,
        i = e.startLineNumber - 1,
        n = e.endLineNumber - 1,
        o = [];
      o.push(this._lines[i].substring(e.startColumn - 1));
      for (let e = i + 1; e < n; e++) o.push(this._lines[e]);
      return (o.push(this._lines[n].substring(0, e.endColumn - 1)), o.join(t));
    }
    offsetAt(e) {
      return ((e = this._validatePosition(e)), this._ensureLineStarts(), this._lineStarts.getPrefixSum(e.lineNumber - 2) + (e.column - 1));
    }
    positionAt(e) {
      ((e = Math.floor(e)), (e = Math.max(0, e)), this._ensureLineStarts());
      let t = this._lineStarts.getIndexOf(e),
        i = this._lines[t.index].length;
      return {
        lineNumber: 1 + t.index,
        column: 1 + Math.min(t.remainder, i)
      };
    }
    _validateRange(e) {
      const t = this._validatePosition({
          lineNumber: e.startLineNumber,
          column: e.startColumn
        }),
        i = this._validatePosition({
          lineNumber: e.endLineNumber,
          column: e.endColumn
        });
      return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || i.lineNumber !== e.endLineNumber || i.column !== e.endColumn ? {
        startLineNumber: t.lineNumber,
        startColumn: t.column,
        endLineNumber: i.lineNumber,
        endColumn: i.column
      } : e;
    }
    _validatePosition(e) {
      if (!j.L.isIPosition(e)) throw new Error("bad position");
      let {
          lineNumber: t,
          column: i
        } = e,
        n = !1;
      if (t < 1) ((t = 1), (i = 1), (n = !0));else if (t > this._lines.length) ((t = this._lines.length), (i = this._lines[t - 1].length + 1), (n = !0));else {
        let e = this._lines[t - 1].length + 1;
        i < 1 ? ((i = 1), (n = !0)) : i > e && ((i = e), (n = !0));
      }
      return n ? {
        lineNumber: t,
        column: i
      } : e;
    }
  }
  class mt {
    constructor(e, t) {
      ((this._host = e), (this._models = Object.create(null)), (this._foreignModuleFactory = t), (this._foreignModule = null));
    }
    dispose() {
      this._models = Object.create(null);
    }
    _getModel(e) {
      return this._models[e];
    }
    _getModels() {
      let e = [];
      return (Object.keys(this._models).forEach(t => e.push(this._models[t])), e);
    }
    acceptNewModel(e) {
      this._models[e.url] = new ft(z.o.parse(e.url), e.lines, e.EOL, e.versionId);
    }
    acceptModelChanged(e, t) {
      if (!this._models[e]) return;
      this._models[e].onEvents(t);
    }
    acceptRemovedModel(e) {
      this._models[e] && delete this._models[e];
    }
    computeDiff(e, t, i, n) {
      return pt(this, void 0, void 0, function* () {
        const o = this._getModel(e),
          s = this._getModel(t);
        if (!o || !s) return null;
        const r = o.getLinesContent(),
          a = s.getLinesContent(),
          l = new Je(r, a, {
            shouldComputeCharChanges: !0,
            shouldPostProcessCharChanges: !0,
            shouldIgnoreTrimWhitespace: i,
            shouldMakePrettyDiff: !0,
            maxComputationTime: n
          }).computeDiff(),
          c = !(l.changes.length > 0) && this._modelsAreIdentical(o, s);
        return {
          quitEarly: l.quitEarly,
          identical: c,
          changes: l.changes
        };
      });
    }
    _modelsAreIdentical(e, t) {
      const i = e.getLineCount();
      if (i !== t.getLineCount()) return !1;
      for (let n = 1; n <= i; n++) {
        if (e.getLineContent(n) !== t.getLineContent(n)) return !1;
      }
      return !0;
    }
    computeMoreMinimalEdits(e, t) {
      return pt(this, void 0, void 0, function* () {
        const i = this._getModel(e);
        if (!i) return t;
        const n = [];
        let o;
        t = t.slice(0).sort((e, t) => {
          if (e.range && t.range) return U.e.compareRangesUsingStarts(e.range, t.range);
          return (e.range ? 0 : 1) - (t.range ? 0 : 1);
        });
        for (let {
          range: e,
          text: s,
          eol: r
        } of t) {
          if (("number" == typeof r && (o = r), U.e.isEmpty(e) && !s)) continue;
          const t = i.getValueInRange(e);
          if (((s = s.replace(/\r\n|\n|\r/g, i.eol)), t === s)) continue;
          if (Math.max(s.length, t.length) > mt._diffLimit) {
            n.push({
              range: e,
              text: s
            });
            continue;
          }
          const a = (0, qe.a$)(t, s, !1),
            l = i.offsetAt(U.e.lift(e).getStartPosition());
          for (const e of a) {
            const t = i.positionAt(l + e.originalStart),
              o = i.positionAt(l + e.originalStart + e.originalLength),
              r = {
                text: s.substr(e.modifiedStart, e.modifiedLength),
                range: {
                  startLineNumber: t.lineNumber,
                  startColumn: t.column,
                  endLineNumber: o.lineNumber,
                  endColumn: o.column
                }
              };
            i.getValueInRange(r.range) !== r.text && n.push(r);
          }
        }
        return ("number" == typeof o && n.push({
          eol: o,
          text: "",
          range: {
            startLineNumber: 0,
            startColumn: 0,
            endLineNumber: 0,
            endColumn: 0
          }
        }), n);
      });
    }
    computeLinks(e) {
      return pt(this, void 0, void 0, function* () {
        let t = this._getModel(e);
        return t ? (function (e) {
          return e && "function" == typeof e.getLineCount && "function" == typeof e.getLineContent ? ht.computeLinks(e) : [];
        })(t) : null;
      });
    }
    textualSuggest(e, t, i, n) {
      return pt(this, void 0, void 0, function* () {
        const o = new gt.G(!0),
          s = new RegExp(i, n),
          r = new Set();
        e: for (let i of e) {
          const e = this._getModel(i);
          if (e) for (let i of e.words(s)) if (i !== t && isNaN(Number(i)) && (r.add(i), r.size > mt._suggestionsLimit)) break e;
        }
        return {
          words: Array.from(r),
          duration: o.elapsed()
        };
      });
    }
    computeWordRanges(e, t, i, n) {
      return pt(this, void 0, void 0, function* () {
        let o = this._getModel(e);
        if (!o) return Object.create(null);
        const s = new RegExp(i, n),
          r = Object.create(null);
        for (let e = t.startLineNumber; e < t.endLineNumber; e++) {
          let t = o.getLineWords(e, s);
          for (const i of t) {
            if (!isNaN(Number(i.word))) continue;
            let t = r[i.word];
            (t || ((t = []), (r[i.word] = t)), t.push({
              startLineNumber: e,
              startColumn: i.startColumn,
              endLineNumber: e,
              endColumn: i.endColumn
            }));
          }
        }
        return r;
      });
    }
    navigateValueSet(e, t, i, n, o) {
      return pt(this, void 0, void 0, function* () {
        let s = this._getModel(e);
        if (!s) return null;
        let r = new RegExp(n, o);
        t.startColumn === t.endColumn && (t = {
          startLineNumber: t.startLineNumber,
          startColumn: t.startColumn,
          endLineNumber: t.endLineNumber,
          endColumn: t.endColumn + 1
        });
        let a = s.getValueInRange(t),
          l = s.getWordAtPosition({
            lineNumber: t.startLineNumber,
            column: t.startColumn
          }, r);
        if (!l) return null;
        let c = s.getValueInRange(l);
        return ut.INSTANCE.navigateValueSet(t, a, l, c, i);
      });
    }
    loadForeignModule(e, t, i) {
      let n = {
        host: Ne.IU(i, (e, t) => this._host.fhr(e, t)),
        getMirrorModels: () => this._getModels()
      };
      return this._foreignModuleFactory ? ((this._foreignModule = this._foreignModuleFactory(n, t)), Promise.resolve(Ne.$E(this._foreignModule))) : Promise.reject(new Error("Unexpected usage"));
    }
    fmr(e, t) {
      if (!this._foreignModule || "function" != typeof this._foreignModule[e]) return Promise.reject(new Error("Missing requestHandler or method: " + e));
      try {
        return Promise.resolve(this._foreignModule[e].apply(this._foreignModule, t));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
  ((mt._diffLimit = 1e5), (mt._suggestionsLimit = 1e4), "function" == typeof importScripts && (Le.li.monaco = Z()));
  var vt = i(51200),
    _t = i(33187),
    bt = i(9488),
    wt = i(43557),
    yt = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Ct = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    xt = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  const St = 3e5;
  function kt(e, t) {
    let i = e.getModel(t);
    return !!i && !i.isTooLargeForSyncing();
  }
  let Lt = class extends ue.JT {
    constructor(e, t, i) {
      (super(), (this._modelService = e), (this._workerManager = this._register(new Dt(this._modelService))), (this._logService = i), this._register(be.pM.register({
        language: "*",
        hasAccessToAllModels: !0
      }, {
        provideLinks: (e, t) => kt(this._modelService, e.uri) ? this._workerManager.withWorker().then(t => t.computeLinks(e.uri)).then(e => e && {
          links: e
        }) : Promise.resolve({
          links: []
        })
      })), this._register(be.KZ.register("*", new Nt(this._workerManager, t, this._modelService))));
    }
    dispose() {
      super.dispose();
    }
    computeDiff(e, t, i, n) {
      return this._workerManager.withWorker().then(o => o.computeDiff(e, t, i, n));
    }
    computeMoreMinimalEdits(e, t) {
      if ((0, bt.Of)(t)) {
        if (!kt(this._modelService, e)) return Promise.resolve(t);
        const i = gt.G.create(!0),
          n = this._workerManager.withWorker().then(i => i.computeMoreMinimalEdits(e, t));
        return (n.finally(() => this._logService.trace("FORMAT#computeMoreMinimalEdits", e.toString(!0), i.elapsed())), Promise.race([n, (0, Se.Vs)(1e3).then(() => t)]));
      }
      return Promise.resolve(void 0);
    }
    canNavigateValueSet(e) {
      return kt(this._modelService, e);
    }
    navigateValueSet(e, t, i) {
      return this._workerManager.withWorker().then(n => n.navigateValueSet(e, t, i));
    }
    canComputeWordRanges(e) {
      return kt(this._modelService, e);
    }
    computeWordRanges(e, t) {
      return this._workerManager.withWorker().then(i => i.computeWordRanges(e, t));
    }
  };
  Lt = yt([Ct(0, vt.q), Ct(1, _t.V), Ct(2, wt.VZ)], Lt);
  class Nt {
    constructor(e, t, i) {
      ((this._debugDisplayName = "wordbasedCompletions"), (this._workerManager = e), (this._configurationService = t), (this._modelService = i));
    }
    provideCompletionItems(e, t) {
      return xt(this, void 0, void 0, function* () {
        const i = this._configurationService.getValue(e.uri, t, "editor");
        if (!i.wordBasedSuggestions) return;
        const n = [];
        if ("currentDocument" === i.wordBasedSuggestionsMode) kt(this._modelService, e.uri) && n.push(e.uri);else for (const t of this._modelService.getModels()) kt(this._modelService, t.uri) && (t === e ? n.unshift(t.uri) : ("allDocuments" !== i.wordBasedSuggestionsMode && t.getLanguageId() !== e.getLanguageId()) || n.push(t.uri));
        if (0 === n.length) return;
        const o = Ke.zu.getWordDefinition(e.getLanguageId()),
          s = e.getWordAtPosition(t),
          r = s ? new U.e(t.lineNumber, s.startColumn, t.lineNumber, s.endColumn) : U.e.fromPositions(t),
          a = r.setEndPosition(t.lineNumber, t.column),
          l = yield this._workerManager.withWorker(),
          c = yield l.textualSuggest(n, null == s ? void 0 : s.word, o);
        return c ? {
          duration: c.duration,
          suggestions: c.words.map(e => ({
            kind: 18,
            label: e,
            insertText: e,
            range: {
              insert: a,
              replace: r
            }
          }))
        } : void 0;
      });
    }
  }
  class Dt extends ue.JT {
    constructor(e) {
      (super(), (this._modelService = e), (this._editorWorkerClient = null), (this._lastWorkerUsedTime = new Date().getTime()), this._register(new Se.zh()).cancelAndSet(() => this._checkStopIdleWorker(), Math.round(15e4)), this._register(this._modelService.onModelRemoved(e => this._checkStopEmptyWorker())));
    }
    dispose() {
      (this._editorWorkerClient && (this._editorWorkerClient.dispose(), (this._editorWorkerClient = null)), super.dispose());
    }
    _checkStopEmptyWorker() {
      if (!this._editorWorkerClient) return;
      0 === this._modelService.getModels().length && (this._editorWorkerClient.dispose(), (this._editorWorkerClient = null));
    }
    _checkStopIdleWorker() {
      if (!this._editorWorkerClient) return;
      new Date().getTime() - this._lastWorkerUsedTime > St && (this._editorWorkerClient.dispose(), (this._editorWorkerClient = null));
    }
    withWorker() {
      return ((this._lastWorkerUsedTime = new Date().getTime()), this._editorWorkerClient || (this._editorWorkerClient = new Mt(this._modelService, !1, "editorWorkerService")), Promise.resolve(this._editorWorkerClient));
    }
  }
  class It extends ue.JT {
    constructor(e, t, i) {
      if ((super(), (this._syncedModels = Object.create(null)), (this._syncedModelsLastUsedTime = Object.create(null)), (this._proxy = e), (this._modelService = t), !i)) {
        let e = new Se.zh();
        (e.cancelAndSet(() => this._checkStopModelSync(), Math.round(3e4)), this._register(e));
      }
    }
    dispose() {
      for (let e in this._syncedModels) (0, ue.B9)(this._syncedModels[e]);
      ((this._syncedModels = Object.create(null)), (this._syncedModelsLastUsedTime = Object.create(null)), super.dispose());
    }
    ensureSyncedResources(e, t) {
      for (const i of e) {
        let e = i.toString();
        (this._syncedModels[e] || this._beginModelSync(i, t), this._syncedModels[e] && (this._syncedModelsLastUsedTime[e] = new Date().getTime()));
      }
    }
    _checkStopModelSync() {
      let e = new Date().getTime(),
        t = [];
      for (let i in this._syncedModelsLastUsedTime) {
        e - this._syncedModelsLastUsedTime[i] > 6e4 && t.push(i);
      }
      for (const e of t) this._stopModelSync(e);
    }
    _beginModelSync(e, t) {
      let i = this._modelService.getModel(e);
      if (!i) return;
      if (!t && i.isTooLargeForSyncing()) return;
      let n = e.toString();
      this._proxy.acceptNewModel({
        url: i.uri.toString(),
        lines: i.getLinesContent(),
        EOL: i.getEOL(),
        versionId: i.getVersionId()
      });
      const o = new ue.SL();
      (o.add(i.onDidChangeContent(e => {
        this._proxy.acceptModelChanged(n.toString(), e);
      })), o.add(i.onWillDispose(() => {
        this._stopModelSync(n);
      })), o.add((0, ue.OF)(() => {
        this._proxy.acceptRemovedModel(n);
      })), (this._syncedModels[n] = o));
    }
    _stopModelSync(e) {
      let t = this._syncedModels[e];
      (delete this._syncedModels[e], delete this._syncedModelsLastUsedTime[e], (0, ue.B9)(t));
    }
  }
  class Et {
    constructor(e) {
      ((this._instance = e), (this._proxyObj = Promise.resolve(this._instance)));
    }
    dispose() {
      this._instance.dispose();
    }
    getProxyObject() {
      return this._proxyObj;
    }
  }
  class Tt {
    constructor(e) {
      this._workerClient = e;
    }
    fhr(e, t) {
      return this._workerClient.fhr(e, t);
    }
  }
  class Mt extends ue.JT {
    constructor(e, t, i) {
      (super(), (this._disposed = !1), (this._modelService = e), (this._keepIdleModels = t), (this._workerFactory = new $e(i)), (this._worker = null), (this._modelManager = null));
    }
    fhr(e, t) {
      throw new Error("Not implemented!");
    }
    _getOrCreateWorker() {
      if (!this._worker) try {
        this._worker = this._register(new Be(this._workerFactory, "vs/editor/common/services/editorSimpleWorker", new Tt(this)));
      } catch (e) {
        (Te(e), (this._worker = new Et(new mt(new Tt(this), null))));
      }
      return this._worker;
    }
    _getProxy() {
      return this._getOrCreateWorker().getProxyObject().then(void 0, e => (Te(e), (this._worker = new Et(new mt(new Tt(this), null))), this._getOrCreateWorker().getProxyObject()));
    }
    _getOrCreateModelManager(e) {
      return (this._modelManager || (this._modelManager = this._register(new It(e, this._modelService, this._keepIdleModels))), this._modelManager);
    }
    _withSyncedResources(e, t = !1) {
      return xt(this, void 0, void 0, function* () {
        return this._disposed ? Promise.reject((0, ke.F0)()) : this._getProxy().then(i => (this._getOrCreateModelManager(i).ensureSyncedResources(e, t), i));
      });
    }
    computeDiff(e, t, i, n) {
      return this._withSyncedResources([e, t], !0).then(o => o.computeDiff(e.toString(), t.toString(), i, n));
    }
    computeMoreMinimalEdits(e, t) {
      return this._withSyncedResources([e]).then(i => i.computeMoreMinimalEdits(e.toString(), t));
    }
    computeLinks(e) {
      return this._withSyncedResources([e]).then(t => t.computeLinks(e.toString()));
    }
    textualSuggest(e, t, i) {
      return xt(this, void 0, void 0, function* () {
        const n = yield this._withSyncedResources(e),
          o = i.source,
          s = (0, De.mr)(i);
        return n.textualSuggest(e.map(e => e.toString()), t, o, s);
      });
    }
    computeWordRanges(e, t) {
      return this._withSyncedResources([e]).then(i => {
        let n = this._modelService.getModel(e);
        if (!n) return Promise.resolve(null);
        let o = Ke.zu.getWordDefinition(n.getLanguageId()),
          s = o.source,
          r = (0, De.mr)(o);
        return i.computeWordRanges(e.toString(), t, s, r);
      });
    }
    navigateValueSet(e, t, i) {
      return this._withSyncedResources([e]).then(n => {
        let o = this._modelService.getModel(e);
        if (!o) return null;
        let s = Ke.zu.getWordDefinition(o.getLanguageId()),
          r = s.source,
          a = (0, De.mr)(s);
        return n.navigateValueSet(e.toString(), t, i, r, a);
      });
    }
    dispose() {
      (super.dispose(), (this._disposed = !0));
    }
  }
  class At extends Mt {
    constructor(e, t) {
      (super(e, t.keepIdleModels || !1, t.label), (this._foreignModuleId = t.moduleId), (this._foreignModuleCreateData = t.createData || null), (this._foreignModuleHost = t.host || null), (this._foreignProxy = null));
    }
    fhr(e, t) {
      if (!this._foreignModuleHost || "function" != typeof this._foreignModuleHost[e]) return Promise.reject(new Error("Missing method " + e + " or missing main thread foreign host."));
      try {
        return Promise.resolve(this._foreignModuleHost[e].apply(this._foreignModuleHost, t));
      } catch (e) {
        return Promise.reject(e);
      }
    }
    _getForeignProxy() {
      return (this._foreignProxy || (this._foreignProxy = this._getProxy().then(e => {
        const t = this._foreignModuleHost ? Ne.$E(this._foreignModuleHost) : [];
        return e.loadForeignModule(this._foreignModuleId, this._foreignModuleCreateData, t).then(t => {
          this._foreignModuleCreateData = null;
          const i = (t, i) => e.fmr(t, i),
            n = (e, t) => function () {
              const i = Array.prototype.slice.call(arguments, 0);
              return t(e, i);
            };
          let o = {};
          for (const e of t) o[e] = n(e, i);
          return o;
        });
      })), this._foreignProxy);
    }
    getProxy() {
      return this._getForeignProxy();
    }
    withSyncedResources(e) {
      return this._withSyncedResources(e).then(e => this.getProxy());
    }
  }
  var Ot = i(78411),
    Pt = i(77736),
    Rt = i(13824);
  function Ft(e) {
    return !(function (e) {
      return Array.isArray(e);
    })(e);
  }
  function Bt(e) {
    return "string" == typeof e;
  }
  function Vt(e) {
    return !Bt(e);
  }
  function Wt(e) {
    return !e;
  }
  function Ht(e, t) {
    return e.ignoreCase && t ? t.toLowerCase() : t;
  }
  function zt(e) {
    return e.replace(/[&<>'"_]/g, "-");
  }
  function jt(e, t) {
    return new Error(`${e.languageId}: ${t}`);
  }
  function Ut(e, t, i, n, o) {
    let s = null;
    return t.replace(/\$((\$)|(#)|(\d\d?)|[sS](\d\d?)|@(\w+))/g, function (t, r, a, l, c, d, h, u, g) {
      return Wt(a) ? Wt(l) ? !Wt(c) && c < n.length ? Ht(e, n[c]) : !Wt(h) && e && "string" == typeof e[h] ? e[h] : (null === s && ((s = o.split(".")), s.unshift(o)), !Wt(d) && d < s.length ? Ht(e, s[d]) : "") : Ht(e, i) : "$";
    });
  }
  function $t(e, t) {
    let i = t;
    for (; i && i.length > 0;) {
      const t = e.tokenizer[i];
      if (t) return t;
      const n = i.lastIndexOf(".");
      i = n < 0 ? null : i.substr(0, n);
    }
    return null;
  }
  class Kt {
    constructor(e) {
      ((this._maxCacheDepth = e), (this._entries = Object.create(null)));
    }
    static create(e, t) {
      return this._INSTANCE.create(e, t);
    }
    create(e, t) {
      if (null !== e && e.depth >= this._maxCacheDepth) return new qt(e, t);
      let i = qt.getStackElementId(e);
      (i.length > 0 && (i += "|"), (i += t));
      let n = this._entries[i];
      return n || ((n = new qt(e, t)), (this._entries[i] = n), n);
    }
  }
  Kt._INSTANCE = new Kt(5);
  class qt {
    constructor(e, t) {
      ((this.parent = e), (this.state = t), (this.depth = (this.parent ? this.parent.depth : 0) + 1));
    }
    static getStackElementId(e) {
      let t = "";
      for (; null !== e;) (t.length > 0 && (t += "|"), (t += e.state), (e = e.parent));
      return t;
    }
    static _equals(e, t) {
      for (; null !== e && null !== t;) {
        if (e === t) return !0;
        if (e.state !== t.state) return !1;
        ((e = e.parent), (t = t.parent));
      }
      return null === e && null === t;
    }
    equals(e) {
      return qt._equals(this, e);
    }
    push(e) {
      return Kt.create(this, e);
    }
    pop() {
      return this.parent;
    }
    popall() {
      let e = this;
      for (; e.parent;) e = e.parent;
      return e;
    }
    switchTo(e) {
      return Kt.create(this.parent, e);
    }
  }
  class Zt {
    constructor(e, t) {
      ((this.languageId = e), (this.state = t));
    }
    equals(e) {
      return this.languageId === e.languageId && this.state.equals(e.state);
    }
    clone() {
      return this.state.clone() === this.state ? this : new Zt(this.languageId, this.state);
    }
  }
  class Gt {
    constructor(e) {
      ((this._maxCacheDepth = e), (this._entries = Object.create(null)));
    }
    static create(e, t) {
      return this._INSTANCE.create(e, t);
    }
    create(e, t) {
      if (null !== t) return new Yt(e, t);
      if (null !== e && e.depth >= this._maxCacheDepth) return new Yt(e, t);
      let i = qt.getStackElementId(e),
        n = this._entries[i];
      return n || ((n = new Yt(e, null)), (this._entries[i] = n), n);
    }
  }
  Gt._INSTANCE = new Gt(5);
  class Yt {
    constructor(e, t) {
      ((this.stack = e), (this.embeddedModeData = t));
    }
    clone() {
      return (this.embeddedModeData ? this.embeddedModeData.clone() : null) === this.embeddedModeData ? this : Gt.create(this.stack, this.embeddedModeData);
    }
    equals(e) {
      return (e instanceof Yt && !!this.stack.equals(e.stack) && ((null === this.embeddedModeData && null === e.embeddedModeData) || (null !== this.embeddedModeData && null !== e.embeddedModeData && this.embeddedModeData.equals(e.embeddedModeData))));
    }
  }
  class Qt {
    constructor() {
      ((this._tokens = []), (this._languageId = null), (this._lastTokenType = null), (this._lastTokenLanguage = null));
    }
    enterMode(e, t) {
      this._languageId = t;
    }
    emit(e, t) {
      (this._lastTokenType === t && this._lastTokenLanguage === this._languageId) || ((this._lastTokenType = t), (this._lastTokenLanguage = this._languageId), this._tokens.push(new K.WU(e, t, this._languageId)));
    }
    nestedModeTokenize(e, t, i, n) {
      const o = i.languageId,
        s = i.state,
        r = be.RW.get(o);
      if (!r) return (this.enterMode(n, o), this.emit(n, ""), s);
      let a = r.tokenize(e, t, s, n);
      return ((this._tokens = this._tokens.concat(a.tokens)), (this._lastTokenType = null), (this._lastTokenLanguage = null), (this._languageId = null), a.endState);
    }
    finalize(e) {
      return new K.hG(this._tokens, e);
    }
  }
  class Xt {
    constructor(e, t) {
      ((this._modeService = e), (this._theme = t), (this._prependTokens = null), (this._tokens = []), (this._currentLanguageId = 0), (this._lastTokenMetadata = 0));
    }
    enterMode(e, t) {
      this._currentLanguageId = this._modeService.languageIdCodec.encodeLanguageId(t);
    }
    emit(e, t) {
      let i = this._theme.match(this._currentLanguageId, t);
      this._lastTokenMetadata !== i && ((this._lastTokenMetadata = i), this._tokens.push(e), this._tokens.push(i));
    }
    static _merge(e, t, i) {
      let n = null !== e ? e.length : 0,
        o = t.length,
        s = null !== i ? i.length : 0;
      if (0 === n && 0 === o && 0 === s) return new Uint32Array(0);
      if (0 === n && 0 === o) return i;
      if (0 === o && 0 === s) return e;
      let r = new Uint32Array(n + o + s);
      null !== e && r.set(e);
      for (let e = 0; e < o; e++) r[n + e] = t[e];
      return (null !== i && r.set(i, n + o), r);
    }
    nestedModeTokenize(e, t, i, n) {
      const o = i.languageId,
        s = i.state,
        r = be.RW.get(o);
      if (!r) return (this.enterMode(n, o), this.emit(n, ""), s);
      let a = r.tokenize2(e, t, s, n);
      return ((this._prependTokens = Xt._merge(this._prependTokens, this._tokens, a.tokens)), (this._tokens = []), (this._currentLanguageId = 0), (this._lastTokenMetadata = 0), a.endState);
    }
    finalize(e) {
      return new K.Hi(Xt._merge(this._prependTokens, this._tokens, null), e);
    }
  }
  class Jt {
    constructor(e, t, i, n) {
      ((this._modeService = e), (this._standaloneThemeService = t), (this._languageId = i), (this._lexer = n), (this._embeddedModes = Object.create(null)), (this.embeddedLoaded = Promise.resolve(void 0)));
      let o = !1;
      this._tokenizationRegistryListener = be.RW.onDidChange(e => {
        if (o) return;
        let t = !1;
        for (let i = 0, n = e.changedLanguages.length; i < n; i++) {
          let n = e.changedLanguages[i];
          if (this._embeddedModes[n]) {
            t = !0;
            break;
          }
        }
        t && ((o = !0), be.RW.fire([this._languageId]), (o = !1));
      });
    }
    dispose() {
      this._tokenizationRegistryListener.dispose();
    }
    getLoadStatus() {
      let e = [];
      for (let t in this._embeddedModes) {
        const i = be.RW.get(t);
        if (i) {
          if (i instanceof Jt) {
            const t = i.getLoadStatus();
            !1 === t.loaded && e.push(t.promise);
          }
          continue;
        }
        const n = be.RW.getPromise(t);
        n && e.push(n);
      }
      return 0 === e.length ? {
        loaded: !0
      } : {
        loaded: !1,
        promise: Promise.all(e).then(e => {})
      };
    }
    getInitialState() {
      let e = Kt.create(null, this._lexer.start);
      return Gt.create(e, null);
    }
    tokenize(e, t, i, n) {
      let o = new Qt(),
        s = this._tokenize(e, t, i, n, o);
      return o.finalize(s);
    }
    tokenize2(e, t, i, n) {
      let o = new Xt(this._modeService, this._standaloneThemeService.getColorTheme().tokenTheme),
        s = this._tokenize(e, t, i, n, o);
      return o.finalize(s);
    }
    _tokenize(e, t, i, n, o) {
      return i.embeddedModeData ? this._nestedTokenize(e, t, i, n, o) : this._myTokenize(e, t, i, n, o);
    }
    _findLeavingNestedModeOffset(e, t) {
      let i = this._lexer.tokenizer[t.stack.state];
      if (!i && ((i = $t(this._lexer, t.stack.state)), !i)) throw jt(this._lexer, "tokenizer state is not defined: " + t.stack.state);
      let n = -1,
        o = !1;
      for (const t of i) {
        if (!Vt(t.action) || "@pop" !== t.action.nextEmbedded) continue;
        o = !0;
        let i = t.regex,
          s = t.regex.source;
        if ("^(?:" === s.substr(0, 4) && ")" === s.substr(s.length - 1, 1)) {
          let e = (i.ignoreCase ? "i" : "") + (i.unicode ? "u" : "");
          i = new RegExp(s.substr(4, s.length - 5), e);
        }
        let r = e.search(i);
        -1 === r || (0 !== r && t.matchOnlyAtLineStart) || ((-1 === n || r < n) && (n = r));
      }
      if (!o) throw jt(this._lexer, 'no rule containing nextEmbedded: "@pop" in tokenizer embedded state: ' + t.stack.state);
      return n;
    }
    _nestedTokenize(e, t, i, n, o) {
      let s = this._findLeavingNestedModeOffset(e, i);
      if (-1 === s) {
        let s = o.nestedModeTokenize(e, t, i.embeddedModeData, n);
        return Gt.create(i.stack, new Zt(i.embeddedModeData.languageId, s));
      }
      let r = e.substring(0, s);
      r.length > 0 && o.nestedModeTokenize(r, !1, i.embeddedModeData, n);
      let a = e.substring(s);
      return this._myTokenize(a, t, i, n + s, o);
    }
    _safeRuleName(e) {
      return e ? e.name : "(unknown)";
    }
    _myTokenize(e, t, i, n, o) {
      o.enterMode(n, this._languageId);
      const s = e.length,
        r = t && this._lexer.includeLF ? e + "\n" : e,
        a = r.length;
      let l = i.embeddedModeData,
        c = i.stack,
        d = 0,
        h = null,
        u = !0;
      for (; u || d < a;) {
        const i = d,
          f = c.depth,
          m = h ? h.groups.length : 0,
          v = c.state;
        let _ = null,
          b = null,
          w = null,
          y = null,
          C = null;
        if (h) {
          _ = h.matches;
          const e = h.groups.shift();
          ((b = e.matched), (w = e.action), (y = h.rule), 0 === h.groups.length && (h = null));
        } else {
          if (!u && d >= a) break;
          u = !1;
          let e = this._lexer.tokenizer[v];
          if (!e && ((e = $t(this._lexer, v)), !e)) throw jt(this._lexer, "tokenizer state is not defined: " + v);
          let t = r.substr(d);
          for (const i of e) if ((0 === d || !i.matchOnlyAtLineStart) && ((_ = t.match(i.regex)), _)) {
            ((b = _[0]), (w = i.action));
            break;
          }
        }
        if ((_ || ((_ = [""]), (b = "")), w || (d < a && ((_ = [r.charAt(d)]), (b = _[0])), (w = this._lexer.defaultToken)), null === b)) break;
        for (d += b.length; Ft(w) && Vt(w) && w.test;) w = w.test(b, _, v, d === a);
        let x = null;
        if ("string" == typeof w || Array.isArray(w)) x = w;else if (w.group) x = w.group;else if (null !== w.token && void 0 !== w.token) {
          if (((x = w.tokenSubst ? Ut(this._lexer, w.token, b, _, v) : w.token), w.nextEmbedded)) if ("@pop" === w.nextEmbedded) {
            if (!l) throw jt(this._lexer, "cannot pop embedded mode if not inside one");
            l = null;
          } else {
            if (l) throw jt(this._lexer, "cannot enter embedded mode from within an embedded mode");
            C = Ut(this._lexer, w.nextEmbedded, b, _, v);
          }
          if ((w.goBack && (d = Math.max(0, d - w.goBack)), w.switchTo && "string" == typeof w.switchTo)) {
            let e = Ut(this._lexer, w.switchTo, b, _, v);
            if (("@" === e[0] && (e = e.substr(1)), !$t(this._lexer, e))) throw jt(this._lexer, "trying to switch to a state '" + e + "' that is undefined in rule: " + this._safeRuleName(y));
            c = c.switchTo(e);
          } else {
            if (w.transform && "function" == typeof w.transform) throw jt(this._lexer, "action.transform not supported");
            if (w.next) if ("@push" === w.next) {
              if (c.depth >= this._lexer.maxStack) throw jt(this._lexer, "maximum tokenizer stack size reached: [" + c.state + "," + c.parent.state + ",...]");
              c = c.push(v);
            } else if ("@pop" === w.next) {
              if (c.depth <= 1) throw jt(this._lexer, "trying to pop an empty stack in rule: " + this._safeRuleName(y));
              c = c.pop();
            } else if ("@popall" === w.next) c = c.popall();else {
              let e = Ut(this._lexer, w.next, b, _, v);
              if (("@" === e[0] && (e = e.substr(1)), !$t(this._lexer, e))) throw jt(this._lexer, "trying to set a next state '" + e + "' that is undefined in rule: " + this._safeRuleName(y));
              c = c.push(e);
            }
          }
          w.log && "string" == typeof w.log && ((g = this._lexer), (p = this._lexer.languageId + ": " + Ut(this._lexer, w.log, b, _, v)), console.log(`${g.languageId}: ${p}`));
        }
        if (null === x) throw jt(this._lexer, "lexer rule has no well-defined action in rule: " + this._safeRuleName(y));
        const S = i => {
          let s = this._modeService.getModeIdForLanguageName(i);
          s && (i = s);
          const r = this._getNestedEmbeddedModeData(i);
          if (d < a) {
            const i = e.substr(d);
            return this._nestedTokenize(i, t, Gt.create(c, r), n + d, o);
          }
          return Gt.create(c, r);
        };
        if (Array.isArray(x)) {
          if (h && h.groups.length > 0) throw jt(this._lexer, "groups cannot be nested: " + this._safeRuleName(y));
          if (_.length !== x.length + 1) throw jt(this._lexer, "matched number of groups does not match the number of actions in rule: " + this._safeRuleName(y));
          let e = 0;
          for (let t = 1; t < _.length; t++) e += _[t].length;
          if (e !== b.length) throw jt(this._lexer, "with groups, all characters should be matched in consecutive groups in rule: " + this._safeRuleName(y));
          h = {
            rule: y,
            matches: _,
            groups: []
          };
          for (let e = 0; e < x.length; e++) h.groups[e] = {
            action: x[e],
            matched: _[e + 1]
          };
          d -= b.length;
        } else {
          {
            if ("@rematch" === x && ((d -= b.length), (b = ""), (_ = null), (x = ""), null !== C)) return S(C);
            if (0 === b.length) {
              if (0 === a || f !== c.depth || v !== c.state || (h ? h.groups.length : 0) !== m) continue;
              throw jt(this._lexer, "no progress in tokenizer in rule: " + this._safeRuleName(y));
            }
            let e = null;
            if (Bt(x) && 0 === x.indexOf("@brackets")) {
              let t = x.substr(9),
                i = ei(this._lexer, b);
              if (!i) throw jt(this._lexer, "@brackets token returned but no bracket defined as: " + b);
              e = zt(i.token + t);
            } else {
              e = zt("" === x ? "" : x + this._lexer.tokenPostfix);
            }
            i < s && o.emit(i + n, e);
          }
          if (null !== C) return S(C);
        }
      }
      var g, p;
      return Gt.create(c, l);
    }
    _getNestedEmbeddedModeData(e) {
      let t = this._locateMode(e);
      if (t) {
        let e = be.RW.get(t);
        if (e) return new Zt(t, e.getInitialState());
      }
      return new Zt(t || we.TG, we.nO);
    }
    _locateMode(e) {
      if (!e || !this._modeService.isRegisteredMode(e)) return null;
      if (e === this._languageId) return e;
      const t = this._modeService.getModeId(e);
      return (t && (this._modeService.triggerMode(t), (this._embeddedModes[t] = !0)), t);
    }
  }
  function ei(e, t) {
    if (!t) return null;
    t = Ht(e, t);
    let i = e.brackets;
    for (const e of i) {
      if (e.open === t) return {
        token: e.token,
        bracketType: 1
      };
      if (e.close === t) return {
        token: e.token,
        bracketType: -1
      };
    }
    return null;
  }
  var ti;
  const ii = null === (ti = window.trustedTypes) || void 0 === ti ? void 0 : ti.createPolicy("standaloneColorizer", {
    createHTML: e => e
  });
  class ni {
    static colorizeElement(e, t, i, n) {
      let o = (n = n || {}).theme || "vs",
        s = n.mimeType || i.getAttribute("lang") || i.getAttribute("data-lang");
      if (!s) return (console.error("Mode not detected"), Promise.resolve());
      e.setTheme(o);
      let r = i.firstChild ? i.firstChild.nodeValue : "";
      i.className += " " + o;
      return this.colorize(t, r || "", s, n).then(e => {
        var t;
        const n = null !== (t = null == ii ? void 0 : ii.createHTML(e)) && void 0 !== t ? t : e;
        i.innerHTML = n;
      }, e => console.error(e));
    }
    static colorize(e, t, i, n) {
      const o = e.languageIdCodec;
      let s = 4;
      (n && "number" == typeof n.tabSize && (s = n.tabSize), De.uS(t) && (t = t.substr(1)));
      let r = De.uq(t),
        a = e.getModeId(i);
      if (!a) return Promise.resolve(si(r, s, o));
      e.triggerMode(a);
      const l = be.RW.get(a);
      if (l) return oi(r, s, l, o);
      const c = be.RW.getPromise(a);
      return new Promise(c ? (e, t) => {
        c.then(i => {
          oi(r, s, i, o).then(e, t);
        }, t);
      } : (e, t) => {
        let i = null,
          n = null;
        const l = () => {
          (i && (i.dispose(), (i = null)), n && (n.dispose(), (n = null)));
          const l = be.RW.get(a);
          l ? oi(r, s, l, o).then(e, t) : e(si(r, s, o));
        };
        ((n = new Se._F()), n.cancelAndSet(l, 500), (i = be.RW.onDidChange(e => {
          e.changedLanguages.indexOf(a) >= 0 && l();
        })));
      });
    }
    static colorizeLine(e, t, i, n, o = 4) {
      const s = Rt.wA.isBasicASCII(e, t),
        r = Rt.wA.containsRTL(e, s, i);
      return (0, Pt.tF)(new Pt.IJ(!1, !0, e, !1, s, r, 0, n, [], o, 0, 0, 0, 0, -1, "none", !1, !1, null)).html;
    }
    static colorizeModelLine(e, t, i = 4) {
      let n = e.getLineContent(t);
      e.forceTokenization(t);
      let o = e.getLineTokens(t).inflate();
      return this.colorizeLine(n, e.mightContainNonBasicASCII(), e.mightContainRTL(), o, i);
    }
  }
  function oi(e, t, i, n) {
    return new Promise((o, s) => {
      const r = () => {
        const a = (function (e, t, i, n) {
          let o = [],
            s = i.getInitialState();
          for (let r = 0, a = e.length; r < a; r++) {
            let a = e[r],
              l = i.tokenize2(a, !0, s, 0);
            Ot.A.convertToEndOffset(l.tokens, a.length);
            let c = new Ot.A(l.tokens, a, n);
            const d = Rt.wA.isBasicASCII(a, !0),
              h = Rt.wA.containsRTL(a, d, !0);
            let u = (0, Pt.tF)(new Pt.IJ(!1, !0, a, !1, d, h, 0, c.inflate(), [], t, 0, 0, 0, 0, -1, "none", !1, !1, null));
            ((o = o.concat(u.html)), o.push("<br/>"), (s = l.endState));
          }
          return o.join("");
        })(e, t, i, n);
        if (i instanceof Jt) {
          const e = i.getLoadStatus();
          if (!1 === e.loaded) return void e.promise.then(r, s);
        }
        o(a);
      };
      r();
    });
  }
  function si(e, t, i) {
    let n = [];
    const o = new Uint32Array(2);
    ((o[0] = 0), (o[1] = 16793600));
    for (let s = 0, r = e.length; s < r; s++) {
      let r = e[s];
      o[0] = r.length;
      const a = new Ot.A(o, r, i),
        l = Rt.wA.isBasicASCII(r, !0),
        c = Rt.wA.containsRTL(r, l, !0);
      let d = (0, Pt.tF)(new Pt.IJ(!1, !0, r, !1, l, c, 0, a, [], t, 0, 0, 0, 0, -1, "none", !1, !1, null));
      ((n = n.concat(d.html)), n.push("<br/>"));
    }
    return n.join("");
  }
  var ri = i(59069),
    ai = i(8313),
    li = i(14603),
    ci = i(65520),
    di = i(66007),
    hi = i(56345),
    ui = i(69386),
    gi = i(33108),
    pi = i(23193);
  class fi {
    constructor(e = {}, t = [], i = []) {
      ((this._contents = e), (this._keys = t), (this._overrides = i), (this.isFrozen = !1), (this.overrideConfigurations = new Map()));
    }
    get contents() {
      return this.checkAndFreeze(this._contents);
    }
    get overrides() {
      return this.checkAndFreeze(this._overrides);
    }
    get keys() {
      return this.checkAndFreeze(this._keys);
    }
    isEmpty() {
      return (0 === this._keys.length && 0 === Object.keys(this._contents).length && 0 === this._overrides.length);
    }
    getValue(e) {
      return e ? (0, gi.Mt)(this.contents, e) : this.contents;
    }
    override(e) {
      let t = this.overrideConfigurations.get(e);
      return (t || ((t = this.createOverrideConfigurationModel(e)), this.overrideConfigurations.set(e, t)), t);
    }
    merge(...e) {
      const t = ge.I8(this.contents),
        i = ge.I8(this.overrides),
        n = [...this.keys];
      for (const o of e) {
        this.mergeContents(t, o.contents);
        for (const e of o.overrides) {
          const [t] = i.filter(t => bt.fS(t.identifiers, e.identifiers));
          t ? this.mergeContents(t.contents, e.contents) : i.push(ge.I8(e));
        }
        for (const e of o.keys) -1 === n.indexOf(e) && n.push(e);
      }
      return new fi(t, n, i);
    }
    freeze() {
      return ((this.isFrozen = !0), this);
    }
    createOverrideConfigurationModel(e) {
      const t = this.getContentsForOverrideIdentifer(e);
      if (!t || "object" != typeof t || !Object.keys(t).length) return this;
      let i = {};
      for (const e of bt.EB([...Object.keys(this.contents), ...Object.keys(t)])) {
        let n = this.contents[e],
          o = t[e];
        (o && ("object" == typeof n && "object" == typeof o ? ((n = ge.I8(n)), this.mergeContents(n, o)) : (n = o)), (i[e] = n));
      }
      return new fi(i, this.keys, this.overrides);
    }
    mergeContents(e, t) {
      for (const i of Object.keys(t)) i in e && Ne.Kn(e[i]) && Ne.Kn(t[i]) ? this.mergeContents(e[i], t[i]) : (e[i] = ge.I8(t[i]));
    }
    checkAndFreeze(e) {
      return this.isFrozen && !Object.isFrozen(e) ? ge._A(e) : e;
    }
    getContentsForOverrideIdentifer(e) {
      for (const t of this.overrides) if (-1 !== t.identifiers.indexOf(e)) return t.contents;
      return null;
    }
    toJSON() {
      return {
        contents: this.contents,
        overrides: this.overrides,
        keys: this.keys
      };
    }
    setValue(e, t) {
      (this.addKey(e), (0, gi.KV)(this.contents, e, t, e => {
        throw new Error(e);
      }));
    }
    removeValue(e) {
      this.removeKey(e) && (0, gi.xL)(this.contents, e);
    }
    addKey(e) {
      let t = this.keys.length;
      for (let i = 0; i < t; i++) 0 === e.indexOf(this.keys[i]) && (t = i);
      this.keys.splice(t, 1, e);
    }
    removeKey(e) {
      let t = this.keys.indexOf(e);
      return -1 !== t && (this.keys.splice(t, 1), !0);
    }
  }
  class mi extends fi {
    constructor() {
      const e = (0, gi.O4)(),
        t = (0, gi.MR)(),
        i = [];
      for (const t of Object.keys(e)) pi.G1.test(t) && i.push({
        identifiers: [(0, pi.Uh)(t).trim()],
        keys: Object.keys(e[t]),
        contents: (0, gi.Od)(e[t], e => console.error(`Conflict in default settings file: ${e}`))
      });
      super(e, t, i);
    }
  }
  class vi {
    constructor(e, t, i = new fi(), n = new fi(), o = new J.Y9(), s = new fi(), r = new J.Y9(), a = !0) {
      ((this._defaultConfiguration = e), (this._localUserConfiguration = t), (this._remoteUserConfiguration = i), (this._workspaceConfiguration = n), (this._folderConfigurations = o), (this._memoryConfiguration = s), (this._memoryConfigurationByResource = r), (this._freeze = a), (this._workspaceConsolidatedConfiguration = null), (this._foldersConsolidatedConfigurations = new J.Y9()), (this._userConfiguration = null));
    }
    getValue(e, t, i) {
      return this.getConsolidateConfigurationModel(t, i).getValue(e);
    }
    updateValue(e, t, i = {}) {
      let n;
      (i.resource ? ((n = this._memoryConfigurationByResource.get(i.resource)), n || ((n = new fi()), this._memoryConfigurationByResource.set(i.resource, n))) : (n = this._memoryConfiguration), void 0 === t ? n.removeValue(e) : n.setValue(e, t), i.resource || (this._workspaceConsolidatedConfiguration = null));
    }
    get userConfiguration() {
      return (this._userConfiguration || ((this._userConfiguration = this._remoteUserConfiguration.isEmpty() ? this._localUserConfiguration : this._localUserConfiguration.merge(this._remoteUserConfiguration)), this._freeze && this._userConfiguration.freeze()), this._userConfiguration);
    }
    getConsolidateConfigurationModel(e, t) {
      let i = this.getConsolidatedConfigurationModelForResource(e, t);
      return e.overrideIdentifier ? i.override(e.overrideIdentifier) : i;
    }
    getConsolidatedConfigurationModelForResource({
      resource: e
    }, t) {
      let i = this.getWorkspaceConsolidatedConfiguration();
      if (t && e) {
        const n = t.getFolder(e);
        n && (i = this.getFolderConsolidatedConfiguration(n.uri) || i);
        const o = this._memoryConfigurationByResource.get(e);
        o && (i = i.merge(o));
      }
      return i;
    }
    getWorkspaceConsolidatedConfiguration() {
      return (this._workspaceConsolidatedConfiguration || ((this._workspaceConsolidatedConfiguration = this._defaultConfiguration.merge(this.userConfiguration, this._workspaceConfiguration, this._memoryConfiguration)), this._freeze && (this._workspaceConfiguration = this._workspaceConfiguration.freeze())), this._workspaceConsolidatedConfiguration);
    }
    getFolderConsolidatedConfiguration(e) {
      let t = this._foldersConsolidatedConfigurations.get(e);
      if (!t) {
        const i = this.getWorkspaceConsolidatedConfiguration(),
          n = this._folderConfigurations.get(e);
        n ? ((t = i.merge(n)), this._freeze && (t = t.freeze()), this._foldersConsolidatedConfigurations.set(e, t)) : (t = i);
      }
      return t;
    }
    toData() {
      return {
        defaults: {
          contents: this._defaultConfiguration.contents,
          overrides: this._defaultConfiguration.overrides,
          keys: this._defaultConfiguration.keys
        },
        user: {
          contents: this.userConfiguration.contents,
          overrides: this.userConfiguration.overrides,
          keys: this.userConfiguration.keys
        },
        workspace: {
          contents: this._workspaceConfiguration.contents,
          overrides: this._workspaceConfiguration.overrides,
          keys: this._workspaceConfiguration.keys
        },
        folders: [...this._folderConfigurations.keys()].reduce((e, t) => {
          const {
            contents: i,
            overrides: n,
            keys: o
          } = this._folderConfigurations.get(t);
          return (e.push([t, {
            contents: i,
            overrides: n,
            keys: o
          }]), e);
        }, [])
      };
    }
    static parse(e) {
      const t = this.parseConfigurationModel(e.defaults),
        i = this.parseConfigurationModel(e.user),
        n = this.parseConfigurationModel(e.workspace),
        o = e.folders.reduce((e, t) => (e.set(z.o.revive(t[0]), this.parseConfigurationModel(t[1])), e), new J.Y9());
      return new vi(t, i, new fi(), n, o, new fi(), new J.Y9(), !1);
    }
    static parseConfigurationModel(e) {
      return new fi(e.contents, e.keys, e.overrides).freeze();
    }
  }
  class _i {
    constructor(e, t, i, n) {
      ((this.change = e), (this.previous = t), (this.currentConfiguraiton = i), (this.currentWorkspace = n), (this._previousConfiguration = void 0));
      const o = new Set();
      (e.keys.forEach(e => o.add(e)), e.overrides.forEach(([, e]) => e.forEach(e => o.add(e))), (this.affectedKeys = [...o.values()]));
      const s = new fi();
      (this.affectedKeys.forEach(e => s.setValue(e, {})), (this.affectedKeysTree = s.contents));
    }
    get previousConfiguration() {
      return (!this._previousConfiguration && this.previous && (this._previousConfiguration = vi.parse(this.previous.data)), this._previousConfiguration);
    }
    affectsConfiguration(e, t) {
      var i;
      if (this.doesAffectedKeysTreeContains(this.affectedKeysTree, e)) {
        if (t) {
          const n = this.previousConfiguration ? this.previousConfiguration.getValue(e, t, null === (i = this.previous) || void 0 === i ? void 0 : i.workspace) : void 0,
            o = this.currentConfiguraiton.getValue(e, t, this.currentWorkspace);
          return !ge.fS(n, o);
        }
        return !0;
      }
      return !1;
    }
    doesAffectedKeysTreeContains(e, t) {
      let i,
        n = (0, gi.Od)({
          [t]: !0
        }, () => {});
      for (; "object" == typeof n && (i = Object.keys(n)[0]);) {
        if (!(e = e[i])) return !1;
        n = n[i];
      }
      return !0;
    }
  }
  var bi = i(63580);
  const wi = /^(cursor|delete)/;
  class yi extends ue.JT {
    constructor(e, t, i, n, o) {
      (super(), (this._contextKeyService = e), (this._commandService = t), (this._telemetryService = i), (this._notificationService = n), (this._logService = o), (this._onDidUpdateKeybindings = this._register(new W.Q5())), (this._currentChord = null), (this._currentChordChecker = new Se.zh()), (this._currentChordStatusMessage = null), (this._ignoreSingleModifiers = Ci.EMPTY), (this._currentSingleModifier = null), (this._currentSingleModifierClearTimeout = new Se._F()), (this._logging = !1));
    }
    get onDidUpdateKeybindings() {
      return this._onDidUpdateKeybindings ? this._onDidUpdateKeybindings.event : W.ju.None;
    }
    dispose() {
      super.dispose();
    }
    _log(e) {
      this._logging && this._logService.info(`[KeybindingService]: ${e}`);
    }
    getKeybindings() {
      return this._getResolver().getKeybindings();
    }
    lookupKeybinding(e, t) {
      const i = this._getResolver().lookupPrimaryKeybinding(e, t || this._contextKeyService);
      if (i) return i.resolvedKeybinding;
    }
    dispatchEvent(e, t) {
      return this._dispatch(e, t);
    }
    softDispatch(e, t) {
      const i = this.resolveKeyboardEvent(e);
      if (i.isChord()) return (console.warn("Unexpected keyboard event mapped to a chord"), null);
      const [n] = i.getDispatchParts();
      if (null === n) return null;
      const o = this._contextKeyService.getContext(t),
        s = this._currentChord ? this._currentChord.keypress : null;
      return this._getResolver().resolve(o, s, n);
    }
    _enterChordMode(e, t) {
      ((this._currentChord = {
        keypress: e,
        label: t
      }), (this._currentChordStatusMessage = this._notificationService.status(bi.N("first.chord", "({0}) was pressed. Waiting for second key of chord...", t))));
      const i = Date.now();
      this._currentChordChecker.cancelAndSet(() => {
        this._documentHasFocus() ? Date.now() - i > 5e3 && this._leaveChordMode() : this._leaveChordMode();
      }, 500);
    }
    _leaveChordMode() {
      (this._currentChordStatusMessage && (this._currentChordStatusMessage.dispose(), (this._currentChordStatusMessage = null)), this._currentChordChecker.cancel(), (this._currentChord = null));
    }
    _dispatch(e, t) {
      return this._doDispatch(this.resolveKeyboardEvent(e), t, !1);
    }
    _singleModifierDispatch(e, t) {
      const i = this.resolveKeyboardEvent(e),
        [n] = i.getSingleModifierDispatchParts();
      if (n) return this._ignoreSingleModifiers.has(n) ? (this._log(`+ Ignoring single modifier ${n} due to it being pressed together with other keys.`), (this._ignoreSingleModifiers = Ci.EMPTY), this._currentSingleModifierClearTimeout.cancel(), (this._currentSingleModifier = null), !1) : ((this._ignoreSingleModifiers = Ci.EMPTY), null === this._currentSingleModifier ? (this._log(`+ Storing single modifier for possible chord ${n}.`), (this._currentSingleModifier = n), this._currentSingleModifierClearTimeout.cancelAndSet(() => {
        (this._log("+ Clearing single modifier due to 300ms elapsed."), (this._currentSingleModifier = null));
      }, 300), !1) : n === this._currentSingleModifier ? (this._log(`/ Dispatching single modifier chord ${n} ${n}`), this._currentSingleModifierClearTimeout.cancel(), (this._currentSingleModifier = null), this._doDispatch(i, t, !0)) : (this._log(`+ Clearing single modifier due to modifier mismatch: ${this._currentSingleModifier} ${n}`), this._currentSingleModifierClearTimeout.cancel(), (this._currentSingleModifier = null), !1));
      const [o] = i.getParts();
      return ((this._ignoreSingleModifiers = new Ci(o)), null !== this._currentSingleModifier && this._log("+ Clearing single modifier due to other key up."), this._currentSingleModifierClearTimeout.cancel(), (this._currentSingleModifier = null), !1);
    }
    _doDispatch(e, t, i = !1) {
      let n = !1;
      if (e.isChord()) return (console.warn("Unexpected keyboard event mapped to a chord"), !1);
      let o = null,
        s = null;
      if (i) {
        const [t] = e.getSingleModifierDispatchParts();
        ((o = t), (s = t));
      } else (([o] = e.getDispatchParts()), (s = this._currentChord ? this._currentChord.keypress : null));
      if (null === o) return (this._log("\\ Keyboard event cannot be dispatched in keydown phase."), n);
      const r = this._contextKeyService.getContext(t),
        a = e.getLabel(),
        l = this._getResolver().resolve(r, s, o);
      return (this._logService.trace("KeybindingService#dispatch", a, null == l ? void 0 : l.commandId), l && l.enterChord ? ((n = !0), this._enterChordMode(o, a), n) : (this._currentChord && ((l && l.commandId) || (this._notificationService.status(bi.N("missing.chord", "The key combination ({0}, {1}) is not a command.", this._currentChord.label, a), {
        hideAfter: 1e4
      }), (n = !0))), this._leaveChordMode(), l && l.commandId && (l.bubble || (n = !0), void 0 === l.commandArgs ? this._commandService.executeCommand(l.commandId).then(void 0, e => this._notificationService.warn(e)) : this._commandService.executeCommand(l.commandId, l.commandArgs).then(void 0, e => this._notificationService.warn(e)), wi.test(l.commandId) || this._telemetryService.publicLog2("workbenchActionExecuted", {
        id: l.commandId,
        from: "keybinding"
      })), n));
    }
    mightProducePrintableCharacter(e) {
      return (!e.ctrlKey && !e.metaKey && ((e.keyCode >= 31 && e.keyCode <= 56) || (e.keyCode >= 21 && e.keyCode <= 30)));
    }
  }
  class Ci {
    constructor(e) {
      ((this._ctrlKey = !!e && e.ctrlKey), (this._shiftKey = !!e && e.shiftKey), (this._altKey = !!e && e.altKey), (this._metaKey = !!e && e.metaKey));
    }
    has(e) {
      switch (e) {
        case "ctrl":
          return this._ctrlKey;
        case "shift":
          return this._shiftKey;
        case "alt":
          return this._altKey;
        case "meta":
          return this._metaKey;
      }
    }
  }
  Ci.EMPTY = new Ci(null);
  var xi = i(38819);
  class Si {
    constructor(e, t, i) {
      ((this._log = i), (this._defaultKeybindings = e), (this._defaultBoundCommands = new Map()));
      for (let t = 0, i = e.length; t < i; t++) {
        const i = e[t].command;
        i && this._defaultBoundCommands.set(i, !0);
      }
      ((this._map = new Map()), (this._lookupMap = new Map()), (this._keybindings = Si.combine(e, t)));
      for (let e = 0, t = this._keybindings.length; e < t; e++) {
        let t = this._keybindings[e];
        0 !== t.keypressParts.length && ((t.when && 0 === t.when.type) || this._addKeyPress(t.keypressParts[0], t));
      }
    }
    static _isTargetedForRemoval(e, t, i, n, o) {
      if (e.command !== n) return !1;
      if (t && e.keypressParts[0] !== t) return !1;
      if (i && e.keypressParts[1] !== i) return !1;
      if (o) {
        if (!e.when) return !1;
        if (!(0, xi.Fb)(o, e.when)) return !1;
      }
      return !0;
    }
    static combine(e, t) {
      e = e.slice(0);
      let i = [];
      for (const n of t) {
        if (!n.command || 0 === n.command.length || "-" !== n.command.charAt(0)) {
          i.push(n);
          continue;
        }
        const t = n.command.substr(1),
          o = n.keypressParts[0],
          s = n.keypressParts[1],
          r = n.when;
        for (let i = e.length - 1; i >= 0; i--) this._isTargetedForRemoval(e[i], o, s, t, r) && e.splice(i, 1);
      }
      return e.concat(i);
    }
    _addKeyPress(e, t) {
      const i = this._map.get(e);
      if (void 0 === i) return (this._map.set(e, [t]), void this._addToLookupMap(t));
      for (let e = i.length - 1; e >= 0; e--) {
        let n = i[e];
        if (n.command === t.command) continue;
        const o = n.keypressParts.length > 1,
          s = t.keypressParts.length > 1;
        (o && s && n.keypressParts[1] !== t.keypressParts[1]) || (Si.whenIsEntirelyIncluded(n.when, t.when) && this._removeFromLookupMap(n));
      }
      (i.push(t), this._addToLookupMap(t));
    }
    _addToLookupMap(e) {
      if (!e.command) return;
      let t = this._lookupMap.get(e.command);
      void 0 === t ? ((t = [e]), this._lookupMap.set(e.command, t)) : t.push(e);
    }
    _removeFromLookupMap(e) {
      if (!e.command) return;
      let t = this._lookupMap.get(e.command);
      if (void 0 !== t) for (let i = 0, n = t.length; i < n; i++) if (t[i] === e) return void t.splice(i, 1);
    }
    static whenIsEntirelyIncluded(e, t) {
      return (!t || 1 === t.type || (!(!e || 1 === e.type) && (0, xi.K8)(e, t)));
    }
    getKeybindings() {
      return this._keybindings;
    }
    lookupPrimaryKeybinding(e, t) {
      const i = this._lookupMap.get(e);
      if (void 0 === i || 0 === i.length) return null;
      if (1 === i.length) return i[0];
      for (let e = i.length - 1; e >= 0; e--) {
        const n = i[e];
        if (t.contextMatchesRules(n.when)) return n;
      }
      return i[i.length - 1];
    }
    resolve(e, t, i) {
      this._log(`| Resolving ${i}${t ? ` chorded from ${t}` : ""}`);
      let n = null;
      if (null !== t) {
        const e = this._map.get(t);
        if (void 0 === e) return (this._log("\\ No keybinding entries."), null);
        n = [];
        for (let t = 0, o = e.length; t < o; t++) {
          let o = e[t];
          o.keypressParts[1] === i && n.push(o);
        }
      } else {
        const e = this._map.get(i);
        if (void 0 === e) return (this._log("\\ No keybinding entries."), null);
        n = e;
      }
      let o = this._findCommand(e, n);
      return o ? null === t && o.keypressParts.length > 1 && null !== o.keypressParts[1] ? (this._log(`\\ From ${n.length} keybinding entries, matched chord, when: ${ki(o.when)}, source: ${Li(o)}.`), {
        enterChord: !0,
        leaveChord: !1,
        commandId: null,
        commandArgs: null,
        bubble: !1
      }) : (this._log(`\\ From ${n.length} keybinding entries, matched ${o.command}, when: ${ki(o.when)}, source: ${Li(o)}.`), {
        enterChord: !1,
        leaveChord: o.keypressParts.length > 1,
        commandId: o.command,
        commandArgs: o.commandArgs,
        bubble: o.bubble
      }) : (this._log(`\\ From ${n.length} keybinding entries, no when clauses matched the context.`), null);
    }
    _findCommand(e, t) {
      for (let i = t.length - 1; i >= 0; i--) {
        let n = t[i];
        if (Si.contextMatchesRules(e, n.when)) return n;
      }
      return null;
    }
    static contextMatchesRules(e, t) {
      return !t || t.evaluate(e);
    }
  }
  function ki(e) {
    return e ? `${e.serialize()}` : "no when condition";
  }
  function Li(e) {
    return e.extensionId ? e.isBuiltinExtension ? `built-in extension ${e.extensionId}` : `user extension ${e.extensionId}` : e.isDefault ? "built-in" : "user";
  }
  var Ni = i(49989);
  class Di {
    constructor(e, t, i, n, o, s, r) {
      ((this._resolvedKeybindingItemBrand = void 0), (this.resolvedKeybinding = e), (this.keypressParts = e ? Ii(e.getDispatchParts()) : []), e && 0 === this.keypressParts.length && (this.keypressParts = Ii(e.getSingleModifierDispatchParts())), (this.bubble = !!t && 94 === t.charCodeAt(0)), (this.command = this.bubble ? t.substr(1) : t), (this.commandArgs = i), (this.when = n), (this.isDefault = o), (this.extensionId = s), (this.isBuiltinExtension = r));
    }
  }
  function Ii(e) {
    let t = [];
    for (let i = 0, n = e.length; i < n; i++) {
      const n = e[i];
      if (!n) return t;
      t.push(n);
    }
    return t;
  }
  var Ei = i(8030);
  class Ti extends ai.f1 {
    constructor(e, t) {
      if ((super(), 0 === t.length)) throw (0, ke.b1)("parts");
      ((this._os = e), (this._parts = t));
    }
    getLabel() {
      return Ei.xo.toLabel(this._os, this._parts, e => this._getLabel(e));
    }
    getAriaLabel() {
      return Ei.X4.toLabel(this._os, this._parts, e => this._getAriaLabel(e));
    }
    getElectronAccelerator() {
      return this._parts.length > 1 || this._parts[0].isDuplicateModifierCase() ? null : Ei.jC.toLabel(this._os, this._parts, e => this._getElectronAccelerator(e));
    }
    isChord() {
      return this._parts.length > 1;
    }
    getParts() {
      return this._parts.map(e => this._getPart(e));
    }
    _getPart(e) {
      return new ai.BQ(e.ctrlKey, e.shiftKey, e.altKey, e.metaKey, this._getLabel(e), this._getAriaLabel(e));
    }
    getDispatchParts() {
      return this._parts.map(e => this._getDispatchPart(e));
    }
    getSingleModifierDispatchParts() {
      return this._parts.map(e => this._getSingleModifierDispatchPart(e));
    }
  }
  class Mi extends Ti {
    constructor(e, t) {
      super(t, e.parts);
    }
    _keyCodeToUILabel(e) {
      if (2 === this._os) switch (e) {
        case 15:
          return "←";
        case 16:
          return "↑";
        case 17:
          return "→";
        case 18:
          return "↓";
      }
      return H.kL.toString(e);
    }
    _getLabel(e) {
      return e.isDuplicateModifierCase() ? "" : this._keyCodeToUILabel(e.keyCode);
    }
    _getAriaLabel(e) {
      return e.isDuplicateModifierCase() ? "" : H.kL.toString(e.keyCode);
    }
    _getElectronAccelerator(e) {
      return H.kL.toElectronAccelerator(e.keyCode);
    }
    _getDispatchPart(e) {
      return Mi.getDispatchStr(e);
    }
    static getDispatchStr(e) {
      if (e.isModifierKey()) return null;
      let t = "";
      return (e.ctrlKey && (t += "ctrl+"), e.shiftKey && (t += "shift+"), e.altKey && (t += "alt+"), e.metaKey && (t += "meta+"), (t += H.kL.toString(e.keyCode)), t);
    }
    _getSingleModifierDispatchPart(e) {
      return 5 !== e.keyCode || e.shiftKey || e.altKey || e.metaKey ? 4 !== e.keyCode || e.ctrlKey || e.altKey || e.metaKey ? 6 !== e.keyCode || e.ctrlKey || e.shiftKey || e.metaKey ? 57 !== e.keyCode || e.ctrlKey || e.shiftKey || e.altKey ? null : "meta" : "alt" : "shift" : "ctrl";
    }
    static _scanCodeToKeyCode(e) {
      const t = H.Vd[e];
      if (-1 !== t) return t;
      switch (e) {
        case 10:
          return 31;
        case 11:
          return 32;
        case 12:
          return 33;
        case 13:
          return 34;
        case 14:
          return 35;
        case 15:
          return 36;
        case 16:
          return 37;
        case 17:
          return 38;
        case 18:
          return 39;
        case 19:
          return 40;
        case 20:
          return 41;
        case 21:
          return 42;
        case 22:
          return 43;
        case 23:
          return 44;
        case 24:
          return 45;
        case 25:
          return 46;
        case 26:
          return 47;
        case 27:
          return 48;
        case 28:
          return 49;
        case 29:
          return 50;
        case 30:
          return 51;
        case 31:
          return 52;
        case 32:
          return 53;
        case 33:
          return 54;
        case 34:
          return 55;
        case 35:
          return 56;
        case 36:
          return 22;
        case 37:
          return 23;
        case 38:
          return 24;
        case 39:
          return 25;
        case 40:
          return 26;
        case 41:
          return 27;
        case 42:
          return 28;
        case 43:
          return 29;
        case 44:
          return 30;
        case 45:
          return 21;
        case 51:
          return 83;
        case 52:
          return 81;
        case 53:
          return 87;
        case 54:
          return 89;
        case 55:
          return 88;
        case 56:
          return 0;
        case 57:
          return 80;
        case 58:
          return 90;
        case 59:
          return 86;
        case 60:
          return 82;
        case 61:
          return 84;
        case 62:
          return 85;
        case 106:
          return 92;
      }
      return 0;
    }
    static _resolveSimpleUserBinding(e) {
      if (!e) return null;
      if (e instanceof ai.QC) return e;
      const t = this._scanCodeToKeyCode(e.scanCode);
      return 0 === t ? null : new ai.QC(e.ctrlKey, e.shiftKey, e.altKey, e.metaKey, t);
    }
    static resolveUserBinding(e, t) {
      const i = Ii(e.map(e => this._resolveSimpleUserBinding(e)));
      return i.length > 0 ? [new Mi(new ai.X_(i), t)] : [];
    }
  }
  var Ai = i(59422),
    Oi = i(40382),
    Pi = i(20913),
    Ri = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Fi = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    Bi = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  class Vi {
    constructor(e) {
      ((this.disposed = !1), (this.model = e), (this._onWillDispose = new W.Q5()));
    }
    get textEditorModel() {
      return this.model;
    }
    dispose() {
      ((this.disposed = !0), this._onWillDispose.fire());
    }
  }
  let Wi = class {
    constructor(e) {
      this.modelService = e;
    }
    setEditor(e) {
      this.editor = e;
    }
    createModelReference(e) {
      let t = null;
      var i, n, o;
      return (this.editor && ((i = this.editor), (n = t => this.findModel(t, e)), (o = t => this.findModel(t.getOriginalEditor(), e) || this.findModel(t.getModifiedEditor(), e)), (t = (0, ci.CL)(i) ? n(i) : o(i))), t ? Promise.resolve(new ue.Jz(new Vi(t))) : Promise.reject(new Error("Model not found")));
    }
    findModel(e, t) {
      let i = this.modelService.getModel(t);
      return i && i.uri.toString() !== t.toString() ? null : i;
    }
  };
  Wi = Ri([Fi(0, vt.q)], Wi);
  class Hi {
    show() {
      return Hi.NULL_PROGRESS_RUNNER;
    }
    showWhile(e, t) {
      return Bi(this, void 0, void 0, function* () {
        yield e;
      });
    }
  }
  Hi.NULL_PROGRESS_RUNNER = {
    done: () => {},
    total: () => {},
    worked: () => {}
  };
  class zi {
    confirm(e) {
      return this.doConfirm(e).then(e => ({
        confirmed: e,
        checkboxChecked: !1
      }));
    }
    doConfirm(e) {
      let t = e.message;
      return (e.detail && (t = t + "\n\n" + e.detail), Promise.resolve(window.confirm(t)));
    }
    show(e, t, i, n) {
      return Promise.resolve({
        choice: 0
      });
    }
  }
  class ji {
    info(e) {
      return this.notify({
        severity: li.Z.Info,
        message: e
      });
    }
    warn(e) {
      return this.notify({
        severity: li.Z.Warning,
        message: e
      });
    }
    error(e) {
      return this.notify({
        severity: li.Z.Error,
        message: e
      });
    }
    notify(e) {
      switch (e.severity) {
        case li.Z.Error:
          console.error(e.message);
          break;
        case li.Z.Warning:
          console.warn(e.message);
          break;
        default:
          console.log(e.message);
      }
      return ji.NO_OP;
    }
    status(e, t) {
      return ue.JT.None;
    }
  }
  ji.NO_OP = new Ai.EO();
  class Ui {
    constructor(e) {
      ((this._onWillExecuteCommand = new W.Q5()), (this._onDidExecuteCommand = new W.Q5()), (this.onDidExecuteCommand = this._onDidExecuteCommand.event), (this._instantiationService = e));
    }
    executeCommand(e, ...t) {
      const i = ne.P.getCommand(e);
      if (!i) return Promise.reject(new Error(`command '${e}' not found`));
      try {
        this._onWillExecuteCommand.fire({
          commandId: e,
          args: t
        });
        const n = this._instantiationService.invokeFunction.apply(this._instantiationService, [i.handler, ...t]);
        return (this._onDidExecuteCommand.fire({
          commandId: e,
          args: t
        }), Promise.resolve(n));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
  class $i extends yi {
    constructor(e, t, i, n, o, s) {
      (super(e, t, i, n, o), (this._cachedResolver = null), (this._dynamicKeybindings = []), this._register(Q.nm(s, Q.tw.KEY_DOWN, e => {
        const t = new ri.y(e);
        this._dispatch(t, t.target) && (t.preventDefault(), t.stopPropagation());
      })), this._register(Q.nm(window, Q.tw.KEY_UP, e => {
        const t = new ri.y(e);
        this._singleModifierDispatch(t, t.target) && t.preventDefault();
      })));
    }
    addDynamicKeybinding(e, t, i, n) {
      const o = (0, ai.gm)(t, Le.OS),
        s = new ue.SL();
      return (o && (this._dynamicKeybindings.push({
        keybinding: o.parts,
        command: e,
        when: n,
        weight1: 1e3,
        weight2: 0,
        extensionId: null,
        isBuiltinExtension: !1
      }), s.add((0, ue.OF)(() => {
        for (let t = 0; t < this._dynamicKeybindings.length; t++) {
          if (this._dynamicKeybindings[t].command === e) return (this._dynamicKeybindings.splice(t, 1), void this.updateResolver({
            source: 1
          }));
        }
      }))), s.add(ne.P.registerCommand(e, i)), this.updateResolver({
        source: 1
      }), s);
    }
    updateResolver(e) {
      ((this._cachedResolver = null), this._onDidUpdateKeybindings.fire(e));
    }
    _getResolver() {
      if (!this._cachedResolver) {
        const e = this._toNormalizedKeybindingItems(Ni.W.getDefaultKeybindings(), !0),
          t = this._toNormalizedKeybindingItems(this._dynamicKeybindings, !1);
        this._cachedResolver = new Si(e, t, e => this._log(e));
      }
      return this._cachedResolver;
    }
    _documentHasFocus() {
      return document.hasFocus();
    }
    _toNormalizedKeybindingItems(e, t) {
      let i = [],
        n = 0;
      for (const o of e) {
        const e = o.when || void 0,
          s = o.keybinding;
        if (s) {
          const r = Mi.resolveUserBinding(s, Le.OS);
          for (const s of r) i[n++] = new Di(s, o.command, o.commandArgs, e, t, null, !1);
        } else i[n++] = new Di(void 0, o.command, o.commandArgs, e, t, null, !1);
      }
      return i;
    }
    resolveKeyboardEvent(e) {
      let t = new ai.QC(e.ctrlKey, e.shiftKey, e.altKey, e.metaKey, e.keyCode).toChord();
      return new Mi(t, Le.OS);
    }
  }
  function Ki(e) {
    return (e && "object" == typeof e && (!e.overrideIdentifier || "string" == typeof e.overrideIdentifier) && (!e.resource || e.resource instanceof z.o));
  }
  class qi {
    constructor() {
      ((this._onDidChangeConfiguration = new W.Q5()), (this.onDidChangeConfiguration = this._onDidChangeConfiguration.event), (this._configuration = new vi(new mi(), new fi())));
    }
    getValue(e, t) {
      const i = "string" == typeof e ? e : void 0,
        n = Ki(e) ? e : Ki(t) ? t : {};
      return this._configuration.getValue(i, n, void 0);
    }
    updateValues(e) {
      const t = {
        data: this._configuration.toData()
      };
      let i = [];
      for (const t of e) {
        const [e, n] = t;
        this.getValue(e) !== n && (this._configuration.updateValue(e, n), i.push(e));
      }
      if (i.length > 0) {
        const e = new _i({
          keys: i,
          overrides: []
        }, t, this._configuration);
        ((e.source = 7), (e.sourceConfig = null), this._onDidChangeConfiguration.fire(e));
      }
      return Promise.resolve();
    }
  }
  class Zi {
    constructor(e) {
      ((this.configurationService = e), (this._onDidChangeConfiguration = new W.Q5()), this.configurationService.onDidChangeConfiguration(e => {
        this._onDidChangeConfiguration.fire({
          affectedKeys: e.affectedKeys,
          affectsConfiguration: (t, i) => e.affectsConfiguration(i)
        });
      }));
    }
    getValue(e, t, i) {
      const n = (j.L.isIPosition(t) ? t : null) ? "string" == typeof i ? i : void 0 : "string" == typeof t ? t : void 0;
      return void 0 === n ? this.configurationService.getValue() : this.configurationService.getValue(n);
    }
  }
  let Gi = class {
    constructor(e) {
      this.configurationService = e;
    }
    getEOL(e, t) {
      const i = this.configurationService.getValue("files.eol", {
        overrideIdentifier: t,
        resource: e
      });
      return i && "string" == typeof i && "auto" !== i ? i : Le.IJ || Le.dz ? "\n" : "\r\n";
    }
  };
  Gi = Ri([Fi(0, gi.Ui)], Gi);
  class Yi {
    publicLog(e, t) {
      return Promise.resolve(void 0);
    }
    publicLog2(e, t) {
      return this.publicLog(e, t);
    }
  }
  class Qi {
    constructor() {
      const e = z.o.from({
        scheme: Qi.SCHEME,
        authority: "model",
        path: "/"
      });
      this.workspace = {
        id: "4064f6ec-cb38-4ad0-af64-ee6467e63c82",
        folders: [new Oi.md({
          uri: e,
          name: "",
          index: 0
        })]
      };
    }
    getWorkspace() {
      return this.workspace;
    }
  }
  function Xi(e, t, i) {
    if (!t) return;
    if (!(e instanceof qi)) return;
    let n = [];
    (Object.keys(t).forEach(e => {
      ((0, hi.ei)(e) && n.push([`editor.${e}`, t[e]]), i && (0, hi.Pe)(e) && n.push([`diffEditor.${e}`, t[e]]));
    }), n.length > 0 && e.updateValues(n));
  }
  Qi.SCHEME = "inmemory";
  class Ji {
    constructor(e) {
      this._modelService = e;
    }
    hasPreviewHandler() {
      return !1;
    }
    apply(e, t) {
      return Bi(this, void 0, void 0, function* () {
        const t = new Map();
        for (let i of e) {
          if (!(i instanceof di.Gl)) throw new Error("bad edit - only text edits are supported");
          const e = this._modelService.getModel(i.resource);
          if (!e) throw new Error("bad edit - model not found");
          if ("number" == typeof i.versionId && e.getVersionId() !== i.versionId) throw new Error("bad state - model changed in the meantime");
          let n = t.get(e);
          (n || ((n = []), t.set(e, n)), n.push(ui.h.replaceMove(U.e.lift(i.textEdit.range), i.textEdit.text)));
        }
        let i = 0,
          n = 0;
        for (const [e, o] of t) (e.pushStackElement(), e.pushEditOperations([], o, () => []), e.pushStackElement(), (n += 1), (i += o.length));
        return {
          ariaSummary: De.WU(Pi.UL.bulkEditServiceSummary, i, n)
        };
      });
    }
  }
  class en {
    getUriLabel(e, t) {
      return "file" === e.scheme ? e.fsPath : e.path;
    }
  }
  class tn {
    constructor(e, t) {
      ((this._codeEditorService = e), (this._container = t), (this.onDidLayout = W.ju.None));
    }
    get dimension() {
      return (this._dimension || (this._dimension = Q.D6(window.document.body)), this._dimension);
    }
    get container() {
      return this._container;
    }
    focus() {
      var e;
      null === (e = this._codeEditorService.getFocusedCodeEditor()) || void 0 === e || e.focus();
    }
  }
  var nn,
    on = i(85152),
    sn = i(32073),
    rn = (i(67771), i(38626)),
    an = i(73098),
    ln = i(89052),
    cn = i(39925),
    dn = (i(62460), i(90317)),
    hn = i(9802),
    un = i(74741),
    gn = i(16830),
    pn = i(27869),
    fn = i(73910),
    mn = i(97781),
    vn = i(73046),
    _n = i(59554),
    bn = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    wn = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    yn = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  class Cn {
    constructor(e, t, i, n) {
      ((this.originalLineStart = e), (this.originalLineEnd = t), (this.modifiedLineStart = i), (this.modifiedLineEnd = n));
    }
    getType() {
      return 0 === this.originalLineStart ? 1 : 0 === this.modifiedLineStart ? 2 : 0;
    }
  }
  class xn {
    constructor(e) {
      this.entries = e;
    }
  }
  const Sn = (0, _n.q5)("diff-review-insert", vn.lA.add, bi.N("diffReviewInsertIcon", "Icon for 'Insert' in diff review.")),
    kn = (0, _n.q5)("diff-review-remove", vn.lA.remove, bi.N("diffReviewRemoveIcon", "Icon for 'Remove' in diff review.")),
    Ln = (0, _n.q5)("diff-review-close", vn.lA.close, bi.N("diffReviewCloseIcon", "Icon for 'Close' in diff review."));
  let Nn = class e extends ue.JT {
    constructor(e, t) {
      (super(), (this._modeService = t), (this._width = 0), (this._diffEditor = e), (this._isVisible = !1), (this.shadow = (0, rn.X)(document.createElement("div"))), this.shadow.setClassName("diff-review-shadow"), (this.actionBarContainer = (0, rn.X)(document.createElement("div"))), this.actionBarContainer.setClassName("diff-review-actions"), (this._actionBar = this._register(new dn.o(this.actionBarContainer.domNode))), this._actionBar.push(new un.aU("diffreview.close", bi.N("label.close", "Close"), "close-diff-review " + mn.kS.asClassName(Ln), !0, () => yn(this, void 0, void 0, function* () {
        return this.hide();
      })), {
        label: !1,
        icon: !0
      }), (this.domNode = (0, rn.X)(document.createElement("div"))), this.domNode.setClassName("diff-review monaco-editor-background"), (this._content = (0, rn.X)(document.createElement("div"))), this._content.setClassName("diff-review-content"), this._content.setAttribute("role", "code"), (this.scrollbar = this._register(new hn.s$(this._content.domNode, {}))), this.domNode.domNode.appendChild(this.scrollbar.getDomNode()), this._register(e.onDidUpdateDiff(() => {
        this._isVisible && ((this._diffs = this._compute()), this._render());
      })), this._register(e.getModifiedEditor().onDidChangeCursorPosition(() => {
        this._isVisible && this._render();
      })), this._register(Q.mu(this.domNode.domNode, "click", e => {
        e.preventDefault();
        let t = Q.Fx(e.target, "diff-review-row");
        t && this._goToRow(t);
      })), this._register(Q.mu(this.domNode.domNode, "keydown", e => {
        ((e.equals(18) || e.equals(2066) || e.equals(530)) && (e.preventDefault(), this._goToRow(this._getNextRow())), (e.equals(16) || e.equals(2064) || e.equals(528)) && (e.preventDefault(), this._goToRow(this._getPrevRow())), (e.equals(9) || e.equals(2057) || e.equals(521) || e.equals(1033)) && (e.preventDefault(), this.hide()), (e.equals(10) || e.equals(3)) && (e.preventDefault(), this.accept()));
      })), (this._diffs = []), (this._currentDiff = null));
    }
    prev() {
      let e = 0;
      if ((this._isVisible || (this._diffs = this._compute()), this._isVisible)) {
        let t = -1;
        for (let e = 0, i = this._diffs.length; e < i; e++) if (this._diffs[e] === this._currentDiff) {
          t = e;
          break;
        }
        e = this._diffs.length + t - 1;
      } else e = this._findDiffIndex(this._diffEditor.getPosition());
      if (0 === this._diffs.length) return;
      e %= this._diffs.length;
      const t = this._diffs[e].entries;
      (this._diffEditor.setPosition(new j.L(t[0].modifiedLineStart, 1)), this._diffEditor.setSelection({
        startColumn: 1,
        startLineNumber: t[0].modifiedLineStart,
        endColumn: 1073741824,
        endLineNumber: t[t.length - 1].modifiedLineEnd
      }), (this._isVisible = !0), this._diffEditor.doLayout(), this._render(), this._goToRow(this._getNextRow()));
    }
    next() {
      let e = 0;
      if ((this._isVisible || (this._diffs = this._compute()), this._isVisible)) {
        let t = -1;
        for (let e = 0, i = this._diffs.length; e < i; e++) if (this._diffs[e] === this._currentDiff) {
          t = e;
          break;
        }
        e = t + 1;
      } else e = this._findDiffIndex(this._diffEditor.getPosition());
      if (0 === this._diffs.length) return;
      e %= this._diffs.length;
      const t = this._diffs[e].entries;
      (this._diffEditor.setPosition(new j.L(t[0].modifiedLineStart, 1)), this._diffEditor.setSelection({
        startColumn: 1,
        startLineNumber: t[0].modifiedLineStart,
        endColumn: 1073741824,
        endLineNumber: t[t.length - 1].modifiedLineEnd
      }), (this._isVisible = !0), this._diffEditor.doLayout(), this._render(), this._goToRow(this._getNextRow()));
    }
    accept() {
      let e = -1,
        t = this._getCurrentFocusedRow();
      if (t) {
        let i = parseInt(t.getAttribute("data-line"), 10);
        isNaN(i) || (e = i);
      }
      (this.hide(), -1 !== e && (this._diffEditor.setPosition(new j.L(e, 1)), this._diffEditor.revealPosition(new j.L(e, 1), 1)));
    }
    hide() {
      ((this._isVisible = !1), this._diffEditor.updateOptions({
        readOnly: !1
      }), this._diffEditor.focus(), this._diffEditor.doLayout(), this._render());
    }
    _getPrevRow() {
      let e = this._getCurrentFocusedRow();
      return e ? e.previousElementSibling ? e.previousElementSibling : e : this._getFirstRow();
    }
    _getNextRow() {
      let e = this._getCurrentFocusedRow();
      return e ? e.nextElementSibling ? e.nextElementSibling : e : this._getFirstRow();
    }
    _getFirstRow() {
      return this.domNode.domNode.querySelector(".diff-review-row");
    }
    _getCurrentFocusedRow() {
      let e = document.activeElement;
      return e && /diff-review-row/.test(e.className) ? e : null;
    }
    _goToRow(e) {
      let t = this._getCurrentFocusedRow();
      ((e.tabIndex = 0), e.focus(), t && t !== e && (t.tabIndex = -1), this.scrollbar.scanDomNode());
    }
    isVisible() {
      return this._isVisible;
    }
    layout(e, t, i) {
      ((this._width = t), this.shadow.setTop(e - 6), this.shadow.setWidth(t), this.shadow.setHeight(this._isVisible ? 6 : 0), this.domNode.setTop(e), this.domNode.setWidth(t), this.domNode.setHeight(i), this._content.setHeight(i), this._content.setWidth(t), this._isVisible ? (this.actionBarContainer.setAttribute("aria-hidden", "false"), this.actionBarContainer.setDisplay("block")) : (this.actionBarContainer.setAttribute("aria-hidden", "true"), this.actionBarContainer.setDisplay("none")));
    }
    _compute() {
      const t = this._diffEditor.getLineChanges();
      if (!t || 0 === t.length) return [];
      const i = this._diffEditor.getOriginalEditor().getModel(),
        n = this._diffEditor.getModifiedEditor().getModel();
      return i && n ? e._mergeAdjacent(t, i.getLineCount(), n.getLineCount()) : [];
    }
    static _mergeAdjacent(e, t, i) {
      if (!e || 0 === e.length) return [];
      let n = [],
        o = 0;
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s],
          l = a.originalStartLineNumber,
          c = a.originalEndLineNumber,
          d = a.modifiedStartLineNumber,
          h = a.modifiedEndLineNumber;
        let u = [],
          g = 0;
        {
          const t = 0 === c ? l : l - 1,
            i = 0 === h ? d : d - 1;
          let n = 1,
            o = 1;
          if (s > 0) {
            const t = e[s - 1];
            ((n = 0 === t.originalEndLineNumber ? t.originalStartLineNumber + 1 : t.originalEndLineNumber + 1), (o = 0 === t.modifiedEndLineNumber ? t.modifiedStartLineNumber + 1 : t.modifiedEndLineNumber + 1));
          }
          let r = t - 3 + 1,
            a = i - 3 + 1;
          if (r < n) {
            const e = n - r;
            ((r += e), (a += e));
          }
          if (a < o) {
            const e = o - a;
            ((r += e), (a += e));
          }
          u[g++] = new Cn(r, t, a, i);
        }
        (0 !== c && (u[g++] = new Cn(l, c, 0, 0)), 0 !== h && (u[g++] = new Cn(0, 0, d, h)));
        {
          const n = 0 === c ? l + 1 : c + 1,
            o = 0 === h ? d + 1 : h + 1;
          let a = t,
            p = i;
          if (s + 1 < r) {
            const t = e[s + 1];
            ((a = 0 === t.originalEndLineNumber ? t.originalStartLineNumber : t.originalStartLineNumber - 1), (p = 0 === t.modifiedEndLineNumber ? t.modifiedStartLineNumber : t.modifiedStartLineNumber - 1));
          }
          let f = n + 3 - 1,
            m = o + 3 - 1;
          if (f > a) {
            const e = a - f;
            ((f += e), (m += e));
          }
          if (m > p) {
            const e = p - m;
            ((f += e), (m += e));
          }
          u[g++] = new Cn(n, f, o, m);
        }
        n[o++] = new xn(u);
      }
      let s = n[0].entries,
        r = [],
        a = 0;
      for (let e = 1, t = n.length; e < t; e++) {
        const t = n[e].entries,
          i = s[s.length - 1],
          o = t[0];
        0 === i.getType() && 0 === o.getType() && o.originalLineStart <= i.originalLineEnd ? ((s[s.length - 1] = new Cn(i.originalLineStart, o.originalLineEnd, i.modifiedLineStart, o.modifiedLineEnd)), (s = s.concat(t.slice(1)))) : ((r[a++] = new xn(s)), (s = t));
      }
      return ((r[a++] = new xn(s)), r);
    }
    _findDiffIndex(e) {
      const t = e.lineNumber;
      for (let e = 0, i = this._diffs.length; e < i; e++) {
        const i = this._diffs[e].entries;
        if (t <= i[i.length - 1].modifiedLineEnd) return e;
      }
      return 0;
    }
    _render() {
      const t = this._diffEditor.getOriginalEditor().getOptions(),
        i = this._diffEditor.getModifiedEditor().getOptions(),
        n = this._diffEditor.getOriginalEditor().getModel(),
        o = this._diffEditor.getModifiedEditor().getModel(),
        s = n.getOptions(),
        r = o.getOptions();
      if (!this._isVisible || !n || !o) return (Q.PO(this._content.domNode), (this._currentDiff = null), void this.scrollbar.scanDomNode());
      this._diffEditor.updateOptions({
        readOnly: !0
      });
      const a = this._findDiffIndex(this._diffEditor.getPosition());
      if (this._diffs[a] === this._currentDiff) return;
      this._currentDiff = this._diffs[a];
      const l = this._diffs[a].entries;
      let c = document.createElement("div");
      ((c.className = "diff-review-table"), c.setAttribute("role", "list"), c.setAttribute("aria-label", 'Difference review. Use "Stage | Unstage | Revert Selected Ranges" commands'), ln.V.applyFontInfoSlow(c, i.get(43)));
      let d = 0,
        h = 0,
        u = 0,
        g = 0;
      for (let e = 0, t = l.length; e < t; e++) {
        const t = l[e],
          i = t.originalLineStart,
          n = t.originalLineEnd,
          o = t.modifiedLineStart,
          s = t.modifiedLineEnd;
        (0 !== i && (0 === d || i < d) && (d = i), 0 !== n && (0 === h || n > h) && (h = n), 0 !== o && (0 === u || o < u) && (u = o), 0 !== s && (0 === g || s > g) && (g = s));
      }
      let p = document.createElement("div");
      p.className = "diff-review-row";
      let f = document.createElement("div");
      f.className = "diff-review-cell diff-review-summary";
      const m = h - d + 1,
        v = g - u + 1;
      (f.appendChild(document.createTextNode(`${a + 1}/${this._diffs.length}: @@ -${d},${m} +${u},${v} @@`)), p.setAttribute("data-line", String(u)));
      const _ = e => 0 === e ? bi.N("no_lines_changed", "no lines changed") : 1 === e ? bi.N("one_line_changed", "1 line changed") : bi.N("more_lines_changed", "{0} lines changed", e),
        b = _(m),
        w = _(v);
      (p.setAttribute("aria-label", bi.N({
        key: "header",
        comment: ["This is the ARIA label for a git diff header.", "A git diff header looks like this: @@ -154,12 +159,39 @@.", "That encodes that at original line 154 (which is now line 159), 12 lines were removed/changed with 39 lines.", "Variables 0 and 1 refer to the diff index out of total number of diffs.", "Variables 2 and 4 will be numbers (a line number).", 'Variables 3 and 5 will be "no lines changed", "1 line changed" or "X lines changed", localized separately.']
      }, "Difference {0} of {1}: original line {2}, {3}, modified line {4}, {5}", a + 1, this._diffs.length, d, b, u, w)), p.appendChild(f), p.setAttribute("role", "listitem"), c.appendChild(p));
      const y = i.get(58);
      let C = u;
      for (let a = 0, d = l.length; a < d; a++) {
        const d = l[a];
        (e._renderSection(c, d, C, y, this._width, t, n, s, i, o, r, this._modeService.languageIdCodec), 0 !== d.modifiedLineStart && (C = d.modifiedLineEnd));
      }
      (Q.PO(this._content.domNode), this._content.domNode.appendChild(c), this.scrollbar.scanDomNode());
    }
    static _renderSection(t, i, n, o, s, r, a, l, c, d, h, u) {
      const g = i.getType();
      let p = "diff-review-row",
        f = "";
      let m = null;
      switch (g) {
        case 1:
          ((p = "diff-review-row line-insert"), (f = " char-insert"), (m = Sn));
          break;
        case 2:
          ((p = "diff-review-row line-delete"), (f = " char-delete"), (m = kn));
      }
      const v = i.originalLineStart,
        _ = i.originalLineEnd,
        b = i.modifiedLineStart,
        w = i.modifiedLineEnd,
        y = Math.max(w - b, _ - v),
        C = r.get(129),
        x = C.glyphMarginWidth + C.lineNumbersWidth,
        S = c.get(129),
        k = 10 + S.glyphMarginWidth + S.lineNumbersWidth;
      for (let i = 0; i <= y; i++) {
        const _ = 0 === v ? 0 : v + i,
          w = 0 === b ? 0 : b + i,
          y = document.createElement("div");
        ((y.style.minWidth = s + "px"), (y.className = p), y.setAttribute("role", "listitem"), 0 !== w && (n = w), y.setAttribute("data-line", String(n)));
        let C = document.createElement("div");
        ((C.className = "diff-review-cell"), (C.style.height = `${o}px`), y.appendChild(C));
        const S = document.createElement("span");
        ((S.style.width = x + "px"), (S.style.minWidth = x + "px"), (S.className = "diff-review-line-number" + f), 0 !== _ ? S.appendChild(document.createTextNode(String(_))) : (S.innerText = " "), C.appendChild(S));
        const L = document.createElement("span");
        ((L.style.width = k + "px"), (L.style.minWidth = k + "px"), (L.style.paddingRight = "10px"), (L.className = "diff-review-line-number" + f), 0 !== w ? L.appendChild(document.createTextNode(String(w))) : (L.innerText = " "), C.appendChild(L));
        const N = document.createElement("span");
        if (((N.className = "diff-review-spacer"), m)) {
          const e = document.createElement("span");
          ((e.className = mn.kS.asClassName(m)), (e.innerText = "  "), N.appendChild(e));
        } else N.innerText = "  ";
        let D;
        if ((C.appendChild(N), 0 !== w)) {
          let t = this._renderLine(d, c, h.tabSize, w, u);
          (e._ttPolicy && (t = e._ttPolicy.createHTML(t)), C.insertAdjacentHTML("beforeend", t), (D = d.getLineContent(w)));
        } else {
          let t = this._renderLine(a, r, l.tabSize, _, u);
          (e._ttPolicy && (t = e._ttPolicy.createHTML(t)), C.insertAdjacentHTML("beforeend", t), (D = a.getLineContent(_)));
        }
        0 === D.length && (D = bi.N("blankLine", "blank"));
        let I = "";
        switch (g) {
          case 0:
            I = _ === w ? bi.N({
              key: "unchangedLine",
              comment: ["The placeholders are contents of the line and should not be translated."]
            }, "{0} unchanged line {1}", D, _) : bi.N("equalLine", "{0} original line {1} modified line {2}", D, _, w);
            break;
          case 1:
            I = bi.N("insertLine", "+ {0} modified line {1}", D, w);
            break;
          case 2:
            I = bi.N("deleteLine", "- {0} original line {1}", D, _);
        }
        (y.setAttribute("aria-label", I), t.appendChild(y));
      }
    }
    static _renderLine(e, t, i, n, o) {
      const s = e.getLineContent(n),
        r = t.get(43),
        a = Ot.A.createEmpty(s, o),
        l = Rt.wA.isBasicASCII(s, e.mightContainNonBasicASCII()),
        c = Rt.wA.containsRTL(s, l, e.mightContainRTL());
      return (0, Pt.tF)(new Pt.IJ(r.isMonospace && !t.get(29), r.canUseHalfwidthRightwardsArrow, s, !1, l, c, 0, a, [], i, 0, r.spaceWidth, r.middotWidth, r.wsmiddotWidth, t.get(104), t.get(87), t.get(82), t.get(44) !== B.n0.OFF, null)).html;
    }
  };
  ((Nn._ttPolicy = null === (nn = window.trustedTypes) || void 0 === nn ? void 0 : nn.createPolicy("diffReview", {
    createHTML: e => e
  })), (Nn = bn([wn(1, Ce.h)], Nn)), (0, mn.Ic)((e, t) => {
    const i = e.getColor(pn.hw);
    i && t.addRule(`.monaco-diff-editor .diff-review-line-number { color: ${i}; }`);
    const n = e.getColor(fn._w);
    n && t.addRule(`.monaco-diff-editor .diff-review-shadow { box-shadow: ${n} 0 -6px 6px -6px inset; }`);
  }));
  class Dn extends gn.R6 {
    constructor() {
      super({
        id: "editor.action.diffReview.next",
        label: bi.N("editor.action.diffReview.next", "Go to Next Difference"),
        alias: "Go to Next Difference",
        precondition: xi.Ao.has("isInDiffEditor"),
        kbOpts: {
          kbExpr: null,
          primary: 65,
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = En(e);
      i && i.diffReviewNext();
    }
  }
  class In extends gn.R6 {
    constructor() {
      super({
        id: "editor.action.diffReview.prev",
        label: bi.N("editor.action.diffReview.prev", "Go to Previous Difference"),
        alias: "Go to Previous Difference",
        precondition: xi.Ao.has("isInDiffEditor"),
        kbOpts: {
          kbExpr: null,
          primary: 1089,
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = En(e);
      i && i.diffReviewPrev();
    }
  }
  function En(e) {
    const t = e.get(Y.$),
      i = t.listDiffEditors(),
      n = t.getActiveCodeEditor();
    if (!n) return null;
    for (let e = 0, t = i.length; e < t; e++) {
      const t = i[e];
      if (t.getModifiedEditor().getId() === n.getId() || t.getOriginalEditor().getId() === n.getId()) return t;
    }
    return null;
  }
  ((0, gn.Qr)(Dn), (0, gn.Qr)(In));
  var Tn = i(50072),
    Mn = i(44174),
    An = i(92003),
    On = i(92550),
    Pn = i(72065),
    Rn = i(60972),
    Fn = i(5606),
    Bn = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  class Vn extends ue.JT {
    constructor(e, t, i, n, o, s) {
      (super(), (this._viewZoneId = e), (this._marginDomNode = t), (this.editor = i), (this.diff = n), (this._contextMenuService = o), (this._clipboardService = s), (this._visibility = !1), (this._marginDomNode.style.zIndex = "10"), (this._diffActions = document.createElement("div")), (this._diffActions.className = vn.lA.lightBulb.classNames + " lightbulb-glyph"), (this._diffActions.style.position = "absolute"));
      const r = i.getOption(58),
        a = i.getModel().getEOL();
      ((this._diffActions.style.right = "0px"), (this._diffActions.style.visibility = "hidden"), (this._diffActions.style.height = `${r}px`), (this._diffActions.style.lineHeight = `${r}px`), this._marginDomNode.appendChild(this._diffActions));
      const l = [],
        c = 0 === n.modifiedEndLineNumber;
      l.push(new un.aU("diff.clipboard.copyDeletedContent", c ? n.originalEndLineNumber > n.modifiedStartLineNumber ? bi.N("diff.clipboard.copyDeletedLinesContent.label", "Copy deleted lines") : bi.N("diff.clipboard.copyDeletedLinesContent.single.label", "Copy deleted line") : n.originalEndLineNumber > n.modifiedStartLineNumber ? bi.N("diff.clipboard.copyChangedLinesContent.label", "Copy changed lines") : bi.N("diff.clipboard.copyChangedLinesContent.single.label", "Copy changed line"), void 0, !0, () => Bn(this, void 0, void 0, function* () {
        const e = new U.e(n.originalStartLineNumber, 1, n.originalEndLineNumber + 1, 1),
          t = n.originalModel.getValueInRange(e);
        yield this._clipboardService.writeText(t);
      })));
      let d,
        h = 0;
      n.originalEndLineNumber > n.modifiedStartLineNumber && ((d = new un.aU("diff.clipboard.copyDeletedLineContent", c ? bi.N("diff.clipboard.copyDeletedLineContent.label", "Copy deleted line ({0})", n.originalStartLineNumber) : bi.N("diff.clipboard.copyChangedLineContent.label", "Copy changed line ({0})", n.originalStartLineNumber), void 0, !0, () => Bn(this, void 0, void 0, function* () {
        const e = n.originalModel.getLineContent(n.originalStartLineNumber + h);
        if ("" === e) {
          const e = n.originalModel.getEndOfLineSequence();
          yield this._clipboardService.writeText(0 === e ? "\n" : "\r\n");
        } else yield this._clipboardService.writeText(e);
      }))), l.push(d));
      i.getOption(80) || l.push(new un.aU("diff.inline.revertChange", bi.N("diff.inline.revertChange.label", "Revert this change"), void 0, !0, () => Bn(this, void 0, void 0, function* () {
        const e = new U.e(n.originalStartLineNumber, 1, n.originalEndLineNumber, n.originalModel.getLineMaxColumn(n.originalEndLineNumber)),
          t = n.originalModel.getValueInRange(e);
        if (0 === n.modifiedEndLineNumber) {
          const e = i.getModel().getLineMaxColumn(n.modifiedStartLineNumber);
          i.executeEdits("diffEditor", [{
            range: new U.e(n.modifiedStartLineNumber, e, n.modifiedStartLineNumber, e),
            text: a + t
          }]);
        } else {
          const e = i.getModel().getLineMaxColumn(n.modifiedEndLineNumber);
          i.executeEdits("diffEditor", [{
            range: new U.e(n.modifiedStartLineNumber, 1, n.modifiedEndLineNumber, e),
            text: t
          }]);
        }
      })));
      const u = (e, t) => {
        this._contextMenuService.showContextMenu({
          getAnchor: () => ({
            x: e,
            y: t
          }),
          getActions: () => (d && (d.label = c ? bi.N("diff.clipboard.copyDeletedLineContent.label", "Copy deleted line ({0})", n.originalStartLineNumber + h) : bi.N("diff.clipboard.copyChangedLineContent.label", "Copy changed line ({0})", n.originalStartLineNumber + h)), l),
          autoSelectFirstItem: !0
        });
      };
      (this._register(Q.mu(this._diffActions, "mousedown", e => {
        const {
          top: t,
          height: i
        } = Q.i(this._diffActions);
        let n = Math.floor(r / 3);
        (e.preventDefault(), u(e.posx, t + i + n));
      })), this._register(i.onMouseMove(e => {
        if (8 === e.target.type || 5 === e.target.type) {
          e.target.detail.viewZoneId === this._viewZoneId ? ((this.visibility = !0), (h = this._updateLightBulbPosition(this._marginDomNode, e.event.browserEvent.y, r))) : (this.visibility = !1);
        } else this.visibility = !1;
      })), this._register(i.onMouseDown(e => {
        if (e.event.rightButton && (8 === e.target.type || 5 === e.target.type)) {
          e.target.detail.viewZoneId === this._viewZoneId && (e.event.preventDefault(), (h = this._updateLightBulbPosition(this._marginDomNode, e.event.browserEvent.y, r)), u(e.event.posx, e.event.posy + r));
        }
      })));
    }
    get visibility() {
      return this._visibility;
    }
    set visibility(e) {
      this._visibility !== e && ((this._visibility = e), (this._diffActions.style.visibility = e ? "visible" : "hidden"));
    }
    _updateLightBulbPosition(e, t, i) {
      const {
          top: n
        } = Q.i(e),
        o = t - n,
        s = Math.floor(o / i),
        r = s * i;
      if (((this._diffActions.style.top = `${r}px`), this.diff.viewLineCounts)) {
        let e = 0;
        for (let t = 0; t < this.diff.viewLineCounts.length; t++) if (((e += this.diff.viewLineCounts[t]), s < e)) return t;
      }
      return s;
    }
  }
  var Wn,
    Hn = i(84972),
    zn = i(90535),
    jn = i(54534),
    Un = i(96542),
    $n = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Kn = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  class qn {
    constructor(e, t) {
      ((this._contextMenuService = e), (this._clipboardService = t), (this._zones = []), (this._inlineDiffMargins = []), (this._zonesMap = {}), (this._decorations = []));
    }
    getForeignViewZones(e) {
      return e.filter(e => !this._zonesMap[String(e.id)]);
    }
    clean(e) {
      (this._zones.length > 0 && e.changeViewZones(e => {
        for (const t of this._zones) e.removeZone(t);
      }), (this._zones = []), (this._zonesMap = {}), (this._decorations = e.deltaDecorations(this._decorations, [])));
    }
    apply(e, t, i, n) {
      const o = n ? cn.ZF.capture(e) : null;
      (e.changeViewZones(t => {
        var n;
        for (const e of this._zones) t.removeZone(e);
        for (const e of this._inlineDiffMargins) e.dispose();
        ((this._zones = []), (this._zonesMap = {}), (this._inlineDiffMargins = []));
        for (let o = 0, s = i.zones.length; o < s; o++) {
          const s = i.zones[o];
          s.suppressMouseDown = !0;
          const r = t.addZone(s);
          (this._zones.push(r), (this._zonesMap[String(r)] = !0), i.zones[o].diff && s.marginDomNode && ((s.suppressMouseDown = !1), 0 !== (null === (n = i.zones[o].diff) || void 0 === n ? void 0 : n.originalModel.getValueLength()) && this._inlineDiffMargins.push(new Vn(r, s.marginDomNode, e, i.zones[o].diff, this._contextMenuService, this._clipboardService))));
        }
      }), o && o.restore(e), (this._decorations = e.deltaDecorations(this._decorations, i.decorations)), t && t.setZones(i.overviewZones));
    }
  }
  let Zn = 0;
  const Gn = (0, _n.q5)("diff-insert", vn.lA.add, bi.N("diffInsertIcon", "Line decoration for inserts in the diff editor.")),
    Yn = (0, _n.q5)("diff-remove", vn.lA.remove, bi.N("diffRemoveIcon", "Line decoration for removals in the diff editor.")),
    Qn = null === (Wn = window.trustedTypes) || void 0 === Wn ? void 0 : Wn.createPolicy("diffEditorWidget", {
      createHTML: e => e
    });
  let Xn = class e extends ue.JT {
    constructor(t, i, n, o, s, r, a, l, c, d, h, u) {
      (super(), (this._editorProgressService = u), (this._onDidDispose = this._register(new W.Q5())), (this.onDidDispose = this._onDidDispose.event), (this._onDidUpdateDiff = this._register(new W.Q5())), (this.onDidUpdateDiff = this._onDidUpdateDiff.event), (this._onDidContentSizeChange = this._register(new W.Q5())), (this._lastOriginalWarning = null), (this._lastModifiedWarning = null), (this._editorWorkerService = s), (this._codeEditorService = l), (this._contextKeyService = this._register(r.createScoped(t))), (this._instantiationService = a.createChild(new Rn.y([xi.i6, this._contextKeyService]))), this._contextKeyService.createKey("isInDiffEditor", !0), (this._themeService = c), (this._notificationService = d), (this._id = ++Zn), (this._state = 0), (this._updatingDiffProgress = null), (this._domElement = t), (i = i || {}), (this._options = go(i, {
        enableSplitViewResizing: !0,
        renderSideBySide: !0,
        maxComputationTime: 5e3,
        maxFileSize: 50,
        ignoreTrimWhitespace: !0,
        renderIndicators: !0,
        originalEditable: !1,
        diffCodeLens: !1,
        renderOverviewRuler: !0,
        diffWordWrap: "inherit"
      })), void 0 !== i.isInEmbeddedEditor ? this._contextKeyService.createKey("isInEmbeddedDiffEditor", i.isInEmbeddedEditor) : this._contextKeyService.createKey("isInEmbeddedDiffEditor", !1), (this._updateDecorationsRunner = this._register(new Se.pY(() => this._updateDecorations(), 0))), (this._containerDomElement = document.createElement("div")), (this._containerDomElement.className = e._getClassName(this._themeService.getColorTheme(), this._options.renderSideBySide)), (this._containerDomElement.style.position = "relative"), (this._containerDomElement.style.height = "100%"), this._domElement.appendChild(this._containerDomElement), (this._overviewViewportDomElement = (0, rn.X)(document.createElement("div"))), this._overviewViewportDomElement.setClassName("diffViewport"), this._overviewViewportDomElement.setPosition("absolute"), (this._overviewDomElement = document.createElement("div")), (this._overviewDomElement.className = "diffOverview"), (this._overviewDomElement.style.position = "absolute"), this._overviewDomElement.appendChild(this._overviewViewportDomElement.domNode), this._register(Q.mu(this._overviewDomElement, "mousedown", e => {
        this._modifiedEditor.delegateVerticalScrollbarMouseDown(e);
      })), this._options.renderOverviewRuler && this._containerDomElement.appendChild(this._overviewDomElement), (this._originalDomNode = document.createElement("div")), (this._originalDomNode.className = "editor original"), (this._originalDomNode.style.position = "absolute"), (this._originalDomNode.style.height = "100%"), this._containerDomElement.appendChild(this._originalDomNode), (this._modifiedDomNode = document.createElement("div")), (this._modifiedDomNode.className = "editor modified"), (this._modifiedDomNode.style.position = "absolute"), (this._modifiedDomNode.style.height = "100%"), this._containerDomElement.appendChild(this._modifiedDomNode), (this._beginUpdateDecorationsTimeout = -1), (this._currentlyChangingViewZones = !1), (this._diffComputationToken = 0), (this._originalEditorState = new qn(h, o)), (this._modifiedEditorState = new qn(h, o)), (this._isVisible = !0), (this._isHandlingScrollEvent = !1), (this._elementSizeObserver = this._register(new jn.I(this._containerDomElement, i.dimension, () => this._onDidContainerSizeChanged()))), i.automaticLayout && this._elementSizeObserver.startObserving(), (this._diffComputationResult = null), (this._originalEditor = this._createLeftHandSideEditor(i, n.originalEditor || {})), (this._modifiedEditor = this._createRightHandSideEditor(i, n.modifiedEditor || {})), (this._originalOverviewRuler = null), (this._modifiedOverviewRuler = null), (this._reviewPane = a.createInstance(Nn, this)), this._containerDomElement.appendChild(this._reviewPane.domNode.domNode), this._containerDomElement.appendChild(this._reviewPane.shadow.domNode), this._containerDomElement.appendChild(this._reviewPane.actionBarContainer.domNode), this._options.renderSideBySide ? this._setStrategy(new oo(this._createDataSource(), this._options.enableSplitViewResizing)) : this._setStrategy(new ro(this._createDataSource(), this._options.enableSplitViewResizing)), this._register(c.onDidColorThemeChange(t => {
        (this._strategy && this._strategy.applyColors(t) && this._updateDecorationsRunner.schedule(), (this._containerDomElement.className = e._getClassName(this._themeService.getColorTheme(), this._options.renderSideBySide)));
      })));
      const g = gn.Uc.getDiffEditorContributions();
      for (const e of g) try {
        this._register(a.createInstance(e.ctor, this));
      } catch (e) {
        (0, ke.dL)(e);
      }
      this._codeEditorService.addDiffEditor(this);
    }
    _setState(e) {
      this._state !== e && ((this._state = e), this._updatingDiffProgress && (this._updatingDiffProgress.done(), (this._updatingDiffProgress = null)), 1 === this._state && (this._updatingDiffProgress = this._editorProgressService.show(!0, 1e3)));
    }
    diffReviewNext() {
      this._reviewPane.next();
    }
    diffReviewPrev() {
      this._reviewPane.prev();
    }
    static _getClassName(e, t) {
      let i = "monaco-diff-editor monaco-editor-background ";
      return (t && (i += "side-by-side "), (i += (0, mn.m6)(e.type)), i);
    }
    _recreateOverviewRulers() {
      this._options.renderOverviewRuler && (this._originalOverviewRuler && (this._overviewDomElement.removeChild(this._originalOverviewRuler.getDomNode()), this._originalOverviewRuler.dispose()), this._originalEditor.hasModel() && ((this._originalOverviewRuler = this._originalEditor.createOverviewRuler("original diffOverviewRuler")), this._overviewDomElement.appendChild(this._originalOverviewRuler.getDomNode())), this._modifiedOverviewRuler && (this._overviewDomElement.removeChild(this._modifiedOverviewRuler.getDomNode()), this._modifiedOverviewRuler.dispose()), this._modifiedEditor.hasModel() && ((this._modifiedOverviewRuler = this._modifiedEditor.createOverviewRuler("modified diffOverviewRuler")), this._overviewDomElement.appendChild(this._modifiedOverviewRuler.getDomNode())), this._layoutOverviewRulers());
    }
    _createLeftHandSideEditor(t, i) {
      const n = this._createInnerEditor(this._instantiationService, this._originalDomNode, this._adjustOptionsForLeftHandSide(t), i);
      (this._register(n.onDidScrollChange(e => {
        this._isHandlingScrollEvent || ((e.scrollTopChanged || e.scrollLeftChanged || e.scrollHeightChanged) && ((this._isHandlingScrollEvent = !0), this._modifiedEditor.setScrollPosition({
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        }), (this._isHandlingScrollEvent = !1), this._layoutOverviewViewport()));
      })), this._register(n.onDidChangeViewZones(() => {
        this._onViewZonesChanged();
      })), this._register(n.onDidChangeConfiguration(e => {
        n.getModel() && (e.hasChanged(43) && this._updateDecorationsRunner.schedule(), e.hasChanged(130) && (this._updateDecorationsRunner.cancel(), this._updateDecorations()));
      })), this._register(n.onDidChangeHiddenAreas(() => {
        (this._updateDecorationsRunner.cancel(), this._updateDecorations());
      })), this._register(n.onDidChangeModelContent(() => {
        this._isVisible && this._beginUpdateDecorationsSoon();
      })));
      const o = this._contextKeyService.createKey("isInDiffLeftEditor", n.hasWidgetFocus());
      return (this._register(n.onDidFocusEditorWidget(() => o.set(!0))), this._register(n.onDidBlurEditorWidget(() => o.set(!1))), this._register(n.onDidContentSizeChange(t => {
        const i = this._originalEditor.getContentWidth() + this._modifiedEditor.getContentWidth() + e.ONE_OVERVIEW_WIDTH,
          n = Math.max(this._modifiedEditor.getContentHeight(), this._originalEditor.getContentHeight());
        this._onDidContentSizeChange.fire({
          contentHeight: n,
          contentWidth: i,
          contentHeightChanged: t.contentHeightChanged,
          contentWidthChanged: t.contentWidthChanged
        });
      })), n);
    }
    _createRightHandSideEditor(t, i) {
      const n = this._createInnerEditor(this._instantiationService, this._modifiedDomNode, this._adjustOptionsForRightHandSide(t), i);
      (this._register(n.onDidScrollChange(e => {
        this._isHandlingScrollEvent || ((e.scrollTopChanged || e.scrollLeftChanged || e.scrollHeightChanged) && ((this._isHandlingScrollEvent = !0), this._originalEditor.setScrollPosition({
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        }), (this._isHandlingScrollEvent = !1), this._layoutOverviewViewport()));
      })), this._register(n.onDidChangeViewZones(() => {
        this._onViewZonesChanged();
      })), this._register(n.onDidChangeConfiguration(e => {
        n.getModel() && (e.hasChanged(43) && this._updateDecorationsRunner.schedule(), e.hasChanged(130) && (this._updateDecorationsRunner.cancel(), this._updateDecorations()));
      })), this._register(n.onDidChangeHiddenAreas(() => {
        (this._updateDecorationsRunner.cancel(), this._updateDecorations());
      })), this._register(n.onDidChangeModelContent(() => {
        this._isVisible && this._beginUpdateDecorationsSoon();
      })), this._register(n.onDidChangeModelOptions(e => {
        e.tabSize && this._updateDecorationsRunner.schedule();
      })));
      const o = this._contextKeyService.createKey("isInDiffRightEditor", n.hasWidgetFocus());
      return (this._register(n.onDidFocusEditorWidget(() => o.set(!0))), this._register(n.onDidBlurEditorWidget(() => o.set(!1))), this._register(n.onDidContentSizeChange(t => {
        const i = this._originalEditor.getContentWidth() + this._modifiedEditor.getContentWidth() + e.ONE_OVERVIEW_WIDTH,
          n = Math.max(this._modifiedEditor.getContentHeight(), this._originalEditor.getContentHeight());
        this._onDidContentSizeChange.fire({
          contentHeight: n,
          contentWidth: i,
          contentHeightChanged: t.contentHeightChanged,
          contentWidthChanged: t.contentWidthChanged
        });
      })), n);
    }
    _createInnerEditor(e, t, i, n) {
      return e.createInstance(sn.Gm, t, i, n);
    }
    dispose() {
      (this._codeEditorService.removeDiffEditor(this), -1 !== this._beginUpdateDecorationsTimeout && (window.clearTimeout(this._beginUpdateDecorationsTimeout), (this._beginUpdateDecorationsTimeout = -1)), this._cleanViewZonesAndDecorations(), this._originalOverviewRuler && (this._overviewDomElement.removeChild(this._originalOverviewRuler.getDomNode()), this._originalOverviewRuler.dispose()), this._modifiedOverviewRuler && (this._overviewDomElement.removeChild(this._modifiedOverviewRuler.getDomNode()), this._modifiedOverviewRuler.dispose()), this._overviewDomElement.removeChild(this._overviewViewportDomElement.domNode), this._options.renderOverviewRuler && this._containerDomElement.removeChild(this._overviewDomElement), this._containerDomElement.removeChild(this._originalDomNode), this._originalEditor.dispose(), this._containerDomElement.removeChild(this._modifiedDomNode), this._modifiedEditor.dispose(), this._strategy.dispose(), this._containerDomElement.removeChild(this._reviewPane.domNode.domNode), this._containerDomElement.removeChild(this._reviewPane.shadow.domNode), this._containerDomElement.removeChild(this._reviewPane.actionBarContainer.domNode), this._reviewPane.dispose(), this._domElement.removeChild(this._containerDomElement), this._onDidDispose.fire(), super.dispose());
    }
    getId() {
      return this.getEditorType() + ":" + this._id;
    }
    getEditorType() {
      return ve.g.IDiffEditor;
    }
    getLineChanges() {
      return this._diffComputationResult ? this._diffComputationResult.changes : null;
    }
    getOriginalEditor() {
      return this._originalEditor;
    }
    getModifiedEditor() {
      return this._modifiedEditor;
    }
    updateOptions(t) {
      const i = go(t, this._options),
        n = ((o = this._options), (s = i), {
          enableSplitViewResizing: o.enableSplitViewResizing !== s.enableSplitViewResizing,
          renderSideBySide: o.renderSideBySide !== s.renderSideBySide,
          maxComputationTime: o.maxComputationTime !== s.maxComputationTime,
          maxFileSize: o.maxFileSize !== s.maxFileSize,
          ignoreTrimWhitespace: o.ignoreTrimWhitespace !== s.ignoreTrimWhitespace,
          renderIndicators: o.renderIndicators !== s.renderIndicators,
          originalEditable: o.originalEditable !== s.originalEditable,
          diffCodeLens: o.diffCodeLens !== s.diffCodeLens,
          renderOverviewRuler: o.renderOverviewRuler !== s.renderOverviewRuler,
          diffWordWrap: o.diffWordWrap !== s.diffWordWrap
        });
      var o, s;
      this._options = i;
      const r = n.ignoreTrimWhitespace || n.renderIndicators,
        a = this._isVisible && (n.maxComputationTime || n.maxFileSize);
      (r ? this._beginUpdateDecorations() : a && this._beginUpdateDecorationsSoon(), this._modifiedEditor.updateOptions(this._adjustOptionsForRightHandSide(t)), this._originalEditor.updateOptions(this._adjustOptionsForLeftHandSide(t)), this._strategy.setEnableSplitViewResizing(this._options.enableSplitViewResizing), n.renderSideBySide && (this._options.renderSideBySide ? this._setStrategy(new oo(this._createDataSource(), this._options.enableSplitViewResizing)) : this._setStrategy(new ro(this._createDataSource(), this._options.enableSplitViewResizing)), (this._containerDomElement.className = e._getClassName(this._themeService.getColorTheme(), this._options.renderSideBySide))), n.renderOverviewRuler && (this._options.renderOverviewRuler ? this._containerDomElement.appendChild(this._overviewDomElement) : this._containerDomElement.removeChild(this._overviewDomElement)));
    }
    getModel() {
      return {
        original: this._originalEditor.getModel(),
        modified: this._modifiedEditor.getModel()
      };
    }
    setModel(e) {
      if (e && (!e.original || !e.modified)) throw new Error(e.original ? "DiffEditorWidget.setModel: Modified model is null" : "DiffEditorWidget.setModel: Original model is null");
      (this._cleanViewZonesAndDecorations(), this._originalEditor.setModel(e ? e.original : null), this._modifiedEditor.setModel(e ? e.modified : null), this._updateDecorationsRunner.cancel(), e && (this._originalEditor.setScrollTop(0), this._modifiedEditor.setScrollTop(0)), (this._diffComputationResult = null), this._diffComputationToken++, this._setState(0), e && (this._recreateOverviewRulers(), this._beginUpdateDecorations()), this._layoutOverviewViewport());
    }
    getDomNode() {
      return this._domElement;
    }
    getVisibleColumnFromPosition(e) {
      return this._modifiedEditor.getVisibleColumnFromPosition(e);
    }
    getPosition() {
      return this._modifiedEditor.getPosition();
    }
    setPosition(e) {
      this._modifiedEditor.setPosition(e);
    }
    revealLine(e, t = 0) {
      this._modifiedEditor.revealLine(e, t);
    }
    revealLineInCenter(e, t = 0) {
      this._modifiedEditor.revealLineInCenter(e, t);
    }
    revealLineInCenterIfOutsideViewport(e, t = 0) {
      this._modifiedEditor.revealLineInCenterIfOutsideViewport(e, t);
    }
    revealLineNearTop(e, t = 0) {
      this._modifiedEditor.revealLineNearTop(e, t);
    }
    revealPosition(e, t = 0) {
      this._modifiedEditor.revealPosition(e, t);
    }
    revealPositionInCenter(e, t = 0) {
      this._modifiedEditor.revealPositionInCenter(e, t);
    }
    revealPositionInCenterIfOutsideViewport(e, t = 0) {
      this._modifiedEditor.revealPositionInCenterIfOutsideViewport(e, t);
    }
    revealPositionNearTop(e, t = 0) {
      this._modifiedEditor.revealPositionNearTop(e, t);
    }
    getSelection() {
      return this._modifiedEditor.getSelection();
    }
    getSelections() {
      return this._modifiedEditor.getSelections();
    }
    setSelection(e) {
      this._modifiedEditor.setSelection(e);
    }
    setSelections(e) {
      this._modifiedEditor.setSelections(e);
    }
    revealLines(e, t, i = 0) {
      this._modifiedEditor.revealLines(e, t, i);
    }
    revealLinesInCenter(e, t, i = 0) {
      this._modifiedEditor.revealLinesInCenter(e, t, i);
    }
    revealLinesInCenterIfOutsideViewport(e, t, i = 0) {
      this._modifiedEditor.revealLinesInCenterIfOutsideViewport(e, t, i);
    }
    revealLinesNearTop(e, t, i = 0) {
      this._modifiedEditor.revealLinesNearTop(e, t, i);
    }
    revealRange(e, t = 0, i = !1, n = !0) {
      this._modifiedEditor.revealRange(e, t, i, n);
    }
    revealRangeInCenter(e, t = 0) {
      this._modifiedEditor.revealRangeInCenter(e, t);
    }
    revealRangeInCenterIfOutsideViewport(e, t = 0) {
      this._modifiedEditor.revealRangeInCenterIfOutsideViewport(e, t);
    }
    revealRangeNearTop(e, t = 0) {
      this._modifiedEditor.revealRangeNearTop(e, t);
    }
    revealRangeNearTopIfOutsideViewport(e, t = 0) {
      this._modifiedEditor.revealRangeNearTopIfOutsideViewport(e, t);
    }
    revealRangeAtTop(e, t = 0) {
      this._modifiedEditor.revealRangeAtTop(e, t);
    }
    getSupportedActions() {
      return this._modifiedEditor.getSupportedActions();
    }
    saveViewState() {
      return {
        original: this._originalEditor.saveViewState(),
        modified: this._modifiedEditor.saveViewState()
      };
    }
    restoreViewState(e) {
      if (e && e.original && e.modified) {
        const t = e;
        (this._originalEditor.restoreViewState(t.original), this._modifiedEditor.restoreViewState(t.modified));
      }
    }
    layout(e) {
      this._elementSizeObserver.observe(e);
    }
    focus() {
      this._modifiedEditor.focus();
    }
    hasTextFocus() {
      return (this._originalEditor.hasTextFocus() || this._modifiedEditor.hasTextFocus());
    }
    trigger(e, t, i) {
      this._modifiedEditor.trigger(e, t, i);
    }
    changeDecorations(e) {
      return this._modifiedEditor.changeDecorations(e);
    }
    _onDidContainerSizeChanged() {
      this._doLayout();
    }
    _getReviewHeight() {
      return this._reviewPane.isVisible() ? this._elementSizeObserver.getHeight() : 0;
    }
    _layoutOverviewRulers() {
      if (!this._options.renderOverviewRuler) return;
      if (!this._originalOverviewRuler || !this._modifiedOverviewRuler) return;
      const t = this._elementSizeObserver.getHeight(),
        i = this._getReviewHeight(),
        n = e.ENTIRE_DIFF_OVERVIEW_WIDTH - 2 * e.ONE_OVERVIEW_WIDTH;
      this._modifiedEditor.getLayoutInfo() && (this._originalOverviewRuler.setLayout({
        top: 0,
        width: e.ONE_OVERVIEW_WIDTH,
        right: n + e.ONE_OVERVIEW_WIDTH,
        height: t - i
      }), this._modifiedOverviewRuler.setLayout({
        top: 0,
        right: 0,
        width: e.ONE_OVERVIEW_WIDTH,
        height: t - i
      }));
    }
    _onViewZonesChanged() {
      this._currentlyChangingViewZones || this._updateDecorationsRunner.schedule();
    }
    _beginUpdateDecorationsSoon() {
      (-1 !== this._beginUpdateDecorationsTimeout && (window.clearTimeout(this._beginUpdateDecorationsTimeout), (this._beginUpdateDecorationsTimeout = -1)), (this._beginUpdateDecorationsTimeout = window.setTimeout(() => this._beginUpdateDecorations(), e.UPDATE_DIFF_DECORATIONS_DELAY)));
    }
    static _equals(e, t) {
      return (!e && !t) || (!(!e || !t) && e.toString() === t.toString());
    }
    _beginUpdateDecorations() {
      this._beginUpdateDecorationsTimeout = -1;
      const t = this._originalEditor.getModel(),
        i = this._modifiedEditor.getModel();
      if (!t || !i) return;
      this._diffComputationToken++;
      const n = this._diffComputationToken,
        o = 1024 * this._options.maxFileSize * 1024,
        s = e => {
          const t = e.getValueLength();
          return 0 === o || t <= o;
        };
      s(t) && s(i) ? (this._setState(1), this._editorWorkerService.computeDiff(t.uri, i.uri, this._options.ignoreTrimWhitespace, this._options.maxComputationTime).then(e => {
        n === this._diffComputationToken && t === this._originalEditor.getModel() && i === this._modifiedEditor.getModel() && (this._setState(2), (this._diffComputationResult = e), this._updateDecorationsRunner.schedule(), this._onDidUpdateDiff.fire());
      }, e => {
        n === this._diffComputationToken && t === this._originalEditor.getModel() && i === this._modifiedEditor.getModel() && (this._setState(2), (this._diffComputationResult = null), this._updateDecorationsRunner.schedule());
      })) : (e._equals(t.uri, this._lastOriginalWarning) && e._equals(i.uri, this._lastModifiedWarning)) || ((this._lastOriginalWarning = t.uri), (this._lastModifiedWarning = i.uri), this._notificationService.warn(bi.N("diff.tooLarge", "Cannot compare files because one file is too large.")));
    }
    _cleanViewZonesAndDecorations() {
      (this._originalEditorState.clean(this._originalEditor), this._modifiedEditorState.clean(this._modifiedEditor));
    }
    _updateDecorations() {
      if (!this._originalEditor.getModel() || !this._modifiedEditor.getModel()) return;
      const e = this._diffComputationResult ? this._diffComputationResult.changes : [],
        t = this._originalEditorState.getForeignViewZones(this._originalEditor.getWhitespaces()),
        i = this._modifiedEditorState.getForeignViewZones(this._modifiedEditor.getWhitespaces()),
        n = this._strategy.getEditorsDiffDecorations(e, this._options.ignoreTrimWhitespace, this._options.renderIndicators, t, i);
      try {
        ((this._currentlyChangingViewZones = !0), this._originalEditorState.apply(this._originalEditor, this._originalOverviewRuler, n.original, !1), this._modifiedEditorState.apply(this._modifiedEditor, this._modifiedOverviewRuler, n.modified, !0));
      } finally {
        this._currentlyChangingViewZones = !1;
      }
    }
    _adjustOptionsForSubEditor(e) {
      const t = Object.assign({}, e);
      return ((t.inDiffEditor = !0), (t.automaticLayout = !1), (t.scrollbar = Object.assign({}, t.scrollbar || {})), (t.scrollbar.vertical = "visible"), (t.folding = !1), (t.codeLens = this._options.diffCodeLens), (t.fixedOverflowWidgets = !0), (t.minimap = Object.assign({}, t.minimap || {})), (t.minimap.enabled = !1), t);
    }
    _adjustOptionsForLeftHandSide(e) {
      const t = this._adjustOptionsForSubEditor(e);
      return (this._options.renderSideBySide ? (t.wordWrapOverride1 = this._options.diffWordWrap) : (t.wordWrapOverride1 = "off"), e.originalAriaLabel && (t.ariaLabel = e.originalAriaLabel), (t.readOnly = !this._options.originalEditable), (t.extraEditorClassName = "original-in-monaco-diff-editor"), Object.assign(Object.assign({}, t), {
        dimension: {
          height: 0,
          width: 0
        }
      }));
    }
    _adjustOptionsForRightHandSide(t) {
      const i = this._adjustOptionsForSubEditor(t);
      return (t.modifiedAriaLabel && (i.ariaLabel = t.modifiedAriaLabel), (i.wordWrapOverride1 = this._options.diffWordWrap), (i.revealHorizontalRightPadding = B.BH.revealHorizontalRightPadding.defaultValue + e.ENTIRE_DIFF_OVERVIEW_WIDTH), (i.scrollbar.verticalHasArrows = !1), (i.extraEditorClassName = "modified-in-monaco-diff-editor"), Object.assign(Object.assign({}, i), {
        dimension: {
          height: 0,
          width: 0
        }
      }));
    }
    doLayout() {
      (this._elementSizeObserver.observe(), this._doLayout());
    }
    _doLayout() {
      const t = this._elementSizeObserver.getWidth(),
        i = this._elementSizeObserver.getHeight(),
        n = this._getReviewHeight(),
        o = this._strategy.layout();
      ((this._originalDomNode.style.width = o + "px"), (this._originalDomNode.style.left = "0px"), (this._modifiedDomNode.style.width = t - o + "px"), (this._modifiedDomNode.style.left = o + "px"), (this._overviewDomElement.style.top = "0px"), (this._overviewDomElement.style.height = i - n + "px"), (this._overviewDomElement.style.width = e.ENTIRE_DIFF_OVERVIEW_WIDTH + "px"), (this._overviewDomElement.style.left = t - e.ENTIRE_DIFF_OVERVIEW_WIDTH + "px"), this._overviewViewportDomElement.setWidth(e.ENTIRE_DIFF_OVERVIEW_WIDTH), this._overviewViewportDomElement.setHeight(30), this._originalEditor.layout({
        width: o,
        height: i - n
      }), this._modifiedEditor.layout({
        width: t - o - (this._options.renderOverviewRuler ? e.ENTIRE_DIFF_OVERVIEW_WIDTH : 0),
        height: i - n
      }), (this._originalOverviewRuler || this._modifiedOverviewRuler) && this._layoutOverviewRulers(), this._reviewPane.layout(i - n, t, n), this._layoutOverviewViewport());
    }
    _layoutOverviewViewport() {
      const e = this._computeOverviewViewport();
      e ? (this._overviewViewportDomElement.setTop(e.top), this._overviewViewportDomElement.setHeight(e.height)) : (this._overviewViewportDomElement.setTop(0), this._overviewViewportDomElement.setHeight(0));
    }
    _computeOverviewViewport() {
      const e = this._modifiedEditor.getLayoutInfo();
      if (!e) return null;
      const t = this._modifiedEditor.getScrollTop(),
        i = this._modifiedEditor.getScrollHeight(),
        n = Math.max(0, e.height),
        o = Math.max(0, n - 0),
        s = i > 0 ? o / i : 0;
      return {
        height: Math.max(0, Math.floor(e.height * s)),
        top: Math.floor(t * s)
      };
    }
    _createDataSource() {
      return {
        getWidth: () => this._elementSizeObserver.getWidth(),
        getHeight: () => this._elementSizeObserver.getHeight() - this._getReviewHeight(),
        getOptions: () => ({
          renderOverviewRuler: this._options.renderOverviewRuler
        }),
        getContainerDomNode: () => this._containerDomElement,
        relayoutEditors: () => {
          this._doLayout();
        },
        getOriginalEditor: () => this._originalEditor,
        getModifiedEditor: () => this._modifiedEditor
      };
    }
    _setStrategy(e) {
      (this._strategy && this._strategy.dispose(), (this._strategy = e), e.applyColors(this._themeService.getColorTheme()), this._diffComputationResult && this._updateDecorations(), this._doLayout());
    }
    _getLineChangeAtOrBeforeLineNumber(e, t) {
      const i = this._diffComputationResult ? this._diffComputationResult.changes : [];
      if (0 === i.length || e < t(i[0])) return null;
      let n = 0,
        o = i.length - 1;
      for (; n < o;) {
        const s = Math.floor((n + o) / 2),
          r = t(i[s]),
          a = s + 1 <= o ? t(i[s + 1]) : 1073741824;
        e < r ? (o = s - 1) : e >= a ? (n = s + 1) : ((n = s), (o = s));
      }
      return i[n];
    }
    _getEquivalentLineForOriginalLineNumber(e) {
      const t = this._getLineChangeAtOrBeforeLineNumber(e, e => e.originalStartLineNumber);
      if (!t) return e;
      const i = t.originalStartLineNumber + (t.originalEndLineNumber > 0 ? -1 : 0),
        n = t.modifiedStartLineNumber + (t.modifiedEndLineNumber > 0 ? -1 : 0),
        o = t.originalEndLineNumber > 0 ? t.originalEndLineNumber - t.originalStartLineNumber + 1 : 0,
        s = t.modifiedEndLineNumber > 0 ? t.modifiedEndLineNumber - t.modifiedStartLineNumber + 1 : 0,
        r = e - i;
      return r <= o ? n + Math.min(r, s) : n + s - o + r;
    }
    _getEquivalentLineForModifiedLineNumber(e) {
      const t = this._getLineChangeAtOrBeforeLineNumber(e, e => e.modifiedStartLineNumber);
      if (!t) return e;
      const i = t.originalStartLineNumber + (t.originalEndLineNumber > 0 ? -1 : 0),
        n = t.modifiedStartLineNumber + (t.modifiedEndLineNumber > 0 ? -1 : 0),
        o = t.originalEndLineNumber > 0 ? t.originalEndLineNumber - t.originalStartLineNumber + 1 : 0,
        s = t.modifiedEndLineNumber > 0 ? t.modifiedEndLineNumber - t.modifiedStartLineNumber + 1 : 0,
        r = e - n;
      return r <= s ? i + Math.min(r, o) : i + o - s + r;
    }
    getDiffLineInformationForOriginal(e) {
      return this._diffComputationResult ? {
        equivalentLineNumber: this._getEquivalentLineForOriginalLineNumber(e)
      } : null;
    }
    getDiffLineInformationForModified(e) {
      return this._diffComputationResult ? {
        equivalentLineNumber: this._getEquivalentLineForModifiedLineNumber(e)
      } : null;
    }
  };
  ((Xn.ONE_OVERVIEW_WIDTH = 15), (Xn.ENTIRE_DIFF_OVERVIEW_WIDTH = 30), (Xn.UPDATE_DIFF_DECORATIONS_DELAY = 200), (Xn = $n([Kn(3, Hn.p), Kn(4, ye.p), Kn(5, xi.i6), Kn(6, Pn.TG), Kn(7, Y.$), Kn(8, mn.XE), Kn(9, Ai.lT), Kn(10, Fn.i), Kn(11, zn.e)], Xn)));
  class Jn extends ue.JT {
    constructor(e) {
      (super(), (this._dataSource = e), (this._insertColor = null), (this._removeColor = null));
    }
    applyColors(e) {
      const t = (e.getColor(fn.yp) || fn.Cz).transparent(2),
        i = (e.getColor(fn.P4) || fn.ke).transparent(2),
        n = !t.equals(this._insertColor) || !i.equals(this._removeColor);
      return ((this._insertColor = t), (this._removeColor = i), n);
    }
    getEditorsDiffDecorations(e, t, i, n, o) {
      ((o = o.sort((e, t) => e.afterLineNumber - t.afterLineNumber)), (n = n.sort((e, t) => e.afterLineNumber - t.afterLineNumber)));
      const s = this._getViewZones(e, n, o, i),
        r = this._getOriginalEditorDecorations(e, t, i),
        a = this._getModifiedEditorDecorations(e, t, i);
      return {
        original: {
          decorations: r.decorations,
          overviewZones: r.overviewZones,
          zones: s.original
        },
        modified: {
          decorations: a.decorations,
          overviewZones: a.overviewZones,
          zones: s.modified
        }
      };
    }
  }
  class eo {
    constructor(e) {
      ((this._source = e), (this._index = -1), (this.current = null), this.advance());
    }
    advance() {
      (this._index++, this._index < this._source.length ? (this.current = this._source[this._index]) : (this.current = null));
    }
  }
  class to {
    constructor(e, t, i, n, o) {
      ((this._lineChanges = e), (this._originalForeignVZ = t), (this._modifiedForeignVZ = i), (this._originalEditor = n), (this._modifiedEditor = o));
    }
    static _getViewLineCount(e, t, i) {
      const n = e.getModel(),
        o = e._getViewModel();
      if (n && o) {
        const e = uo(n, o, t, i);
        return e.endLineNumber - e.startLineNumber + 1;
      }
      return i - t + 1;
    }
    getViewZones() {
      const e = this._originalEditor.getOption(58),
        t = this._modifiedEditor.getOption(58),
        i = -1 !== this._originalEditor.getOption(130).wrappingColumn,
        n = -1 !== this._modifiedEditor.getOption(130).wrappingColumn,
        o = i || n,
        s = this._originalEditor.getModel(),
        r = this._originalEditor._getViewModel().coordinatesConverter,
        a = this._modifiedEditor._getViewModel().coordinatesConverter,
        l = [],
        c = [];
      let d = 0,
        h = 0,
        u = 0,
        g = 0,
        p = 0,
        f = 0;
      const m = (e, t) => e.afterLineNumber - t.afterLineNumber,
        v = (e, t) => {
          if (null === t.domNode && e.length > 0) {
            const i = e[e.length - 1];
            if (i.afterLineNumber === t.afterLineNumber && null === i.domNode) return void (i.heightInLines += t.heightInLines);
          }
          e.push(t);
        },
        _ = new eo(this._modifiedForeignVZ),
        b = new eo(this._originalForeignVZ);
      let w = 1,
        y = 1;
      for (let i = 0, n = this._lineChanges.length; i <= n; i++) {
        const C = i < n ? this._lineChanges[i] : null;
        null !== C ? ((u = C.originalStartLineNumber + (C.originalEndLineNumber > 0 ? -1 : 0)), (g = C.modifiedStartLineNumber + (C.modifiedEndLineNumber > 0 ? -1 : 0)), (h = C.originalEndLineNumber > 0 ? to._getViewLineCount(this._originalEditor, C.originalStartLineNumber, C.originalEndLineNumber) : 0), (d = C.modifiedEndLineNumber > 0 ? to._getViewLineCount(this._modifiedEditor, C.modifiedStartLineNumber, C.modifiedEndLineNumber) : 0), (p = Math.max(C.originalStartLineNumber, C.originalEndLineNumber)), (f = Math.max(C.modifiedStartLineNumber, C.modifiedEndLineNumber))) : ((u += 1e7 + h), (g += 1e7 + d), (p = u), (f = g));
        let x = [],
          S = [];
        if (o) {
          let e;
          e = C ? C.originalEndLineNumber > 0 ? C.originalStartLineNumber - w : C.modifiedStartLineNumber - y : s.getLineCount() - w;
          for (let t = 0; t < e; t++) {
            const e = w + t,
              i = y + t,
              n = r.getModelLineViewLineCount(e),
              o = a.getModelLineViewLineCount(i);
            n < o ? x.push({
              afterLineNumber: e,
              heightInLines: o - n,
              domNode: null,
              marginDomNode: null
            }) : n > o && S.push({
              afterLineNumber: i,
              heightInLines: n - o,
              domNode: null,
              marginDomNode: null
            });
          }
          C && ((w = (C.originalEndLineNumber > 0 ? C.originalEndLineNumber : C.originalStartLineNumber) + 1), (y = (C.modifiedEndLineNumber > 0 ? C.modifiedEndLineNumber : C.modifiedStartLineNumber) + 1));
        }
        for (; _.current && _.current.afterLineNumber <= f;) {
          let e;
          e = _.current.afterLineNumber <= g ? u - g + _.current.afterLineNumber : p;
          let i = null;
          (C && C.modifiedStartLineNumber <= _.current.afterLineNumber && _.current.afterLineNumber <= C.modifiedEndLineNumber && (i = this._createOriginalMarginDomNodeForModifiedForeignViewZoneInAddedRegion()), x.push({
            afterLineNumber: e,
            heightInLines: _.current.height / t,
            domNode: null,
            marginDomNode: i
          }), _.advance());
        }
        for (; b.current && b.current.afterLineNumber <= p;) {
          let t;
          ((t = b.current.afterLineNumber <= u ? g - u + b.current.afterLineNumber : f), S.push({
            afterLineNumber: t,
            heightInLines: b.current.height / e,
            domNode: null
          }), b.advance());
        }
        if (null !== C && lo(C)) {
          const e = this._produceOriginalFromDiff(C, h, d);
          e && x.push(e);
        }
        if (null !== C && co(C)) {
          const e = this._produceModifiedFromDiff(C, h, d);
          e && S.push(e);
        }
        let k = 0,
          L = 0;
        for (x = x.sort(m), S = S.sort(m); k < x.length && L < S.length;) {
          const e = x[k],
            t = S[L],
            i = e.afterLineNumber - u,
            n = t.afterLineNumber - g;
          i < n ? (v(l, e), k++) : n < i ? (v(c, t), L++) : e.shouldNotShrink ? (v(l, e), k++) : t.shouldNotShrink ? (v(c, t), L++) : e.heightInLines >= t.heightInLines ? ((e.heightInLines -= t.heightInLines), L++) : ((t.heightInLines -= e.heightInLines), k++);
        }
        for (; k < x.length;) (v(l, x[k]), k++);
        for (; L < S.length;) (v(c, S[L]), L++);
      }
      return {
        original: to._ensureDomNodes(l),
        modified: to._ensureDomNodes(c)
      };
    }
    static _ensureDomNodes(e) {
      return e.map(e => (e.domNode || (e.domNode = ho()), e));
    }
  }
  function io(e, t, i, n, o) {
    return {
      range: new U.e(e, t, i, n),
      options: o
    };
  }
  const no = {
    charDelete: Mn.qx.register({
      description: "diff-editor-char-delete",
      className: "char-delete"
    }),
    charDeleteWholeLine: Mn.qx.register({
      description: "diff-editor-char-delete-whole-line",
      className: "char-delete",
      isWholeLine: !0
    }),
    charInsert: Mn.qx.register({
      description: "diff-editor-char-insert",
      className: "char-insert"
    }),
    charInsertWholeLine: Mn.qx.register({
      description: "diff-editor-char-insert-whole-line",
      className: "char-insert",
      isWholeLine: !0
    }),
    lineInsert: Mn.qx.register({
      description: "diff-editor-line-insert",
      className: "line-insert",
      marginClassName: "line-insert",
      isWholeLine: !0
    }),
    lineInsertWithSign: Mn.qx.register({
      description: "diff-editor-line-insert-with-sign",
      className: "line-insert",
      linesDecorationsClassName: "insert-sign " + mn.kS.asClassName(Gn),
      marginClassName: "line-insert",
      isWholeLine: !0
    }),
    lineDelete: Mn.qx.register({
      description: "diff-editor-line-delete",
      className: "line-delete",
      marginClassName: "line-delete",
      isWholeLine: !0
    }),
    lineDeleteWithSign: Mn.qx.register({
      description: "diff-editor-line-delete-with-sign",
      className: "line-delete",
      linesDecorationsClassName: "delete-sign " + mn.kS.asClassName(Yn),
      marginClassName: "line-delete",
      isWholeLine: !0
    }),
    lineDeleteMargin: Mn.qx.register({
      description: "diff-editor-line-delete-margin",
      marginClassName: "line-delete"
    })
  };
  class oo extends Jn {
    constructor(e, t) {
      (super(e), (this._disableSash = !1 === t), (this._sashRatio = null), (this._sashPosition = null), (this._startSashPosition = null), (this._sash = this._register(new an.g(this._dataSource.getContainerDomNode(), this, {
        orientation: 0
      }))), this._disableSash && (this._sash.state = 0), this._sash.onDidStart(() => this._onSashDragStart()), this._sash.onDidChange(e => this._onSashDrag(e)), this._sash.onDidEnd(() => this._onSashDragEnd()), this._sash.onDidReset(() => this._onSashReset()));
    }
    setEnableSplitViewResizing(e) {
      const t = !1 === e;
      this._disableSash !== t && ((this._disableSash = t), (this._sash.state = this._disableSash ? 0 : 3));
    }
    layout(e = this._sashRatio) {
      const t = this._dataSource.getWidth() - (this._dataSource.getOptions().renderOverviewRuler ? Xn.ENTIRE_DIFF_OVERVIEW_WIDTH : 0);
      let i = Math.floor((e || 0.5) * t);
      const n = Math.floor(0.5 * t);
      return ((i = this._disableSash ? n : i || n), t > 2 * oo.MINIMUM_EDITOR_WIDTH ? (i < oo.MINIMUM_EDITOR_WIDTH && (i = oo.MINIMUM_EDITOR_WIDTH), i > t - oo.MINIMUM_EDITOR_WIDTH && (i = t - oo.MINIMUM_EDITOR_WIDTH)) : (i = n), this._sashPosition !== i && ((this._sashPosition = i), this._sash.layout()), this._sashPosition);
    }
    _onSashDragStart() {
      this._startSashPosition = this._sashPosition;
    }
    _onSashDrag(e) {
      const t = this._dataSource.getWidth() - (this._dataSource.getOptions().renderOverviewRuler ? Xn.ENTIRE_DIFF_OVERVIEW_WIDTH : 0),
        i = this.layout((this._startSashPosition + (e.currentX - e.startX)) / t);
      ((this._sashRatio = i / t), this._dataSource.relayoutEditors());
    }
    _onSashDragEnd() {
      this._sash.layout();
    }
    _onSashReset() {
      ((this._sashRatio = 0.5), this._dataSource.relayoutEditors(), this._sash.layout());
    }
    getVerticalSashTop(e) {
      return 0;
    }
    getVerticalSashLeft(e) {
      return this._sashPosition;
    }
    getVerticalSashHeight(e) {
      return this._dataSource.getHeight();
    }
    _getViewZones(e, t, i) {
      const n = this._dataSource.getOriginalEditor(),
        o = this._dataSource.getModifiedEditor();
      return new so(e, t, i, n, o).getViewZones();
    }
    _getOriginalEditorDecorations(e, t, i) {
      const n = this._dataSource.getOriginalEditor(),
        o = String(this._removeColor),
        s = {
          decorations: [],
          overviewZones: []
        },
        r = n.getModel(),
        a = n._getViewModel();
      for (const n of e) if (co(n)) {
        (s.decorations.push({
          range: new U.e(n.originalStartLineNumber, 1, n.originalEndLineNumber, 1073741824),
          options: i ? no.lineDeleteWithSign : no.lineDelete
        }), (lo(n) && n.charChanges) || s.decorations.push(io(n.originalStartLineNumber, 1, n.originalEndLineNumber, 1073741824, no.charDeleteWholeLine)));
        const e = uo(r, a, n.originalStartLineNumber, n.originalEndLineNumber);
        if ((s.overviewZones.push(new An.EY(e.startLineNumber, e.endLineNumber, o)), n.charChanges)) for (const e of n.charChanges) if (co(e)) if (t) for (let t = e.originalStartLineNumber; t <= e.originalEndLineNumber; t++) {
          let i, n;
          ((i = t === e.originalStartLineNumber ? e.originalStartColumn : r.getLineFirstNonWhitespaceColumn(t)), (n = t === e.originalEndLineNumber ? e.originalEndColumn : r.getLineLastNonWhitespaceColumn(t)), s.decorations.push(io(t, i, t, n, no.charDelete)));
        } else s.decorations.push(io(e.originalStartLineNumber, e.originalStartColumn, e.originalEndLineNumber, e.originalEndColumn, no.charDelete));
      }
      return s;
    }
    _getModifiedEditorDecorations(e, t, i) {
      const n = this._dataSource.getModifiedEditor(),
        o = String(this._insertColor),
        s = {
          decorations: [],
          overviewZones: []
        },
        r = n.getModel(),
        a = n._getViewModel();
      for (const n of e) if (lo(n)) {
        (s.decorations.push({
          range: new U.e(n.modifiedStartLineNumber, 1, n.modifiedEndLineNumber, 1073741824),
          options: i ? no.lineInsertWithSign : no.lineInsert
        }), (co(n) && n.charChanges) || s.decorations.push(io(n.modifiedStartLineNumber, 1, n.modifiedEndLineNumber, 1073741824, no.charInsertWholeLine)));
        const e = uo(r, a, n.modifiedStartLineNumber, n.modifiedEndLineNumber);
        if ((s.overviewZones.push(new An.EY(e.startLineNumber, e.endLineNumber, o)), n.charChanges)) for (const e of n.charChanges) if (lo(e)) if (t) for (let t = e.modifiedStartLineNumber; t <= e.modifiedEndLineNumber; t++) {
          let i, n;
          ((i = t === e.modifiedStartLineNumber ? e.modifiedStartColumn : r.getLineFirstNonWhitespaceColumn(t)), (n = t === e.modifiedEndLineNumber ? e.modifiedEndColumn : r.getLineLastNonWhitespaceColumn(t)), s.decorations.push(io(t, i, t, n, no.charInsert)));
        } else s.decorations.push(io(e.modifiedStartLineNumber, e.modifiedStartColumn, e.modifiedEndLineNumber, e.modifiedEndColumn, no.charInsert));
      }
      return s;
    }
  }
  oo.MINIMUM_EDITOR_WIDTH = 100;
  class so extends to {
    constructor(e, t, i, n, o) {
      super(e, t, i, n, o);
    }
    _createOriginalMarginDomNodeForModifiedForeignViewZoneInAddedRegion() {
      return null;
    }
    _produceOriginalFromDiff(e, t, i) {
      return i > t ? {
        afterLineNumber: Math.max(e.originalStartLineNumber, e.originalEndLineNumber),
        heightInLines: i - t,
        domNode: null
      } : null;
    }
    _produceModifiedFromDiff(e, t, i) {
      return t > i ? {
        afterLineNumber: Math.max(e.modifiedStartLineNumber, e.modifiedEndLineNumber),
        heightInLines: t - i,
        domNode: null
      } : null;
    }
  }
  class ro extends Jn {
    constructor(e, t) {
      (super(e), (this._decorationsLeft = e.getOriginalEditor().getLayoutInfo().decorationsLeft), this._register(e.getOriginalEditor().onDidLayoutChange(t => {
        this._decorationsLeft !== t.decorationsLeft && ((this._decorationsLeft = t.decorationsLeft), e.relayoutEditors());
      })));
    }
    setEnableSplitViewResizing(e) {}
    _getViewZones(e, t, i, n) {
      const o = this._dataSource.getOriginalEditor(),
        s = this._dataSource.getModifiedEditor();
      return new ao(e, t, i, o, s, n).getViewZones();
    }
    _getOriginalEditorDecorations(e, t, i) {
      const n = String(this._removeColor),
        o = {
          decorations: [],
          overviewZones: []
        },
        s = this._dataSource.getOriginalEditor(),
        r = s.getModel(),
        a = s._getViewModel();
      for (const t of e) if (co(t)) {
        o.decorations.push({
          range: new U.e(t.originalStartLineNumber, 1, t.originalEndLineNumber, 1073741824),
          options: no.lineDeleteMargin
        });
        const e = uo(r, a, t.originalStartLineNumber, t.originalEndLineNumber);
        o.overviewZones.push(new An.EY(e.startLineNumber, e.endLineNumber, n));
      }
      return o;
    }
    _getModifiedEditorDecorations(e, t, i) {
      const n = this._dataSource.getModifiedEditor(),
        o = String(this._insertColor),
        s = {
          decorations: [],
          overviewZones: []
        },
        r = n.getModel(),
        a = n._getViewModel();
      for (const n of e) if (lo(n)) {
        s.decorations.push({
          range: new U.e(n.modifiedStartLineNumber, 1, n.modifiedEndLineNumber, 1073741824),
          options: i ? no.lineInsertWithSign : no.lineInsert
        });
        const e = uo(r, a, n.modifiedStartLineNumber, n.modifiedEndLineNumber);
        if ((s.overviewZones.push(new An.EY(e.startLineNumber, e.endLineNumber, o)), n.charChanges)) {
          for (const e of n.charChanges) if (lo(e)) if (t) for (let t = e.modifiedStartLineNumber; t <= e.modifiedEndLineNumber; t++) {
            let i, n;
            ((i = t === e.modifiedStartLineNumber ? e.modifiedStartColumn : r.getLineFirstNonWhitespaceColumn(t)), (n = t === e.modifiedEndLineNumber ? e.modifiedEndColumn : r.getLineLastNonWhitespaceColumn(t)), s.decorations.push(io(t, i, t, n, no.charInsert)));
          } else s.decorations.push(io(e.modifiedStartLineNumber, e.modifiedStartColumn, e.modifiedEndLineNumber, e.modifiedEndColumn, no.charInsert));
        } else s.decorations.push(io(n.modifiedStartLineNumber, 1, n.modifiedEndLineNumber, 1073741824, no.charInsertWholeLine));
      }
      return s;
    }
    layout() {
      return Math.max(5, this._decorationsLeft);
    }
  }
  class ao extends to {
    constructor(e, t, i, n, o, s) {
      (super(e, t, i, n, o), (this._originalModel = n.getModel()), (this._renderIndicators = s), (this._pendingLineChange = []), (this._pendingViewZones = []), (this._lineBreaksComputer = this._modifiedEditor._getViewModel().createLineBreaksComputer()));
    }
    getViewZones() {
      const e = super.getViewZones();
      return (this._finalize(e), e);
    }
    _createOriginalMarginDomNodeForModifiedForeignViewZoneInAddedRegion() {
      const e = document.createElement("div");
      return ((e.className = "inline-added-margin-view-zone"), e);
    }
    _produceOriginalFromDiff(e, t, i) {
      const n = document.createElement("div");
      return ((n.className = "inline-added-margin-view-zone"), {
        afterLineNumber: Math.max(e.originalStartLineNumber, e.originalEndLineNumber),
        heightInLines: i,
        domNode: document.createElement("div"),
        marginDomNode: n
      });
    }
    _produceModifiedFromDiff(e, t, i) {
      const n = document.createElement("div");
      n.className = `view-lines line-delete ${Un.S}`;
      const o = document.createElement("div");
      o.className = "inline-deleted-margin-view-zone";
      const s = {
        shouldNotShrink: !0,
        afterLineNumber: 0 === e.modifiedEndLineNumber ? e.modifiedStartLineNumber : e.modifiedStartLineNumber - 1,
        heightInLines: t,
        minWidthInPx: 0,
        domNode: n,
        marginDomNode: o,
        diff: {
          originalStartLineNumber: e.originalStartLineNumber,
          originalEndLineNumber: e.originalEndLineNumber,
          modifiedStartLineNumber: e.modifiedStartLineNumber,
          modifiedEndLineNumber: e.modifiedEndLineNumber,
          originalModel: this._originalModel,
          viewLineCounts: null
        }
      };
      for (let t = e.originalStartLineNumber; t <= e.originalEndLineNumber; t++) this._lineBreaksComputer.addRequest(this._originalModel.getLineContent(t), null, null);
      return (this._pendingLineChange.push(e), this._pendingViewZones.push(s), s);
    }
    _finalize(e) {
      const t = this._modifiedEditor.getOptions(),
        i = this._modifiedEditor.getModel().getOptions().tabSize,
        n = t.get(43),
        o = t.get(29),
        s = n.typicalHalfwidthCharacterWidth,
        r = t.get(92),
        a = this._originalModel.mightContainNonBasicASCII(),
        l = this._originalModel.mightContainRTL(),
        c = t.get(58),
        d = t.get(129).decorationsWidth,
        h = t.get(104),
        u = t.get(87),
        g = t.get(82),
        p = t.get(44),
        f = this._lineBreaksComputer.finalize();
      let m = 0;
      for (let t = 0; t < this._pendingLineChange.length; t++) {
        const v = this._pendingLineChange[t],
          _ = this._pendingViewZones[t],
          b = _.domNode;
        ln.V.applyFontInfoSlow(b, n);
        const w = _.marginDomNode;
        ln.V.applyFontInfoSlow(w, n);
        const y = [];
        if (v.charChanges) for (const e of v.charChanges) co(e) && y.push(new Rt.$t(new U.e(e.originalStartLineNumber, e.originalStartColumn, e.originalEndLineNumber, e.originalEndColumn), "char-delete", 0));
        const C = y.length > 0,
          x = (0, Tn.l$)(1e4);
        let S = 0,
          k = 0,
          L = null;
        for (let t = v.originalStartLineNumber; t <= v.originalEndLineNumber; t++) {
          const s = t - v.originalStartLineNumber,
            r = this._originalModel.getLineTokens(t),
            b = r.getLineContent(),
            N = f[m++],
            D = On.Kp.filter(y, t, 1, b.length + 1);
          if (N) {
            let f = 0;
            for (const e of N.breakOffsets) {
              const t = r.sliceAndInflate(f, e, 0),
                s = b.substring(f, e);
              ((S = Math.max(S, this._renderOriginalLine(k++, s, t, On.Kp.extractWrapped(D, f, e), C, a, l, n, o, c, d, h, u, g, p, i, x, w))), (f = e));
            }
            for (L || (L = []); L.length < s;) L[L.length] = 1;
            ((L[s] = N.breakOffsets.length), (_.heightInLines += N.breakOffsets.length - 1));
            const m = document.createElement("div");
            ((m.className = "line-delete"), e.original.push({
              afterLineNumber: t,
              afterColumn: 0,
              heightInLines: N.breakOffsets.length - 1,
              domNode: ho(),
              marginDomNode: m
            }));
          } else S = Math.max(S, this._renderOriginalLine(k++, b, r, D, C, a, l, n, o, c, d, h, u, g, p, i, x, w));
        }
        S += r;
        const N = x.build(),
          D = Qn ? Qn.createHTML(N) : N;
        if (((b.innerHTML = D), (_.minWidthInPx = S * s), L)) {
          const e = v.originalEndLineNumber - v.originalStartLineNumber;
          for (; L.length <= e;) L[L.length] = 1;
        }
        _.diff.viewLineCounts = L;
      }
      e.original.sort((e, t) => e.afterLineNumber - t.afterLineNumber);
    }
    _renderOriginalLine(e, t, i, n, o, s, r, a, l, c, d, h, u, g, p, f, m, v) {
      (m.appendASCIIString('<div class="view-line'), o || m.appendASCIIString(" char-delete"), m.appendASCIIString('" style="top:'), m.appendASCIIString(String(e * c)), m.appendASCIIString('px;width:1000000px;">'));
      const _ = Rt.wA.isBasicASCII(t, s),
        b = Rt.wA.containsRTL(t, _, r),
        w = (0, Pt.d1)(new Pt.IJ(a.isMonospace && !l, a.canUseHalfwidthRightwardsArrow, t, !1, _, b, 0, i, n, f, 0, a.spaceWidth, a.middotWidth, a.wsmiddotWidth, h, u, g, p !== B.n0.OFF, null), m);
      if ((m.appendASCIIString("</div>"), this._renderIndicators)) {
        const t = document.createElement("div");
        ((t.className = `delete-sign ${mn.kS.asClassName(Yn)}`), t.setAttribute("style", `position:absolute;top:${e * c}px;width:${d}px;height:${c}px;right:0;`), v.appendChild(t));
      }
      return w.characterMapping.getAbsoluteOffset(w.characterMapping.length);
    }
  }
  function lo(e) {
    return e.modifiedEndLineNumber > 0;
  }
  function co(e) {
    return e.originalEndLineNumber > 0;
  }
  function ho() {
    const e = document.createElement("div");
    return ((e.className = "diagonal-fill"), e);
  }
  function uo(e, t, i, n) {
    const o = e.getLineCount();
    return ((i = Math.min(o, Math.max(1, i))), (n = Math.min(o, Math.max(1, n))), t.coordinatesConverter.convertModelRangeToViewRange(new U.e(i, e.getLineMinColumn(i), n, e.getLineMaxColumn(n))));
  }
  function go(e, t) {
    return {
      enableSplitViewResizing: (0, B.O7)(e.enableSplitViewResizing, t.enableSplitViewResizing),
      renderSideBySide: (0, B.O7)(e.renderSideBySide, t.renderSideBySide),
      maxComputationTime: (0, B.Zc)(e.maxComputationTime, t.maxComputationTime, 0, 1073741824),
      maxFileSize: (0, B.Zc)(e.maxFileSize, t.maxFileSize, 0, 1073741824),
      ignoreTrimWhitespace: (0, B.O7)(e.ignoreTrimWhitespace, t.ignoreTrimWhitespace),
      renderIndicators: (0, B.O7)(e.renderIndicators, t.renderIndicators),
      originalEditable: (0, B.O7)(e.originalEditable, t.originalEditable),
      diffCodeLens: (0, B.O7)(e.diffCodeLens, t.diffCodeLens),
      renderOverviewRuler: (0, B.O7)(e.renderOverviewRuler, t.renderOverviewRuler),
      diffWordWrap: ((i = e.diffWordWrap), (n = t.diffWordWrap), (0, B.NY)(i, n, ["off", "on", "inherit"]))
    };
    var i, n;
  }
  (0, mn.Ic)((e, t) => {
    const i = e.getColor(fn.yp);
    i && (t.addRule(`.monaco-editor .line-insert, .monaco-editor .char-insert { background-color: ${i}; }`), t.addRule(`.monaco-diff-editor .line-insert, .monaco-diff-editor .char-insert { background-color: ${i}; }`), t.addRule(`.monaco-editor .inline-added-margin-view-zone { background-color: ${i}; }`));
    const n = e.getColor(fn.P4);
    n && (t.addRule(`.monaco-editor .line-delete, .monaco-editor .char-delete { background-color: ${n}; }`), t.addRule(`.monaco-diff-editor .line-delete, .monaco-diff-editor .char-delete { background-color: ${n}; }`), t.addRule(`.monaco-editor .inline-deleted-margin-view-zone { background-color: ${n}; }`));
    const o = e.getColor(fn.XL);
    o && t.addRule(`.monaco-editor .line-insert, .monaco-editor .char-insert { border: 1px ${"hc" === e.type ? "dashed" : "solid"} ${o}; }`);
    const s = e.getColor(fn.mH);
    s && t.addRule(`.monaco-editor .line-delete, .monaco-editor .char-delete { border: 1px ${"hc" === e.type ? "dashed" : "solid"} ${s}; }`);
    const r = e.getColor(fn._w);
    r && t.addRule(`.monaco-diff-editor.side-by-side .editor.modified { box-shadow: -6px 0 5px -5px ${r}; }`);
    const a = e.getColor(fn.LL);
    a && t.addRule(`.monaco-diff-editor.side-by-side .editor.modified { border-left: 1px solid ${a}; }`);
    const l = e.getColor(fn.et);
    l && t.addRule(`\n\t\t\t.monaco-diff-editor .diffViewport {\n\t\t\t\tbackground: ${l};\n\t\t\t}\n\t\t`);
    const c = e.getColor(fn.AB);
    c && t.addRule(`\n\t\t\t.monaco-diff-editor .diffViewport:hover {\n\t\t\t\tbackground: ${c};\n\t\t\t}\n\t\t`);
    const d = e.getColor(fn.yn);
    d && t.addRule(`\n\t\t\t.monaco-diff-editor .diffViewport:active {\n\t\t\t\tbackground: ${d};\n\t\t\t}\n\t\t`);
    const h = e.getColor(fn.L_);
    t.addRule(`\n\t.monaco-editor .diagonal-fill {\n\t\tbackground-image: linear-gradient(\n\t\t\t-45deg,\n\t\t\t${h} 12.5%,\n\t\t\t#0000 12.5%, #0000 50%,\n\t\t\t${h} 50%, ${h} 62.5%,\n\t\t\t#0000 62.5%, #0000 100%\n\t\t);\n\t\tbackground-size: 8px 8px;\n\t}\n\t`);
  });
  var po = i(30653),
    fo = i(12095),
    mo = i(84144),
    vo = i(91847),
    _o = i(31106);
  class bo extends ue.JT {
    constructor() {
      (super(), (this._onCodeEditorAdd = this._register(new W.Q5())), (this.onCodeEditorAdd = this._onCodeEditorAdd.event), (this._onCodeEditorRemove = this._register(new W.Q5())), (this.onCodeEditorRemove = this._onCodeEditorRemove.event), (this._onDiffEditorAdd = this._register(new W.Q5())), (this._onDiffEditorRemove = this._register(new W.Q5())), (this._onDecorationTypeRegistered = this._register(new W.Q5())), (this._modelProperties = new Map()), (this._codeEditors = Object.create(null)), (this._diffEditors = Object.create(null)));
    }
    addCodeEditor(e) {
      ((this._codeEditors[e.getId()] = e), this._onCodeEditorAdd.fire(e));
    }
    removeCodeEditor(e) {
      delete this._codeEditors[e.getId()] && this._onCodeEditorRemove.fire(e);
    }
    listCodeEditors() {
      return Object.keys(this._codeEditors).map(e => this._codeEditors[e]);
    }
    addDiffEditor(e) {
      ((this._diffEditors[e.getId()] = e), this._onDiffEditorAdd.fire(e));
    }
    removeDiffEditor(e) {
      delete this._diffEditors[e.getId()] && this._onDiffEditorRemove.fire(e);
    }
    listDiffEditors() {
      return Object.keys(this._diffEditors).map(e => this._diffEditors[e]);
    }
    getFocusedCodeEditor() {
      let e = null;
      const t = this.listCodeEditors();
      for (const i of t) {
        if (i.hasTextFocus()) return i;
        i.hasWidgetFocus() && (e = i);
      }
      return e;
    }
    setModelProperty(e, t, i) {
      const n = e.toString();
      let o;
      (this._modelProperties.has(n) ? (o = this._modelProperties.get(n)) : ((o = new Map()), this._modelProperties.set(n, o)), o.set(t, i));
    }
    getModelProperty(e, t) {
      const i = e.toString();
      if (this._modelProperties.has(i)) {
        return this._modelProperties.get(i).get(t);
      }
    }
  }
  var wo = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    yo = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  class Co {
    constructor(e, t, i) {
      ((this._parent = e), (this._editorId = t), (this._styleSheet = i), (this._refCount = 0));
    }
    ref() {
      this._refCount++;
    }
    unref() {
      var e;
      (this._refCount--, 0 === this._refCount && (null === (e = this._styleSheet.parentNode) || void 0 === e || e.removeChild(this._styleSheet), this._parent._removeEditorStyleSheets(this._editorId)));
    }
    insertRule(e, t) {
      this._styleSheet.sheet.insertRule(e, t);
    }
    removeRulesContainingSelector(e) {
      Q.uN(e, this._styleSheet);
    }
  }
  class xo {
    constructor(e) {
      this._styleSheet = e;
    }
    ref() {}
    unref() {}
    insertRule(e, t) {
      this._styleSheet.sheet.insertRule(e, t);
    }
    removeRulesContainingSelector(e) {
      Q.uN(e, this._styleSheet);
    }
  }
  let So = class extends bo {
    constructor(e, t) {
      (super(), (this._decorationOptionProviders = new Map()), (this._editorStyleSheets = new Map()), (this._globalStyleSheet = e || null), (this._themeService = t));
    }
    _getOrCreateGlobalStyleSheet() {
      return (this._globalStyleSheet || (this._globalStyleSheet = new xo(Q.dS())), this._globalStyleSheet);
    }
    _getOrCreateStyleSheet(e) {
      if (!e) return this._getOrCreateGlobalStyleSheet();
      const t = e.getContainerDomNode();
      if (!Q.OO(t)) return this._getOrCreateGlobalStyleSheet();
      const i = e.getId();
      if (!this._editorStyleSheets.has(i)) {
        const e = new Co(this, i, Q.dS(t));
        this._editorStyleSheets.set(i, e);
      }
      return this._editorStyleSheets.get(i);
    }
    _removeEditorStyleSheets(e) {
      this._editorStyleSheets.delete(e);
    }
    registerDecorationType(e, t, i, n, o) {
      let s = this._decorationOptionProviders.get(t);
      if (!s) {
        const r = this._getOrCreateStyleSheet(o),
          a = {
            styleSheet: r,
            key: t,
            parentTypeKey: n,
            options: i || Object.create(null)
          };
        ((s = n ? new ko(this._themeService, r, a) : new Lo(e, this._themeService, r, a)), this._decorationOptionProviders.set(t, s), this._onDecorationTypeRegistered.fire(t));
      }
      s.refCount++;
    }
    removeDecorationType(e) {
      const t = this._decorationOptionProviders.get(e);
      t && (t.refCount--, t.refCount <= 0 && (this._decorationOptionProviders.delete(e), t.dispose(), this.listCodeEditors().forEach(t => t.removeDecorations(e))));
    }
    resolveDecorationOptions(e, t) {
      const i = this._decorationOptionProviders.get(e);
      if (!i) throw new Error("Unknown decoration type key: " + e);
      return i.getOptions(this, t);
    }
  };
  So = wo([yo(1, mn.XE)], So);
  class ko {
    constructor(e, t, i) {
      ((this._styleSheet = t), this._styleSheet.ref(), (this._parentTypeKey = i.parentTypeKey), (this.refCount = 0), (this._beforeContentRules = new Do(3, i, e)), (this._afterContentRules = new Do(4, i, e)));
    }
    getOptions(e, t) {
      const i = e.resolveDecorationOptions(this._parentTypeKey, !0);
      return (this._beforeContentRules && (i.beforeContentClassName = this._beforeContentRules.className), this._afterContentRules && (i.afterContentClassName = this._afterContentRules.className), i);
    }
    dispose() {
      (this._beforeContentRules && (this._beforeContentRules.dispose(), (this._beforeContentRules = null)), this._afterContentRules && (this._afterContentRules.dispose(), (this._afterContentRules = null)), this._styleSheet.unref());
    }
  }
  class Lo {
    constructor(e, t, i, n) {
      ((this._disposables = new ue.SL()), (this.description = e), (this._styleSheet = i), this._styleSheet.ref(), (this.refCount = 0));
      const o = e => {
          const i = new Do(e, n, t);
          if ((this._disposables.add(i), i.hasContent)) return i.className;
        },
        s = e => {
          const i = new Do(e, n, t);
          return (this._disposables.add(i), i.hasContent ? {
            className: i.className,
            hasLetterSpacing: i.hasLetterSpacing
          } : null);
        };
      this.className = o(0);
      const r = s(1);
      if ((r && ((this.inlineClassName = r.className), (this.inlineClassNameAffectsLetterSpacing = r.hasLetterSpacing)), (this.beforeContentClassName = o(3)), (this.afterContentClassName = o(4)), n.options.beforeInjectedText && n.options.beforeInjectedText.contentText)) {
        const e = s(5);
        this.beforeInjectedText = {
          content: n.options.beforeInjectedText.contentText,
          inlineClassName: null == e ? void 0 : e.className,
          inlineClassNameAffectsLetterSpacing: (null == e ? void 0 : e.hasLetterSpacing) || n.options.beforeInjectedText.affectsLetterSpacing
        };
      }
      if (n.options.afterInjectedText && n.options.afterInjectedText.contentText) {
        const e = s(6);
        this.afterInjectedText = {
          content: n.options.afterInjectedText.contentText,
          inlineClassName: null == e ? void 0 : e.className,
          inlineClassNameAffectsLetterSpacing: (null == e ? void 0 : e.hasLetterSpacing) || n.options.afterInjectedText.affectsLetterSpacing
        };
      }
      this.glyphMarginClassName = o(2);
      const a = n.options;
      ((this.isWholeLine = Boolean(a.isWholeLine)), (this.stickiness = a.rangeBehavior));
      const l = (a.light && a.light.overviewRulerColor) || a.overviewRulerColor,
        c = (a.dark && a.dark.overviewRulerColor) || a.overviewRulerColor;
      (void 0 === l && void 0 === c) || (this.overviewRuler = {
        color: l || c,
        darkColor: c || l,
        position: a.overviewRulerLane || _e.sh.Center
      });
    }
    getOptions(e, t) {
      return t ? {
        description: this.description,
        inlineClassName: this.inlineClassName,
        beforeContentClassName: this.beforeContentClassName,
        afterContentClassName: this.afterContentClassName,
        className: this.className,
        glyphMarginClassName: this.glyphMarginClassName,
        isWholeLine: this.isWholeLine,
        overviewRuler: this.overviewRuler,
        stickiness: this.stickiness,
        before: this.beforeInjectedText,
        after: this.afterInjectedText
      } : this;
    }
    dispose() {
      (this._disposables.dispose(), this._styleSheet.unref());
    }
  }
  const No = {
    color: "color:{0} !important;",
    opacity: "opacity:{0};",
    backgroundColor: "background-color:{0};",
    outline: "outline:{0};",
    outlineColor: "outline-color:{0};",
    outlineStyle: "outline-style:{0};",
    outlineWidth: "outline-width:{0};",
    border: "border:{0};",
    borderColor: "border-color:{0};",
    borderRadius: "border-radius:{0};",
    borderSpacing: "border-spacing:{0};",
    borderStyle: "border-style:{0};",
    borderWidth: "border-width:{0};",
    fontStyle: "font-style:{0};",
    fontWeight: "font-weight:{0};",
    fontSize: "font-size:{0};",
    fontFamily: "font-family:{0};",
    textDecoration: "text-decoration:{0};",
    cursor: "cursor:{0};",
    letterSpacing: "letter-spacing:{0};",
    gutterIconPath: "background:{0} center center no-repeat;",
    gutterIconSize: "background-size:{0};",
    contentText: "content:'{0}';",
    contentIconPath: "content:{0};",
    margin: "margin:{0};",
    padding: "padding:{0};",
    width: "width:{0};",
    height: "height:{0};",
    verticalAlign: "vertical-align:{0};"
  };
  class Do {
    constructor(e, t, i) {
      ((this._theme = i.getColorTheme()), (this._ruleType = e), (this._providerArgs = t), (this._usesThemeColors = !1), (this._hasContent = !1), (this._hasLetterSpacing = !1));
      let n = Io.getClassName(this._providerArgs.key, e);
      (this._providerArgs.parentTypeKey && (n = n + " " + Io.getClassName(this._providerArgs.parentTypeKey, e)), (this._className = n), (this._unThemedSelector = Io.getSelector(this._providerArgs.key, this._providerArgs.parentTypeKey, e)), this._buildCSS(), this._usesThemeColors ? (this._themeListener = i.onDidColorThemeChange(e => {
        ((this._theme = i.getColorTheme()), this._removeCSS(), this._buildCSS());
      })) : (this._themeListener = null));
    }
    dispose() {
      (this._hasContent && (this._removeCSS(), (this._hasContent = !1)), this._themeListener && (this._themeListener.dispose(), (this._themeListener = null)));
    }
    get hasContent() {
      return this._hasContent;
    }
    get hasLetterSpacing() {
      return this._hasLetterSpacing;
    }
    get className() {
      return this._className;
    }
    _buildCSS() {
      const e = this._providerArgs.options;
      let t, i, n;
      switch (this._ruleType) {
        case 0:
          ((t = this.getCSSTextForModelDecorationClassName(e)), (i = this.getCSSTextForModelDecorationClassName(e.light)), (n = this.getCSSTextForModelDecorationClassName(e.dark)));
          break;
        case 1:
          ((t = this.getCSSTextForModelDecorationInlineClassName(e)), (i = this.getCSSTextForModelDecorationInlineClassName(e.light)), (n = this.getCSSTextForModelDecorationInlineClassName(e.dark)));
          break;
        case 2:
          ((t = this.getCSSTextForModelDecorationGlyphMarginClassName(e)), (i = this.getCSSTextForModelDecorationGlyphMarginClassName(e.light)), (n = this.getCSSTextForModelDecorationGlyphMarginClassName(e.dark)));
          break;
        case 3:
          ((t = this.getCSSTextForModelDecorationContentClassName(e.before)), (i = this.getCSSTextForModelDecorationContentClassName(e.light && e.light.before)), (n = this.getCSSTextForModelDecorationContentClassName(e.dark && e.dark.before)));
          break;
        case 4:
          ((t = this.getCSSTextForModelDecorationContentClassName(e.after)), (i = this.getCSSTextForModelDecorationContentClassName(e.light && e.light.after)), (n = this.getCSSTextForModelDecorationContentClassName(e.dark && e.dark.after)));
          break;
        case 5:
          ((t = this.getCSSTextForModelDecorationContentClassName(e.beforeInjectedText)), (i = this.getCSSTextForModelDecorationContentClassName(e.light && e.light.beforeInjectedText)), (n = this.getCSSTextForModelDecorationContentClassName(e.dark && e.dark.beforeInjectedText)));
          break;
        case 6:
          ((t = this.getCSSTextForModelDecorationContentClassName(e.afterInjectedText)), (i = this.getCSSTextForModelDecorationContentClassName(e.light && e.light.afterInjectedText)), (n = this.getCSSTextForModelDecorationContentClassName(e.dark && e.dark.afterInjectedText)));
          break;
        default:
          throw new Error("Unknown rule type: " + this._ruleType);
      }
      const o = this._providerArgs.styleSheet;
      let s = !1;
      (t.length > 0 && (o.insertRule(`${this._unThemedSelector} {${t}}`, 0), (s = !0)), i.length > 0 && (o.insertRule(`.vs${this._unThemedSelector} {${i}}`, 0), (s = !0)), n.length > 0 && (o.insertRule(`.vs-dark${this._unThemedSelector}, .hc-black${this._unThemedSelector} {${n}}`, 0), (s = !0)), (this._hasContent = s));
    }
    _removeCSS() {
      this._providerArgs.styleSheet.removeRulesContainingSelector(this._unThemedSelector);
    }
    getCSSTextForModelDecorationClassName(e) {
      if (!e) return "";
      const t = [];
      return (this.collectCSSText(e, ["backgroundColor"], t), this.collectCSSText(e, ["outline", "outlineColor", "outlineStyle", "outlineWidth"], t), this.collectBorderSettingsCSSText(e, t), t.join(""));
    }
    getCSSTextForModelDecorationInlineClassName(e) {
      if (!e) return "";
      const t = [];
      return (this.collectCSSText(e, ["fontStyle", "fontWeight", "textDecoration", "cursor", "color", "opacity", "letterSpacing"], t), e.letterSpacing && (this._hasLetterSpacing = !0), t.join(""));
    }
    getCSSTextForModelDecorationContentClassName(e) {
      if (!e) return "";
      const t = [];
      if (void 0 !== e) {
        if ((this.collectBorderSettingsCSSText(e, t), void 0 !== e.contentIconPath && t.push(De.WU(No.contentIconPath, Q.wY(z.o.revive(e.contentIconPath)))), "string" == typeof e.contentText)) {
          const i = e.contentText.match(/^.*$/m)[0].replace(/['\\]/g, "\\$&");
          t.push(De.WU(No.contentText, i));
        }
        (this.collectCSSText(e, ["verticalAlign", "fontStyle", "fontWeight", "fontSize", "fontFamily", "textDecoration", "color", "opacity", "backgroundColor", "margin", "padding"], t), this.collectCSSText(e, ["width", "height"], t) && t.push("display:inline-block;"));
      }
      return t.join("");
    }
    getCSSTextForModelDecorationGlyphMarginClassName(e) {
      if (!e) return "";
      const t = [];
      return (void 0 !== e.gutterIconPath && (t.push(De.WU(No.gutterIconPath, Q.wY(z.o.revive(e.gutterIconPath)))), void 0 !== e.gutterIconSize && t.push(De.WU(No.gutterIconSize, e.gutterIconSize))), t.join(""));
    }
    collectBorderSettingsCSSText(e, t) {
      return (!!this.collectCSSText(e, ["border", "borderColor", "borderRadius", "borderSpacing", "borderStyle", "borderWidth"], t) && (t.push(De.WU("box-sizing: border-box;")), !0));
    }
    collectCSSText(e, t, i) {
      const n = i.length;
      for (let n of t) {
        const t = this.resolveValue(e[n]);
        "string" == typeof t && i.push(De.WU(No[n], t));
      }
      return i.length !== n;
    }
    resolveValue(e) {
      if ((0, ve.I)(e)) {
        this._usesThemeColors = !0;
        const t = this._theme.getColor(e.id);
        return t ? t.toString() : "transparent";
      }
      return e;
    }
  }
  class Io {
    static getClassName(e, t) {
      return "ced-" + e + "-" + t;
    }
    static getSelector(e, t, i) {
      let n = ".monaco-editor ." + this.getClassName(e, i);
      return (t && (n = n + "." + this.getClassName(t, i)), 3 === i ? (n += "::before") : 4 === i && (n += "::after"), n);
    }
  }
  var Eo = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    To = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let Mo = class extends So {
    constructor(e, t, i) {
      (super(e, i), this.onCodeEditorAdd(() => this._checkContextKey()), this.onCodeEditorRemove(() => this._checkContextKey()), (this._editorIsOpen = t.createKey("editorIsOpen", !1)), (this._activeCodeEditor = null));
    }
    _checkContextKey() {
      let e = !1;
      for (const t of this.listCodeEditors()) if (!t.isSimpleWidget) {
        e = !0;
        break;
      }
      this._editorIsOpen.set(e);
    }
    setActiveCodeEditor(e) {
      this._activeCodeEditor = e;
    }
    getActiveCodeEditor() {
      return this._activeCodeEditor;
    }
    openCodeEditor(e, t, i) {
      return t ? Promise.resolve(this.doOpenEditor(t, e)) : Promise.resolve(null);
    }
    doOpenEditor(e, t) {
      if (!this.findModel(e, t.resource)) {
        if (t.resource) {
          const i = t.resource.scheme;
          if (i === te.lg.http || i === te.lg.https) return ((0, Q.V3)(t.resource.toString()), e);
        }
        return null;
      }
      const i = t.options ? t.options.selection : null;
      if (i) if ("number" == typeof i.endLineNumber && "number" == typeof i.endColumn) (e.setSelection(i), e.revealRangeInCenter(i, 1));else {
        const t = {
          lineNumber: i.startLineNumber,
          column: i.startColumn
        };
        (e.setPosition(t), e.revealPositionInCenter(t, 1));
      }
      return e;
    }
    findModel(e, t) {
      const i = e.getModel();
      return i && i.uri.toString() !== t.toString() ? null : i;
    }
  };
  Mo = Eo([To(1, xi.i6), To(2, mn.XE)], Mo);
  var Ao = i(81170),
    Oo = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Po = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let Ro = 0,
    Fo = !1;
  let Bo = class extends sn.Gm {
    constructor(e, t, i, n, o, s, r, a, l, c) {
      const d = Object.assign({}, t);
      ((d.ariaLabel = d.ariaLabel || Pi.B8.editorViewAccessibleLabel), (d.ariaLabel = d.ariaLabel + ";" + Pi.B8.accessibilityHelpMessage), super(e, d, {}, i, n, o, s, a, l, c), (this._standaloneKeybindingService = r instanceof $i ? r : null), (function (e) {
        if (!e) {
          if (Fo) return;
          Fo = !0;
        }
        on.wW(e || document.body);
      })(d.ariaContainerElement));
    }
    addCommand(e, t, i) {
      if (!this._standaloneKeybindingService) return (console.warn("Cannot add command because the editor is configured with an unrecognized KeybindingService"), null);
      let n = "DYNAMIC_" + ++Ro,
        o = xi.Ao.deserialize(i);
      return (this._standaloneKeybindingService.addDynamicKeybinding(n, e, t, o), n);
    }
    createContextKey(e, t) {
      return this._contextKeyService.createKey(e, t);
    }
    addAction(e) {
      if ("string" != typeof e.id || "string" != typeof e.label || "function" != typeof e.run) throw new Error("Invalid action descriptor, `id`, `label` and `run` are required properties!");
      if (!this._standaloneKeybindingService) return (console.warn("Cannot add keybinding because the editor is configured with an unrecognized KeybindingService"), ue.JT.None);
      const t = e.id,
        i = e.label,
        n = xi.Ao.and(xi.Ao.equals("editorId", this.getId()), xi.Ao.deserialize(e.precondition)),
        o = e.keybindings,
        s = xi.Ao.and(n, xi.Ao.deserialize(e.keybindingContext)),
        r = e.contextMenuGroupId || null,
        a = e.contextMenuOrder || 0,
        l = (t, ...i) => Promise.resolve(e.run(this, ...i)),
        c = new ue.SL(),
        d = this.getId() + ":" + t;
      if ((c.add(ne.P.registerCommand(d, l)), r)) {
        let e = {
          command: {
            id: d,
            title: i
          },
          when: n,
          group: r,
          order: a
        };
        c.add(mo.BH.appendMenuItem(mo.eH.EditorContext, e));
      }
      if (Array.isArray(o)) for (const e of o) c.add(this._standaloneKeybindingService.addDynamicKeybinding(d, e, l, s));
      let h = new po.p(d, i, i, n, l, this._contextKeyService);
      return ((this._actions[t] = h), c.add((0, ue.OF)(() => {
        delete this._actions[t];
      })), c);
    }
    _triggerCommand(e, t) {
      if (this._codeEditorService instanceof Mo) try {
        (this._codeEditorService.setActiveCodeEditor(this), super._triggerCommand(e, t));
      } finally {
        this._codeEditorService.setActiveCodeEditor(null);
      } else super._triggerCommand(e, t);
    }
  };
  Bo = Oo([Po(2, Pn.TG), Po(3, Y.$), Po(4, ne.H), Po(5, xi.i6), Po(6, vo.d), Po(7, mn.XE), Po(8, Ai.lT), Po(9, _o.F)], Bo);
  let Vo = class extends Bo {
    constructor(e, t, i, n, o, s, r, a, l, c, d, h, u, g, p) {
      const f = Object.assign({}, t);
      Xi(h, f, !1);
      const m = c.registerEditorContainer(e);
      ("string" == typeof f.theme && c.setTheme(f.theme), void 0 !== f.autoDetectHighContrast && c.setAutoDetectHighContrast(Boolean(f.autoDetectHighContrast)));
      let v,
        _ = f.model;
      if ((delete f.model, super(e, f, n, o, s, r, a, c, d, u), (this._contextViewService = l), (this._configurationService = h), (this._standaloneThemeService = c), this._register(i), this._register(m), void 0 === _ ? ((v = Ho(g, p, f.value || "", f.language || Ao.vW.text, void 0)), (this._ownsModel = !0)) : ((v = _), (this._ownsModel = !1)), this._attachModel(v), v)) {
        let e = {
          oldModelUrl: null,
          newModelUrl: v.uri
        };
        this._onDidChangeModel.fire(e);
      }
    }
    dispose() {
      super.dispose();
    }
    updateOptions(e) {
      (Xi(this._configurationService, e, !1), "string" == typeof e.theme && this._standaloneThemeService.setTheme(e.theme), void 0 !== e.autoDetectHighContrast && this._standaloneThemeService.setAutoDetectHighContrast(Boolean(e.autoDetectHighContrast)), super.updateOptions(e));
    }
    _attachModel(e) {
      (super._attachModel(e), this._modelData && this._contextViewService.setContainer(this._modelData.view.domNode.domNode));
    }
    _postDetachModelCleanup(e) {
      (super._postDetachModelCleanup(e), e && this._ownsModel && (e.dispose(), (this._ownsModel = !1)));
    }
  };
  Vo = Oo([Po(3, Pn.TG), Po(4, Y.$), Po(5, ne.H), Po(6, xi.i6), Po(7, vo.d), Po(8, Fn.u), Po(9, fo.Z), Po(10, Ai.lT), Po(11, gi.Ui), Po(12, _o.F), Po(13, vt.q), Po(14, Ce.h)], Vo);
  let Wo = class extends Xn {
    constructor(e, t, i, n, o, s, r, a, l, c, d, h, u, g, p) {
      const f = Object.assign({}, t);
      Xi(h, f, !0);
      const m = c.registerEditorContainer(e);
      ("string" == typeof f.theme && c.setTheme(f.theme), void 0 !== f.autoDetectHighContrast && c.setAutoDetectHighContrast(Boolean(f.autoDetectHighContrast)), super(e, f, {}, p, a, o, n, l, c, d, u, g), (this._contextViewService = r), (this._configurationService = h), (this._standaloneThemeService = c), this._register(i), this._register(m), this._contextViewService.setContainer(this._containerDomElement));
    }
    dispose() {
      super.dispose();
    }
    updateOptions(e) {
      (Xi(this._configurationService, e, !0), "string" == typeof e.theme && this._standaloneThemeService.setTheme(e.theme), void 0 !== e.autoDetectHighContrast && this._standaloneThemeService.setAutoDetectHighContrast(Boolean(e.autoDetectHighContrast)), super.updateOptions(e));
    }
    _createInnerEditor(e, t, i) {
      return e.createInstance(Bo, t, i);
    }
    getOriginalEditor() {
      return super.getOriginalEditor();
    }
    getModifiedEditor() {
      return super.getModifiedEditor();
    }
    addCommand(e, t, i) {
      return this.getModifiedEditor().addCommand(e, t, i);
    }
    createContextKey(e, t) {
      return this.getModifiedEditor().createContextKey(e, t);
    }
    addAction(e) {
      return this.getModifiedEditor().addAction(e);
    }
  };
  function Ho(e, t, i, n, o) {
    if (((i = i || ""), !n)) {
      const n = i.indexOf("\n");
      let s = i;
      return (-1 !== n && (s = i.substring(0, n)), zo(e, i, t.createByFilepathOrFirstLine(o || null, s), o));
    }
    return zo(e, i, t.create(n), o);
  }
  function zo(e, t, i, n) {
    return e.createModel(t, i, n);
  }
  Wo = Oo([Po(3, Pn.TG), Po(4, xi.i6), Po(5, vo.d), Po(6, Fn.u), Po(7, ye.p), Po(8, Y.$), Po(9, fo.Z), Po(10, Ai.lT), Po(11, gi.Ui), Po(12, Fn.i), Po(13, zn.e), Po(14, Hn.p)], Wo);
  var jo = i(71144),
    Uo = i(89872);
  const $o = Object.prototype.hasOwnProperty;
  class Ko {
    constructor() {
      ((this._languageIdToLanguage = []), (this._languageToLanguageId = new Map()), this._register(we.TG, 0), this._register(jo.XT, 1), (this._nextLanguageId = 2));
    }
    _register(e, t) {
      ((this._languageIdToLanguage[t] = e), this._languageToLanguageId.set(e, t));
    }
    register(e) {
      if (this._languageToLanguageId.has(e)) return;
      const t = this._nextLanguageId++;
      this._register(e, t);
    }
    encodeLanguageId(e) {
      return this._languageToLanguageId.get(e) || 0;
    }
    decodeLanguageId(e) {
      return this._languageIdToLanguage[e] || we.TG;
    }
  }
  class qo extends ue.JT {
    constructor(e = !0, t = !1) {
      (super(), (this._onDidChange = this._register(new W.Q5())), (this.onDidChange = this._onDidChange.event), qo.instanceCount++, (this._warnOnOverwrite = t), (this.languageIdCodec = new Ko()), (this._languages = {}), (this._mimeTypesMap = {}), (this._nameMap = {}), (this._lowercaseNameMap = {}), e && (this._initializeFromRegistry(), this._register(jo.dQ.onDidChangeLanguages(e => {
        this._initializeFromRegistry();
      }))));
    }
    dispose() {
      (qo.instanceCount--, super.dispose());
    }
    _initializeFromRegistry() {
      ((this._languages = {}), (this._mimeTypesMap = {}), (this._nameMap = {}), (this._lowercaseNameMap = {}), Ao.bS());
      const e = jo.dQ.getLanguages();
      this._registerLanguages(e);
    }
    _registerLanguages(e) {
      for (const t of e) this._registerLanguage(t);
      ((this._mimeTypesMap = {}), (this._nameMap = {}), (this._lowercaseNameMap = {}), Object.keys(this._languages).forEach(e => {
        let t = this._languages[e];
        (t.name && (this._nameMap[t.name] = t.identifier), t.aliases.forEach(e => {
          this._lowercaseNameMap[e.toLowerCase()] = t.identifier;
        }), t.mimetypes.forEach(e => {
          this._mimeTypesMap[e] = t.identifier;
        }));
      }), Uo.B.as(pi.IP.Configuration).registerOverrideIdentifiers(jo.dQ.getLanguages().map(e => e.id)), this._onDidChange.fire());
    }
    _registerLanguage(e) {
      const t = e.id;
      let i;
      ($o.call(this._languages, t) ? (i = this._languages[t]) : (this.languageIdCodec.register(t), (i = {
        identifier: t,
        name: null,
        mimetypes: [],
        aliases: [],
        extensions: [],
        filenames: [],
        configurationFiles: []
      }), (this._languages[t] = i)), this._mergeLanguage(i, e));
    }
    _mergeLanguage(e, t) {
      const i = t.id;
      let n = null;
      if ((Array.isArray(t.mimetypes) && t.mimetypes.length > 0 && (e.mimetypes.push(...t.mimetypes), (n = t.mimetypes[0])), n || ((n = `text/x-${i}`), e.mimetypes.push(n)), Array.isArray(t.extensions))) {
        t.configuration ? (e.extensions = t.extensions.concat(e.extensions)) : (e.extensions = e.extensions.concat(t.extensions));
        for (let e of t.extensions) Ao.sA({
          id: i,
          mime: n,
          extension: e
        }, this._warnOnOverwrite);
      }
      if (Array.isArray(t.filenames)) for (let o of t.filenames) (Ao.sA({
        id: i,
        mime: n,
        filename: o
      }, this._warnOnOverwrite), e.filenames.push(o));
      if (Array.isArray(t.filenamePatterns)) for (let e of t.filenamePatterns) Ao.sA({
        id: i,
        mime: n,
        filepattern: e
      }, this._warnOnOverwrite);
      if ("string" == typeof t.firstLine && t.firstLine.length > 0) {
        let e = t.firstLine;
        "^" !== e.charAt(0) && (e = "^" + e);
        try {
          let t = new RegExp(e);
          De.IO(t) || Ao.sA({
            id: i,
            mime: n,
            firstline: t
          }, this._warnOnOverwrite);
        } catch (e) {
          (0, ke.dL)(e);
        }
      }
      e.aliases.push(i);
      let o = null;
      if ((void 0 !== t.aliases && Array.isArray(t.aliases) && (o = 0 === t.aliases.length ? [null] : t.aliases), null !== o)) for (const t of o) t && 0 !== t.length && e.aliases.push(t);
      let s = null !== o && o.length > 0;
      if (s && null === o[0]) ;else {
        let t = (s ? o[0] : null) || i;
        (!s && e.name) || (e.name = t);
      }
      t.configuration && e.configurationFiles.push(t.configuration);
    }
    isRegisteredMode(e) {
      return !!$o.call(this._mimeTypesMap, e) || $o.call(this._languages, e);
    }
    getModeIdForLanguageNameLowercase(e) {
      return $o.call(this._lowercaseNameMap, e) ? this._lowercaseNameMap[e] : null;
    }
    extractModeIds(e) {
      return e ? e.split(",").map(e => e.trim()).map(e => $o.call(this._mimeTypesMap, e) ? this._mimeTypesMap[e] : e).filter(e => $o.call(this._languages, e)) : [];
    }
    validateLanguageId(e) {
      return e && e !== we.TG ? $o.call(this._languages, e) ? e : null : we.TG;
    }
    getModeIdsFromFilepathOrFirstLine(e, t) {
      if (!e && !t) return [];
      let i = Ao.G8(e, t);
      return this.extractModeIds(i.join(","));
    }
  }
  qo.instanceCount = 0;
  class Zo {
    constructor(e, t) {
      let i;
      ((this._selector = t), (this.languageId = this._selector()), (this._onDidChange = new W.Q5({
        onFirstListenerAdd: () => {
          i = e(() => this._evaluate());
        },
        onLastListenerRemove: () => {
          i.dispose();
        }
      })), (this.onDidChange = this._onDidChange.event));
    }
    _evaluate() {
      const e = this._selector();
      e !== this.languageId && ((this.languageId = e), this._onDidChange.fire(this.languageId));
    }
  }
  class Go extends ue.JT {
    constructor(e = !1) {
      (super(), (this._onDidEncounterLanguage = this._register(new W.Q5())), (this.onDidEncounterLanguage = this._onDidEncounterLanguage.event), (this._onLanguagesMaybeChanged = this._register(new W.Q5({
        leakWarningThreshold: 200
      }))), (this.onLanguagesMaybeChanged = this._onLanguagesMaybeChanged.event), Go.instanceCount++, (this._encounteredLanguages = new Set()), (this._registry = this._register(new qo(!0, e))), (this.languageIdCodec = this._registry.languageIdCodec), this._register(this._registry.onDidChange(() => this._onLanguagesMaybeChanged.fire())));
    }
    dispose() {
      (Go.instanceCount--, super.dispose());
    }
    isRegisteredMode(e) {
      return this._registry.isRegisteredMode(e);
    }
    getModeIdForLanguageName(e) {
      return this._registry.getModeIdForLanguageNameLowercase(e);
    }
    getModeIdByFilepathOrFirstLine(e, t) {
      const i = this._registry.getModeIdsFromFilepathOrFirstLine(e, t);
      return (0, bt.Xh)(i, null);
    }
    getModeId(e) {
      const t = this._registry.extractModeIds(e);
      return (0, bt.Xh)(t, null);
    }
    validateLanguageId(e) {
      return this._registry.validateLanguageId(e);
    }
    create(e) {
      return new Zo(this.onLanguagesMaybeChanged, () => {
        const t = this.getModeId(e);
        return this._createModeAndGetLanguageIdentifier(t);
      });
    }
    createByFilepathOrFirstLine(e, t) {
      return new Zo(this.onLanguagesMaybeChanged, () => {
        const i = this.getModeIdByFilepathOrFirstLine(e, t);
        return this._createModeAndGetLanguageIdentifier(i);
      });
    }
    _createModeAndGetLanguageIdentifier(e) {
      const t = this.validateLanguageId(e || "plaintext") || we.TG;
      return (this._getOrCreateMode(t), t);
    }
    triggerMode(e) {
      const t = this.getModeId(e);
      this._getOrCreateMode(t || "plaintext");
    }
    _getOrCreateMode(e) {
      if (!this._encounteredLanguages.has(e)) {
        this._encounteredLanguages.add(e);
        const t = this.validateLanguageId(e) || we.TG;
        this._onDidEncounterLanguage.fire(t);
      }
    }
  }
  Go.instanceCount = 0;
  var Yo = i(32334),
    Qo = i(41264);
  class Xo {
    constructor(e, t, i, n, o) {
      ((this._parsedThemeRuleBrand = void 0), (this.token = e), (this.index = t), (this.fontStyle = i), (this.foreground = n), (this.background = o));
    }
  }
  const Jo = /^#?([0-9A-Fa-f]{6})([0-9A-Fa-f]{2})?$/;
  class es {
    constructor() {
      ((this._lastColorId = 0), (this._id2color = []), (this._color2id = new Map()));
    }
    getId(e) {
      if (null === e) return 0;
      const t = e.match(Jo);
      if (!t) throw new Error("Illegal value for token color: " + e);
      e = t[1].toUpperCase();
      let i = this._color2id.get(e);
      return (i || ((i = ++this._lastColorId), this._color2id.set(e, i), (this._id2color[i] = Qo.Il.fromHex("#" + e)), i));
    }
    getColorMap() {
      return this._id2color.slice(0);
    }
  }
  class ts {
    constructor(e, t) {
      ((this._colorMap = e), (this._root = t), (this._cache = new Map()));
    }
    static createFromRawTokenTheme(e, t) {
      return this.createFromParsedTokenTheme((function (e) {
        if (!e || !Array.isArray(e)) return [];
        let t = [],
          i = 0;
        for (let n = 0, o = e.length; n < o; n++) {
          let o = e[n],
            s = -1;
          if ("string" == typeof o.fontStyle) {
            s = 0;
            let e = o.fontStyle.split(" ");
            for (let t = 0, i = e.length; t < i; t++) switch (e[t]) {
              case "italic":
                s |= 1;
                break;
              case "bold":
                s |= 2;
                break;
              case "underline":
                s |= 4;
            }
          }
          let r = null;
          "string" == typeof o.foreground && (r = o.foreground);
          let a = null;
          ("string" == typeof o.background && (a = o.background), (t[i++] = new Xo(o.token || "", n, s, r, a)));
        }
        return t;
      })(e), t);
    }
    static createFromParsedTokenTheme(e, t) {
      return (function (e, t) {
        e.sort((e, t) => {
          let i = (function (e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          })(e.token, t.token);
          return 0 !== i ? i : e.index - t.index;
        });
        let i = 0,
          n = "000000",
          o = "ffffff";
        for (; e.length >= 1 && "" === e[0].token;) {
          let t = e.shift();
          (-1 !== t.fontStyle && (i = t.fontStyle), null !== t.foreground && (n = t.foreground), null !== t.background && (o = t.background));
        }
        let s = new es();
        for (let e of t) s.getId(e);
        let r = s.getId(n),
          a = s.getId(o),
          l = new ns(i, r, a),
          c = new os(l);
        for (let t = 0, i = e.length; t < i; t++) {
          let i = e[t];
          c.insert(i.token, i.fontStyle, s.getId(i.foreground), s.getId(i.background));
        }
        return new ts(s, c);
      })(e, t);
    }
    getColorMap() {
      return this._colorMap.getColorMap();
    }
    _match(e) {
      return this._root.match(e);
    }
    match(e, t) {
      let i = this._cache.get(t);
      if (void 0 === i) {
        let e = this._match(t),
          n = (function (e) {
            let t = e.match(is);
            if (!t) return 0;
            switch (t[1]) {
              case "comment":
                return 1;
              case "string":
                return 2;
              case "regex":
              case "regexp":
                return 4;
            }
            throw new Error("Unexpected match for standard token type!");
          })(t);
        ((i = (e.metadata | (n << 8)) >>> 0), this._cache.set(t, i));
      }
      return (i | (e << 0)) >>> 0;
    }
  }
  const is = /\b(comment|string|regex|regexp)\b/;
  class ns {
    constructor(e, t, i) {
      ((this._themeTrieElementRuleBrand = void 0), (this._fontStyle = e), (this._foreground = t), (this._background = i), (this.metadata = ((this._fontStyle << 11) | (this._foreground << 14) | (this._background << 23)) >>> 0));
    }
    clone() {
      return new ns(this._fontStyle, this._foreground, this._background);
    }
    acceptOverwrite(e, t, i) {
      (-1 !== e && (this._fontStyle = e), 0 !== t && (this._foreground = t), 0 !== i && (this._background = i), (this.metadata = ((this._fontStyle << 11) | (this._foreground << 14) | (this._background << 23)) >>> 0));
    }
  }
  class os {
    constructor(e) {
      ((this._themeTrieElementBrand = void 0), (this._mainRule = e), (this._children = new Map()));
    }
    match(e) {
      if ("" === e) return this._mainRule;
      let t,
        i,
        n = e.indexOf(".");
      -1 === n ? ((t = e), (i = "")) : ((t = e.substring(0, n)), (i = e.substring(n + 1)));
      let o = this._children.get(t);
      return void 0 !== o ? o.match(i) : this._mainRule;
    }
    insert(e, t, i, n) {
      if ("" === e) return void this._mainRule.acceptOverwrite(t, i, n);
      let o,
        s,
        r = e.indexOf(".");
      -1 === r ? ((o = e), (s = "")) : ((o = e.substring(0, r)), (s = e.substring(r + 1)));
      let a = this._children.get(o);
      (void 0 === a && ((a = new os(this._mainRule.clone())), this._children.set(o, a)), a.insert(s, t, i, n));
    }
  }
  const ss = {
      base: "vs",
      inherit: !1,
      rules: [{
        token: "",
        foreground: "000000",
        background: "fffffe"
      }, {
        token: "invalid",
        foreground: "cd3131"
      }, {
        token: "emphasis",
        fontStyle: "italic"
      }, {
        token: "strong",
        fontStyle: "bold"
      }, {
        token: "variable",
        foreground: "001188"
      }, {
        token: "variable.predefined",
        foreground: "4864AA"
      }, {
        token: "constant",
        foreground: "dd0000"
      }, {
        token: "comment",
        foreground: "008000"
      }, {
        token: "number",
        foreground: "098658"
      }, {
        token: "number.hex",
        foreground: "3030c0"
      }, {
        token: "regexp",
        foreground: "800000"
      }, {
        token: "annotation",
        foreground: "808080"
      }, {
        token: "type",
        foreground: "008080"
      }, {
        token: "delimiter",
        foreground: "000000"
      }, {
        token: "delimiter.html",
        foreground: "383838"
      }, {
        token: "delimiter.xml",
        foreground: "0000FF"
      }, {
        token: "tag",
        foreground: "800000"
      }, {
        token: "tag.id.pug",
        foreground: "4F76AC"
      }, {
        token: "tag.class.pug",
        foreground: "4F76AC"
      }, {
        token: "meta.scss",
        foreground: "800000"
      }, {
        token: "metatag",
        foreground: "e00000"
      }, {
        token: "metatag.content.html",
        foreground: "FF0000"
      }, {
        token: "metatag.html",
        foreground: "808080"
      }, {
        token: "metatag.xml",
        foreground: "808080"
      }, {
        token: "metatag.php",
        fontStyle: "bold"
      }, {
        token: "key",
        foreground: "863B00"
      }, {
        token: "string.key.json",
        foreground: "A31515"
      }, {
        token: "string.value.json",
        foreground: "0451A5"
      }, {
        token: "attribute.name",
        foreground: "FF0000"
      }, {
        token: "attribute.value",
        foreground: "0451A5"
      }, {
        token: "attribute.value.number",
        foreground: "098658"
      }, {
        token: "attribute.value.unit",
        foreground: "098658"
      }, {
        token: "attribute.value.html",
        foreground: "0000FF"
      }, {
        token: "attribute.value.xml",
        foreground: "0000FF"
      }, {
        token: "string",
        foreground: "A31515"
      }, {
        token: "string.html",
        foreground: "0000FF"
      }, {
        token: "string.sql",
        foreground: "FF0000"
      }, {
        token: "string.yaml",
        foreground: "0451A5"
      }, {
        token: "keyword",
        foreground: "0000FF"
      }, {
        token: "keyword.json",
        foreground: "0451A5"
      }, {
        token: "keyword.flow",
        foreground: "AF00DB"
      }, {
        token: "keyword.flow.scss",
        foreground: "0000FF"
      }, {
        token: "operator.scss",
        foreground: "666666"
      }, {
        token: "operator.sql",
        foreground: "778899"
      }, {
        token: "operator.swift",
        foreground: "666666"
      }, {
        token: "predefined.sql",
        foreground: "C700C7"
      }],
      colors: {
        [fn.cv]: "#FFFFFE",
        [fn.NO]: "#000000",
        [fn.ES]: "#E5EBF1",
        [pn.tR]: "#D3D3D3",
        [pn.Ym]: "#939393",
        [fn.Rz]: "#ADD6FF4D"
      }
    },
    rs = {
      base: "vs-dark",
      inherit: !1,
      rules: [{
        token: "",
        foreground: "D4D4D4",
        background: "1E1E1E"
      }, {
        token: "invalid",
        foreground: "f44747"
      }, {
        token: "emphasis",
        fontStyle: "italic"
      }, {
        token: "strong",
        fontStyle: "bold"
      }, {
        token: "variable",
        foreground: "74B0DF"
      }, {
        token: "variable.predefined",
        foreground: "4864AA"
      }, {
        token: "variable.parameter",
        foreground: "9CDCFE"
      }, {
        token: "constant",
        foreground: "569CD6"
      }, {
        token: "comment",
        foreground: "608B4E"
      }, {
        token: "number",
        foreground: "B5CEA8"
      }, {
        token: "number.hex",
        foreground: "5BB498"
      }, {
        token: "regexp",
        foreground: "B46695"
      }, {
        token: "annotation",
        foreground: "cc6666"
      }, {
        token: "type",
        foreground: "3DC9B0"
      }, {
        token: "delimiter",
        foreground: "DCDCDC"
      }, {
        token: "delimiter.html",
        foreground: "808080"
      }, {
        token: "delimiter.xml",
        foreground: "808080"
      }, {
        token: "tag",
        foreground: "569CD6"
      }, {
        token: "tag.id.pug",
        foreground: "4F76AC"
      }, {
        token: "tag.class.pug",
        foreground: "4F76AC"
      }, {
        token: "meta.scss",
        foreground: "A79873"
      }, {
        token: "meta.tag",
        foreground: "CE9178"
      }, {
        token: "metatag",
        foreground: "DD6A6F"
      }, {
        token: "metatag.content.html",
        foreground: "9CDCFE"
      }, {
        token: "metatag.html",
        foreground: "569CD6"
      }, {
        token: "metatag.xml",
        foreground: "569CD6"
      }, {
        token: "metatag.php",
        fontStyle: "bold"
      }, {
        token: "key",
        foreground: "9CDCFE"
      }, {
        token: "string.key.json",
        foreground: "9CDCFE"
      }, {
        token: "string.value.json",
        foreground: "CE9178"
      }, {
        token: "attribute.name",
        foreground: "9CDCFE"
      }, {
        token: "attribute.value",
        foreground: "CE9178"
      }, {
        token: "attribute.value.number.css",
        foreground: "B5CEA8"
      }, {
        token: "attribute.value.unit.css",
        foreground: "B5CEA8"
      }, {
        token: "attribute.value.hex.css",
        foreground: "D4D4D4"
      }, {
        token: "string",
        foreground: "CE9178"
      }, {
        token: "string.sql",
        foreground: "FF0000"
      }, {
        token: "keyword",
        foreground: "569CD6"
      }, {
        token: "keyword.flow",
        foreground: "C586C0"
      }, {
        token: "keyword.json",
        foreground: "CE9178"
      }, {
        token: "keyword.flow.scss",
        foreground: "569CD6"
      }, {
        token: "operator.scss",
        foreground: "909090"
      }, {
        token: "operator.sql",
        foreground: "778899"
      }, {
        token: "operator.swift",
        foreground: "909090"
      }, {
        token: "predefined.sql",
        foreground: "FF00FF"
      }],
      colors: {
        [fn.cv]: "#1E1E1E",
        [fn.NO]: "#D4D4D4",
        [fn.ES]: "#3A3D41",
        [pn.tR]: "#404040",
        [pn.Ym]: "#707070",
        [fn.Rz]: "#ADD6FF26"
      }
    },
    as = {
      base: "hc-black",
      inherit: !1,
      rules: [{
        token: "",
        foreground: "FFFFFF",
        background: "000000"
      }, {
        token: "invalid",
        foreground: "f44747"
      }, {
        token: "emphasis",
        fontStyle: "italic"
      }, {
        token: "strong",
        fontStyle: "bold"
      }, {
        token: "variable",
        foreground: "1AEBFF"
      }, {
        token: "variable.parameter",
        foreground: "9CDCFE"
      }, {
        token: "constant",
        foreground: "569CD6"
      }, {
        token: "comment",
        foreground: "608B4E"
      }, {
        token: "number",
        foreground: "FFFFFF"
      }, {
        token: "regexp",
        foreground: "C0C0C0"
      }, {
        token: "annotation",
        foreground: "569CD6"
      }, {
        token: "type",
        foreground: "3DC9B0"
      }, {
        token: "delimiter",
        foreground: "FFFF00"
      }, {
        token: "delimiter.html",
        foreground: "FFFF00"
      }, {
        token: "tag",
        foreground: "569CD6"
      }, {
        token: "tag.id.pug",
        foreground: "4F76AC"
      }, {
        token: "tag.class.pug",
        foreground: "4F76AC"
      }, {
        token: "meta",
        foreground: "D4D4D4"
      }, {
        token: "meta.tag",
        foreground: "CE9178"
      }, {
        token: "metatag",
        foreground: "569CD6"
      }, {
        token: "metatag.content.html",
        foreground: "1AEBFF"
      }, {
        token: "metatag.html",
        foreground: "569CD6"
      }, {
        token: "metatag.xml",
        foreground: "569CD6"
      }, {
        token: "metatag.php",
        fontStyle: "bold"
      }, {
        token: "key",
        foreground: "9CDCFE"
      }, {
        token: "string.key",
        foreground: "9CDCFE"
      }, {
        token: "string.value",
        foreground: "CE9178"
      }, {
        token: "attribute.name",
        foreground: "569CD6"
      }, {
        token: "attribute.value",
        foreground: "3FF23F"
      }, {
        token: "string",
        foreground: "CE9178"
      }, {
        token: "string.sql",
        foreground: "FF0000"
      }, {
        token: "keyword",
        foreground: "569CD6"
      }, {
        token: "keyword.flow",
        foreground: "C586C0"
      }, {
        token: "operator.sql",
        foreground: "778899"
      }, {
        token: "operator.swift",
        foreground: "909090"
      }, {
        token: "predefined.sql",
        foreground: "FF00FF"
      }],
      colors: {
        [fn.cv]: "#000000",
        [fn.NO]: "#FFFFFF",
        [pn.tR]: "#FFFFFF",
        [pn.Ym]: "#FFFFFF"
      }
    };
  var ls = i(92321);
  const cs = "vs",
    ds = "vs-dark",
    hs = "hc-black",
    us = Uo.B.as(fn.IP.ColorContribution),
    gs = Uo.B.as(mn.IP.ThemingContribution);
  class ps {
    constructor(e, t) {
      ((this.semanticHighlighting = !1), (this.themeData = t));
      let i = t.base;
      (e.length > 0 ? (fs(e) ? (this.id = e) : (this.id = i + " " + e), (this.themeName = e)) : ((this.id = i), (this.themeName = i)), (this.colors = null), (this.defaultColors = Object.create(null)), (this._tokenTheme = null));
    }
    get base() {
      return this.themeData.base;
    }
    notifyBaseUpdated() {
      this.themeData.inherit && ((this.colors = null), (this._tokenTheme = null));
    }
    getColors() {
      if (!this.colors) {
        const e = new Map();
        for (let t in this.themeData.colors) e.set(t, Qo.Il.fromHex(this.themeData.colors[t]));
        if (this.themeData.inherit) {
          let t = ms(this.themeData.base);
          for (let i in t.colors) e.has(i) || e.set(i, Qo.Il.fromHex(t.colors[i]));
        }
        this.colors = e;
      }
      return this.colors;
    }
    getColor(e, t) {
      const i = this.getColors().get(e);
      return i || (!1 !== t ? this.getDefault(e) : void 0);
    }
    getDefault(e) {
      let t = this.defaultColors[e];
      return (t || ((t = us.resolveDefaultColor(e, this)), (this.defaultColors[e] = t), t));
    }
    defines(e) {
      return Object.prototype.hasOwnProperty.call(this.getColors(), e);
    }
    get type() {
      switch (this.base) {
        case cs:
          return ls.e.LIGHT;
        case hs:
          return ls.e.HIGH_CONTRAST;
        default:
          return ls.e.DARK;
      }
    }
    get tokenTheme() {
      if (!this._tokenTheme) {
        let e = [],
          t = [];
        if (this.themeData.inherit) {
          let i = ms(this.themeData.base);
          ((e = i.rules), i.encodedTokensColors && (t = i.encodedTokensColors));
        }
        const i = this.themeData.colors["editor.foreground"],
          n = this.themeData.colors["editor.background"];
        if (i || n) {
          const t = {
            token: ""
          };
          (i && (t.foreground = i), n && (t.background = n), e.push(t));
        }
        ((e = e.concat(this.themeData.rules)), this.themeData.encodedTokensColors && (t = this.themeData.encodedTokensColors), (this._tokenTheme = ts.createFromRawTokenTheme(e, t)));
      }
      return this._tokenTheme;
    }
    getTokenStyleMetadata(e, t, i) {
      const n = this.tokenTheme._match([e].concat(t).join(".")).metadata,
        o = be.NX.getForeground(n),
        s = be.NX.getFontStyle(n);
      return {
        foreground: o,
        italic: Boolean(1 & s),
        bold: Boolean(2 & s),
        underline: Boolean(4 & s)
      };
    }
  }
  function fs(e) {
    return e === cs || e === ds || e === hs;
  }
  function ms(e) {
    switch (e) {
      case cs:
        return ss;
      case ds:
        return rs;
      case hs:
        return as;
    }
  }
  function vs(e) {
    let t = ms(e);
    return new ps(e, t);
  }
  class _s extends ue.JT {
    constructor() {
      (super(), (this._onColorThemeChange = this._register(new W.Q5())), (this.onDidColorThemeChange = this._onColorThemeChange.event), (this._environment = Object.create(null)), (this._autoDetectHighContrast = !0), (this._knownThemes = new Map()), this._knownThemes.set(cs, vs(cs)), this._knownThemes.set(ds, vs(ds)), this._knownThemes.set(hs, vs(hs)));
      const e = (function () {
        const e = new W.Q5(),
          t = (0, _n.Ks)();
        return (t.onDidChange(() => e.fire()), {
          onDidChange: e.event,
          getCSS() {
            const e = {},
              i = i => {
                let n = i.defaults;
                for (; mn.kS.isThemeIcon(n);) {
                  const e = t.getIcon(n.id);
                  if (!e) return;
                  n = e.defaults;
                }
                const o = n.fontId;
                if (o) {
                  const s = t.getIconFont(o);
                  if (s) return ((e[o] = s), `.codicon-${i.id}:before { content: '${n.fontCharacter}'; font-family: ${(0, Q._h)(o)}; }`);
                }
                return `.codicon-${i.id}:before { content: '${n.fontCharacter}'; }`;
              },
              n = [];
            for (let e of t.getIcons()) {
              const t = i(e);
              t && n.push(t);
            }
            for (let t in e) {
              const i = e[t].definition.src.map(e => `${(0, Q.wY)(e.location)} format('${e.format}')`).join(", ");
              n.push(`@font-face { src: ${i}; font-family: ${(0, Q._h)(t)}; font-display: block; }`);
            }
            return n.join("\n");
          }
        });
      })();
      ((this._codiconCSS = e.getCSS()), (this._themeCSS = ""), (this._allCSS = `${this._codiconCSS}\n${this._themeCSS}`), (this._globalStyleElement = null), (this._styleElements = []), (this._colorMapOverride = null), this.setTheme(cs), e.onDidChange(() => {
        ((this._codiconCSS = e.getCSS()), this._updateCSS());
      }), Q.uB("(forced-colors: active)", () => {
        this._updateActualTheme();
      }));
    }
    registerEditorContainer(e) {
      return Q.OO(e) ? this._registerShadowDomContainer(e) : this._registerRegularEditorContainer();
    }
    _registerRegularEditorContainer() {
      return (this._globalStyleElement || ((this._globalStyleElement = Q.dS()), (this._globalStyleElement.className = "monaco-colors"), (this._globalStyleElement.textContent = this._allCSS), this._styleElements.push(this._globalStyleElement)), ue.JT.None);
    }
    _registerShadowDomContainer(e) {
      const t = Q.dS(e);
      return ((t.className = "monaco-colors"), (t.textContent = this._allCSS), this._styleElements.push(t), {
        dispose: () => {
          for (let e = 0; e < this._styleElements.length; e++) if (this._styleElements[e] === t) return void this._styleElements.splice(e, 1);
        }
      });
    }
    defineTheme(e, t) {
      if (!/^[a-z0-9\-]+$/i.test(e)) throw new Error("Illegal theme name!");
      if (!fs(t.base) && !fs(e)) throw new Error("Illegal theme base!");
      (this._knownThemes.set(e, new ps(e, t)), fs(e) && this._knownThemes.forEach(t => {
        t.base === e && t.notifyBaseUpdated();
      }), this._theme.themeName === e && this.setTheme(e));
    }
    getColorTheme() {
      return this._theme;
    }
    setColorMapOverride(e) {
      ((this._colorMapOverride = e), this._updateThemeOrColorMap());
    }
    setTheme(e) {
      let t;
      ((t = this._knownThemes.has(e) ? this._knownThemes.get(e) : this._knownThemes.get(cs)), (this._desiredTheme = t), this._updateActualTheme());
    }
    _updateActualTheme() {
      const e = this._autoDetectHighContrast && window.matchMedia("(forced-colors: active)").matches ? this._knownThemes.get(hs) : this._desiredTheme;
      this._theme !== e && ((this._theme = e), this._updateThemeOrColorMap());
    }
    setAutoDetectHighContrast(e) {
      ((this._autoDetectHighContrast = e), this._updateActualTheme());
    }
    _updateThemeOrColorMap() {
      let e = [],
        t = {},
        i = {
          addRule: i => {
            t[i] || (e.push(i), (t[i] = !0));
          }
        };
      gs.getThemingParticipants().forEach(e => e(this._theme, i, this._environment));
      const n = this._colorMapOverride || this._theme.tokenTheme.getColorMap();
      (i.addRule((function (e) {
        let t = [];
        for (let i = 1, n = e.length; i < n; i++) {
          let n = e[i];
          t[i] = `.mtk${i} { color: ${n}; }`;
        }
        return (t.push(".mtki { font-style: italic; }"), t.push(".mtkb { font-weight: bold; }"), t.push(".mtku { text-decoration: underline; text-underline-position: under; }"), t.join("\n"));
      })(n)), (this._themeCSS = e.join("\n")), this._updateCSS(), be.RW.setColorMap(n), this._onColorThemeChange.fire(this._theme));
    }
    _updateCSS() {
      ((this._allCSS = `${this._codiconCSS}\n${this._themeCSS}`), this._styleElements.forEach(e => (e.textContent = this._allCSS)));
    }
    getFileIconTheme() {
      return {
        hasFileIcons: !1,
        hasFolderIcons: !1,
        hidesExplorerArrows: !1
      };
    }
  }
  var bs = i(53725),
    ws = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    ys = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const Cs = "data-keybinding-context";
  class xs {
    constructor(e, t) {
      ((this._id = e), (this._parent = t), (this._value = Object.create(null)), (this._value._contextId = e));
    }
    setValue(e, t) {
      return this._value[e] !== t && ((this._value[e] = t), !0);
    }
    removeValue(e) {
      return e in this._value && (delete this._value[e], !0);
    }
    getValue(e) {
      const t = this._value[e];
      return void 0 === t && this._parent ? this._parent.getValue(e) : t;
    }
  }
  class Ss extends xs {
    constructor() {
      super(-1, null);
    }
    setValue(e, t) {
      return !1;
    }
    removeValue(e) {
      return !1;
    }
    getValue(e) {}
  }
  Ss.INSTANCE = new Ss();
  class ks extends xs {
    constructor(e, t, i) {
      (super(e, null), (this._configurationService = t), (this._values = J.Id.forConfigKeys()), (this._listener = this._configurationService.onDidChangeConfiguration(e => {
        if (6 === e.source) {
          const e = Array.from(bs.$.map(this._values, ([e]) => e));
          (this._values.clear(), i.fire(new Ds(e)));
        } else {
          const t = [];
          for (const i of e.affectedKeys) {
            const e = `config.${i}`,
              n = this._values.findSuperstr(e);
            (void 0 !== n && (t.push(...bs.$.map(n, ([e]) => e)), this._values.deleteSuperstr(e)), this._values.has(e) && (t.push(e), this._values.delete(e)));
          }
          i.fire(new Ds(t));
        }
      })));
    }
    dispose() {
      this._listener.dispose();
    }
    getValue(e) {
      if (0 !== e.indexOf(ks._keyPrefix)) return super.getValue(e);
      if (this._values.has(e)) return this._values.get(e);
      const t = e.substr(ks._keyPrefix.length),
        i = this._configurationService.getValue(t);
      let n;
      switch (typeof i) {
        case "number":
        case "boolean":
        case "string":
          n = i;
          break;
        default:
          n = Array.isArray(i) ? JSON.stringify(i) : i;
      }
      return (this._values.set(e, n), n);
    }
    setValue(e, t) {
      return super.setValue(e, t);
    }
    removeValue(e) {
      return super.removeValue(e);
    }
  }
  ks._keyPrefix = "config.";
  class Ls {
    constructor(e, t, i) {
      ((this._service = e), (this._key = t), (this._defaultValue = i), this.reset());
    }
    set(e) {
      this._service.setContext(this._key, e);
    }
    reset() {
      void 0 === this._defaultValue ? this._service.removeContext(this._key) : this._service.setContext(this._key, this._defaultValue);
    }
    get() {
      return this._service.getContextKeyValue(this._key);
    }
  }
  class Ns {
    constructor(e) {
      this.key = e;
    }
    affectsSome(e) {
      return e.has(this.key);
    }
  }
  class Ds {
    constructor(e) {
      this.keys = e;
    }
    affectsSome(e) {
      for (const t of this.keys) if (e.has(t)) return !0;
      return !1;
    }
  }
  class Is {
    constructor(e) {
      this.events = e;
    }
    affectsSome(e) {
      for (const t of this.events) if (t.affectsSome(e)) return !0;
      return !1;
    }
  }
  class Es {
    constructor(e) {
      ((this._onDidChangeContext = new W.K3({
        merge: e => new Is(e)
      })), (this.onDidChangeContext = this._onDidChangeContext.event), (this._isDisposed = !1), (this._myContextId = e));
    }
    createKey(e, t) {
      if (this._isDisposed) throw new Error("AbstractContextKeyService has been disposed");
      return new Ls(this, e, t);
    }
    bufferChangeEvents(e) {
      this._onDidChangeContext.pause();
      try {
        e();
      } finally {
        this._onDidChangeContext.resume();
      }
    }
    createScoped(e) {
      if (this._isDisposed) throw new Error("AbstractContextKeyService has been disposed");
      return new Ms(this, e);
    }
    contextMatchesRules(e) {
      if (this._isDisposed) throw new Error("AbstractContextKeyService has been disposed");
      const t = this.getContextValuesContainer(this._myContextId);
      return Si.contextMatchesRules(t, e);
    }
    getContextKeyValue(e) {
      if (!this._isDisposed) return this.getContextValuesContainer(this._myContextId).getValue(e);
    }
    setContext(e, t) {
      if (this._isDisposed) return;
      const i = this.getContextValuesContainer(this._myContextId);
      i && i.setValue(e, t) && this._onDidChangeContext.fire(new Ns(e));
    }
    removeContext(e) {
      this._isDisposed || (this.getContextValuesContainer(this._myContextId).removeValue(e) && this._onDidChangeContext.fire(new Ns(e)));
    }
    getContext(e) {
      return this._isDisposed ? Ss.INSTANCE : this.getContextValuesContainer((function (e) {
        for (; e;) {
          if (e.hasAttribute(Cs)) {
            const t = e.getAttribute(Cs);
            return t ? parseInt(t, 10) : NaN;
          }
          e = e.parentElement;
        }
        return 0;
      })(e));
    }
  }
  let Ts = class extends Es {
    constructor(e) {
      (super(0), (this._contexts = new Map()), (this._toDispose = new ue.SL()), (this._lastContextId = 0));
      const t = new ks(this._myContextId, e, this._onDidChangeContext);
      (this._contexts.set(this._myContextId, t), this._toDispose.add(t));
    }
    dispose() {
      (this._onDidChangeContext.dispose(), (this._isDisposed = !0), this._toDispose.dispose());
    }
    getContextValuesContainer(e) {
      return this._isDisposed ? Ss.INSTANCE : this._contexts.get(e) || Ss.INSTANCE;
    }
    createChildContext(e = this._myContextId) {
      if (this._isDisposed) throw new Error("ContextKeyService has been disposed");
      let t = ++this._lastContextId;
      return (this._contexts.set(t, new xs(t, this.getContextValuesContainer(e))), t);
    }
    disposeContext(e) {
      this._isDisposed || this._contexts.delete(e);
    }
  };
  Ts = ws([ys(0, gi.Ui)], Ts);
  class Ms extends Es {
    constructor(e, t) {
      if ((super(e.createChildContext()), (this._parentChangeListener = new ue.XK()), (this._parent = e), this._updateParentChangeListener(), (this._domNode = t), this._domNode.hasAttribute(Cs))) {
        let e = "";
        (this._domNode.classList && (e = Array.from(this._domNode.classList.values()).join(", ")), console.error("Element already has context attribute" + (e ? ": " + e : "")));
      }
      this._domNode.setAttribute(Cs, String(this._myContextId));
    }
    _updateParentChangeListener() {
      this._parentChangeListener.value = this._parent.onDidChangeContext(this._onDidChangeContext.fire, this._onDidChangeContext);
    }
    dispose() {
      this._isDisposed || (this._onDidChangeContext.dispose(), this._parent.disposeContext(this._myContextId), this._parentChangeListener.dispose(), this._domNode.removeAttribute(Cs), (this._isDisposed = !0));
    }
    getContextValuesContainer(e) {
      return this._isDisposed ? Ss.INSTANCE : this._parent.getContextValuesContainer(e);
    }
    createChildContext(e = this._myContextId) {
      if (this._isDisposed) throw new Error("ScopedContextKeyService has been disposed");
      return this._parent.createChildContext(e);
    }
    disposeContext(e) {
      this._isDisposed || this._parent.disposeContext(e);
    }
  }
  (ne.P.registerCommand(xi.Eq, function (e, t, i) {
    e.get(xi.i6).createKey(String(t), i);
  }), ne.P.registerCommand({
    id: "getContextKeyInfo",
    handler: () => [...xi.uy.all()].sort((e, t) => e.key.localeCompare(t.key)),
    description: {
      description: (0, bi.N)("getContextKeyInfo", "A command that returns information about context keys"),
      args: []
    }
  }), ne.P.registerCommand("_generateContextKeyInfo", function () {
    const e = [],
      t = new Set();
    for (let i of xi.uy.all()) t.has(i.key) || (t.add(i.key), e.push(i));
    (e.sort((e, t) => e.key.localeCompare(t.key)), console.log(JSON.stringify(e, void 0, 2)));
  }));
  var As,
    Os = i(10829),
    Ps = i(23938),
    Rs = i(16268),
    Fs = i(10553),
    Bs = i(76033),
    Vs = i(28609),
    Ws = i(10161),
    Hs = i(61134);
  i(2170);
  function zs(e, t, i) {
    const n = i.mode === As.ALIGN ? i.offset : i.offset + i.size,
      o = i.mode === As.ALIGN ? i.offset + i.size : i.offset;
    return 0 === i.position ? t <= e - n ? n : t <= o ? o - t : Math.max(e - t, 0) : t <= o ? o - t : t <= e - n ? n : 0;
  }
  !(function (e) {
    ((e[(e.AVOID = 0)] = "AVOID"), (e[(e.ALIGN = 1)] = "ALIGN"));
  })(As || (As = {}));
  class js extends ue.JT {
    constructor(e, t) {
      (super(), (this.container = null), (this.delegate = null), (this.toDisposeOnClean = ue.JT.None), (this.toDisposeOnSetContainer = ue.JT.None), (this.shadowRoot = null), (this.shadowRootHostElement = null), (this.view = Q.$(".context-view")), (this.useFixedPosition = !1), (this.useShadowDOM = !1), Q.Cp(this.view), this.setContainer(e, t), this._register((0, ue.OF)(() => this.setContainer(null, 1))));
    }
    setContainer(e, t) {
      var i;
      if ((this.container && (this.toDisposeOnSetContainer.dispose(), this.shadowRoot ? (this.shadowRoot.removeChild(this.view), (this.shadowRoot = null), null === (i = this.shadowRootHostElement) || void 0 === i || i.remove(), (this.shadowRootHostElement = null)) : this.container.removeChild(this.view), (this.container = null)), e)) {
        if (((this.container = e), (this.useFixedPosition = 1 !== t), (this.useShadowDOM = 3 === t), this.useShadowDOM)) {
          ((this.shadowRootHostElement = Q.$(".shadow-root-host")), this.container.appendChild(this.shadowRootHostElement), (this.shadowRoot = this.shadowRootHostElement.attachShadow({
            mode: "open"
          })));
          const e = document.createElement("style");
          ((e.textContent = Us), this.shadowRoot.appendChild(e), this.shadowRoot.appendChild(this.view), this.shadowRoot.appendChild(Q.$("slot")));
        } else this.container.appendChild(this.view);
        const i = new ue.SL();
        (js.BUBBLE_UP_EVENTS.forEach(e => {
          i.add(Q.mu(this.container, e, e => {
            this.onDOMEvent(e, !1);
          }));
        }), js.BUBBLE_DOWN_EVENTS.forEach(e => {
          i.add(Q.mu(this.container, e, e => {
            this.onDOMEvent(e, !0);
          }, !0));
        }), (this.toDisposeOnSetContainer = i));
      }
    }
    show(e) {
      (this.isVisible() && this.hide(), Q.PO(this.view), (this.view.className = "context-view"), (this.view.style.top = "0px"), (this.view.style.left = "0px"), (this.view.style.zIndex = "2500"), (this.view.style.position = this.useFixedPosition ? "fixed" : "absolute"), Q.$Z(this.view), (this.toDisposeOnClean = e.render(this.view) || ue.JT.None), (this.delegate = e), this.doLayout(), this.delegate.focus && this.delegate.focus());
    }
    getViewElement() {
      return this.view;
    }
    layout() {
      this.isVisible() && (!1 !== this.delegate.canRelayout || (Le.gn && Ws.D.pointerEvents) ? (this.delegate.layout && this.delegate.layout(), this.doLayout()) : this.hide());
    }
    doLayout() {
      if (!this.isVisible()) return;
      let e,
        t = this.delegate.getAnchor();
      if (Q.Re(t)) {
        let i = Q.i(t);
        e = {
          top: i.top,
          left: i.left,
          width: i.width,
          height: i.height
        };
      } else e = {
        top: t.y,
        left: t.x,
        width: t.width || 1,
        height: t.height || 2
      };
      const i = Q.w(this.view),
        n = Q.wn(this.view),
        o = this.delegate.anchorPosition || 0,
        s = this.delegate.anchorAlignment || 0;
      let r, a;
      if (0 === (this.delegate.anchorAxisAlignment || 0)) {
        const t = {
            offset: e.top - window.pageYOffset,
            size: e.height,
            position: 0 === o ? 0 : 1
          },
          l = {
            offset: e.left,
            size: e.width,
            position: 0 === s ? 0 : 1,
            mode: As.ALIGN
          };
        ((r = zs(window.innerHeight, n, t) + window.pageYOffset), Hs.e.intersects({
          start: r,
          end: r + n
        }, {
          start: t.offset,
          end: t.offset + t.size
        }) && (l.mode = As.AVOID), (a = zs(window.innerWidth, i, l)));
      } else {
        const t = {
            offset: e.left,
            size: e.width,
            position: 0 === s ? 0 : 1
          },
          l = {
            offset: e.top,
            size: e.height,
            position: 0 === o ? 0 : 1,
            mode: As.ALIGN
          };
        ((a = zs(window.innerWidth, i, t)), Hs.e.intersects({
          start: a,
          end: a + i
        }, {
          start: t.offset,
          end: t.offset + t.size
        }) && (l.mode = As.AVOID), (r = zs(window.innerHeight, n, l) + window.pageYOffset));
      }
      (this.view.classList.remove("top", "bottom", "left", "right"), this.view.classList.add(0 === o ? "bottom" : "top"), this.view.classList.add(0 === s ? "left" : "right"), this.view.classList.toggle("fixed", this.useFixedPosition));
      const l = Q.i(this.container);
      ((this.view.style.top = r - (this.useFixedPosition ? Q.i(this.view).top : l.top) + "px"), (this.view.style.left = a - (this.useFixedPosition ? Q.i(this.view).left : l.left) + "px"), (this.view.style.width = "initial"));
    }
    hide(e) {
      const t = this.delegate;
      ((this.delegate = null), (null == t ? void 0 : t.onHide) && t.onHide(e), this.toDisposeOnClean.dispose(), Q.Cp(this.view));
    }
    isVisible() {
      return !!this.delegate;
    }
    onDOMEvent(e, t) {
      this.delegate && (this.delegate.onDOMEvent ? this.delegate.onDOMEvent(e, document.activeElement) : t && !Q.jg(e.target, this.container) && this.hide());
    }
    dispose() {
      (this.hide(), super.dispose());
    }
  }
  ((js.BUBBLE_UP_EVENTS = ["click", "keydown", "focus", "blur"]), (js.BUBBLE_DOWN_EVENTS = ["click"]));
  let Us = '\n\t:host {\n\t\tall: initial; /* 1st rule so subsequent properties are reset. */\n\t}\n\n\t@font-face {\n\t\tfont-family: "codicon";\n\t\tfont-display: block;\n\t\tsrc: url("./codicon.ttf?5d4d76ab2ce5108968ad644d591a16a6") format("truetype");\n\t}\n\n\t.codicon[class*=\'codicon-\'] {\n\t\tfont: normal normal normal 16px/1 codicon;\n\t\tdisplay: inline-block;\n\t\ttext-decoration: none;\n\t\ttext-rendering: auto;\n\t\ttext-align: center;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\tuser-select: none;\n\t\t-webkit-user-select: none;\n\t\t-ms-user-select: none;\n\t}\n\n\t:host {\n\t\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "HelveticaNeue-Light", system-ui, "Ubuntu", "Droid Sans", sans-serif;\n\t}\n\n\t:host-context(.mac) { font-family: -apple-system, BlinkMacSystemFont, sans-serif; }\n\t:host-context(.mac:lang(zh-Hans)) { font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", sans-serif; }\n\t:host-context(.mac:lang(zh-Hant)) { font-family: -apple-system, BlinkMacSystemFont, "PingFang TC", sans-serif; }\n\t:host-context(.mac:lang(ja)) { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic Pro", sans-serif; }\n\t:host-context(.mac:lang(ko)) { font-family: -apple-system, BlinkMacSystemFont, "Nanum Gothic", "Apple SD Gothic Neo", "AppleGothic", sans-serif; }\n\n\t:host-context(.windows) { font-family: "Segoe WPC", "Segoe UI", sans-serif; }\n\t:host-context(.windows:lang(zh-Hans)) { font-family: "Segoe WPC", "Segoe UI", "Microsoft YaHei", sans-serif; }\n\t:host-context(.windows:lang(zh-Hant)) { font-family: "Segoe WPC", "Segoe UI", "Microsoft Jhenghei", sans-serif; }\n\t:host-context(.windows:lang(ja)) { font-family: "Segoe WPC", "Segoe UI", "Yu Gothic UI", "Meiryo UI", sans-serif; }\n\t:host-context(.windows:lang(ko)) { font-family: "Segoe WPC", "Segoe UI", "Malgun Gothic", "Dotom", sans-serif; }\n\n\t:host-context(.linux) { font-family: system-ui, "Ubuntu", "Droid Sans", sans-serif; }\n\t:host-context(.linux:lang(zh-Hans)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans SC", "Source Han Sans CN", "Source Han Sans", sans-serif; }\n\t:host-context(.linux:lang(zh-Hant)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans TC", "Source Han Sans TW", "Source Han Sans", sans-serif; }\n\t:host-context(.linux:lang(ja)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans J", "Source Han Sans JP", "Source Han Sans", sans-serif; }\n\t:host-context(.linux:lang(ko)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans K", "Source Han Sans JR", "Source Han Sans", "UnDotum", "FBaekmuk Gulim", sans-serif; }\n';
  var $s = i(21212);
  const Ks = /\(&([^\s&])\)|(^|[^&])&([^\s&])/,
    qs = /(&amp;)?(&amp;)([^\s&])/g,
    Zs = (0, vn.CM)("menu-selection", vn.lA.check),
    Gs = (0, vn.CM)("menu-submenu", vn.lA.chevronRight);
  var Ys;
  !(function (e) {
    ((e[(e.Right = 0)] = "Right"), (e[(e.Left = 1)] = "Left"));
  })(Ys || (Ys = {}));
  class Qs extends dn.o {
    constructor(e, t, i = {}) {
      (e.classList.add("monaco-menu-container"), e.setAttribute("role", "presentation"));
      const n = document.createElement("div");
      (n.classList.add("monaco-menu"), n.setAttribute("role", "presentation"), super(n, {
        orientation: 1,
        actionViewItemProvider: e => this.doGetActionViewItem(e, i, o),
        context: i.context,
        actionRunner: i.actionRunner,
        ariaLabel: i.ariaLabel,
        focusOnlyEnabledItems: !0,
        triggerKeys: {
          keys: [3, ...(Le.dz || Le.IJ ? [10] : [])],
          keyDown: !0
        }
      }), (this.menuElement = n), this.actionsList.setAttribute("role", "menu"), (this.actionsList.tabIndex = 0), (this.menuDisposables = this._register(new ue.SL())), this.initializeStyleSheet(e), this._register(Fs.o.addTarget(n)), (0, Q.nm)(n, Q.tw.KEY_DOWN, e => {
        new ri.y(e).equals(2) && e.preventDefault();
      }), i.enableMnemonics && this.menuDisposables.add((0, Q.nm)(n, Q.tw.KEY_DOWN, e => {
        const t = e.key.toLocaleLowerCase();
        if (this.mnemonics.has(t)) {
          Q.zB.stop(e, !0);
          const i = this.mnemonics.get(t);
          if ((1 === i.length && (i[0] instanceof Js && i[0].container && this.focusItemByElement(i[0].container), i[0].onClick(e)), i.length > 1)) {
            const e = i.shift();
            (e && e.container && (this.focusItemByElement(e.container), i.push(e)), this.mnemonics.set(t, i));
          }
        }
      })), Le.IJ && this._register((0, Q.nm)(n, Q.tw.KEY_DOWN, e => {
        const t = new ri.y(e);
        t.equals(14) || t.equals(11) ? ((this.focusedItem = this.viewItems.length - 1), this.focusNext(), Q.zB.stop(e, !0)) : (t.equals(13) || t.equals(12)) && ((this.focusedItem = 0), this.focusPrevious(), Q.zB.stop(e, !0));
      })), this._register((0, Q.nm)(this.domNode, Q.tw.MOUSE_OUT, e => {
        let t = e.relatedTarget;
        (0, Q.jg)(t, this.domNode) || ((this.focusedItem = void 0), this.updateFocus(), e.stopPropagation());
      })), this._register((0, Q.nm)(this.actionsList, Q.tw.MOUSE_OVER, e => {
        let t = e.target;
        if (t && (0, Q.jg)(t, this.actionsList) && t !== this.actionsList) {
          for (; t.parentElement !== this.actionsList && null !== t.parentElement;) t = t.parentElement;
          if (t.classList.contains("action-item")) {
            const e = this.focusedItem;
            (this.setFocusedItem(t), e !== this.focusedItem && this.updateFocus());
          }
        }
      })), this._register(Fs.o.addTarget(this.actionsList)), this._register((0, Q.nm)(this.actionsList, Fs.t.Tap, e => {
        let t = e.initialTarget;
        if (t && (0, Q.jg)(t, this.actionsList) && t !== this.actionsList) {
          for (; t.parentElement !== this.actionsList && null !== t.parentElement;) t = t.parentElement;
          if (t.classList.contains("action-item")) {
            const e = this.focusedItem;
            (this.setFocusedItem(t), e !== this.focusedItem && this.updateFocus());
          }
        }
      })));
      let o = {
        parent: this
      };
      ((this.mnemonics = new Map()), (this.scrollableElement = this._register(new hn.s$(n, {
        alwaysConsumeMouseWheel: !0,
        horizontal: 2,
        vertical: 3,
        verticalScrollbarSize: 7,
        handleMouseWheel: !0,
        useShadows: !0
      }))));
      const s = this.scrollableElement.getDomNode();
      ((s.style.position = ""), this._register((0, Q.nm)(n, Fs.t.Change, e => {
        Q.zB.stop(e, !0);
        const t = this.scrollableElement.getScrollPosition().scrollTop;
        this.scrollableElement.setScrollPosition({
          scrollTop: t - e.translationY
        });
      })), this._register((0, Q.nm)(s, Q.tw.MOUSE_UP, e => {
        e.preventDefault();
      })), (n.style.maxHeight = `${Math.max(10, window.innerHeight - e.getBoundingClientRect().top - 35)}px`), (t = t.filter(e => {
        var t;
        return (!(null === (t = i.submenuIds) || void 0 === t ? void 0 : t.has(e.id)) || (console.warn(`Found submenu cycle: ${e.id}`), !1));
      })), this.push(t, {
        icon: !0,
        label: !0,
        isMenu: !0
      }), e.appendChild(this.scrollableElement.getDomNode()), this.scrollableElement.scanDomNode(), this.viewItems.filter(e => !(e instanceof er)).forEach((e, t, i) => {
        e.updatePositionInSet(t + 1, i.length);
      }));
    }
    initializeStyleSheet(e) {
      (0, Q.OO)(e) ? ((this.styleSheet = (0, Q.dS)(e)), (this.styleSheet.textContent = tr)) : (Qs.globalStyleSheet || ((Qs.globalStyleSheet = (0, Q.dS)()), (Qs.globalStyleSheet.textContent = tr)), (this.styleSheet = Qs.globalStyleSheet));
    }
    style(e) {
      const t = this.getContainer(),
        i = e.foregroundColor ? `${e.foregroundColor}` : "",
        n = e.backgroundColor ? `${e.backgroundColor}` : "",
        o = e.borderColor ? `1px solid ${e.borderColor}` : "",
        s = e.shadowColor ? `0 2px 4px ${e.shadowColor}` : "";
      ((t.style.border = o), (this.domNode.style.color = i), (this.domNode.style.backgroundColor = n), (t.style.boxShadow = s), this.viewItems && this.viewItems.forEach(t => {
        (t instanceof Xs || t instanceof er) && t.style(e);
      }));
    }
    getContainer() {
      return this.scrollableElement.getDomNode();
    }
    get onScroll() {
      return this.scrollableElement.onScroll;
    }
    focusItemByElement(e) {
      const t = this.focusedItem;
      (this.setFocusedItem(e), t !== this.focusedItem && this.updateFocus());
    }
    setFocusedItem(e) {
      for (let t = 0; t < this.actionsList.children.length; t++) {
        if (e === this.actionsList.children[t]) {
          this.focusedItem = t;
          break;
        }
      }
    }
    updateFocus(e) {
      (super.updateFocus(e, !0), void 0 !== this.focusedItem && this.scrollableElement.setScrollPosition({
        scrollTop: Math.round(this.menuElement.scrollTop)
      }));
    }
    doGetActionViewItem(e, t, i) {
      if (e instanceof un.Z0) return new er(t.context, e, {
        icon: !0
      });
      if (e instanceof un.wY) {
        const n = new Js(e, e.actions, i, Object.assign(Object.assign({}, t), {
          submenuIds: new Set([...(t.submenuIds || []), e.id])
        }));
        if (t.enableMnemonics) {
          const e = n.getMnemonic();
          if (e && n.isEnabled()) {
            let t = [];
            (this.mnemonics.has(e) && (t = this.mnemonics.get(e)), t.push(n), this.mnemonics.set(e, t));
          }
        }
        return n;
      }
      {
        const i = {
          enableMnemonics: t.enableMnemonics,
          useEventAsContext: t.useEventAsContext
        };
        if (t.getKeyBinding) {
          const n = t.getKeyBinding(e);
          if (n) {
            const e = n.getLabel();
            e && (i.keybinding = e);
          }
        }
        const n = new Xs(t.context, e, i);
        if (t.enableMnemonics) {
          const e = n.getMnemonic();
          if (e && n.isEnabled()) {
            let t = [];
            (this.mnemonics.has(e) && (t = this.mnemonics.get(e)), t.push(n), this.mnemonics.set(e, t));
          }
        }
        return n;
      }
    }
  }
  class Xs extends Bs.Y {
    constructor(e, t, i = {}) {
      if (((i.isMenu = !0), super(t, t, i), (this.options = i), (this.options.icon = void 0 !== i.icon && i.icon), (this.options.label = void 0 === i.label || i.label), (this.cssClass = ""), this.options.label && i.enableMnemonics)) {
        let e = this.getAction().label;
        if (e) {
          let t = Ks.exec(e);
          t && (this.mnemonic = (t[1] ? t[1] : t[3]).toLocaleLowerCase());
        }
      }
      ((this.runOnceToEnableMouseUp = new Se.pY(() => {
        this.element && (this._register((0, Q.nm)(this.element, Q.tw.MOUSE_UP, e => {
          if ((Q.zB.stop(e, !0), Rs.vU)) {
            if (new Ps.n(e).rightButton) return;
            this.onClick(e);
          } else setTimeout(() => {
            this.onClick(e);
          }, 0);
        })), this._register((0, Q.nm)(this.element, Q.tw.CONTEXT_MENU, e => {
          Q.zB.stop(e, !0);
        })));
      }, 100)), this._register(this.runOnceToEnableMouseUp));
    }
    render(e) {
      (super.render(e), this.element && ((this.container = e), (this.item = (0, Q.R3)(this.element, (0, Q.$)("a.action-menu-item"))), this._action.id === un.Z0.ID ? this.item.setAttribute("role", "presentation") : (this.item.setAttribute("role", "menuitem"), this.mnemonic && this.item.setAttribute("aria-keyshortcuts", `${this.mnemonic}`)), (this.check = (0, Q.R3)(this.item, (0, Q.$)("span.menu-item-check" + Zs.cssSelector))), this.check.setAttribute("role", "none"), (this.label = (0, Q.R3)(this.item, (0, Q.$)("span.action-label"))), this.options.label && this.options.keybinding && ((0, Q.R3)(this.item, (0, Q.$)("span.keybinding")).textContent = this.options.keybinding), this.runOnceToEnableMouseUp.schedule(), this.updateClass(), this.updateLabel(), this.updateTooltip(), this.updateEnabled(), this.updateChecked()));
    }
    blur() {
      (super.blur(), this.applyStyle());
    }
    focus() {
      (super.focus(), this.item && this.item.focus(), this.applyStyle());
    }
    updatePositionInSet(e, t) {
      this.item && (this.item.setAttribute("aria-posinset", `${e}`), this.item.setAttribute("aria-setsize", `${t}`));
    }
    updateLabel() {
      if (this.label && this.options.label) {
        (0, Q.PO)(this.label);
        let e = (0, $s.x$)(this.getAction().label);
        if (e) {
          const t = (function (e) {
            const t = Ks,
              i = t.exec(e);
            if (!i) return e;
            const n = !i[1];
            return e.replace(t, n ? "$2$3" : "").trim();
          })(e);
          (this.options.enableMnemonics || (e = t), this.label.setAttribute("aria-label", t.replace(/&&/g, "&")));
          const i = Ks.exec(e);
          if (i) {
            ((e = De.YU(e)), (qs.lastIndex = 0));
            let t = qs.exec(e);
            for (; t && t[1];) t = qs.exec(e);
            const n = e => e.replace(/&amp;&amp;/g, "&amp;");
            (t ? this.label.append(De.j3(n(e.substr(0, t.index)), " "), (0, Q.$)("u", {
              "aria-hidden": "true"
            }, t[3]), De.oL(n(e.substr(t.index + t[0].length)), " ")) : (this.label.innerText = n(e).trim()), this.item && this.item.setAttribute("aria-keyshortcuts", (i[1] ? i[1] : i[3]).toLocaleLowerCase()));
          } else this.label.innerText = e.replace(/&&/g, "&").trim();
        }
      }
    }
    updateTooltip() {
      let e = null;
      (this.getAction().tooltip ? (e = this.getAction().tooltip) : !this.options.label && this.getAction().label && this.options.icon && ((e = this.getAction().label), this.options.keybinding && (e = bi.N({
        key: "titleLabel",
        comment: ["action title", "action keybinding"]
      }, "{0} ({1})", e, this.options.keybinding))), e && this.item && (this.item.title = e));
    }
    updateClass() {
      (this.cssClass && this.item && this.item.classList.remove(...this.cssClass.split(" ")), this.options.icon && this.label ? ((this.cssClass = this.getAction().class || ""), this.label.classList.add("icon"), this.cssClass && this.label.classList.add(...this.cssClass.split(" ")), this.updateEnabled()) : this.label && this.label.classList.remove("icon"));
    }
    updateEnabled() {
      this.getAction().enabled ? (this.element && (this.element.classList.remove("disabled"), this.element.removeAttribute("aria-disabled")), this.item && (this.item.classList.remove("disabled"), this.item.removeAttribute("aria-disabled"), (this.item.tabIndex = 0))) : (this.element && (this.element.classList.add("disabled"), this.element.setAttribute("aria-disabled", "true")), this.item && (this.item.classList.add("disabled"), this.item.setAttribute("aria-disabled", "true")));
    }
    updateChecked() {
      if (!this.item) return;
      const e = this.getAction().checked;
      (this.item.classList.toggle("checked", !!e), void 0 !== e ? (this.item.setAttribute("role", "menuitemcheckbox"), this.item.setAttribute("aria-checked", e ? "true" : "false")) : (this.item.setAttribute("role", "menuitem"), this.item.setAttribute("aria-checked", "")));
    }
    getMnemonic() {
      return this.mnemonic;
    }
    applyStyle() {
      if (!this.menuStyle) return;
      const e = this.element && this.element.classList.contains("focused"),
        t = e && this.menuStyle.selectionForegroundColor ? this.menuStyle.selectionForegroundColor : this.menuStyle.foregroundColor,
        i = e && this.menuStyle.selectionBackgroundColor ? this.menuStyle.selectionBackgroundColor : void 0,
        n = e && this.menuStyle.selectionBorderColor ? `thin solid ${this.menuStyle.selectionBorderColor}` : "";
      (this.item && ((this.item.style.color = t ? t.toString() : ""), (this.item.style.backgroundColor = i ? i.toString() : "")), this.check && (this.check.style.color = t ? t.toString() : ""), this.container && (this.container.style.border = n));
    }
    style(e) {
      ((this.menuStyle = e), this.applyStyle());
    }
  }
  class Js extends Xs {
    constructor(e, t, i, n) {
      (super(e, e, n), (this.submenuActions = t), (this.parentData = i), (this.submenuOptions = n), (this.mysubmenu = null), (this.submenuDisposables = this._register(new ue.SL())), (this.mouseOver = !1), (this.expandDirection = n && void 0 !== n.expandDirection ? n.expandDirection : Ys.Right), (this.showScheduler = new Se.pY(() => {
        this.mouseOver && (this.cleanupExistingSubmenu(!1), this.createSubmenu(!1));
      }, 250)), (this.hideScheduler = new Se.pY(() => {
        this.element && !(0, Q.jg)((0, Q.vY)(), this.element) && this.parentData.submenu === this.mysubmenu && (this.parentData.parent.focus(!1), this.cleanupExistingSubmenu(!0));
      }, 750)));
    }
    render(e) {
      (super.render(e), this.element && (this.item && (this.item.classList.add("monaco-submenu-item"), (this.item.tabIndex = 0), this.item.setAttribute("aria-haspopup", "true"), this.updateAriaExpanded("false"), (this.submenuIndicator = (0, Q.R3)(this.item, (0, Q.$)("span.submenu-indicator" + Gs.cssSelector))), this.submenuIndicator.setAttribute("aria-hidden", "true")), this._register((0, Q.nm)(this.element, Q.tw.KEY_UP, e => {
        let t = new ri.y(e);
        (t.equals(17) || t.equals(3)) && (Q.zB.stop(e, !0), this.createSubmenu(!0));
      })), this._register((0, Q.nm)(this.element, Q.tw.KEY_DOWN, e => {
        let t = new ri.y(e);
        (0, Q.vY)() === this.item && (t.equals(17) || t.equals(3)) && Q.zB.stop(e, !0);
      })), this._register((0, Q.nm)(this.element, Q.tw.MOUSE_OVER, e => {
        this.mouseOver || ((this.mouseOver = !0), this.showScheduler.schedule());
      })), this._register((0, Q.nm)(this.element, Q.tw.MOUSE_LEAVE, e => {
        this.mouseOver = !1;
      })), this._register((0, Q.nm)(this.element, Q.tw.FOCUS_OUT, e => {
        this.element && !(0, Q.jg)((0, Q.vY)(), this.element) && this.hideScheduler.schedule();
      })), this._register(this.parentData.parent.onScroll(() => {
        (this.parentData.parent.focus(!1), this.cleanupExistingSubmenu(!1));
      }))));
    }
    updateEnabled() {}
    onClick(e) {
      (Q.zB.stop(e, !0), this.cleanupExistingSubmenu(!1), this.createSubmenu(!0));
    }
    cleanupExistingSubmenu(e) {
      if (this.parentData.submenu && (e || this.parentData.submenu !== this.mysubmenu)) {
        try {
          this.parentData.submenu.dispose();
        } catch (e) {}
        ((this.parentData.submenu = void 0), this.updateAriaExpanded("false"), this.submenuContainer && (this.submenuDisposables.clear(), (this.submenuContainer = void 0)));
      }
    }
    calculateSubmenuMenuLayout(e, t, i, n) {
      const o = {
        top: 0,
        left: 0
      };
      return ((o.left = zs(e.width, t.width, {
        position: n === Ys.Right ? 0 : 1,
        offset: i.left,
        size: i.width
      })), o.left >= i.left && o.left < i.left + i.width && (i.left + 10 + t.width <= e.width && (o.left = i.left + 10), (i.top += 10), (i.height = 0)), (o.top = zs(e.height, t.height, {
        position: 0,
        offset: i.top,
        size: 0
      })), o.top + t.height === i.top && o.top + i.height + t.height <= e.height && (o.top += i.height), o);
    }
    createSubmenu(e = !0) {
      if (this.element) if (this.parentData.submenu) this.parentData.submenu.focus(!1);else {
        (this.updateAriaExpanded("true"), (this.submenuContainer = (0, Q.R3)(this.element, (0, Q.$)("div.monaco-submenu"))), this.submenuContainer.classList.add("menubar-menu-items-holder", "context-view"));
        const t = getComputedStyle(this.parentData.parent.domNode),
          i = parseFloat(t.paddingTop || "0") || 0;
        ((this.submenuContainer.style.zIndex = "1"), (this.submenuContainer.style.position = "fixed"), (this.submenuContainer.style.top = "0"), (this.submenuContainer.style.left = "0"), (this.parentData.submenu = new Qs(this.submenuContainer, this.submenuActions.length ? this.submenuActions : [new un.eZ()], this.submenuOptions)), this.menuStyle && this.parentData.submenu.style(this.menuStyle));
        const n = this.element.getBoundingClientRect(),
          o = {
            top: n.top - i,
            left: n.left,
            height: n.height + 2 * i,
            width: n.width
          },
          s = this.submenuContainer.getBoundingClientRect(),
          {
            top: r,
            left: a
          } = this.calculateSubmenuMenuLayout(new Q.Ro(window.innerWidth, window.innerHeight), Q.Ro.lift(s), o, this.expandDirection);
        ((this.submenuContainer.style.left = a - s.left + "px"), (this.submenuContainer.style.top = r - s.top + "px"), this.submenuDisposables.add((0, Q.nm)(this.submenuContainer, Q.tw.KEY_UP, e => {
          new ri.y(e).equals(15) && (Q.zB.stop(e, !0), this.parentData.parent.focus(), this.cleanupExistingSubmenu(!0));
        })), this.submenuDisposables.add((0, Q.nm)(this.submenuContainer, Q.tw.KEY_DOWN, e => {
          new ri.y(e).equals(15) && Q.zB.stop(e, !0);
        })), this.submenuDisposables.add(this.parentData.submenu.onDidCancel(() => {
          (this.parentData.parent.focus(), this.cleanupExistingSubmenu(!0));
        })), this.parentData.submenu.focus(e), (this.mysubmenu = this.parentData.submenu));
      }
    }
    updateAriaExpanded(e) {
      var t;
      this.item && (null === (t = this.item) || void 0 === t || t.setAttribute("aria-expanded", e));
    }
    applyStyle() {
      if ((super.applyStyle(), !this.menuStyle)) return;
      const e = this.element && this.element.classList.contains("focused") && this.menuStyle.selectionForegroundColor ? this.menuStyle.selectionForegroundColor : this.menuStyle.foregroundColor;
      (this.submenuIndicator && (this.submenuIndicator.style.color = e ? `${e}` : ""), this.parentData.submenu && this.parentData.submenu.style(this.menuStyle));
    }
    dispose() {
      (super.dispose(), this.hideScheduler.dispose(), this.mysubmenu && (this.mysubmenu.dispose(), (this.mysubmenu = null)), this.submenuContainer && (this.submenuContainer = void 0));
    }
  }
  class er extends Bs.g {
    style(e) {
      this.label && (this.label.style.borderBottomColor = e.separatorColor ? `${e.separatorColor}` : "");
    }
  }
  let tr = `\n.monaco-menu {\n\tfont-size: 13px;\n\n}\n\n${(0, Vs.a)(Zs)}\n${(0, Vs.a)(Gs)}\n\n.monaco-menu .monaco-action-bar {\n\ttext-align: right;\n\toverflow: hidden;\n\twhite-space: nowrap;\n}\n\n.monaco-menu .monaco-action-bar .actions-container {\n\tdisplay: flex;\n\tmargin: 0 auto;\n\tpadding: 0;\n\twidth: 100%;\n\tjustify-content: flex-end;\n}\n\n.monaco-menu .monaco-action-bar.vertical .actions-container {\n\tdisplay: inline-block;\n}\n\n.monaco-menu .monaco-action-bar.reverse .actions-container {\n\tflex-direction: row-reverse;\n}\n\n.monaco-menu .monaco-action-bar .action-item {\n\tcursor: pointer;\n\tdisplay: inline-block;\n\ttransition: transform 50ms ease;\n\tposition: relative;  /* DO NOT REMOVE - this is the key to preventing the ghosting icon bug in Chrome 42 */\n}\n\n.monaco-menu .monaco-action-bar .action-item.disabled {\n\tcursor: default;\n}\n\n.monaco-menu .monaco-action-bar.animated .action-item.active {\n\ttransform: scale(1.272019649, 1.272019649); /* 1.272019649 = √φ */\n}\n\n.monaco-menu .monaco-action-bar .action-item .icon,\n.monaco-menu .monaco-action-bar .action-item .codicon {\n\tdisplay: inline-block;\n}\n\n.monaco-menu .monaco-action-bar .action-item .codicon {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.monaco-menu .monaco-action-bar .action-label {\n\tfont-size: 11px;\n\tmargin-right: 4px;\n}\n\n.monaco-menu .monaco-action-bar .action-item.disabled .action-label,\n.monaco-menu .monaco-action-bar .action-item.disabled .action-label:hover {\n\topacity: 0.4;\n}\n\n/* Vertical actions */\n\n.monaco-menu .monaco-action-bar.vertical {\n\ttext-align: left;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item {\n\tdisplay: block;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label.separator {\n\tdisplay: block;\n\tborder-bottom: 1px solid #bbb;\n\tpadding-top: 1px;\n\tmargin-left: .8em;\n\tmargin-right: .8em;\n}\n\n.monaco-menu .secondary-actions .monaco-action-bar .action-label {\n\tmargin-left: 6px;\n}\n\n/* Action Items */\n.monaco-menu .monaco-action-bar .action-item.select-container {\n\toverflow: hidden; /* somehow the dropdown overflows its container, we prevent it here to not push */\n\tflex: 1;\n\tmax-width: 170px;\n\tmin-width: 60px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-right: 10px;\n}\n\n.monaco-menu .monaco-action-bar.vertical {\n\tmargin-left: 0;\n\toverflow: visible;\n}\n\n.monaco-menu .monaco-action-bar.vertical .actions-container {\n\tdisplay: block;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item {\n\tpadding: 0;\n\ttransform: none;\n\tdisplay: flex;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item.active {\n\ttransform: none;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-menu-item {\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\theight: 2em;\n\talign-items: center;\n\tposition: relative;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label {\n\tflex: 1 1 auto;\n\ttext-decoration: none;\n\tpadding: 0 1em;\n\tbackground: none;\n\tfont-size: 12px;\n\tline-height: 1;\n}\n\n.monaco-menu .monaco-action-bar.vertical .keybinding,\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator {\n\tdisplay: inline-block;\n\tflex: 2 1 auto;\n\tpadding: 0 1em;\n\ttext-align: right;\n\tfont-size: 12px;\n\tline-height: 1;\n}\n\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator {\n\theight: 100%;\n}\n\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon {\n\tfont-size: 16px !important;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon::before {\n\tmargin-left: auto;\n\tmargin-right: -20px;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item.disabled .keybinding,\n.monaco-menu .monaco-action-bar.vertical .action-item.disabled .submenu-indicator {\n\topacity: 0.4;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator) {\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\tmargin: 0;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item {\n\tposition: static;\n\toverflow: visible;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item .monaco-submenu {\n\tposition: absolute;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label.separator {\n\tpadding: 0.5em 0 0 0;\n\tmargin-bottom: 0.5em;\n\twidth: 100%;\n\theight: 0px !important;\n\tmargin-left: .8em !important;\n\tmargin-right: .8em !important;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label.separator.text {\n\tpadding: 0.7em 1em 0.1em 1em;\n\tfont-weight: bold;\n\topacity: 1;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label:hover {\n\tcolor: inherit;\n}\n\n.monaco-menu .monaco-action-bar.vertical .menu-item-check {\n\tposition: absolute;\n\tvisibility: hidden;\n\twidth: 1em;\n\theight: 100%;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-menu-item.checked .menu-item-check {\n\tvisibility: visible;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n/* Context Menu */\n\n.context-view.monaco-menu-container {\n\toutline: 0;\n\tborder: none;\n\tanimation: fadeIn 0.083s linear;\n\t-webkit-app-region: no-drag;\n}\n\n.context-view.monaco-menu-container :focus,\n.context-view.monaco-menu-container .monaco-action-bar.vertical:focus,\n.context-view.monaco-menu-container .monaco-action-bar.vertical :focus {\n\toutline: 0;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item {\n\tborder: thin solid transparent; /* prevents jumping behaviour on hover or focus */\n}\n\n\n/* High Contrast Theming */\n:host-context(.hc-black) .context-view.monaco-menu-container {\n\tbox-shadow: none;\n}\n\n:host-context(.hc-black) .monaco-menu .monaco-action-bar.vertical .action-item.focused {\n\tbackground: none;\n}\n\n/* Vertical Action Bar Styles */\n\n.monaco-menu .monaco-action-bar.vertical {\n\tpadding: .5em 0;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-menu-item {\n\theight: 1.8em;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator),\n.monaco-menu .monaco-action-bar.vertical .keybinding {\n\tfont-size: inherit;\n\tpadding: 0 2em;\n}\n\n.monaco-menu .monaco-action-bar.vertical .menu-item-check {\n\tfont-size: inherit;\n\twidth: 2em;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label.separator {\n\tfont-size: inherit;\n\tpadding: 0.2em 0 0 0;\n\tmargin-bottom: 0.2em;\n}\n\n:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .action-label.separator {\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator {\n\tfont-size: 60%;\n\tpadding: 0 1.8em;\n}\n\n:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .submenu-indicator {\n\theight: 100%;\n\tmask-size: 10px 10px;\n\t-webkit-mask-size: 10px 10px;\n}\n\n.monaco-menu .action-item {\n\tcursor: default;\n}\n\n/* Arrows */\n.monaco-scrollable-element > .scrollbar > .scra {\n\tcursor: pointer;\n\tfont-size: 11px !important;\n}\n\n.monaco-scrollable-element > .visible {\n\topacity: 1;\n\n\t/* Background rule added for IE9 - to allow clicks on dom node */\n\tbackground:rgba(0,0,0,0);\n\n\ttransition: opacity 100ms linear;\n}\n.monaco-scrollable-element > .invisible {\n\topacity: 0;\n\tpointer-events: none;\n}\n.monaco-scrollable-element > .invisible.fade {\n\ttransition: opacity 800ms linear;\n}\n\n/* Scrollable Content Inset Shadow */\n.monaco-scrollable-element > .shadow {\n\tposition: absolute;\n\tdisplay: none;\n}\n.monaco-scrollable-element > .shadow.top {\n\tdisplay: block;\n\ttop: 0;\n\tleft: 3px;\n\theight: 3px;\n\twidth: 100%;\n\tbox-shadow: #DDD 0 6px 6px -6px inset;\n}\n.monaco-scrollable-element > .shadow.left {\n\tdisplay: block;\n\ttop: 3px;\n\tleft: 0;\n\theight: 100%;\n\twidth: 3px;\n\tbox-shadow: #DDD 6px 0 6px -6px inset;\n}\n.monaco-scrollable-element > .shadow.top-left-corner {\n\tdisplay: block;\n\ttop: 0;\n\tleft: 0;\n\theight: 3px;\n\twidth: 3px;\n}\n.monaco-scrollable-element > .shadow.top.left {\n\tbox-shadow: #DDD 6px 6px 6px -6px inset;\n}\n\n/* ---------- Default Style ---------- */\n\n:host-context(.vs) .monaco-scrollable-element > .scrollbar > .slider {\n\tbackground: rgba(100, 100, 100, .4);\n}\n:host-context(.vs-dark) .monaco-scrollable-element > .scrollbar > .slider {\n\tbackground: rgba(121, 121, 121, .4);\n}\n:host-context(.hc-black) .monaco-scrollable-element > .scrollbar > .slider {\n\tbackground: rgba(111, 195, 223, .6);\n}\n\n.monaco-scrollable-element > .scrollbar > .slider:hover {\n\tbackground: rgba(100, 100, 100, .7);\n}\n:host-context(.hc-black) .monaco-scrollable-element > .scrollbar > .slider:hover {\n\tbackground: rgba(111, 195, 223, .8);\n}\n\n.monaco-scrollable-element > .scrollbar > .slider.active {\n\tbackground: rgba(0, 0, 0, .6);\n}\n:host-context(.vs-dark) .monaco-scrollable-element > .scrollbar > .slider.active {\n\tbackground: rgba(191, 191, 191, .4);\n}\n:host-context(.hc-black) .monaco-scrollable-element > .scrollbar > .slider.active {\n\tbackground: rgba(111, 195, 223, 1);\n}\n\n:host-context(.vs-dark) .monaco-scrollable-element .shadow.top {\n\tbox-shadow: none;\n}\n\n:host-context(.vs-dark) .monaco-scrollable-element .shadow.left {\n\tbox-shadow: #000 6px 0 6px -6px inset;\n}\n\n:host-context(.vs-dark) .monaco-scrollable-element .shadow.top.left {\n\tbox-shadow: #000 6px 6px 6px -6px inset;\n}\n\n:host-context(.hc-black) .monaco-scrollable-element .shadow.top {\n\tbox-shadow: none;\n}\n\n:host-context(.hc-black) .monaco-scrollable-element .shadow.left {\n\tbox-shadow: none;\n}\n\n:host-context(.hc-black) .monaco-scrollable-element .shadow.top.left {\n\tbox-shadow: none;\n}\n`;
  i(67942);
  var ir = i(88810);
  class nr {
    constructor(e, t, i, n, o) {
      ((this.contextViewService = e), (this.telemetryService = t), (this.notificationService = i), (this.keybindingService = n), (this.themeService = o), (this.focusToReturn = null), (this.block = null), (this.options = {
        blockMouse: !0
      }));
    }
    configure(e) {
      this.options = e;
    }
    showContextMenu(e) {
      const t = e.getActions();
      if (!t.length) return;
      let i;
      this.focusToReturn = document.activeElement;
      let n = (0, Q.Re)(e.domForShadowRoot) ? e.domForShadowRoot : void 0;
      this.contextViewService.showContextView({
        getAnchor: () => e.getAnchor(),
        canRelayout: !1,
        anchorAlignment: e.anchorAlignment,
        anchorAxisAlignment: e.anchorAxisAlignment,
        render: n => {
          let o = e.getMenuClassName ? e.getMenuClassName() : "";
          (o && (n.className += " " + o), this.options.blockMouse && ((this.block = n.appendChild((0, Q.$)(".context-view-block"))), (this.block.style.position = "fixed"), (this.block.style.cursor = "initial"), (this.block.style.left = "0"), (this.block.style.top = "0"), (this.block.style.width = "100%"), (this.block.style.height = "100%"), (this.block.style.zIndex = "-1"), (0, Q.nm)(this.block, Q.tw.MOUSE_DOWN, e => e.stopPropagation())));
          const s = new ue.SL(),
            r = e.actionRunner || new un.Wi();
          return (r.onBeforeRun(this.onActionRun, this, s), r.onDidRun(this.onDidActionRun, this, s), (i = new Qs(n, t, {
            actionViewItemProvider: e.getActionViewItem,
            context: e.getActionsContext ? e.getActionsContext() : null,
            actionRunner: r,
            getKeyBinding: e.getKeyBinding ? e.getKeyBinding : e => this.keybindingService.lookupKeybinding(e.id)
          })), s.add((0, ir.tj)(i, this.themeService)), i.onDidCancel(() => this.contextViewService.hideContextView(!0), null, s), i.onDidBlur(() => this.contextViewService.hideContextView(!0), null, s), s.add((0, Q.nm)(window, Q.tw.BLUR, () => this.contextViewService.hideContextView(!0))), s.add((0, Q.nm)(window, Q.tw.MOUSE_DOWN, e => {
            if (e.defaultPrevented) return;
            let t = new Ps.n(e),
              i = t.target;
            if (!t.rightButton) {
              for (; i;) {
                if (i === n) return;
                i = i.parentElement;
              }
              this.contextViewService.hideContextView(!0);
            }
          })), (0, ue.F8)(s, i));
        },
        focus: () => {
          i && i.focus(!!e.autoSelectFirstItem);
        },
        onHide: t => {
          (e.onHide && e.onHide(!!t), this.block && (this.block.remove(), (this.block = null)), this.focusToReturn && this.focusToReturn.focus());
        }
      }, n, !!n);
    }
    onActionRun(e) {
      (this.telemetryService.publicLog2("workbenchActionExecuted", {
        id: e.action.id,
        from: "contextMenu"
      }), this.contextViewService.hideContextView(!1), this.focusToReturn && this.focusToReturn.focus());
    }
    onDidActionRun(e) {
      e.error && !(0, ke.VV)(e.error) && this.notificationService.error(e.error);
    }
  }
  var or = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    sr = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let rr = class extends ue.JT {
    constructor(e, t, i, n, o) {
      (super(), (this.contextMenuHandler = new nr(i, e, t, n, o)));
    }
    configure(e) {
      this.contextMenuHandler.configure(e);
    }
    showContextMenu(e) {
      (this.contextMenuHandler.showContextMenu(e), Q._q.getInstance().resetKeyStatus());
    }
  };
  rr = or([sr(0, Os.b), sr(1, Ai.lT), sr(2, Fn.u), sr(3, vo.d), sr(4, mn.XE)], rr);
  const ar = (0, Pn.yh)("layoutService");
  var lr = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    cr = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let dr = class extends ue.JT {
    constructor(e) {
      (super(), (this.layoutService = e), (this.currentViewDisposable = ue.JT.None), (this.container = e.container), (this.contextView = this._register(new js(this.container, 1))), this.layout(), this._register(e.onDidLayout(() => this.layout())));
    }
    setContainer(e, t) {
      this.contextView.setContainer(e, t || 1);
    }
    showContextView(e, t, i) {
      (t ? t !== this.container && ((this.container = t), this.setContainer(t, i ? 3 : 2)) : this.container !== this.layoutService.container && ((this.container = this.layoutService.container), this.setContainer(this.container, 1)), this.contextView.show(e));
      const n = (0, ue.OF)(() => {
        this.currentViewDisposable === n && this.hideContextView();
      });
      return ((this.currentViewDisposable = n), n);
    }
    getContextViewElement() {
      return this.contextView.getViewElement();
    }
    layout() {
      this.contextView.layout();
    }
    hideContextView(e) {
      this.contextView.hide(e);
    }
  };
  dr = lr([cr(0, ar)], dr);
  var hr = i(28820),
    ur = i(97108);
  class gr {
    constructor(e) {
      ((this.incoming = new Map()), (this.outgoing = new Map()), (this.data = e));
    }
  }
  class pr {
    constructor(e) {
      ((this._hashFn = e), (this._nodes = new Map()));
    }
    roots() {
      const e = [];
      for (let t of this._nodes.values()) 0 === t.outgoing.size && e.push(t);
      return e;
    }
    insertEdge(e, t) {
      const i = this.lookupOrInsertNode(e),
        n = this.lookupOrInsertNode(t);
      (i.outgoing.set(this._hashFn(t), n), n.incoming.set(this._hashFn(e), i));
    }
    removeNode(e) {
      const t = this._hashFn(e);
      this._nodes.delete(t);
      for (let e of this._nodes.values()) (e.outgoing.delete(t), e.incoming.delete(t));
    }
    lookupOrInsertNode(e) {
      const t = this._hashFn(e);
      let i = this._nodes.get(t);
      return (i || ((i = new gr(e)), this._nodes.set(t, i)), i);
    }
    isEmpty() {
      return 0 === this._nodes.size;
    }
    toString() {
      let e = [];
      for (let [t, i] of this._nodes) e.push(`${t}, (incoming)[${[...i.incoming.keys()].join(", ")}], (outgoing)[${[...i.outgoing.keys()].join(",")}]`);
      return e.join("\n");
    }
    findCycleSlow() {
      for (let [e, t] of this._nodes) {
        const i = new Set([e]),
          n = this._findCycle(t, i);
        if (n) return n;
      }
    }
    _findCycle(e, t) {
      for (let [i, n] of e.outgoing) {
        if (t.has(i)) return [...t, i].join(" -> ");
        t.add(i);
        const e = this._findCycle(n, t);
        if (e) return e;
        t.delete(i);
      }
    }
  }
  class fr extends Error {
    constructor(e) {
      var t;
      (super("cyclic dependency between services"), (this.message = null !== (t = e.findCycleSlow()) && void 0 !== t ? t : `UNABLE to detect cycle, dumping graph: \n${e.toString()}`));
    }
  }
  class mr {
    constructor(e = new Rn.y(), t = !1, i) {
      ((this._activeInstantiations = new Set()), (this._services = e), (this._strict = t), (this._parent = i), this._services.set(Pn.TG, this));
    }
    createChild(e) {
      return new mr(e, this._strict, this);
    }
    invokeFunction(e, ...t) {
      let i = vr.traceInvocation(e),
        n = !1;
      try {
        return e({
          get: (e, t) => {
            if (n) throw (0, ke.L6)("service accessor is only valid during the invocation of its target method");
            const o = this._getOrCreateServiceInstance(e, i);
            if (!o && t !== Pn.jt) throw new Error(`[invokeFunction] unknown service '${e}'`);
            return o;
          }
        }, ...t);
      } finally {
        ((n = !0), i.stop());
      }
    }
    createInstance(e, ...t) {
      let i, n;
      return (e instanceof ur.M ? ((i = vr.traceCreation(e.ctor)), (n = this._createInstance(e.ctor, e.staticArguments.concat(t), i))) : ((i = vr.traceCreation(e)), (n = this._createInstance(e, t, i))), i.stop(), n);
    }
    _createInstance(e, t = [], i) {
      let n = Pn.I8.getServiceDependencies(e).sort((e, t) => e.index - t.index),
        o = [];
      for (const t of n) {
        let n = this._getOrCreateServiceInstance(t.id, i);
        if (!n && this._strict && !t.optional) throw new Error(`[createInstance] ${e.name} depends on UNKNOWN service ${t.id}.`);
        o.push(n);
      }
      let s = n.length > 0 ? n[0].index : t.length;
      if (t.length !== s) {
        console.warn(`[createInstance] First service dependency of ${e.name} at position ${s + 1} conflicts with ${t.length} static arguments`);
        let i = s - t.length;
        t = i > 0 ? t.concat(new Array(i)) : t.slice(0, s);
      }
      return new e(...[...t, ...o]);
    }
    _setServiceInstance(e, t) {
      if (this._services.get(e) instanceof ur.M) this._services.set(e, t);else {
        if (!this._parent) throw new Error("illegalState - setting UNKNOWN service instance");
        this._parent._setServiceInstance(e, t);
      }
    }
    _getServiceInstanceOrDescriptor(e) {
      let t = this._services.get(e);
      return !t && this._parent ? this._parent._getServiceInstanceOrDescriptor(e) : t;
    }
    _getOrCreateServiceInstance(e, t) {
      let i = this._getServiceInstanceOrDescriptor(e);
      return i instanceof ur.M ? this._safeCreateAndCacheServiceInstance(e, i, t.branch(e, !0)) : (t.branch(e, !1), i);
    }
    _safeCreateAndCacheServiceInstance(e, t, i) {
      if (this._activeInstantiations.has(e)) throw new Error(`illegal state - RECURSIVELY instantiating service '${e}'`);
      this._activeInstantiations.add(e);
      try {
        return this._createAndCacheServiceInstance(e, t, i);
      } finally {
        this._activeInstantiations.delete(e);
      }
    }
    _createAndCacheServiceInstance(e, t, i) {
      const n = new pr(e => e.id.toString());
      let o = 0;
      const s = [{
        id: e,
        desc: t,
        _trace: i
      }];
      for (; s.length;) {
        const t = s.pop();
        if ((n.lookupOrInsertNode(t), o++ > 1e3)) throw new fr(n);
        for (let i of Pn.I8.getServiceDependencies(t.desc.ctor)) {
          let o = this._getServiceInstanceOrDescriptor(i.id);
          if ((o || i.optional || console.warn(`[createInstance] ${e} depends on ${i.id} which is NOT registered.`), o instanceof ur.M)) {
            const e = {
              id: i.id,
              desc: o,
              _trace: t._trace.branch(i.id, !0)
            };
            (n.insertEdge(t, e), s.push(e));
          }
        }
      }
      for (;;) {
        const e = n.roots();
        if (0 === e.length) {
          if (!n.isEmpty()) throw new fr(n);
          break;
        }
        for (const {
          data: t
        } of e) {
          if (this._getServiceInstanceOrDescriptor(t.id) instanceof ur.M) {
            const e = this._createServiceInstanceWithOwner(t.id, t.desc.ctor, t.desc.staticArguments, t.desc.supportsDelayedInstantiation, t._trace);
            this._setServiceInstance(t.id, e);
          }
          n.removeNode(t);
        }
      }
      return this._getServiceInstanceOrDescriptor(e);
    }
    _createServiceInstanceWithOwner(e, t, i = [], n, o) {
      if (this._services.get(e) instanceof ur.M) return this._createServiceInstance(t, i, n, o);
      if (this._parent) return this._parent._createServiceInstanceWithOwner(e, t, i, n, o);
      throw new Error(`illegalState - creating UNKNOWN service instance ${t.name}`);
    }
    _createServiceInstance(e, t = [], i, n) {
      if (i) {
        const i = new Se.Ue(() => this._createInstance(e, t, n));
        return new Proxy(Object.create(null), {
          get(e, t) {
            if (t in e) return e[t];
            let n = i.value,
              o = n[t];
            return ("function" != typeof o || ((o = o.bind(n)), (e[t] = o)), o);
          },
          set: (e, t, n) => ((i.value[t] = n), !0)
        });
      }
      return this._createInstance(e, t, n);
    }
  }
  class vr {
    constructor(e, t) {
      ((this.type = e), (this.name = t), (this._start = Date.now()), (this._dep = []));
    }
    static traceInvocation(e) {
      return vr._None;
    }
    static traceCreation(e) {
      return vr._None;
    }
    branch(e, t) {
      let i = new vr(2, e.toString());
      return (this._dep.push([e, t, i]), i);
    }
    stop() {
      let e = Date.now() - this._start;
      vr._totals += e;
      let t = !1;
      let i = [`${0 === this.type ? "CREATE" : "CALL"} ${this.name}`, `${(function e(i, n) {
        let o = [],
          s = new Array(i + 1).join("\t");
        for (const [r, a, l] of n._dep) if (a && l) {
          ((t = !0), o.push(`${s}CREATES -> ${r}`));
          let n = e(i + 1, l);
          n && o.push(n);
        } else o.push(`
                            $ {
                                s
                            }
                            uses - > $ {
                                r
                            }
                            `);
        return o.join("\n");
      })(1, this)}`, `DONE, took ${e.toFixed(2)}ms (grand total ${vr._totals.toFixed(2)}ms)`];
      (e > 2 || t) && console.log(i.join("\n"));
    }
  }
  ((vr._None = new (class extends vr {
    constructor() {
      super(-1, null);
    }
    stop() {}
    branch() {
      return this;
    }
  })()), (vr._totals = 0));
  var _r = i(44349),
    br = i(20343),
    wr = i(98674);
  class yr {
    constructor() {
      ((this._byResource = new J.Y9()), (this._byOwner = new Map()));
    }
    set(e, t, i) {
      let n = this._byResource.get(e);
      (n || ((n = new Map()), this._byResource.set(e, n)), n.set(t, i));
      let o = this._byOwner.get(t);
      (o || ((o = new J.Y9()), this._byOwner.set(t, o)), o.set(e, i));
    }
    get(e, t) {
      let i = this._byResource.get(e);
      return null == i ? void 0 : i.get(t);
    }
    delete(e, t) {
      let i = !1,
        n = !1,
        o = this._byResource.get(e);
      o && (i = o.delete(t));
      let s = this._byOwner.get(t);
      if ((s && (n = s.delete(e)), i !== n)) throw new Error("illegal state");
      return i && n;
    }
    values(e) {
      var t, i, n, o;
      return "string" == typeof e ? null !== (i = null === (t = this._byOwner.get(e)) || void 0 === t ? void 0 : t.values()) && void 0 !== i ? i : bs.$.empty() : z.o.isUri(e) ? null !== (o = null === (n = this._byResource.get(e)) || void 0 === n ? void 0 : n.values()) && void 0 !== o ? o : bs.$.empty() : bs.$.map(bs.$.concat(...this._byOwner.values()), e => e[1]);
    }
  }
  class Cr {
    constructor(e) {
      ((this.errors = 0), (this.infos = 0), (this.warnings = 0), (this.unknowns = 0), (this._data = new J.Y9()), (this._service = e), (this._subscription = e.onMarkerChanged(this._update, this)));
    }
    dispose() {
      this._subscription.dispose();
    }
    _update(e) {
      for (const t of e) {
        const e = this._data.get(t);
        e && this._substract(e);
        const i = this._resourceStats(t);
        (this._add(i), this._data.set(t, i));
      }
    }
    _resourceStats(e) {
      const t = {
        errors: 0,
        warnings: 0,
        infos: 0,
        unknowns: 0
      };
      if (e.scheme === te.lg.inMemory || e.scheme === te.lg.walkThrough || e.scheme === te.lg.walkThroughSnippet) return t;
      for (const {
        severity: i
      } of this._service.read({
        resource: e
      })) i === wr.ZL.Error ? (t.errors += 1) : i === wr.ZL.Warning ? (t.warnings += 1) : i === wr.ZL.Info ? (t.infos += 1) : (t.unknowns += 1);
      return t;
    }
    _substract(e) {
      ((this.errors -= e.errors), (this.warnings -= e.warnings), (this.infos -= e.infos), (this.unknowns -= e.unknowns));
    }
    _add(e) {
      ((this.errors += e.errors), (this.warnings += e.warnings), (this.infos += e.infos), (this.unknowns += e.unknowns));
    }
  }
  class xr {
    constructor() {
      ((this._onMarkerChanged = new W.D0({
        delay: 0,
        merge: xr._merge
      })), (this.onMarkerChanged = this._onMarkerChanged.event), (this._data = new yr()), (this._stats = new Cr(this)));
    }
    dispose() {
      (this._stats.dispose(), this._onMarkerChanged.dispose());
    }
    remove(e, t) {
      for (const i of t || []) this.changeOne(e, i, []);
    }
    changeOne(e, t, i) {
      if ((0, bt.XY)(i)) {
        this._data.delete(t, e) && this._onMarkerChanged.fire([t]);
      } else {
        const n = [];
        for (const o of i) {
          const i = xr._toMarker(e, t, o);
          i && n.push(i);
        }
        (this._data.set(t, e, n), this._onMarkerChanged.fire([t]));
      }
    }
    static _toMarker(e, t, i) {
      let {
        code: n,
        severity: o,
        message: s,
        source: r,
        startLineNumber: a,
        startColumn: l,
        endLineNumber: c,
        endColumn: d,
        relatedInformation: h,
        tags: u
      } = i;
      if (s) return ((a = a > 0 ? a : 1), (l = l > 0 ? l : 1), (c = c >= a ? c : a), (d = d > 0 ? d : l), {
        resource: t,
        owner: e,
        code: n,
        severity: o,
        message: s,
        source: r,
        startLineNumber: a,
        startColumn: l,
        endLineNumber: c,
        endColumn: d,
        relatedInformation: h,
        tags: u
      });
    }
    read(e = Object.create(null)) {
      let {
        owner: t,
        resource: i,
        severities: n,
        take: o
      } = e;
      if (((!o || o < 0) && (o = -1), t && i)) {
        const e = this._data.get(i, t);
        if (e) {
          const t = [];
          for (const i of e) if (xr._accept(i, n)) {
            const e = t.push(i);
            if (o > 0 && e === o) break;
          }
          return t;
        }
        return [];
      }
      if (t || i) {
        const e = this._data.values(null != i ? i : t),
          s = [];
        for (const t of e) for (const e of t) if (xr._accept(e, n)) {
          const t = s.push(e);
          if (o > 0 && t === o) return s;
        }
        return s;
      }
      {
        const e = [];
        for (let t of this._data.values()) for (let i of t) if (xr._accept(i, n)) {
          const t = e.push(i);
          if (o > 0 && t === o) return e;
        }
        return e;
      }
    }
    static _accept(e, t) {
      return void 0 === t || (t & e.severity) === e.severity;
    }
    static _merge(e) {
      const t = new J.Y9();
      for (let i of e) for (let e of i) t.set(e, !0);
      return Array.from(t.keys());
    }
  }
  var Sr = i(26904),
    kr = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Lr = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let Nr = class {
    constructor(e) {
      this._commandService = e;
    }
    createMenu(e, t, i) {
      return new Dr(e, Object.assign({
        emitEventsForSubmenuChanges: !1,
        eventDebounceDelay: 50
      }, i), this._commandService, t, this);
    }
  };
  Nr = kr([Lr(0, ne.H)], Nr);
  let Dr = class e {
    constructor(e, t, i, n, o) {
      ((this._id = e), (this._options = t), (this._commandService = i), (this._contextKeyService = n), (this._menuService = o), (this._disposables = new ue.SL()), (this._menuGroups = []), (this._contextKeys = new Set()), this._build());
      const s = new Se.pY(() => {
        (this._build(), this._onDidChange.fire(this));
      }, t.eventDebounceDelay);
      (this._disposables.add(s), this._disposables.add(mo.BH.onDidChangeMenu(t => {
        t.has(e) && s.schedule();
      })));
      const r = this._disposables.add(new ue.SL());
      ((this._onDidChange = new W.Q5({
        onFirstListenerAdd: () => {
          const e = new Se.pY(() => this._onDidChange.fire(this), t.eventDebounceDelay);
          (r.add(e), r.add(n.onDidChangeContext(t => {
            t.affectsSome(this._contextKeys) && e.schedule();
          })));
        },
        onLastListenerRemove: r.clear.bind(r)
      })), (this.onDidChange = this._onDidChange.event));
    }
    dispose() {
      (this._disposables.dispose(), this._onDidChange.dispose());
    }
    _build() {
      ((this._menuGroups.length = 0), this._contextKeys.clear());
      const t = mo.BH.getMenuItems(this._id);
      let i;
      t.sort(e._compareMenuItems);
      for (const e of t) {
        const t = e.group || "";
        ((i && i[0] === t) || ((i = [t, []]), this._menuGroups.push(i)), i[1].push(e), this._collectContextKeys(e));
      }
    }
    _collectContextKeys(t) {
      if ((e._fillInKbExprKeys(t.when, this._contextKeys), (0, mo.vr)(t))) {
        if ((t.command.precondition && e._fillInKbExprKeys(t.command.precondition, this._contextKeys), t.command.toggled)) {
          const i = t.command.toggled.condition || t.command.toggled;
          e._fillInKbExprKeys(i, this._contextKeys);
        }
      } else this._options.emitEventsForSubmenuChanges && mo.BH.getMenuItems(t.submenu).forEach(this._collectContextKeys, this);
    }
    getActions(e) {
      const t = [];
      for (let i of this._menuGroups) {
        const [n, o] = i,
          s = [];
        for (const t of o) if (this._contextKeyService.contextMatchesRules(t.when)) {
          const i = (0, mo.vr)(t) ? new mo.U8(t.command, t.alt, e, this._contextKeyService, this._commandService) : new mo.NZ(t, this._menuService, this._contextKeyService, e);
          s.push(i);
        }
        s.length > 0 && t.push([n, s]);
      }
      return t;
    }
    static _fillInKbExprKeys(e, t) {
      if (e) for (let i of e.keys()) t.add(i);
    }
    static _compareMenuItems(t, i) {
      let n = t.group,
        o = i.group;
      if (n !== o) {
        if (!n) return 1;
        if (!o) return -1;
        if ("navigation" === n) return -1;
        if ("navigation" === o) return 1;
        let e = n.localeCompare(o);
        if (0 !== e) return e;
      }
      let s = t.order || 0,
        r = i.order || 0;
      return s < r ? -1 : s > r ? 1 : e._compareTitles((0, mo.vr)(t) ? t.command.title : t.title, (0, mo.vr)(i) ? i.command.title : i.title);
    }
    static _compareTitles(e, t) {
      const i = "string" == typeof e ? e : e.original,
        n = "string" == typeof t ? t : t.original;
      return i.localeCompare(n);
    }
  };
  Dr = kr([Lr(2, ne.H), Lr(3, xi.i6), Lr(4, mo.co)], Dr);
  var Ir = i(26479),
    Er = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Tr = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  class Mr extends ue.JT {
    constructor(e) {
      (super(), (this.model = e), (this._markersData = new Map()), this._register((0, ue.OF)(() => {
        (this.model.deltaDecorations([...this._markersData.keys()], []), this._markersData.clear());
      })));
    }
    update(e, t) {
      const i = [...this._markersData.keys()];
      this._markersData.clear();
      const n = this.model.deltaDecorations(i, t);
      for (let t = 0; t < n.length; t++) this._markersData.set(n[t], e[t]);
      return 0 !== i.length || 0 !== n.length;
    }
    getMarker(e) {
      return this._markersData.get(e.id);
    }
  }
  let Ar = class extends ue.JT {
    constructor(e, t) {
      (super(), (this._markerService = t), (this._onDidChangeMarker = this._register(new W.Q5())), (this._markerDecorations = new J.Y9()), e.getModels().forEach(e => this._onModelAdded(e)), this._register(e.onModelAdded(this._onModelAdded, this)), this._register(e.onModelRemoved(this._onModelRemoved, this)), this._register(this._markerService.onMarkerChanged(this._handleMarkerChange, this)));
    }
    dispose() {
      (super.dispose(), this._markerDecorations.forEach(e => e.dispose()), this._markerDecorations.clear());
    }
    getMarker(e, t) {
      const i = this._markerDecorations.get(e);
      return (i && i.getMarker(t)) || null;
    }
    _handleMarkerChange(e) {
      e.forEach(e => {
        const t = this._markerDecorations.get(e);
        t && this._updateDecorations(t);
      });
    }
    _onModelAdded(e) {
      const t = new Mr(e);
      (this._markerDecorations.set(e.uri, t), this._updateDecorations(t));
    }
    _onModelRemoved(e) {
      const t = this._markerDecorations.get(e.uri);
      (t && (t.dispose(), this._markerDecorations.delete(e.uri)), (e.uri.scheme !== te.lg.inMemory && e.uri.scheme !== te.lg.internal && e.uri.scheme !== te.lg.vscode) || (this._markerService && this._markerService.read({
        resource: e.uri
      }).map(e => e.owner).forEach(t => this._markerService.remove(t, [e.uri]))));
    }
    _updateDecorations(e) {
      const t = this._markerService.read({
        resource: e.model.uri,
        take: 500
      });
      let i = t.map(t => ({
        range: this._createDecorationRange(e.model, t),
        options: this._createDecorationOption(t)
      }));
      e.update(t, i) && this._onDidChangeMarker.fire(e.model);
    }
    _createDecorationRange(e, t) {
      let i = U.e.lift(t);
      return (t.severity !== wr.ZL.Hint || this._hasMarkerTag(t, 1) || this._hasMarkerTag(t, 2) || (i = i.setEndPosition(i.startLineNumber, i.startColumn + 2)), e.validateRange(i));
    }
    _createDecorationOption(e) {
      let t, i, n, o, s;
      switch (e.severity) {
        case wr.ZL.Hint:
          ((t = this._hasMarkerTag(e, 2) ? void 0 : this._hasMarkerTag(e, 1) ? "squiggly-unnecessary" : "squiggly-hint"), (n = 0));
          break;
        case wr.ZL.Warning:
          ((t = "squiggly-warning"), (i = (0, mn.EN)(pn.Re)), (n = 20), (s = {
            color: (0, mn.EN)(fn.Iv),
            position: _e.F5.Inline
          }));
          break;
        case wr.ZL.Info:
          ((t = "squiggly-info"), (i = (0, mn.EN)(pn.eS)), (n = 10));
          break;
        case wr.ZL.Error:
        default:
          ((t = "squiggly-error"), (i = (0, mn.EN)(pn.lK)), (n = 30), (s = {
            color: (0, mn.EN)(fn.Gj),
            position: _e.F5.Inline
          }));
      }
      return (e.tags && (-1 !== e.tags.indexOf(1) && (o = "squiggly-inline-unnecessary"), -1 !== e.tags.indexOf(2) && (o = "squiggly-inline-deprecated")), {
        description: "marker-decoration",
        stickiness: 1,
        className: t,
        showIfCollapsed: !0,
        overviewRuler: {
          color: i,
          position: _e.sh.Right
        },
        minimap: s,
        zIndex: n,
        inlineClassName: o
      });
    }
    _hasMarkerTag(e, t) {
      return !!e.tags && e.tags.indexOf(t) >= 0;
    }
  };
  Ar = Er([Tr(0, vt.q), Tr(1, wr.lT)], Ar);
  var Or = i(65026),
    Pr = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Rr = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let Fr = class extends ue.JT {
    constructor(e, t) {
      (super(), (this._contextKeyService = e), (this._configurationService = t), (this._accessibilitySupport = 0), (this._onDidChangeScreenReaderOptimized = new W.Q5()), (this._accessibilityModeEnabledContext = _o.U.bindTo(this._contextKeyService)));
      const i = () => this._accessibilityModeEnabledContext.set(this.isScreenReaderOptimized());
      (this._register(this._configurationService.onDidChangeConfiguration(e => {
        e.affectsConfiguration("editor.accessibilitySupport") && (i(), this._onDidChangeScreenReaderOptimized.fire());
      })), i(), this.onDidChangeScreenReaderOptimized(() => i()));
    }
    get onDidChangeScreenReaderOptimized() {
      return this._onDidChangeScreenReaderOptimized.event;
    }
    isScreenReaderOptimized() {
      const e = this._configurationService.getValue("editor.accessibilitySupport");
      return "on" === e || ("auto" === e && 2 === this._accessibilitySupport);
    }
    getAccessibilitySupport() {
      return this._accessibilitySupport;
    }
  };
  Fr = Pr([Rr(0, xi.i6), Rr(1, gi.Ui)], Fr);
  var Br = function (e, t, i, n) {
    return new (i || (i = Promise))(function (o, s) {
      function r(e) {
        try {
          l(n.next(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        try {
          l(n.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function l(e) {
        var t;
        e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
          e(t);
        })).then(r, a);
      }
      l((n = n.apply(e, t || [])).next());
    });
  };
  class Vr {
    constructor() {
      ((this.mapTextToType = new Map()), (this.findText = ""));
    }
    writeText(e, t) {
      return Br(this, void 0, void 0, function* () {
        if (t) return void this.mapTextToType.set(t, e);
        try {
          return yield navigator.clipboard.writeText(e);
        } catch (e) {
          console.error(e);
        }
        const i = document.activeElement,
          n = document.body.appendChild((0, Q.$)("textarea", {
            "aria-hidden": !0
          }));
        ((n.style.height = "1px"), (n.style.width = "1px"), (n.style.position = "absolute"), (n.value = e), n.focus(), n.select(), document.execCommand("copy"), i instanceof HTMLElement && i.focus(), document.body.removeChild(n));
      });
    }
    readText(e) {
      return Br(this, void 0, void 0, function* () {
        if (e) return this.mapTextToType.get(e) || "";
        try {
          return yield navigator.clipboard.readText();
        } catch (e) {
          return (console.error(e), "");
        }
      });
    }
    readFindText() {
      return Br(this, void 0, void 0, function* () {
        return this.findText;
      });
    }
    writeFindText(e) {
      return Br(this, void 0, void 0, function* () {
        this.findText = e;
      });
    }
  }
  var Wr = i(64862),
    Hr = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    zr = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    jr = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  const Ur = !1;
  function $r(e) {
    return e.scheme === te.lg.file ? e.fsPath : e.path;
  }
  let Kr = 0;
  class qr {
    constructor(e, t, i, n, o, s, r) {
      ((this.id = ++Kr), (this.type = 0), (this.actual = e), (this.label = e.label), (this.confirmBeforeUndo = e.confirmBeforeUndo || !1), (this.resourceLabel = t), (this.strResource = i), (this.resourceLabels = [this.resourceLabel]), (this.strResources = [this.strResource]), (this.groupId = n), (this.groupOrder = o), (this.sourceId = s), (this.sourceOrder = r), (this.isValid = !0));
    }
    setValid(e) {
      this.isValid = e;
    }
    toString() {
      return `[id:${this.id}] [group:${this.groupId}] [${this.isValid ? "  VALID" : "INVALID"}] ${this.actual.constructor.name} - ${this.actual}`;
    }
  }
  class Zr {
    constructor(e, t) {
      ((this.resourceLabel = e), (this.reason = t));
    }
  }
  class Gr {
    constructor() {
      this.elements = new Map();
    }
    createMessage() {
      const e = [],
        t = [];
      for (const [, i] of this.elements) {
        (0 === i.reason ? e : t).push(i.resourceLabel);
      }
      let i = [];
      return (e.length > 0 && i.push(bi.N({
        key: "externalRemoval",
        comment: ["{0} is a list of filenames"]
      }, "The following files have been closed and modified on disk: {0}.", e.join(", "))), t.length > 0 && i.push(bi.N({
        key: "noParallelUniverses",
        comment: ["{0} is a list of filenames"]
      }, "The following files have been modified in an incompatible way: {0}.", t.join(", "))), i.join("\n"));
    }
    get size() {
      return this.elements.size;
    }
    has(e) {
      return this.elements.has(e);
    }
    set(e, t) {
      this.elements.set(e, t);
    }
    delete(e) {
      return this.elements.delete(e);
    }
  }
  class Yr {
    constructor(e, t, i, n, o, s, r) {
      ((this.id = ++Kr), (this.type = 1), (this.actual = e), (this.label = e.label), (this.confirmBeforeUndo = e.confirmBeforeUndo || !1), (this.resourceLabels = t), (this.strResources = i), (this.groupId = n), (this.groupOrder = o), (this.sourceId = s), (this.sourceOrder = r), (this.removedResources = null), (this.invalidatedResources = null));
    }
    canSplit() {
      return "function" == typeof this.actual.split;
    }
    removeResource(e, t, i) {
      (this.removedResources || (this.removedResources = new Gr()), this.removedResources.has(t) || this.removedResources.set(t, new Zr(e, i)));
    }
    setValid(e, t, i) {
      i ? this.invalidatedResources && (this.invalidatedResources.delete(t), 0 === this.invalidatedResources.size && (this.invalidatedResources = null)) : (this.invalidatedResources || (this.invalidatedResources = new Gr()), this.invalidatedResources.has(t) || this.invalidatedResources.set(t, new Zr(e, 0)));
    }
    toString() {
      return `[id:${this.id}] [group:${this.groupId}] [${this.invalidatedResources ? "INVALID" : "  VALID"}] ${this.actual.constructor.name} - ${this.actual}`;
    }
  }
  class Qr {
    constructor(e, t) {
      ((this.resourceLabel = e), (this.strResource = t), (this._past = []), (this._future = []), (this.locked = !1), (this.versionId = 1));
    }
    dispose() {
      for (const e of this._past) 1 === e.type && e.removeResource(this.resourceLabel, this.strResource, 0);
      for (const e of this._future) 1 === e.type && e.removeResource(this.resourceLabel, this.strResource, 0);
      this.versionId++;
    }
    toString() {
      let e = [];
      e.push(`* ${this.strResource}:`);
      for (let t = 0; t < this._past.length; t++) e.push(`   * [UNDO] ${this._past[t]}`);
      for (let t = this._future.length - 1; t >= 0; t--) e.push(`   * [REDO] ${this._future[t]}`);
      return e.join("\n");
    }
    flushAllElements() {
      ((this._past = []), (this._future = []), this.versionId++);
    }
    _setElementValidFlag(e, t) {
      1 === e.type ? e.setValid(this.resourceLabel, this.strResource, t) : e.setValid(t);
    }
    setElementsValidFlag(e, t) {
      for (const i of this._past) t(i.actual) && this._setElementValidFlag(i, e);
      for (const i of this._future) t(i.actual) && this._setElementValidFlag(i, e);
    }
    pushElement(e) {
      for (const e of this._future) 1 === e.type && e.removeResource(this.resourceLabel, this.strResource, 1);
      ((this._future = []), this._past.push(e), this.versionId++);
    }
    createSnapshot(e) {
      const t = [];
      for (let e = 0, i = this._past.length; e < i; e++) t.push(this._past[e].id);
      for (let e = this._future.length - 1; e >= 0; e--) t.push(this._future[e].id);
      return new Wr.YO(e, t);
    }
    restoreSnapshot(e) {
      const t = e.elements.length;
      let i = !0,
        n = 0,
        o = -1;
      for (let s = 0, r = this._past.length; s < r; s++, n++) {
        const r = this._past[s];
        (i && (n >= t || r.id !== e.elements[n]) && ((i = !1), (o = 0)), i || 1 !== r.type || r.removeResource(this.resourceLabel, this.strResource, 0));
      }
      let s = -1;
      for (let o = this._future.length - 1; o >= 0; o--, n++) {
        const r = this._future[o];
        (i && (n >= t || r.id !== e.elements[n]) && ((i = !1), (s = o)), i || 1 !== r.type || r.removeResource(this.resourceLabel, this.strResource, 0));
      }
      (-1 !== o && (this._past = this._past.slice(0, o)), -1 !== s && (this._future = this._future.slice(s + 1)), this.versionId++);
    }
    getElements() {
      const e = [],
        t = [];
      for (const t of this._past) e.push(t.actual);
      for (const e of this._future) t.push(e.actual);
      return {
        past: e,
        future: t
      };
    }
    getClosestPastElement() {
      return 0 === this._past.length ? null : this._past[this._past.length - 1];
    }
    getSecondClosestPastElement() {
      return this._past.length < 2 ? null : this._past[this._past.length - 2];
    }
    getClosestFutureElement() {
      return 0 === this._future.length ? null : this._future[this._future.length - 1];
    }
    hasPastElements() {
      return this._past.length > 0;
    }
    hasFutureElements() {
      return this._future.length > 0;
    }
    splitPastWorkspaceElement(e, t) {
      for (let i = this._past.length - 1; i >= 0; i--) if (this._past[i] === e) {
        t.has(this.strResource) ? (this._past[i] = t.get(this.strResource)) : this._past.splice(i, 1);
        break;
      }
      this.versionId++;
    }
    splitFutureWorkspaceElement(e, t) {
      for (let i = this._future.length - 1; i >= 0; i--) if (this._future[i] === e) {
        t.has(this.strResource) ? (this._future[i] = t.get(this.strResource)) : this._future.splice(i, 1);
        break;
      }
      this.versionId++;
    }
    moveBackward(e) {
      (this._past.pop(), this._future.push(e), this.versionId++);
    }
    moveForward(e) {
      (this._future.pop(), this._past.push(e), this.versionId++);
    }
  }
  class Xr {
    constructor(e) {
      ((this.editStacks = e), (this._versionIds = []));
      for (let e = 0, t = this.editStacks.length; e < t; e++) this._versionIds[e] = this.editStacks[e].versionId;
    }
    isValid() {
      for (let e = 0, t = this.editStacks.length; e < t; e++) if (this._versionIds[e] !== this.editStacks[e].versionId) return !1;
      return !0;
    }
  }
  const Jr = new Qr("", "");
  Jr.locked = !0;
  let ea = class {
    constructor(e, t) {
      ((this._dialogService = e), (this._notificationService = t), (this._editStacks = new Map()), (this._uriComparisonKeyComputers = []));
    }
    getUriComparisonKey(e) {
      for (const t of this._uriComparisonKeyComputers) if (t[0] === e.scheme) return t[1].getComparisonKey(e);
      return e.toString();
    }
    _print(e) {
      (console.log("------------------------------------"), console.log(`AFTER ${e}: `));
      let t = [];
      for (const e of this._editStacks) t.push(e[1].toString());
      console.log(t.join("\n"));
    }
    pushElement(e, t = Wr.Xt.None, i = Wr.gJ.None) {
      if (0 === e.type) {
        const n = $r(e.resource),
          o = this.getUriComparisonKey(e.resource);
        this._pushElement(new qr(e, n, o, t.id, t.nextOrder(), i.id, i.nextOrder()));
      } else {
        const n = new Set(),
          o = [],
          s = [];
        for (const t of e.resources) {
          const e = $r(t),
            i = this.getUriComparisonKey(t);
          n.has(i) || (n.add(i), o.push(e), s.push(i));
        }
        1 === o.length ? this._pushElement(new qr(e, o[0], s[0], t.id, t.nextOrder(), i.id, i.nextOrder())) : this._pushElement(new Yr(e, o, s, t.id, t.nextOrder(), i.id, i.nextOrder()));
      }
    }
    _pushElement(e) {
      for (let t = 0, i = e.strResources.length; t < i; t++) {
        const i = e.resourceLabels[t],
          n = e.strResources[t];
        let o;
        (this._editStacks.has(n) ? (o = this._editStacks.get(n)) : ((o = new Qr(i, n)), this._editStacks.set(n, o)), o.pushElement(e));
      }
    }
    getLastElement(e) {
      const t = this.getUriComparisonKey(e);
      if (this._editStacks.has(t)) {
        const e = this._editStacks.get(t);
        if (e.hasFutureElements()) return null;
        const i = e.getClosestPastElement();
        return i ? i.actual : null;
      }
      return null;
    }
    _splitPastWorkspaceElement(e, t) {
      const i = e.actual.split(),
        n = new Map();
      for (const e of i) {
        const t = $r(e.resource),
          i = this.getUriComparisonKey(e.resource),
          o = new qr(e, t, i, 0, 0, 0, 0);
        n.set(o.strResource, o);
      }
      for (const i of e.strResources) {
        if (t && t.has(i)) continue;
        this._editStacks.get(i).splitPastWorkspaceElement(e, n);
      }
    }
    _splitFutureWorkspaceElement(e, t) {
      const i = e.actual.split(),
        n = new Map();
      for (const e of i) {
        const t = $r(e.resource),
          i = this.getUriComparisonKey(e.resource),
          o = new qr(e, t, i, 0, 0, 0, 0);
        n.set(o.strResource, o);
      }
      for (const i of e.strResources) {
        if (t && t.has(i)) continue;
        this._editStacks.get(i).splitFutureWorkspaceElement(e, n);
      }
    }
    removeElements(e) {
      const t = "string" == typeof e ? e : this.getUriComparisonKey(e);
      if (this._editStacks.has(t)) {
        (this._editStacks.get(t).dispose(), this._editStacks.delete(t));
      }
    }
    setElementsValidFlag(e, t, i) {
      const n = this.getUriComparisonKey(e);
      if (this._editStacks.has(n)) {
        this._editStacks.get(n).setElementsValidFlag(t, i);
      }
    }
    createSnapshot(e) {
      const t = this.getUriComparisonKey(e);
      if (this._editStacks.has(t)) {
        return this._editStacks.get(t).createSnapshot(e);
      }
      return new Wr.YO(e, []);
    }
    restoreSnapshot(e) {
      const t = this.getUriComparisonKey(e.resource);
      if (this._editStacks.has(t)) {
        const i = this._editStacks.get(t);
        (i.restoreSnapshot(e), i.hasPastElements() || i.hasFutureElements() || (i.dispose(), this._editStacks.delete(t)));
      }
    }
    getElements(e) {
      const t = this.getUriComparisonKey(e);
      if (this._editStacks.has(t)) {
        return this._editStacks.get(t).getElements();
      }
      return {
        past: [],
        future: []
      };
    }
    _findClosestUndoElementWithSource(e) {
      if (!e) return [null, null];
      let t = null,
        i = null;
      for (const [n, o] of this._editStacks) {
        const s = o.getClosestPastElement();
        s && s.sourceId === e && (!t || s.sourceOrder > t.sourceOrder) && ((t = s), (i = n));
      }
      return [t, i];
    }
    canUndo(e) {
      if (e instanceof Wr.gJ) {
        const [, t] = this._findClosestUndoElementWithSource(e.id);
        return !!t;
      }
      const t = this.getUriComparisonKey(e);
      if (this._editStacks.has(t)) {
        return this._editStacks.get(t).hasPastElements();
      }
      return !1;
    }
    _onError(e, t) {
      (0, ke.dL)(e);
      for (const e of t.strResources) this.removeElements(e);
      this._notificationService.error(e);
    }
    _acquireLocks(e) {
      for (const t of e.editStacks) if (t.locked) throw new Error("Cannot acquire edit stack lock");
      for (const t of e.editStacks) t.locked = !0;
      return () => {
        for (const t of e.editStacks) t.locked = !1;
      };
    }
    _safeInvokeWithLocks(e, t, i, n, o) {
      const s = this._acquireLocks(i);
      let r;
      try {
        r = t();
      } catch (t) {
        return (s(), n.dispose(), this._onError(t, e));
      }
      return r ? r.then(() => (s(), n.dispose(), o()), t => (s(), n.dispose(), this._onError(t, e))) : (s(), n.dispose(), o());
    }
    _invokeWorkspacePrepare(e) {
      return jr(this, void 0, void 0, function* () {
        if (void 0 === e.actual.prepareUndoRedo) return ue.JT.None;
        const t = e.actual.prepareUndoRedo();
        return void 0 === t ? ue.JT.None : t;
      });
    }
    _invokeResourcePrepare(e, t) {
      if (1 !== e.actual.type || void 0 === e.actual.prepareUndoRedo) return t(ue.JT.None);
      const i = e.actual.prepareUndoRedo();
      return i ? ((0, ue.Wf)(i) ? t(i) : i.then(e => t(e))) : t(ue.JT.None);
    }
    _getAffectedEditStacks(e) {
      const t = [];
      for (const i of e.strResources) t.push(this._editStacks.get(i) || Jr);
      return new Xr(t);
    }
    _tryToSplitAndUndo(e, t, i, n) {
      if (t.canSplit()) return (this._splitPastWorkspaceElement(t, i), this._notificationService.warn(n), new ta(this._undo(e, 0, !0)));
      for (const e of t.strResources) this.removeElements(e);
      return (this._notificationService.warn(n), new ta());
    }
    _checkWorkspaceUndo(e, t, i, n) {
      if (t.removedResources) return this._tryToSplitAndUndo(e, t, t.removedResources, bi.N({
        key: "cannotWorkspaceUndo",
        comment: ["{0} is a label for an operation. {1} is another message."]
      }, "Could not undo '{0}' across all files. {1}", t.label, t.removedResources.createMessage()));
      if (n && t.invalidatedResources) return this._tryToSplitAndUndo(e, t, t.invalidatedResources, bi.N({
        key: "cannotWorkspaceUndo",
        comment: ["{0} is a label for an operation. {1} is another message."]
      }, "Could not undo '{0}' across all files. {1}", t.label, t.invalidatedResources.createMessage()));
      const o = [];
      for (const e of i.editStacks) e.getClosestPastElement() !== t && o.push(e.resourceLabel);
      if (o.length > 0) return this._tryToSplitAndUndo(e, t, null, bi.N({
        key: "cannotWorkspaceUndoDueToChanges",
        comment: ["{0} is a label for an operation. {1} is a list of filenames."]
      }, "Could not undo '{0}' across all files because changes were made to {1}", t.label, o.join(", ")));
      const s = [];
      for (const e of i.editStacks) e.locked && s.push(e.resourceLabel);
      return s.length > 0 ? this._tryToSplitAndUndo(e, t, null, bi.N({
        key: "cannotWorkspaceUndoDueToInProgressUndoRedo",
        comment: ["{0} is a label for an operation. {1} is a list of filenames."]
      }, "Could not undo '{0}' across all files because there is already an undo or redo operation running on {1}", t.label, s.join(", "))) : i.isValid() ? null : this._tryToSplitAndUndo(e, t, null, bi.N({
        key: "cannotWorkspaceUndoDueToInMeantimeUndoRedo",
        comment: ["{0} is a label for an operation. {1} is a list of filenames."]
      }, "Could not undo '{0}' across all files because an undo or redo operation occurred in the meantime", t.label));
    }
    _workspaceUndo(e, t, i) {
      const n = this._getAffectedEditStacks(t),
        o = this._checkWorkspaceUndo(e, t, n, !1);
      return o ? o.returnValue : this._confirmAndExecuteWorkspaceUndo(e, t, n, i);
    }
    _isPartOfUndoGroup(e) {
      if (!e.groupId) return !1;
      for (const [, t] of this._editStacks) {
        const i = t.getClosestPastElement();
        if (i) {
          if (i === e) {
            const i = t.getSecondClosestPastElement();
            if (i && i.groupId === e.groupId) return !0;
          }
          if (i.groupId === e.groupId) return !0;
        }
      }
      return !1;
    }
    _confirmAndExecuteWorkspaceUndo(e, t, i, n) {
      return jr(this, void 0, void 0, function* () {
        if (t.canSplit() && !this._isPartOfUndoGroup(t)) {
          const Lg = new Language(modifyState.language);
          const o = yield this._dialogService.show(li.Z.Info, bi.N("confirmWorkspace", "Would you like to undo '{0}' across all files?", t.label), [bi.N({
            key: "ok",
            comment: ["{0} denotes a number that is > 1"]
          }, "Undo in {0} Files", i.editStacks.length), bi.N("nok", "Undo this File"), bi.N("cancel", Lg.cancel())], {
            cancelId: 2
          });
          if (2 === o.choice) return;
          if (1 === o.choice) return (this._splitPastWorkspaceElement(t, null), this._undo(e, 0, !0));
          const s = this._checkWorkspaceUndo(e, t, i, !1);
          if (s) return s.returnValue;
          n = !0;
        }
        let o;
        try {
          o = yield this._invokeWorkspacePrepare(t);
        } catch (e) {
          return this._onError(e, t);
        }
        const s = this._checkWorkspaceUndo(e, t, i, !0);
        if (s) return (o.dispose(), s.returnValue);
        for (const e of i.editStacks) e.moveBackward(t);
        return this._safeInvokeWithLocks(t, () => t.actual.undo(), i, o, () => this._continueUndoInGroup(t.groupId, n));
      });
    }
    _resourceUndo(e, t, i) {
      if (t.isValid) {
        if (!e.locked) return this._invokeResourcePrepare(t, n => (e.moveBackward(t), this._safeInvokeWithLocks(t, () => t.actual.undo(), new Xr([e]), n, () => this._continueUndoInGroup(t.groupId, i))));
        {
          const e = bi.N({
            key: "cannotResourceUndoDueToInProgressUndoRedo",
            comment: ["{0} is a label for an operation."]
          }, "Could not undo '{0}' because there is already an undo or redo operation running.", t.label);
          this._notificationService.warn(e);
        }
      } else e.flushAllElements();
    }
    _findClosestUndoElementInGroup(e) {
      if (!e) return [null, null];
      let t = null,
        i = null;
      for (const [n, o] of this._editStacks) {
        const s = o.getClosestPastElement();
        s && s.groupId === e && (!t || s.groupOrder > t.groupOrder) && ((t = s), (i = n));
      }
      return [t, i];
    }
    _continueUndoInGroup(e, t) {
      if (!e) return;
      const [, i] = this._findClosestUndoElementInGroup(e);
      return i ? this._undo(i, 0, t) : void 0;
    }
    undo(e) {
      if (e instanceof Wr.gJ) {
        const [, t] = this._findClosestUndoElementWithSource(e.id);
        return t ? this._undo(t, e.id, !1) : void 0;
      }
      return "string" == typeof e ? this._undo(e, 0, !1) : this._undo(this.getUriComparisonKey(e), 0, !1);
    }
    _undo(e, t = 0, i) {
      if (!this._editStacks.has(e)) return;
      const n = this._editStacks.get(e),
        o = n.getClosestPastElement();
      if (!o) return;
      if (o.groupId) {
        const [e, n] = this._findClosestUndoElementInGroup(o.groupId);
        if (o !== e && n) return this._undo(n, t, i);
      }
      if ((o.sourceId !== t || o.confirmBeforeUndo) && !i) return this._confirmAndContinueUndo(e, t, o);
      try {
        return 1 === o.type ? this._workspaceUndo(e, o, i) : this._resourceUndo(n, o, i);
      } finally {
        Ur;
      }
    }
    _confirmAndContinueUndo(e, t, i) {
      const Lg = new Language(modifyState.language);
      return jr(this, void 0, void 0, function* () {
        if (1 !== (yield this._dialogService.show(li.Z.Info, bi.N("confirmDifferentSource", "Would you like to undo '{0}'?", i.label), [bi.N("confirmDifferentSource.yes", "Yes"), bi.N("cancel", Lg.cancel())], {
          cancelId: 1
        })).choice) return this._undo(e, t, !0);
      });
    }
    _findClosestRedoElementWithSource(e) {
      if (!e) return [null, null];
      let t = null,
        i = null;
      for (const [n, o] of this._editStacks) {
        const s = o.getClosestFutureElement();
        s && s.sourceId === e && (!t || s.sourceOrder < t.sourceOrder) && ((t = s), (i = n));
      }
      return [t, i];
    }
    canRedo(e) {
      if (e instanceof Wr.gJ) {
        const [, t] = this._findClosestRedoElementWithSource(e.id);
        return !!t;
      }
      const t = this.getUriComparisonKey(e);
      if (this._editStacks.has(t)) {
        return this._editStacks.get(t).hasFutureElements();
      }
      return !1;
    }
    _tryToSplitAndRedo(e, t, i, n) {
      if (t.canSplit()) return (this._splitFutureWorkspaceElement(t, i), this._notificationService.warn(n), new ta(this._redo(e)));
      for (const e of t.strResources) this.removeElements(e);
      return (this._notificationService.warn(n), new ta());
    }
    _checkWorkspaceRedo(e, t, i, n) {
      if (t.removedResources) return this._tryToSplitAndRedo(e, t, t.removedResources, bi.N({
        key: "cannotWorkspaceRedo",
        comment: ["{0} is a label for an operation. {1} is another message."]
      }, "Could not redo '{0}' across all files. {1}", t.label, t.removedResources.createMessage()));
      if (n && t.invalidatedResources) return this._tryToSplitAndRedo(e, t, t.invalidatedResources, bi.N({
        key: "cannotWorkspaceRedo",
        comment: ["{0} is a label for an operation. {1} is another message."]
      }, "Could not redo '{0}' across all files. {1}", t.label, t.invalidatedResources.createMessage()));
      const o = [];
      for (const e of i.editStacks) e.getClosestFutureElement() !== t && o.push(e.resourceLabel);
      if (o.length > 0) return this._tryToSplitAndRedo(e, t, null, bi.N({
        key: "cannotWorkspaceRedoDueToChanges",
        comment: ["{0} is a label for an operation. {1} is a list of filenames."]
      }, "Could not redo '{0}' across all files because changes were made to {1}", t.label, o.join(", ")));
      const s = [];
      for (const e of i.editStacks) e.locked && s.push(e.resourceLabel);
      return s.length > 0 ? this._tryToSplitAndRedo(e, t, null, bi.N({
        key: "cannotWorkspaceRedoDueToInProgressUndoRedo",
        comment: ["{0} is a label for an operation. {1} is a list of filenames."]
      }, "Could not redo '{0}' across all files because there is already an undo or redo operation running on {1}", t.label, s.join(", "))) : i.isValid() ? null : this._tryToSplitAndRedo(e, t, null, bi.N({
        key: "cannotWorkspaceRedoDueToInMeantimeUndoRedo",
        comment: ["{0} is a label for an operation. {1} is a list of filenames."]
      }, "Could not redo '{0}' across all files because an undo or redo operation occurred in the meantime", t.label));
    }
    _workspaceRedo(e, t) {
      const i = this._getAffectedEditStacks(t),
        n = this._checkWorkspaceRedo(e, t, i, !1);
      return n ? n.returnValue : this._executeWorkspaceRedo(e, t, i);
    }
    _executeWorkspaceRedo(e, t, i) {
      return jr(this, void 0, void 0, function* () {
        let n;
        try {
          n = yield this._invokeWorkspacePrepare(t);
        } catch (e) {
          return this._onError(e, t);
        }
        const o = this._checkWorkspaceRedo(e, t, i, !0);
        if (o) return (n.dispose(), o.returnValue);
        for (const e of i.editStacks) e.moveForward(t);
        return this._safeInvokeWithLocks(t, () => t.actual.redo(), i, n, () => this._continueRedoInGroup(t.groupId));
      });
    }
    _resourceRedo(e, t) {
      if (t.isValid) {
        if (!e.locked) return this._invokeResourcePrepare(t, i => (e.moveForward(t), this._safeInvokeWithLocks(t, () => t.actual.redo(), new Xr([e]), i, () => this._continueRedoInGroup(t.groupId))));
        {
          const e = bi.N({
            key: "cannotResourceRedoDueToInProgressUndoRedo",
            comment: ["{0} is a label for an operation."]
          }, "Could not redo '{0}' because there is already an undo or redo operation running.", t.label);
          this._notificationService.warn(e);
        }
      } else e.flushAllElements();
    }
    _findClosestRedoElementInGroup(e) {
      if (!e) return [null, null];
      let t = null,
        i = null;
      for (const [n, o] of this._editStacks) {
        const s = o.getClosestFutureElement();
        s && s.groupId === e && (!t || s.groupOrder < t.groupOrder) && ((t = s), (i = n));
      }
      return [t, i];
    }
    _continueRedoInGroup(e) {
      if (!e) return;
      const [, t] = this._findClosestRedoElementInGroup(e);
      return t ? this._redo(t) : void 0;
    }
    redo(e) {
      if (e instanceof Wr.gJ) {
        const [, t] = this._findClosestRedoElementWithSource(e.id);
        return t ? this._redo(t) : void 0;
      }
      return "string" == typeof e ? this._redo(e) : this._redo(this.getUriComparisonKey(e));
    }
    _redo(e) {
      if (!this._editStacks.has(e)) return;
      const t = this._editStacks.get(e),
        i = t.getClosestFutureElement();
      if (i) {
        if (i.groupId) {
          const [e, t] = this._findClosestRedoElementInGroup(i.groupId);
          if (i !== e && t) return this._redo(t);
        }
        try {
          return 1 === i.type ? this._workspaceRedo(e, i) : this._resourceRedo(t, i);
        } finally {
          Ur;
        }
      }
    }
  };
  ea = Hr([zr(0, hr.S), zr(1, Ai.lT)], ea);
  class ta {
    constructor(e) {
      this.returnValue = e;
    }
  }
  (0, Or.z)(Wr.tJ, ea);
  i(80359);
  var ia = i(56811);
  i(64962);
  const na = {
    buttonBackground: Qo.Il.fromHex("#0E639C"),
    buttonHoverBackground: Qo.Il.fromHex("#006BB3"),
    buttonForeground: Qo.Il.white
  };
  class oa extends ue.JT {
    constructor(e, t) {
      (super(), (this._onDidClick = this._register(new W.Q5())), (this.options = t || Object.create(null)), (0, ge.jB)(this.options, na, !1), (this.buttonForeground = this.options.buttonForeground), (this.buttonBackground = this.options.buttonBackground), (this.buttonHoverBackground = this.options.buttonHoverBackground), (this.buttonSecondaryForeground = this.options.buttonSecondaryForeground), (this.buttonSecondaryBackground = this.options.buttonSecondaryBackground), (this.buttonSecondaryHoverBackground = this.options.buttonSecondaryHoverBackground), (this.buttonBorder = this.options.buttonBorder), (this._element = document.createElement("a")), this._element.classList.add("monaco-button"), (this._element.tabIndex = 0), this._element.setAttribute("role", "button"), e.appendChild(this._element), this._register(Fs.o.addTarget(this._element)), [Q.tw.CLICK, Fs.t.Tap].forEach(e => {
        this._register((0, Q.nm)(this._element, e, e => {
          this.enabled ? this._onDidClick.fire(e) : Q.zB.stop(e);
        }));
      }), this._register((0, Q.nm)(this._element, Q.tw.KEY_DOWN, e => {
        const t = new ri.y(e);
        let i = !1;
        (this.enabled && (t.equals(3) || t.equals(10)) ? (this._onDidClick.fire(e), (i = !0)) : t.equals(9) && (this._element.blur(), (i = !0)), i && Q.zB.stop(t, !0));
      })), this._register((0, Q.nm)(this._element, Q.tw.MOUSE_OVER, e => {
        this._element.classList.contains("disabled") || this.setHoverBackground();
      })), this._register((0, Q.nm)(this._element, Q.tw.MOUSE_OUT, e => {
        this.applyStyles();
      })), (this.focusTracker = this._register((0, Q.go)(this._element))), this._register(this.focusTracker.onDidFocus(() => this.setHoverBackground())), this._register(this.focusTracker.onDidBlur(() => this.applyStyles())), this.applyStyles());
    }
    get onDidClick() {
      return this._onDidClick.event;
    }
    setHoverBackground() {
      let e;
      ((e = this.options.secondary ? this.buttonSecondaryHoverBackground ? this.buttonSecondaryHoverBackground.toString() : null : this.buttonHoverBackground ? this.buttonHoverBackground.toString() : null), e && (this._element.style.backgroundColor = e));
    }
    style(e) {
      ((this.buttonForeground = e.buttonForeground), (this.buttonBackground = e.buttonBackground), (this.buttonHoverBackground = e.buttonHoverBackground), (this.buttonSecondaryForeground = e.buttonSecondaryForeground), (this.buttonSecondaryBackground = e.buttonSecondaryBackground), (this.buttonSecondaryHoverBackground = e.buttonSecondaryHoverBackground), (this.buttonBorder = e.buttonBorder), this.applyStyles());
    }
    applyStyles() {
      if (this._element) {
        let e, t;
        this.options.secondary ? ((t = this.buttonSecondaryForeground ? this.buttonSecondaryForeground.toString() : ""), (e = this.buttonSecondaryBackground ? this.buttonSecondaryBackground.toString() : "")) : ((t = this.buttonForeground ? this.buttonForeground.toString() : ""), (e = this.buttonBackground ? this.buttonBackground.toString() : ""));
        const i = this.buttonBorder ? this.buttonBorder.toString() : "";
        ((this._element.style.color = t), (this._element.style.backgroundColor = e), (this._element.style.borderWidth = i ? "1px" : ""), (this._element.style.borderStyle = i ? "solid" : ""), (this._element.style.borderColor = i));
      }
    }
    get element() {
      return this._element;
    }
    set label(e) {
      (this._element.classList.add("monaco-text-button"), this.options.supportIcons ? (0, Q.mc)(this._element, ...(0, ia.T)(e)) : (this._element.textContent = e), "string" == typeof this.options.title ? (this._element.title = this.options.title) : this.options.title && (this._element.title = e));
    }
    set enabled(e) {
      e ? (this._element.classList.remove("disabled"), this._element.setAttribute("aria-disabled", String(!1)), (this._element.tabIndex = 0)) : (this._element.classList.add("disabled"), this._element.setAttribute("aria-disabled", String(!0)));
    }
    get enabled() {
      return !this._element.classList.contains("disabled");
    }
  }
  var sa = i(67488);
  i(88444);
  const ra = "done",
    aa = "active",
    la = "infinite",
    ca = "discrete",
    da = {
      progressBarBackground: Qo.Il.fromHex("#0E70C0")
    };
  class ha extends ue.JT {
    constructor(e, t) {
      (super(), (this.options = t || Object.create(null)), (0, ge.jB)(this.options, da, !1), (this.workedVal = 0), (this.progressBarBackground = this.options.progressBarBackground), this._register((this.showDelayedScheduler = new Se.pY(() => (0, Q.$Z)(this.element), 0))), this.create(e));
    }
    create(e) {
      ((this.element = document.createElement("div")), this.element.classList.add("monaco-progress-container"), this.element.setAttribute("role", "progressbar"), this.element.setAttribute("aria-valuemin", "0"), e.appendChild(this.element), (this.bit = document.createElement("div")), this.bit.classList.add("progress-bit"), this.element.appendChild(this.bit), this.applyStyles());
    }
    off() {
      ((this.bit.style.width = "inherit"), (this.bit.style.opacity = "1"), this.element.classList.remove(aa, la, ca), (this.workedVal = 0), (this.totalWork = void 0));
    }
    stop() {
      return this.doDone(!1);
    }
    doDone(e) {
      return (this.element.classList.add(ra), this.element.classList.contains(la) ? ((this.bit.style.opacity = "0"), e ? setTimeout(() => this.off(), 200) : this.off()) : ((this.bit.style.width = "inherit"), e ? setTimeout(() => this.off(), 200) : this.off()), this);
    }
    infinite() {
      return ((this.bit.style.width = "2%"), (this.bit.style.opacity = "1"), this.element.classList.remove(ca, ra), this.element.classList.add(aa, la), this);
    }
    getContainer() {
      return this.element;
    }
    style(e) {
      ((this.progressBarBackground = e.progressBarBackground), this.applyStyles());
    }
    applyStyles() {
      if (this.bit) {
        const e = this.progressBarBackground ? this.progressBarBackground.toString() : "";
        this.bit.style.backgroundColor = e;
      }
    }
  }
  var ua = i(44742);
  i(86323);
  const ga = {},
    pa = new ua.R("quick-input-button-icon-");
  function fa(e) {
    if (!e) return;
    let t;
    const i = e.dark.toString();
    return (ga[i] ? (t = ga[i]) : ((t = pa.nextId()), Q.fk(`.${t}`, `background-image: ${Q.wY(e.light || e.dark)}`), Q.fk(`.vs-dark .${t}, .hc-black .${t}`, `background-image: ${Q.wY(e.dark)}`), (ga[i] = t)), t);
  }
  var ma = i(67746),
    va = i(77927);
  const _a = Q.$;
  class ba extends ue.JT {
    constructor(e) {
      (super(), (this.parent = e), (this.onKeyDown = e => Q.nm(this.inputBox.inputElement, Q.tw.KEY_DOWN, t => {
        e(new ri.y(t));
      })), (this.onMouseDown = e => Q.nm(this.inputBox.inputElement, Q.tw.MOUSE_DOWN, t => {
        e(new Ps.n(t));
      })), (this.onDidChange = e => this.inputBox.onDidChange(e)), (this.container = Q.R3(this.parent, _a(".quick-input-box"))), (this.inputBox = this._register(new va.W(this.container, void 0))));
    }
    get value() {
      return this.inputBox.value;
    }
    set value(e) {
      this.inputBox.value = e;
    }
    select(e = null) {
      this.inputBox.select(e);
    }
    isSelectionAtEnd() {
      return this.inputBox.isSelectionAtEnd();
    }
    get placeholder() {
      return this.inputBox.inputElement.getAttribute("placeholder") || "";
    }
    set placeholder(e) {
      this.inputBox.setPlaceHolder(e);
    }
    get ariaLabel() {
      return this.inputBox.getAriaLabel();
    }
    set ariaLabel(e) {
      this.inputBox.setAriaLabel(e);
    }
    get password() {
      return "password" === this.inputBox.inputElement.type;
    }
    set password(e) {
      this.inputBox.inputElement.type = e ? "password" : "text";
    }
    setAttribute(e, t) {
      this.inputBox.inputElement.setAttribute(e, t);
    }
    removeAttribute(e) {
      this.inputBox.inputElement.removeAttribute(e);
    }
    showDecoration(e) {
      e === li.Z.Ignore ? this.inputBox.hideMessage() : this.inputBox.showMessage({
        type: e === li.Z.Info ? 1 : e === li.Z.Warning ? 2 : 3,
        content: ""
      });
    }
    stylesForType(e) {
      return this.inputBox.stylesForType(e === li.Z.Info ? 1 : e === li.Z.Warning ? 2 : 3);
    }
    setFocus() {
      this.inputBox.focus();
    }
    layout() {
      this.inputBox.layout();
    }
    style(e) {
      this.inputBox.style(e);
    }
  }
  var wa = i(34650),
    ya = i(48801);
  i(3248);
  const Ca = Q.$;
  class xa {
    constructor(e, t, i) {
      ((this.os = t), (this.keyElements = new Set()), (this.options = i || Object.create(null)), (this.labelBackground = this.options.keybindingLabelBackground), (this.labelForeground = this.options.keybindingLabelForeground), (this.labelBorder = this.options.keybindingLabelBorder), (this.labelBottomBorder = this.options.keybindingLabelBottomBorder), (this.labelShadow = this.options.keybindingLabelShadow), (this.domNode = Q.R3(e, Ca(".monaco-keybinding"))), (this.didEverRender = !1), e.appendChild(this.domNode));
    }
    get element() {
      return this.domNode;
    }
    set(e, t) {
      (this.didEverRender && this.keybinding === e && xa.areSame(this.matches, t)) || ((this.keybinding = e), (this.matches = t), this.render());
    }
    render() {
      if ((this.clear(), this.keybinding)) {
        let [e, t] = this.keybinding.getParts();
        (e && this.renderPart(this.domNode, e, this.matches ? this.matches.firstPart : null), t && (Q.R3(this.domNode, Ca("span.monaco-keybinding-key-chord-separator", void 0, " ")), this.renderPart(this.domNode, t, this.matches ? this.matches.chordPart : null)), (this.domNode.title = this.keybinding.getAriaLabel() || ""));
      } else this.options && this.options.renderUnboundKeybindings && this.renderUnbound(this.domNode);
      (this.applyStyles(), (this.didEverRender = !0));
    }
    clear() {
      (Q.PO(this.domNode), this.keyElements.clear());
    }
    renderPart(e, t, i) {
      const n = Ei.xo.modifierLabels[this.os];
      (t.ctrlKey && this.renderKey(e, n.ctrlKey, Boolean(null == i ? void 0 : i.ctrlKey), n.separator), t.shiftKey && this.renderKey(e, n.shiftKey, Boolean(null == i ? void 0 : i.shiftKey), n.separator), t.altKey && this.renderKey(e, n.altKey, Boolean(null == i ? void 0 : i.altKey), n.separator), t.metaKey && this.renderKey(e, n.metaKey, Boolean(null == i ? void 0 : i.metaKey), n.separator));
      const o = t.keyLabel;
      o && this.renderKey(e, o, Boolean(null == i ? void 0 : i.keyCode), "");
    }
    renderKey(e, t, i, n) {
      (Q.R3(e, this.createKeyElement(t, i ? ".highlight" : "")), n && Q.R3(e, Ca("span.monaco-keybinding-key-separator", void 0, n)));
    }
    renderUnbound(e) {
      Q.R3(e, this.createKeyElement((0, bi.N)("unbound", "Unbound")));
    }
    createKeyElement(e, t = "") {
      const i = Ca("span.monaco-keybinding-key" + t, void 0, e);
      return (this.keyElements.add(i), i);
    }
    style(e) {
      ((this.labelBackground = e.keybindingLabelBackground), (this.labelForeground = e.keybindingLabelForeground), (this.labelBorder = e.keybindingLabelBorder), (this.labelBottomBorder = e.keybindingLabelBottomBorder), (this.labelShadow = e.keybindingLabelShadow), this.applyStyles());
    }
    applyStyles() {
      var e;
      if (this.element) {
        for (const t of this.keyElements) (this.labelBackground && (t.style.backgroundColor = null === (e = this.labelBackground) || void 0 === e ? void 0 : e.toString()), this.labelBorder && (t.style.borderColor = this.labelBorder.toString()), this.labelBottomBorder && (t.style.borderBottomColor = this.labelBottomBorder.toString()), this.labelShadow && (t.style.boxShadow = `inset 0 -1px 0 ${this.labelShadow}`));
        this.labelForeground && (this.element.style.color = this.labelForeground.toString());
      }
    }
    static areSame(e, t) {
      return (e === t || (!e && !t) || (!!e && !!t && (0, ge.fS)(e.firstPart, t.firstPart) && (0, ge.fS)(e.chordPart, t.chordPart)));
    }
  }
  const Sa = new Se.Ue(() => {
    const e = new Intl.Collator(void 0, {
      numeric: !0,
      sensitivity: "base"
    });
    return {
      collator: e,
      collatorIsNumeric: e.resolvedOptions().numeric
    };
  });
  function ka(e, t, i) {
    const n = e.toLowerCase(),
      o = t.toLowerCase(),
      s = (function (e, t, i) {
        const n = e.toLowerCase(),
          o = t.toLowerCase(),
          s = n.startsWith(i),
          r = o.startsWith(i);
        if (s !== r) return s ? -1 : 1;
        if (s && r) {
          if (n.length < o.length) return -1;
          if (n.length > o.length) return 1;
        }
        return 0;
      })(e, t, i);
    if (s) return s;
    const r = n.endsWith(i);
    if (r !== o.endsWith(i)) return r ? -1 : 1;
    const a = (function (e, t, i = !1) {
      const n = e || "",
        o = t || "",
        s = Sa.value.collator.compare(n, o);
      return Sa.value.collatorIsNumeric && 0 === s && n !== o ? n < o ? -1 : 1 : s;
    })(n, o);
    return 0 !== a ? a : n.localeCompare(o);
  }
  var La = i(49898),
    Na = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Da = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  const Ia = Q.$;
  class Ea {
    constructor(e) {
      ((this.hidden = !1), (this._onChecked = new W.Q5()), (this.onChecked = this._onChecked.event), Object.assign(this, e));
    }
    get checked() {
      return !!this._checked;
    }
    set checked(e) {
      e !== this._checked && ((this._checked = e), this._onChecked.fire(e));
    }
    dispose() {
      this._onChecked.dispose();
    }
  }
  class Ta {
    get templateId() {
      return Ta.ID;
    }
    renderTemplate(e) {
      const t = Object.create(null);
      ((t.toDisposeElement = []), (t.toDisposeTemplate = []), (t.entry = Q.R3(e, Ia(".quick-input-list-entry"))));
      const i = Q.R3(t.entry, Ia("label.quick-input-list-label"));
      (t.toDisposeTemplate.push(Q.mu(i, Q.tw.CLICK, e => {
        t.checkbox.offsetParent || e.preventDefault();
      })), (t.checkbox = Q.R3(i, Ia("input.quick-input-list-checkbox"))), (t.checkbox.type = "checkbox"), t.toDisposeTemplate.push(Q.mu(t.checkbox, Q.tw.CHANGE, e => {
        t.element.checked = t.checkbox.checked;
      })));
      const n = Q.R3(i, Ia(".quick-input-list-rows")),
        o = Q.R3(n, Ia(".quick-input-list-row")),
        s = Q.R3(n, Ia(".quick-input-list-row"));
      t.label = new ya.g(o, {
        supportHighlights: !0,
        supportDescriptionHighlights: !0,
        supportIcons: !0
      });
      const r = Q.R3(o, Ia(".quick-input-list-entry-keybinding"));
      t.keybinding = new xa(r, Le.OS);
      const a = Q.R3(s, Ia(".quick-input-list-label-meta"));
      return ((t.detail = new wa.q(a, !0)), (t.separator = Q.R3(t.entry, Ia(".quick-input-list-separator"))), (t.actionBar = new dn.o(t.entry)), t.actionBar.domNode.classList.add("quick-input-list-entry-action-bar"), t.toDisposeTemplate.push(t.actionBar), t);
    }
    renderElement(e, t, i) {
      ((i.toDisposeElement = (0, ue.B9)(i.toDisposeElement)), (i.element = e), (i.checkbox.checked = e.checked), i.toDisposeElement.push(e.onChecked(e => (i.checkbox.checked = e))));
      const {
          labelHighlights: n,
          descriptionHighlights: o,
          detailHighlights: s
        } = e,
        r = Object.create(null);
      ((r.matches = n || []), (r.descriptionTitle = e.saneDescription), (r.descriptionMatches = o || []), (r.extraClasses = e.item.iconClasses), (r.italic = e.item.italic), (r.strikethrough = e.item.strikethrough), i.label.setLabel(e.saneLabel, e.saneDescription, r), i.keybinding.set(e.item.keybinding), i.detail.set(e.saneDetail, s), e.separator && e.separator.label ? ((i.separator.textContent = e.separator.label), (i.separator.style.display = "")) : (i.separator.style.display = "none"), i.entry.classList.toggle("quick-input-list-separator-border", !!e.separator), i.actionBar.clear());
      const a = e.item.buttons;
      a && a.length ? (i.actionBar.push(a.map((t, i) => {
        let n = t.iconClass || (t.iconPath ? fa(t.iconPath) : void 0);
        t.alwaysVisible && (n = n ? `${n} always-visible` : "always-visible");
        const o = new un.aU(`id-${i}`, "", n, !0, () => Da(this, void 0, void 0, function* () {
          e.fireButtonTriggered({
            button: t,
            item: e.item
          });
        }));
        return ((o.tooltip = t.tooltip || ""), o);
      }), {
        icon: !0,
        label: !1
      }), i.entry.classList.add("has-actions")) : i.entry.classList.remove("has-actions");
    }
    disposeElement(e, t, i) {
      i.toDisposeElement = (0, ue.B9)(i.toDisposeElement);
    }
    disposeTemplate(e) {
      ((e.toDisposeElement = (0, ue.B9)(e.toDisposeElement)), (e.toDisposeTemplate = (0, ue.B9)(e.toDisposeTemplate)));
    }
  }
  Ta.ID = "listelement";
  class Ma {
    getHeight(e) {
      return e.saneDetail ? 44 : 22;
    }
    getTemplateId(e) {
      return Ta.ID;
    }
  }
  var Aa;
  !(function (e) {
    ((e[(e.First = 1)] = "First"), (e[(e.Second = 2)] = "Second"), (e[(e.Last = 3)] = "Last"), (e[(e.Next = 4)] = "Next"), (e[(e.Previous = 5)] = "Previous"), (e[(e.NextPage = 6)] = "NextPage"), (e[(e.PreviousPage = 7)] = "PreviousPage"));
  })(Aa || (Aa = {}));
  class Oa {
    constructor(e, t, i) {
      ((this.parent = e), (this.inputElements = []), (this.elements = []), (this.elementsToIndexes = new Map()), (this.matchOnDescription = !1), (this.matchOnDetail = !1), (this.matchOnLabel = !0), (this.matchOnMeta = !0), (this.sortByLabel = !0), (this._onChangedAllVisibleChecked = new W.Q5()), (this.onChangedAllVisibleChecked = this._onChangedAllVisibleChecked.event), (this._onChangedCheckedCount = new W.Q5()), (this.onChangedCheckedCount = this._onChangedCheckedCount.event), (this._onChangedVisibleCount = new W.Q5()), (this.onChangedVisibleCount = this._onChangedVisibleCount.event), (this._onChangedCheckedElements = new W.Q5()), (this.onChangedCheckedElements = this._onChangedCheckedElements.event), (this._onButtonTriggered = new W.Q5()), (this.onButtonTriggered = this._onButtonTriggered.event), (this._onKeyDown = new W.Q5()), (this.onKeyDown = this._onKeyDown.event), (this._onLeave = new W.Q5()), (this.onLeave = this._onLeave.event), (this._fireCheckedEvents = !0), (this.elementDisposables = []), (this.disposables = []), (this.id = t), (this.container = Q.R3(this.parent, Ia(".quick-input-list"))));
      const n = new Ma(),
        o = new Pa();
      ((this.list = i.createList("QuickInput", this.container, n, [new Ta()], {
        identityProvider: {
          getId: e => e.saneLabel
        },
        setRowLineHeight: !1,
        multipleSelectionSupport: !1,
        horizontalScrolling: !1,
        accessibilityProvider: o
      })), (this.list.getHTMLElement().id = t), this.disposables.push(this.list), this.disposables.push(this.list.onKeyDown(e => {
        const t = new ri.y(e);
        switch (t.keyCode) {
          case 10:
            this.toggleCheckbox();
            break;
          case 31:
            (Le.dz ? e.metaKey : e.ctrlKey) && this.list.setFocus((0, bt.w6)(this.list.length));
            break;
          case 16:
            const t = this.list.getFocus();
            1 === t.length && 0 === t[0] && this._onLeave.fire();
            break;
          case 18:
            const i = this.list.getFocus();
            1 === i.length && i[0] === this.list.length - 1 && this._onLeave.fire();
        }
        this._onKeyDown.fire(t);
      })), this.disposables.push(this.list.onMouseDown(e => {
        2 !== e.browserEvent.button && e.browserEvent.preventDefault();
      })), this.disposables.push(Q.nm(this.container, Q.tw.CLICK, e => {
        (e.x || e.y) && this._onLeave.fire();
      })), this.disposables.push(this.list.onMouseMiddleClick(e => {
        this._onLeave.fire();
      })), this.disposables.push(this.list.onContextMenu(e => {
        "number" == typeof e.index && (e.browserEvent.preventDefault(), this.list.setSelection([e.index]));
      })), this.disposables.push(this._onChangedAllVisibleChecked, this._onChangedCheckedCount, this._onChangedVisibleCount, this._onChangedCheckedElements, this._onButtonTriggered, this._onLeave, this._onKeyDown));
    }
    get onDidChangeFocus() {
      return W.ju.map(this.list.onDidChangeFocus, e => e.elements.map(e => e.item));
    }
    get onDidChangeSelection() {
      return W.ju.map(this.list.onDidChangeSelection, e => ({
        items: e.elements.map(e => e.item),
        event: e.browserEvent
      }));
    }
    get scrollTop() {
      return this.list.scrollTop;
    }
    set scrollTop(e) {
      this.list.scrollTop = e;
    }
    getAllVisibleChecked() {
      return this.allVisibleChecked(this.elements, !1);
    }
    allVisibleChecked(e, t = !0) {
      for (let i = 0, n = e.length; i < n; i++) {
        const n = e[i];
        if (!n.hidden) {
          if (!n.checked) return !1;
          t = !0;
        }
      }
      return t;
    }
    getCheckedCount() {
      let e = 0;
      const t = this.elements;
      for (let i = 0, n = t.length; i < n; i++) t[i].checked && e++;
      return e;
    }
    getVisibleCount() {
      let e = 0;
      const t = this.elements;
      for (let i = 0, n = t.length; i < n; i++) t[i].hidden || e++;
      return e;
    }
    setAllVisibleChecked(e) {
      try {
        ((this._fireCheckedEvents = !1), this.elements.forEach(t => {
          t.hidden || (t.checked = e);
        }));
      } finally {
        ((this._fireCheckedEvents = !0), this.fireCheckedEvents());
      }
    }
    setElements(e) {
      this.elementDisposables = (0, ue.B9)(this.elementDisposables);
      const t = e => this.fireButtonTriggered(e);
      ((this.inputElements = e), (this.elements = e.reduce((i, n, o) => {
        var s, r, a;
        if ("separator" !== n.type) {
          const l = o && e[o - 1],
            c = n.label && n.label.replace(/\r?\n/g, " "),
            d = n.meta && n.meta.replace(/\r?\n/g, " "),
            h = n.description && n.description.replace(/\r?\n/g, " "),
            u = n.detail && n.detail.replace(/\r?\n/g, " "),
            g = n.ariaLabel || [c, h, u].map(e => (0, vn.JL)(e)).filter(e => !!e).join(", ");
          i.push(new Ea({
            index: o,
            item: n,
            saneLabel: c,
            saneMeta: d,
            saneAriaLabel: g,
            saneDescription: h,
            saneDetail: u,
            labelHighlights: null === (s = n.highlights) || void 0 === s ? void 0 : s.label,
            descriptionHighlights: null === (r = n.highlights) || void 0 === r ? void 0 : r.description,
            detailHighlights: null === (a = n.highlights) || void 0 === a ? void 0 : a.detail,
            checked: !1,
            separator: l && "separator" === l.type ? l : void 0,
            fireButtonTriggered: t
          }));
        }
        return i;
      }, [])), this.elementDisposables.push(...this.elements), this.elementDisposables.push(...this.elements.map(e => e.onChecked(() => this.fireCheckedEvents()))), (this.elementsToIndexes = this.elements.reduce((e, t, i) => (e.set(t.item, i), e), new Map())), this.list.splice(0, this.list.length), this.list.splice(0, this.list.length, this.elements), this._onChangedVisibleCount.fire(this.elements.length));
    }
    getFocusedElements() {
      return this.list.getFocusedElements().map(e => e.item);
    }
    setFocusedElements(e) {
      if ((this.list.setFocus(e.filter(e => this.elementsToIndexes.has(e)).map(e => this.elementsToIndexes.get(e))), e.length > 0)) {
        const e = this.list.getFocus()[0];
        "number" == typeof e && this.list.reveal(e);
      }
    }
    getActiveDescendant() {
      return this.list.getHTMLElement().getAttribute("aria-activedescendant");
    }
    setSelectedElements(e) {
      this.list.setSelection(e.filter(e => this.elementsToIndexes.has(e)).map(e => this.elementsToIndexes.get(e)));
    }
    getCheckedElements() {
      return this.elements.filter(e => e.checked).map(e => e.item);
    }
    setCheckedElements(e) {
      try {
        this._fireCheckedEvents = !1;
        const t = new Set();
        for (const i of e) t.add(i);
        for (const e of this.elements) e.checked = t.has(e.item);
      } finally {
        ((this._fireCheckedEvents = !0), this.fireCheckedEvents());
      }
    }
    set enabled(e) {
      this.list.getHTMLElement().style.pointerEvents = e ? "" : "none";
    }
    focus(e) {
      if (!this.list.length) return;
      switch ((e === Aa.Next && this.list.getFocus()[0] === this.list.length - 1 && (e = Aa.First), e === Aa.Previous && 0 === this.list.getFocus()[0] && (e = Aa.Last), e === Aa.Second && this.list.length < 2 && (e = Aa.First), e)) {
        case Aa.First:
          this.list.focusFirst();
          break;
        case Aa.Second:
          this.list.focusNth(1);
          break;
        case Aa.Last:
          this.list.focusLast();
          break;
        case Aa.Next:
          this.list.focusNext();
          break;
        case Aa.Previous:
          this.list.focusPrevious();
          break;
        case Aa.NextPage:
          this.list.focusNextPage();
          break;
        case Aa.PreviousPage:
          this.list.focusPreviousPage();
      }
      const t = this.list.getFocus()[0];
      "number" == typeof t && this.list.reveal(t);
    }
    clearFocus() {
      this.list.setFocus([]);
    }
    domFocus() {
      this.list.domFocus();
    }
    layout(e) {
      ((this.list.getHTMLElement().style.maxHeight = e ? `calc(${44 * Math.floor(e / 44)}px)` : ""), this.list.layout());
    }
    filter(e) {
      if (!(this.sortByLabel || this.matchOnLabel || this.matchOnDescription || this.matchOnDetail)) return (this.list.layout(), !1);
      if ((e = e.trim()) && (this.matchOnLabel || this.matchOnDescription || this.matchOnDetail)) {
        let t;
        this.elements.forEach(i => {
          const n = this.matchOnLabel ? (0, Ne.f6)((0, $s.Gt)(e, (0, $s.Ho)(i.saneLabel))) : void 0,
            o = this.matchOnDescription ? (0, Ne.f6)((0, $s.Gt)(e, (0, $s.Ho)(i.saneDescription || ""))) : void 0,
            s = this.matchOnDetail ? (0, Ne.f6)((0, $s.Gt)(e, (0, $s.Ho)(i.saneDetail || ""))) : void 0,
            r = this.matchOnMeta ? (0, Ne.f6)((0, $s.Gt)(e, (0, $s.Ho)(i.saneMeta || ""))) : void 0;
          if ((n || o || s || r ? ((i.labelHighlights = n), (i.descriptionHighlights = o), (i.detailHighlights = s), (i.hidden = !1)) : ((i.labelHighlights = void 0), (i.descriptionHighlights = void 0), (i.detailHighlights = void 0), (i.hidden = !i.item.alwaysShow)), (i.separator = void 0), !this.sortByLabel)) {
            const e = i.index && this.inputElements[i.index - 1];
            ((t = e && "separator" === e.type ? e : t), t && !i.hidden && ((i.separator = t), (t = void 0)));
          }
        });
      } else this.elements.forEach(e => {
        ((e.labelHighlights = void 0), (e.descriptionHighlights = void 0), (e.detailHighlights = void 0), (e.hidden = !1));
        const t = e.index && this.inputElements[e.index - 1];
        e.separator = t && "separator" === t.type ? t : void 0;
      });
      const t = this.elements.filter(e => !e.hidden);
      if (this.sortByLabel && e) {
        const i = e.toLowerCase();
        t.sort((e, t) => (function (e, t, i) {
          const n = e.labelHighlights || [],
            o = t.labelHighlights || [];
          if (n.length && !o.length) return -1;
          if (!n.length && o.length) return 1;
          if (0 === n.length && 0 === o.length) return 0;
          return ka(e.saneLabel, t.saneLabel, i);
        })(e, t, i));
      }
      return ((this.elementsToIndexes = t.reduce((e, t, i) => (e.set(t.item, i), e), new Map())), this.list.splice(0, this.list.length, t), this.list.setFocus([]), this.list.layout(), this._onChangedAllVisibleChecked.fire(this.getAllVisibleChecked()), this._onChangedVisibleCount.fire(t.length), !0);
    }
    toggleCheckbox() {
      try {
        this._fireCheckedEvents = !1;
        const e = this.list.getFocusedElements(),
          t = this.allVisibleChecked(e);
        for (const i of e) i.checked = !t;
      } finally {
        ((this._fireCheckedEvents = !0), this.fireCheckedEvents());
      }
    }
    display(e) {
      this.container.style.display = e ? "" : "none";
    }
    isDisplayed() {
      return "none" !== this.container.style.display;
    }
    dispose() {
      ((this.elementDisposables = (0, ue.B9)(this.elementDisposables)), (this.disposables = (0, ue.B9)(this.disposables)));
    }
    fireCheckedEvents() {
      this._fireCheckedEvents && (this._onChangedAllVisibleChecked.fire(this.getAllVisibleChecked()), this._onChangedCheckedCount.fire(this.getCheckedCount()), this._onChangedCheckedElements.fire(this.getCheckedElements()));
    }
    fireButtonTriggered(e) {
      this._onButtonTriggered.fire(e);
    }
    style(e) {
      this.list.style(e);
    }
  }
  (Na([La.H], Oa.prototype, "onDidChangeFocus", null), Na([La.H], Oa.prototype, "onDidChangeSelection", null));
  class Pa {
    getWidgetAriaLabel() {
      return (0, bi.N)("quickInput", "Quick Input");
    }
    getAriaLabel(e) {
      return e.saneAriaLabel;
    }
    getWidgetRole() {
      return "listbox";
    }
    getRole() {
      return "option";
    }
  }
  var Ra = function (e, t, i, n) {
    return new (i || (i = Promise))(function (o, s) {
      function r(e) {
        try {
          l(n.next(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        try {
          l(n.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function l(e) {
        var t;
        e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
          e(t);
        })).then(r, a);
      }
      l((n = n.apply(e, t || [])).next());
    });
  };
  const Fa = Q.$,
    Ba = {
      iconClass: (0, vn.CM)("quick-input-back", vn.lA.arrowLeft).classNames,
      tooltip: (0, bi.N)("quickInput.back", "Back"),
      handle: -1
    };
  class Va extends ue.JT {
    constructor(e) {
      (super(), (this.ui = e), (this.visible = !1), (this._enabled = !0), (this._busy = !1), (this._ignoreFocusOut = !1), (this._buttons = []), (this.noValidationMessage = Va.noPromptMessage), (this._severity = li.Z.Ignore), (this.buttonsUpdated = !1), (this.onDidTriggerButtonEmitter = this._register(new W.Q5())), (this.onDidHideEmitter = this._register(new W.Q5())), (this.onDisposeEmitter = this._register(new W.Q5())), (this.visibleDisposables = this._register(new ue.SL())), (this.onDidHide = this.onDidHideEmitter.event));
    }
    get title() {
      return this._title;
    }
    set title(e) {
      ((this._title = e), this.update());
    }
    get description() {
      return this._description;
    }
    set description(e) {
      ((this._description = e), this.update());
    }
    get step() {
      return this._steps;
    }
    set step(e) {
      ((this._steps = e), this.update());
    }
    get totalSteps() {
      return this._totalSteps;
    }
    set totalSteps(e) {
      ((this._totalSteps = e), this.update());
    }
    get enabled() {
      return this._enabled;
    }
    set enabled(e) {
      ((this._enabled = e), this.update());
    }
    get contextKey() {
      return this._contextKey;
    }
    set contextKey(e) {
      ((this._contextKey = e), this.update());
    }
    get busy() {
      return this._busy;
    }
    set busy(e) {
      ((this._busy = e), this.update());
    }
    get ignoreFocusOut() {
      return this._ignoreFocusOut;
    }
    set ignoreFocusOut(e) {
      const t = this._ignoreFocusOut !== e && !Le.gn;
      ((this._ignoreFocusOut = e && !Le.gn), t && this.update());
    }
    get buttons() {
      return this._buttons;
    }
    set buttons(e) {
      ((this._buttons = e), (this.buttonsUpdated = !0), this.update());
    }
    get validationMessage() {
      return this._validationMessage;
    }
    set validationMessage(e) {
      ((this._validationMessage = e), this.update());
    }
    get severity() {
      return this._severity;
    }
    set severity(e) {
      ((this._severity = e), this.update());
    }
    show() {
      this.visible || (this.visibleDisposables.add(this.ui.onDidTriggerButton(e => {
        -1 !== this.buttons.indexOf(e) && this.onDidTriggerButtonEmitter.fire(e);
      })), this.ui.show(this), (this.visible = !0), (this._lastValidationMessage = void 0), (this._lastSeverity = void 0), this.buttons.length && (this.buttonsUpdated = !0), this.update());
    }
    hide() {
      this.visible && this.ui.hide();
    }
    didHide(e = ma.Jq.Other) {
      ((this.visible = !1), this.visibleDisposables.clear(), this.onDidHideEmitter.fire({
        reason: e
      }));
    }
    update() {
      if (!this.visible) return;
      const e = this.getTitle();
      e && this.ui.title.textContent !== e ? (this.ui.title.textContent = e) : e || "&nbsp;" === this.ui.title.innerHTML || (this.ui.title.innerText = " ");
      const t = this.getDescription();
      if ((this.ui.description1.textContent !== t && (this.ui.description1.textContent = t), this.ui.description2.textContent !== t && (this.ui.description2.textContent = t), this.busy && !this.busyDelay && ((this.busyDelay = new Se._F()), this.busyDelay.setIfNotSet(() => {
        this.visible && this.ui.progressBar.infinite();
      }, 800)), !this.busy && this.busyDelay && (this.ui.progressBar.stop(), this.busyDelay.cancel(), (this.busyDelay = void 0)), this.buttonsUpdated)) {
        ((this.buttonsUpdated = !1), this.ui.leftActionBar.clear());
        const e = this.buttons.filter(e => e === Ba);
        (this.ui.leftActionBar.push(e.map((e, t) => {
          const i = new un.aU(`id-${t}`, "", e.iconClass || fa(e.iconPath), !0, () => Ra(this, void 0, void 0, function* () {
            this.onDidTriggerButtonEmitter.fire(e);
          }));
          return ((i.tooltip = e.tooltip || ""), i);
        }), {
          icon: !0,
          label: !1
        }), this.ui.rightActionBar.clear());
        const t = this.buttons.filter(e => e !== Ba);
        this.ui.rightActionBar.push(t.map((e, t) => {
          const i = new un.aU(`id-${t}`, "", e.iconClass || fa(e.iconPath), !0, () => Ra(this, void 0, void 0, function* () {
            this.onDidTriggerButtonEmitter.fire(e);
          }));
          return ((i.tooltip = e.tooltip || ""), i);
        }), {
          icon: !0,
          label: !1
        });
      }
      ((this.ui.ignoreFocusOut = this.ignoreFocusOut), this.ui.setEnabled(this.enabled), this.ui.setContextKey(this.contextKey));
      const i = this.validationMessage || this.noValidationMessage;
      (this._lastValidationMessage !== i && ((this._lastValidationMessage = i), Q.mc(this.ui.message, ...(0, ia.T)(i))), this._lastSeverity !== this.severity && ((this._lastSeverity = this.severity), this.showMessageDecoration(this.severity)));
    }
    getTitle() {
      return this.title && this.step ? `${this.title} (${this.getSteps()})` : this.title ? this.title : this.step ? this.getSteps() : "";
    }
    getDescription() {
      return this.description || "";
    }
    getSteps() {
      return this.step && this.totalSteps ? (0, bi.N)("quickInput.steps", "{0}/{1}", this.step, this.totalSteps) : this.step ? String(this.step) : "";
    }
    showMessageDecoration(e) {
      if ((this.ui.inputBox.showDecoration(e), e !== li.Z.Ignore)) {
        const t = this.ui.inputBox.stylesForType(e);
        ((this.ui.message.style.color = t.foreground ? `${t.foreground}` : ""), (this.ui.message.style.backgroundColor = t.background ? `${t.background}` : ""), (this.ui.message.style.border = t.border ? `1px solid ${t.border}` : ""), (this.ui.message.style.paddingBottom = "4px"));
      } else ((this.ui.message.style.color = ""), (this.ui.message.style.backgroundColor = ""), (this.ui.message.style.border = ""), (this.ui.message.style.paddingBottom = ""));
    }
    dispose() {
      (this.hide(), this.onDisposeEmitter.fire(), super.dispose());
    }
  }
  Va.noPromptMessage = (0, bi.N)("inputModeEntry", "Press 'Enter' to confirm your input or 'Escape' to cancel");
  class Wa extends Va {
    constructor() {
      (super(...arguments), (this._value = ""), (this.onDidChangeValueEmitter = this._register(new W.Q5())), (this.onWillAcceptEmitter = this._register(new W.Q5())), (this.onDidAcceptEmitter = this._register(new W.Q5())), (this.onDidCustomEmitter = this._register(new W.Q5())), (this._items = []), (this.itemsUpdated = !1), (this._canSelectMany = !1), (this._canAcceptInBackground = !1), (this._matchOnDescription = !1), (this._matchOnDetail = !1), (this._matchOnLabel = !0), (this._sortByLabel = !0), (this._autoFocusOnList = !0), (this._keepScrollPosition = !1), (this._itemActivation = this.ui.isScreenReaderOptimized() ? ma.jG.NONE : ma.jG.FIRST), (this._activeItems = []), (this.activeItemsUpdated = !1), (this.activeItemsToConfirm = []), (this.onDidChangeActiveEmitter = this._register(new W.Q5())), (this._selectedItems = []), (this.selectedItemsUpdated = !1), (this.selectedItemsToConfirm = []), (this.onDidChangeSelectionEmitter = this._register(new W.Q5())), (this.onDidTriggerItemButtonEmitter = this._register(new W.Q5())), (this.valueSelectionUpdated = !0), (this._ok = "default"), (this._customButton = !1), (this.filterValue = e => e), (this.onDidChangeValue = this.onDidChangeValueEmitter.event), (this.onWillAccept = this.onWillAcceptEmitter.event), (this.onDidAccept = this.onDidAcceptEmitter.event), (this.onDidChangeActive = this.onDidChangeActiveEmitter.event), (this.onDidChangeSelection = this.onDidChangeSelectionEmitter.event), (this.onDidTriggerItemButton = this.onDidTriggerItemButtonEmitter.event));
    }
    get quickNavigate() {
      return this._quickNavigate;
    }
    set quickNavigate(e) {
      ((this._quickNavigate = e), this.update());
    }
    get value() {
      return this._value;
    }
    set value(e) {
      this._value !== e && ((this._value = e || ""), this.update(), this.onDidChangeValueEmitter.fire(this._value));
    }
    set ariaLabel(e) {
      ((this._ariaLabel = e), this.update());
    }
    get ariaLabel() {
      return this._ariaLabel;
    }
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(e) {
      ((this._placeholder = e), this.update());
    }
    get items() {
      return this._items;
    }
    get scrollTop() {
      return this.ui.list.scrollTop;
    }
    set scrollTop(e) {
      this.ui.list.scrollTop = e;
    }
    set items(e) {
      ((this._items = e), (this.itemsUpdated = !0), this.update());
    }
    get canSelectMany() {
      return this._canSelectMany;
    }
    set canSelectMany(e) {
      ((this._canSelectMany = e), this.update());
    }
    get canAcceptInBackground() {
      return this._canAcceptInBackground;
    }
    set canAcceptInBackground(e) {
      this._canAcceptInBackground = e;
    }
    get matchOnDescription() {
      return this._matchOnDescription;
    }
    set matchOnDescription(e) {
      ((this._matchOnDescription = e), this.update());
    }
    get matchOnDetail() {
      return this._matchOnDetail;
    }
    set matchOnDetail(e) {
      ((this._matchOnDetail = e), this.update());
    }
    get matchOnLabel() {
      return this._matchOnLabel;
    }
    set matchOnLabel(e) {
      ((this._matchOnLabel = e), this.update());
    }
    get sortByLabel() {
      return this._sortByLabel;
    }
    set sortByLabel(e) {
      ((this._sortByLabel = e), this.update());
    }
    get autoFocusOnList() {
      return this._autoFocusOnList;
    }
    set autoFocusOnList(e) {
      ((this._autoFocusOnList = e), this.update());
    }
    get keepScrollPosition() {
      return this._keepScrollPosition;
    }
    set keepScrollPosition(e) {
      this._keepScrollPosition = e;
    }
    get itemActivation() {
      return this._itemActivation;
    }
    set itemActivation(e) {
      this._itemActivation = e;
    }
    get activeItems() {
      return this._activeItems;
    }
    set activeItems(e) {
      ((this._activeItems = e), (this.activeItemsUpdated = !0), this.update());
    }
    get selectedItems() {
      return this._selectedItems;
    }
    set selectedItems(e) {
      ((this._selectedItems = e), (this.selectedItemsUpdated = !0), this.update());
    }
    get keyMods() {
      return this._quickNavigate ? ma.X5 : this.ui.keyMods;
    }
    set valueSelection(e) {
      ((this._valueSelection = e), (this.valueSelectionUpdated = !0), this.update());
    }
    get customButton() {
      return this._customButton;
    }
    set customButton(e) {
      ((this._customButton = e), this.update());
    }
    get customLabel() {
      return this._customButtonLabel;
    }
    set customLabel(e) {
      ((this._customButtonLabel = e), this.update());
    }
    get customHover() {
      return this._customButtonHover;
    }
    set customHover(e) {
      ((this._customButtonHover = e), this.update());
    }
    get ok() {
      return this._ok;
    }
    set ok(e) {
      ((this._ok = e), this.update());
    }
    get hideInput() {
      return !!this._hideInput;
    }
    set hideInput(e) {
      ((this._hideInput = e), this.update());
    }
    trySelectFirst() {
      this.autoFocusOnList && (this.canSelectMany || this.ui.list.focus(Aa.First));
    }
    show() {
      (this.visible || (this.visibleDisposables.add(this.ui.inputBox.onDidChange(e => {
        if (e === this.value) return;
        this._value = e;
        (this.ui.list.filter(this.filterValue(this.ui.inputBox.value)) && this.trySelectFirst(), this.onDidChangeValueEmitter.fire(e));
      })), this.visibleDisposables.add(this.ui.inputBox.onMouseDown(e => {
        this.autoFocusOnList || this.ui.list.clearFocus();
      })), this.visibleDisposables.add((this._hideInput ? this.ui.list : this.ui.inputBox).onKeyDown(e => {
        switch (e.keyCode) {
          case 18:
            (this.ui.list.focus(Aa.Next), this.canSelectMany && this.ui.list.domFocus(), Q.zB.stop(e, !0));
            break;
          case 16:
            (this.ui.list.getFocusedElements().length ? this.ui.list.focus(Aa.Previous) : this.ui.list.focus(Aa.Last), this.canSelectMany && this.ui.list.domFocus(), Q.zB.stop(e, !0));
            break;
          case 12:
            (this.ui.list.focus(Aa.NextPage), this.canSelectMany && this.ui.list.domFocus(), Q.zB.stop(e, !0));
            break;
          case 11:
            (this.ui.list.focus(Aa.PreviousPage), this.canSelectMany && this.ui.list.domFocus(), Q.zB.stop(e, !0));
            break;
          case 17:
            if (!this._canAcceptInBackground) return;
            if (!this.ui.inputBox.isSelectionAtEnd()) return;
            this.activeItems[0] && ((this._selectedItems = [this.activeItems[0]]), this.onDidChangeSelectionEmitter.fire(this.selectedItems), this.handleAccept(!0));
            break;
          case 14:
            (!e.ctrlKey && !e.metaKey) || e.shiftKey || e.altKey || (this.ui.list.focus(Aa.First), Q.zB.stop(e, !0));
            break;
          case 13:
            (!e.ctrlKey && !e.metaKey) || e.shiftKey || e.altKey || (this.ui.list.focus(Aa.Last), Q.zB.stop(e, !0));
        }
      })), this.visibleDisposables.add(this.ui.onDidAccept(() => {
        (this.canSelectMany ? this.ui.list.getCheckedElements().length || ((this._selectedItems = []), this.onDidChangeSelectionEmitter.fire(this.selectedItems)) : this.activeItems[0] && ((this._selectedItems = [this.activeItems[0]]), this.onDidChangeSelectionEmitter.fire(this.selectedItems)), this.handleAccept(!1));
      })), this.visibleDisposables.add(this.ui.onDidCustom(() => {
        this.onDidCustomEmitter.fire();
      })), this.visibleDisposables.add(this.ui.list.onDidChangeFocus(e => {
        this.activeItemsUpdated || (this.activeItemsToConfirm !== this._activeItems && (0, bt.fS)(e, this._activeItems, (e, t) => e === t)) || ((this._activeItems = e), this.onDidChangeActiveEmitter.fire(e));
      })), this.visibleDisposables.add(this.ui.list.onDidChangeSelection(({
        items: e,
        event: t
      }) => {
        this.canSelectMany ? e.length && this.ui.list.setSelectedElements([]) : (this.selectedItemsToConfirm !== this._selectedItems && (0, bt.fS)(e, this._selectedItems, (e, t) => e === t)) || ((this._selectedItems = e), this.onDidChangeSelectionEmitter.fire(e), e.length && this.handleAccept(t instanceof MouseEvent && 1 === t.button));
      })), this.visibleDisposables.add(this.ui.list.onChangedCheckedElements(e => {
        this.canSelectMany && ((this.selectedItemsToConfirm !== this._selectedItems && (0, bt.fS)(e, this._selectedItems, (e, t) => e === t)) || ((this._selectedItems = e), this.onDidChangeSelectionEmitter.fire(e)));
      })), this.visibleDisposables.add(this.ui.list.onButtonTriggered(e => this.onDidTriggerItemButtonEmitter.fire(e))), this.visibleDisposables.add(this.registerQuickNavigation()), (this.valueSelectionUpdated = !0)), super.show());
    }
    handleAccept(e) {
      let t = !1;
      (this.onWillAcceptEmitter.fire({
        veto: () => (t = !0)
      }), t || this.onDidAcceptEmitter.fire({
        inBackground: e
      }));
    }
    registerQuickNavigation() {
      return Q.nm(this.ui.container, Q.tw.KEY_UP, e => {
        if (this.canSelectMany || !this._quickNavigate) return;
        const t = new ri.y(e),
          i = t.keyCode;
        this._quickNavigate.keybindings.some(e => {
          const [n, o] = e.getParts();
          return (!o && (n.shiftKey && 4 === i ? !(t.ctrlKey || t.altKey || t.metaKey) : !(!n.altKey || 6 !== i) || !(!n.ctrlKey || 5 !== i) || !(!n.metaKey || 57 !== i)));
        }) && (this.activeItems[0] && ((this._selectedItems = [this.activeItems[0]]), this.onDidChangeSelectionEmitter.fire(this.selectedItems), this.handleAccept(!1)), (this._quickNavigate = void 0));
      });
    }
    update() {
      if (!this.visible) return;
      const e = this.keepScrollPosition ? this.scrollTop : 0,
        t = !!this._hideInput && this._items.length > 0;
      this.ui.container.classList.toggle("hidden-input", t && !this.description);
      const i = {
        title: !!this.title || !!this.step || !!this.buttons.length,
        description: !!this.description,
        checkAll: this.canSelectMany && !this._hideCheckAll,
        checkBox: this.canSelectMany,
        inputBox: !t,
        progressBar: !t,
        visibleCount: !0,
        count: this.canSelectMany,
        ok: "default" === this.ok ? this.canSelectMany : this.ok,
        list: !0,
        message: !!this.validationMessage,
        customButton: this.customButton
      };
      (this.ui.setVisibilities(i), super.update(), this.ui.inputBox.value !== this.value && (this.ui.inputBox.value = this.value), this.valueSelectionUpdated && ((this.valueSelectionUpdated = !1), this.ui.inputBox.select(this._valueSelection && {
        start: this._valueSelection[0],
        end: this._valueSelection[1]
      })), this.ui.inputBox.placeholder !== (this.placeholder || "") && (this.ui.inputBox.placeholder = this.placeholder || ""));
      const n = this.ariaLabel || this.placeholder || Wa.DEFAULT_ARIA_LABEL;
      if ((this.ui.inputBox.ariaLabel !== n && (this.ui.inputBox.ariaLabel = n), (this.ui.list.matchOnDescription = this.matchOnDescription), (this.ui.list.matchOnDetail = this.matchOnDetail), (this.ui.list.matchOnLabel = this.matchOnLabel), (this.ui.list.sortByLabel = this.sortByLabel), this.itemsUpdated)) switch (((this.itemsUpdated = !1), this.ui.list.setElements(this.items), this.ui.list.filter(this.filterValue(this.ui.inputBox.value)), (this.ui.checkAll.checked = this.ui.list.getAllVisibleChecked()), this.ui.visibleCount.setCount(this.ui.list.getVisibleCount()), this.ui.count.setCount(this.ui.list.getCheckedCount()), this._itemActivation)) {
        case ma.jG.NONE:
          this._itemActivation = ma.jG.FIRST;
          break;
        case ma.jG.SECOND:
          (this.ui.list.focus(Aa.Second), (this._itemActivation = ma.jG.FIRST));
          break;
        case ma.jG.LAST:
          (this.ui.list.focus(Aa.Last), (this._itemActivation = ma.jG.FIRST));
          break;
        default:
          this.trySelectFirst();
      }
      (this.ui.container.classList.contains("show-checkboxes") !== !!this.canSelectMany && (this.canSelectMany ? this.ui.list.clearFocus() : this.trySelectFirst()), this.activeItemsUpdated && ((this.activeItemsUpdated = !1), (this.activeItemsToConfirm = this._activeItems), this.ui.list.setFocusedElements(this.activeItems), this.activeItemsToConfirm === this._activeItems && (this.activeItemsToConfirm = null)), this.selectedItemsUpdated && ((this.selectedItemsUpdated = !1), (this.selectedItemsToConfirm = this._selectedItems), this.canSelectMany ? this.ui.list.setCheckedElements(this.selectedItems) : this.ui.list.setSelectedElements(this.selectedItems), this.selectedItemsToConfirm === this._selectedItems && (this.selectedItemsToConfirm = null)), (this.ui.customButton.label = this.customLabel || ""), (this.ui.customButton.element.title = this.customHover || ""), this.ui.setComboboxAccessibility(!0), i.inputBox || (this.ui.list.domFocus(), this.canSelectMany && this.ui.list.focus(Aa.First)), this.keepScrollPosition && (this.scrollTop = e));
    }
  }
  Wa.DEFAULT_ARIA_LABEL = (0, bi.N)("quickInputBox.ariaLabel", "Type to narrow down results.");
  class Ha extends ue.JT {
    constructor(e) {
      (super(), (this.options = e), (this.comboboxAccessibility = !1), (this.enabled = !0), (this.onDidAcceptEmitter = this._register(new W.Q5())), (this.onDidCustomEmitter = this._register(new W.Q5())), (this.onDidTriggerButtonEmitter = this._register(new W.Q5())), (this.keyMods = {
        ctrlCmd: !1,
        alt: !1
      }), (this.controller = null), (this.onShowEmitter = this._register(new W.Q5())), (this.onShow = this.onShowEmitter.event), (this.onHideEmitter = this._register(new W.Q5())), (this.onHide = this.onHideEmitter.event), (this.idPrefix = e.idPrefix), (this.parentElement = e.container), (this.styles = e.styles), this.registerKeyModsListeners());
    }
    registerKeyModsListeners() {
      const e = e => {
        ((this.keyMods.ctrlCmd = e.ctrlKey || e.metaKey), (this.keyMods.alt = e.altKey));
      };
      (this._register(Q.nm(window, Q.tw.KEY_DOWN, e, !0)), this._register(Q.nm(window, Q.tw.KEY_UP, e, !0)), this._register(Q.nm(window, Q.tw.MOUSE_DOWN, e, !0)));
    }
    getUI() {
      if (this.ui) return this.ui;
      const e = Q.R3(this.parentElement, Fa(".quick-input-widget.show-file-icons"));
      ((e.tabIndex = -1), (e.style.display = "none"));
      const t = Q.dS(e),
        i = Q.R3(e, Fa(".quick-input-titlebar")),
        n = this._register(new dn.o(i));
      n.domNode.classList.add("quick-input-left-action-bar");
      const o = Q.R3(i, Fa(".quick-input-title")),
        s = this._register(new dn.o(i));
      s.domNode.classList.add("quick-input-right-action-bar");
      const r = Q.R3(e, Fa(".quick-input-description")),
        a = Q.R3(e, Fa(".quick-input-header")),
        l = Q.R3(a, Fa("input.quick-input-check-all"));
      ((l.type = "checkbox"), this._register(Q.mu(l, Q.tw.CHANGE, e => {
        const t = l.checked;
        C.setAllVisibleChecked(t);
      })), this._register(Q.nm(l, Q.tw.CLICK, e => {
        (e.x || e.y) && u.setFocus();
      })));
      const c = Q.R3(a, Fa(".quick-input-description")),
        d = Q.R3(a, Fa(".quick-input-and-message")),
        h = Q.R3(d, Fa(".quick-input-filter")),
        u = this._register(new ba(h));
      u.setAttribute("aria-describedby", `${this.idPrefix}message`);
      const g = Q.R3(h, Fa(".quick-input-visible-count"));
      (g.setAttribute("aria-live", "polite"), g.setAttribute("aria-atomic", "true"));
      const p = new sa.Z(g, {
          countFormat: (0, bi.N)({
            key: "quickInput.visibleCount",
            comment: ["This tells the user how many items are shown in a list of items to select from. The items can be anything. Currently not visible, but read by screen readers."]
          }, "{0} Results")
        }),
        f = Q.R3(h, Fa(".quick-input-count"));
      f.setAttribute("aria-live", "polite");
      const m = new sa.Z(f, {
          countFormat: (0, bi.N)({
            key: "quickInput.countSelected",
            comment: ["This tells the user how many items are selected in a list of items to select from. The items can be anything."]
          }, "{0} Selected")
        }),
        v = Q.R3(a, Fa(".quick-input-action")),
        _ = new oa(v);
      ((_.label = (0, bi.N)("ok", "OK")), this._register(_.onDidClick(e => {
        this.onDidAcceptEmitter.fire();
      })));
      const b = Q.R3(a, Fa(".quick-input-action")),
        w = new oa(b);
      ((w.label = (0, bi.N)("custom", Lg.custom())), this._register(w.onDidClick(e => {
        this.onDidCustomEmitter.fire();
      })));
      const y = Q.R3(d, Fa(`#${this.idPrefix}message.quick-input-message`)),
        C = this._register(new Oa(e, this.idPrefix + "list", this.options));
      (this._register(C.onChangedAllVisibleChecked(e => {
        l.checked = e;
      })), this._register(C.onChangedVisibleCount(e => {
        p.setCount(e);
      })), this._register(C.onChangedCheckedCount(e => {
        m.setCount(e);
      })), this._register(C.onLeave(() => {
        setTimeout(() => {
          (u.setFocus(), this.controller instanceof Wa && this.controller.canSelectMany && C.clearFocus());
        }, 0);
      })), this._register(C.onDidChangeFocus(() => {
        this.comboboxAccessibility && this.getUI().inputBox.setAttribute("aria-activedescendant", this.getUI().list.getActiveDescendant() || "");
      })));
      const x = new ha(e);
      x.getContainer().classList.add("quick-input-progress");
      const S = Q.go(e);
      return (this._register(S), this._register(Q.nm(e, Q.tw.FOCUS, e => {
        this.previousFocusElement = e.relatedTarget instanceof HTMLElement ? e.relatedTarget : void 0;
      }, !0)), this._register(S.onDidBlur(() => {
        (this.getUI().ignoreFocusOut || this.options.ignoreFocusOut() || this.hide(ma.Jq.Blur), (this.previousFocusElement = void 0));
      })), this._register(Q.nm(e, Q.tw.FOCUS, e => {
        u.setFocus();
      })), this._register(Q.nm(e, Q.tw.KEY_DOWN, t => {
        const i = new ri.y(t);
        switch (i.keyCode) {
          case 3:
            (Q.zB.stop(t, !0), this.onDidAcceptEmitter.fire());
            break;
          case 9:
            (Q.zB.stop(t, !0), this.hide(ma.Jq.Gesture));
            break;
          case 2:
            if (!i.altKey && !i.ctrlKey && !i.metaKey) {
              const n = [".action-label.codicon"];
              (e.classList.contains("show-checkboxes") ? n.push("input") : n.push("input[type=text]"), this.getUI().list.isDisplayed() && n.push(".monaco-list"));
              const o = e.querySelectorAll(n.join(", "));
              i.shiftKey && i.target === o[0] ? (Q.zB.stop(t, !0), o[o.length - 1].focus()) : i.shiftKey || i.target !== o[o.length - 1] || (Q.zB.stop(t, !0), o[0].focus());
            }
        }
      })), (this.ui = {
        container: e,
        styleSheet: t,
        leftActionBar: n,
        titleBar: i,
        title: o,
        description1: r,
        description2: c,
        rightActionBar: s,
        checkAll: l,
        filterContainer: h,
        inputBox: u,
        visibleCountContainer: g,
        visibleCount: p,
        countContainer: f,
        count: m,
        okContainer: v,
        ok: _,
        message: y,
        customButtonContainer: b,
        customButton: w,
        list: C,
        progressBar: x,
        onDidAccept: this.onDidAcceptEmitter.event,
        onDidCustom: this.onDidCustomEmitter.event,
        onDidTriggerButton: this.onDidTriggerButtonEmitter.event,
        ignoreFocusOut: !1,
        keyMods: this.keyMods,
        isScreenReaderOptimized: () => this.options.isScreenReaderOptimized(),
        show: e => this.show(e),
        hide: () => this.hide(),
        setVisibilities: e => this.setVisibilities(e),
        setComboboxAccessibility: e => this.setComboboxAccessibility(e),
        setEnabled: e => this.setEnabled(e),
        setContextKey: e => this.options.setContextKey(e)
      }), this.updateStyles(), this.ui);
    }
    pick(e, t = {}, i = V.T.None) {
      return new Promise((n, o) => {
        let s = e => {
          ((s = n), t.onKeyMods && t.onKeyMods(r.keyMods), n(e));
        };
        if (i.isCancellationRequested) return void s(void 0);
        const r = this.createQuickPick();
        let a;
        const l = [r, r.onDidAccept(() => {
          if (r.canSelectMany) (s(r.selectedItems.slice()), r.hide());else {
            const e = r.activeItems[0];
            e && (s(e), r.hide());
          }
        }), r.onDidChangeActive(e => {
          const i = e[0];
          i && t.onDidFocus && t.onDidFocus(i);
        }), r.onDidChangeSelection(e => {
          if (!r.canSelectMany) {
            const t = e[0];
            t && (s(t), r.hide());
          }
        }), r.onDidTriggerItemButton(e => t.onDidTriggerItemButton && t.onDidTriggerItemButton(Object.assign(Object.assign({}, e), {
          removeItem: () => {
            const t = r.items.indexOf(e.item);
            if (-1 !== t) {
              const e = r.items.slice(),
                i = e.splice(t, 1),
                n = r.activeItems.filter(e => e !== i[0]),
                o = r.keepScrollPosition;
              ((r.keepScrollPosition = !0), (r.items = e), n && (r.activeItems = n), (r.keepScrollPosition = o));
            }
          }
        }))), r.onDidChangeValue(e => {
          !a || e || (1 === r.activeItems.length && r.activeItems[0] === a) || (r.activeItems = [a]);
        }), i.onCancellationRequested(() => {
          r.hide();
        }), r.onDidHide(() => {
          ((0, ue.B9)(l), s(void 0));
        })];
        ((r.title = t.title), (r.canSelectMany = !!t.canPickMany), (r.placeholder = t.placeHolder), (r.ignoreFocusOut = !!t.ignoreFocusLost), (r.matchOnDescription = !!t.matchOnDescription), (r.matchOnDetail = !!t.matchOnDetail), (r.matchOnLabel = void 0 === t.matchOnLabel || t.matchOnLabel), (r.autoFocusOnList = void 0 === t.autoFocusOnList || t.autoFocusOnList), (r.quickNavigate = t.quickNavigate), (r.contextKey = t.contextKey), (r.busy = !0), Promise.all([e, t.activeItem]).then(([e, t]) => {
          ((a = t), (r.busy = !1), (r.items = e), r.canSelectMany && (r.selectedItems = e.filter(e => "separator" !== e.type && e.picked)), a && (r.activeItems = [a]));
        }), r.show(), Promise.resolve(e).then(void 0, e => {
          (o(e), r.hide());
        }));
      });
    }
    createQuickPick() {
      const e = this.getUI();
      return new Wa(e);
    }
    show(e) {
      const t = this.getUI();
      this.onShowEmitter.fire();
      const i = this.controller;
      ((this.controller = e), i && i.didHide(), this.setEnabled(!0), t.leftActionBar.clear(), (t.title.textContent = ""), (t.description1.textContent = ""), (t.description2.textContent = ""), t.rightActionBar.clear(), (t.checkAll.checked = !1), (t.inputBox.placeholder = ""), (t.inputBox.password = !1), t.inputBox.showDecoration(li.Z.Ignore), t.visibleCount.setCount(0), t.count.setCount(0), Q.mc(t.message), t.progressBar.stop(), t.list.setElements([]), (t.list.matchOnDescription = !1), (t.list.matchOnDetail = !1), (t.list.matchOnLabel = !0), (t.list.sortByLabel = !0), (t.ignoreFocusOut = !1), this.setComboboxAccessibility(!1), (t.inputBox.ariaLabel = ""));
      const n = this.options.backKeybindingLabel();
      ((Ba.tooltip = n ? (0, bi.N)("quickInput.backWithKeybinding", "Back ({0})", n) : (0, bi.N)("quickInput.back", "Back")), (t.container.style.display = ""), this.updateLayout(), t.inputBox.setFocus());
    }
    setVisibilities(e) {
      const t = this.getUI();
      ((t.title.style.display = e.title ? "" : "none"), (t.description1.style.display = e.description && (e.inputBox || e.checkAll) ? "" : "none"), (t.description2.style.display = !e.description || e.inputBox || e.checkAll ? "none" : ""), (t.checkAll.style.display = e.checkAll ? "" : "none"), (t.filterContainer.style.display = e.inputBox ? "" : "none"), (t.visibleCountContainer.style.display = e.visibleCount ? "" : "none"), (t.countContainer.style.display = e.count ? "" : "none"), (t.okContainer.style.display = e.ok ? "" : "none"), (t.customButtonContainer.style.display = e.customButton ? "" : "none"), (t.message.style.display = e.message ? "" : "none"), (t.progressBar.getContainer().style.display = e.progressBar ? "" : "none"), t.list.display(!!e.list), t.container.classList[e.checkBox ? "add" : "remove"]("show-checkboxes"), this.updateLayout());
    }
    setComboboxAccessibility(e) {
      if (e !== this.comboboxAccessibility) {
        const t = this.getUI();
        ((this.comboboxAccessibility = e), this.comboboxAccessibility ? (t.inputBox.setAttribute("role", "combobox"), t.inputBox.setAttribute("aria-haspopup", "true"), t.inputBox.setAttribute("aria-autocomplete", "list"), t.inputBox.setAttribute("aria-activedescendant", t.list.getActiveDescendant() || "")) : (t.inputBox.removeAttribute("role"), t.inputBox.removeAttribute("aria-haspopup"), t.inputBox.removeAttribute("aria-autocomplete"), t.inputBox.removeAttribute("aria-activedescendant")));
      }
    }
    setEnabled(e) {
      if (e !== this.enabled) {
        this.enabled = e;
        for (const t of this.getUI().leftActionBar.viewItems) t.getAction().enabled = e;
        for (const t of this.getUI().rightActionBar.viewItems) t.getAction().enabled = e;
        ((this.getUI().checkAll.disabled = !e), (this.getUI().ok.enabled = e), (this.getUI().list.enabled = e));
      }
    }
    hide(e) {
      var t;
      const i = this.controller;
      if (i) {
        const n = !(null === (t = this.ui) || void 0 === t ? void 0 : t.container.contains(document.activeElement));
        ((this.controller = null), this.onHideEmitter.fire(), (this.getUI().container.style.display = "none"), n || (this.previousFocusElement && this.previousFocusElement.offsetParent ? (this.previousFocusElement.focus(), (this.previousFocusElement = void 0)) : this.options.returnFocus()), i.didHide(e));
      }
    }
    layout(e, t) {
      ((this.dimension = e), (this.titleBarOffset = t), this.updateLayout());
    }
    updateLayout() {
      if (this.ui) {
        this.ui.container.style.top = `${this.titleBarOffset}px`;
        const e = this.ui.container.style,
          t = Math.min(0.62 * this.dimension.width, Ha.MAX_WIDTH);
        ((e.width = t + "px"), (e.marginLeft = "-" + t / 2 + "px"), this.ui.inputBox.layout(), this.ui.list.layout(this.dimension && 0.4 * this.dimension.height));
      }
    }
    applyStyles(e) {
      ((this.styles = e), this.updateStyles());
    }
    updateStyles() {
      if (this.ui) {
        const {
          quickInputTitleBackground: e,
          quickInputBackground: t,
          quickInputForeground: i,
          contrastBorder: n,
          widgetShadow: o
        } = this.styles.widget;
        ((this.ui.titleBar.style.backgroundColor = e ? e.toString() : ""), (this.ui.container.style.backgroundColor = t ? t.toString() : ""), (this.ui.container.style.color = i ? i.toString() : ""), (this.ui.container.style.border = n ? `1px solid ${n}` : ""), (this.ui.container.style.boxShadow = o ? `0 0 8px 2px ${o}` : ""), this.ui.inputBox.style(this.styles.inputBox), this.ui.count.style(this.styles.countBadge), this.ui.ok.style(this.styles.button), this.ui.customButton.style(this.styles.button), this.ui.progressBar.style(this.styles.progressBar), this.ui.list.style(this.styles.list));
        const s = [];
        (this.styles.list.pickerGroupBorder && s.push(`.quick-input-list .quick-input-list-entry { border-top-color:  ${this.styles.list.pickerGroupBorder}; }`), this.styles.list.pickerGroupForeground && s.push(`.quick-input-list .quick-input-list-separator { color:  ${this.styles.list.pickerGroupForeground}; }`), (this.styles.keybindingLabel.keybindingLabelBackground || this.styles.keybindingLabel.keybindingLabelBorder || this.styles.keybindingLabel.keybindingLabelBottomBorder || this.styles.keybindingLabel.keybindingLabelShadow || this.styles.keybindingLabel.keybindingLabelForeground) && (s.push(".quick-input-list .monaco-keybinding > .monaco-keybinding-key {"), this.styles.keybindingLabel.keybindingLabelBackground && s.push(`background-color: ${this.styles.keybindingLabel.keybindingLabelBackground};`), this.styles.keybindingLabel.keybindingLabelBorder && s.push(`border-color: ${this.styles.keybindingLabel.keybindingLabelBorder};`), this.styles.keybindingLabel.keybindingLabelBottomBorder && s.push(`border-bottom-color: ${this.styles.keybindingLabel.keybindingLabelBottomBorder};`), this.styles.keybindingLabel.keybindingLabelShadow && s.push(`box-shadow: inset 0 -1px 0 ${this.styles.keybindingLabel.keybindingLabelShadow};`), this.styles.keybindingLabel.keybindingLabelForeground && s.push(`color: ${this.styles.keybindingLabel.keybindingLabelForeground};`), s.push("}")));
        const r = s.join("\n");
        r !== this.ui.styleSheet.textContent && (this.ui.styleSheet.textContent = r);
      }
    }
  }
  Ha.MAX_WIDTH = 600;
  var za = i(88289),
    ja = i(90725),
    Ua = i(41157),
    $a = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Ka = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let qa = class extends ue.JT {
    constructor(e, t) {
      (super(), (this.quickInputService = e), (this.instantiationService = t), (this.registry = Uo.B.as(ja.IP.Quickaccess)), (this.mapProviderToDescriptor = new Map()), (this.lastAcceptedPickerValues = new Map()), (this.visibleQuickAccess = void 0));
    }
    show(e = "", t) {
      this.doShowOrPick(e, !1, t);
    }
    doShowOrPick(e, t, i) {
      var n;
      const [o, s] = this.getOrInstantiateProvider(e),
        r = this.visibleQuickAccess,
        a = null == r ? void 0 : r.descriptor;
      if (r && s && a === s) return (e === s.prefix || (null == i ? void 0 : i.preserveValue) || (r.picker.value = e), void this.adjustValueSelection(r.picker, s, i));
      if (s && !(null == i ? void 0 : i.preserveValue)) {
        let t;
        if (r && a && a !== s) {
          const e = r.value.substr(a.prefix.length);
          e && (t = `${s.prefix}${e}`);
        }
        if (!t) {
          const e = null == o ? void 0 : o.defaultFilterValue;
          e === ja.Ry.LAST ? (t = this.lastAcceptedPickerValues.get(s)) : "string" == typeof e && (t = `${s.prefix}${e}`);
        }
        "string" == typeof t && (e = t);
      }
      const l = new ue.SL(),
        c = l.add(this.quickInputService.createQuickPick());
      let d, h;
      ((c.value = e), this.adjustValueSelection(c, s, i), (c.placeholder = null == s ? void 0 : s.placeholder), (c.quickNavigate = null == i ? void 0 : i.quickNavigateConfiguration), (c.hideInput = !!c.quickNavigate && !r), ("number" == typeof (null == i ? void 0 : i.itemActivation) || (null == i ? void 0 : i.quickNavigateConfiguration)) && (c.itemActivation = null !== (n = null == i ? void 0 : i.itemActivation) && void 0 !== n ? n : Ua.jG.SECOND), (c.contextKey = null == s ? void 0 : s.contextKey), (c.filterValue = e => e.substring(s ? s.prefix.length : 0)), (null == s ? void 0 : s.placeholder) && (c.ariaLabel = null == s ? void 0 : s.placeholder), t && ((d = new Promise(e => (h = e))), l.add((0, za.I)(c.onWillAccept)(e => {
        (e.veto(), c.hide());
      }))), l.add(this.registerPickerListeners(c, o, s, e)));
      const u = l.add(new V.A());
      return (o && l.add(o.provide(c, u.token)), (0, za.I)(c.onDidHide)(() => {
        (0 === c.selectedItems.length && u.cancel(), l.dispose(), null == h || h(c.selectedItems));
      }), c.show(), t ? d : void 0);
    }
    adjustValueSelection(e, t, i) {
      var n;
      let o;
      ((o = (null == i ? void 0 : i.preserveValue) ? [e.value.length, e.value.length] : [null !== (n = null == t ? void 0 : t.prefix.length) && void 0 !== n ? n : 0, e.value.length]), (e.valueSelection = o));
    }
    registerPickerListeners(e, t, i, n) {
      const o = new ue.SL(),
        s = (this.visibleQuickAccess = {
          picker: e,
          descriptor: i,
          value: n
        });
      return (o.add((0, ue.OF)(() => {
        s === this.visibleQuickAccess && (this.visibleQuickAccess = void 0);
      })), o.add(e.onDidChangeValue(e => {
        const [i] = this.getOrInstantiateProvider(e);
        i !== t ? this.show(e, {
          preserveValue: !0
        }) : (s.value = e);
      })), i && o.add(e.onDidAccept(() => {
        this.lastAcceptedPickerValues.set(i, e.value);
      })), o);
    }
    getOrInstantiateProvider(e) {
      const t = this.registry.getQuickAccessProvider(e);
      if (!t) return [void 0, void 0];
      let i = this.mapProviderToDescriptor.get(t);
      return (i || ((i = this.instantiationService.createInstance(t.ctor)), this.mapProviderToDescriptor.set(t, i)), [i, t]);
    }
  };
  qa = $a([Ka(0, Ua.eJ), Ka(1, Pn.TG)], qa);
  var Za = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Ga = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let Ya = class extends mn.bB {
    constructor(e, t, i, n, o) {
      (super(i), (this.instantiationService = e), (this.contextKeyService = t), (this.accessibilityService = n), (this.layoutService = o), (this.contexts = new Map()));
    }
    get controller() {
      return (this._controller || (this._controller = this._register(this.createController())), this._controller);
    }
    get quickAccess() {
      return (this._quickAccess || (this._quickAccess = this._register(this.instantiationService.createInstance(qa))), this._quickAccess);
    }
    createController(e = this.layoutService, t) {
      var i, n;
      const o = {
          idPrefix: "quickInput_",
          container: e.container,
          ignoreFocusOut: () => !1,
          isScreenReaderOptimized: () => this.accessibilityService.isScreenReaderOptimized(),
          backKeybindingLabel: () => {},
          setContextKey: e => this.setContextKey(e),
          returnFocus: () => e.focus(),
          createList: (e, t, i, n, o) => this.instantiationService.createInstance(br.ev, e, t, i, n, o),
          styles: this.computeStyles()
        },
        s = this._register(new Ha(Object.assign(Object.assign({}, o), t)));
      return (s.layout(e.dimension, null !== (n = null === (i = e.offset) || void 0 === i ? void 0 : i.top) && void 0 !== n ? n : 0), this._register(e.onDidLayout(t => {
        var i, n;
        return s.layout(t, null !== (n = null === (i = e.offset) || void 0 === i ? void 0 : i.top) && void 0 !== n ? n : 0);
      })), this._register(s.onShow(() => this.resetContextKeys())), this._register(s.onHide(() => this.resetContextKeys())), s);
    }
    setContextKey(e) {
      let t;
      (e && ((t = this.contexts.get(e)), t || ((t = new xi.uy(e, !1).bindTo(this.contextKeyService)), this.contexts.set(e, t))), (t && t.get()) || (this.resetContextKeys(), t && t.set(!0)));
    }
    resetContextKeys() {
      this.contexts.forEach(e => {
        e.get() && e.reset();
      });
    }
    pick(e, t = {}, i = V.T.None) {
      return this.controller.pick(e, t, i);
    }
    createQuickPick() {
      return this.controller.createQuickPick();
    }
    updateStyles() {
      this.controller.applyStyles(this.computeStyles());
    }
    computeStyles() {
      return {
        widget: Object.assign({}, (0, ir.o)(this.theme, {
          quickInputBackground: fn.zK,
          quickInputForeground: fn.tZ,
          quickInputTitleBackground: fn.lo,
          contrastBorder: fn.lR,
          widgetShadow: fn.rh
        })),
        inputBox: (0, ir.o)(this.theme, {
          inputForeground: fn.zJ,
          inputBackground: fn.sE,
          inputBorder: fn.dt,
          inputValidationInfoBackground: fn._l,
          inputValidationInfoForeground: fn.YI,
          inputValidationInfoBorder: fn.EP,
          inputValidationWarningBackground: fn.RV,
          inputValidationWarningForeground: fn.SU,
          inputValidationWarningBorder: fn.C3,
          inputValidationErrorBackground: fn.p,
          inputValidationErrorForeground: fn._t,
          inputValidationErrorBorder: fn.OZ
        }),
        countBadge: (0, ir.o)(this.theme, {
          badgeBackground: fn.g8,
          badgeForeground: fn.qe,
          badgeBorder: fn.lR
        }),
        button: (0, ir.o)(this.theme, {
          buttonForeground: fn.j5,
          buttonBackground: fn.b7,
          buttonHoverBackground: fn.GO,
          buttonBorder: fn.lR
        }),
        progressBar: (0, ir.o)(this.theme, {
          progressBarBackground: fn.zR
        }),
        keybindingLabel: (0, ir.o)(this.theme, {
          keybindingLabelBackground: fn.oQ,
          keybindingLabelForeground: fn.lW,
          keybindingLabelBorder: fn.AW,
          keybindingLabelBottomBorder: fn.K1,
          keybindingLabelShadow: fn.rh
        }),
        list: (0, ir.o)(this.theme, {
          listBackground: fn.zK,
          listInactiveFocusForeground: fn.NP,
          listInactiveSelectionIconForeground: fn.cb,
          listInactiveFocusBackground: fn.Vq,
          listFocusOutline: fn.xL,
          listInactiveFocusOutline: fn.xL,
          pickerGroupBorder: fn.op,
          pickerGroupForeground: fn.kJ
        })
      };
    }
  };
  Ya = Za([Ga(0, Pn.TG), Ga(1, xi.i6), Ga(2, mn.XE), Ga(3, _o.F), Ga(4, ar)], Ya);
  var Qa = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Xa = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let Ja = class extends Ya {
    constructor(e, t, i, n, o, s) {
      (super(t, i, n, o, s), (this.host = void 0));
      const r = tl.get(e);
      this.host = {
        _serviceBrand: void 0,
        get container() {
          return r.widget.getDomNode();
        },
        get dimension() {
          return e.getLayoutInfo();
        },
        get onDidLayout() {
          return e.onDidLayoutChange;
        },
        focus: () => e.focus()
      };
    }
    createController() {
      return super.createController(this.host);
    }
  };
  Ja = Qa([Xa(1, Pn.TG), Xa(2, xi.i6), Xa(3, mn.XE), Xa(4, _o.F), Xa(5, ar)], Ja);
  let el = class {
    constructor(e, t) {
      ((this.instantiationService = e), (this.codeEditorService = t), (this.mapEditorToService = new Map()));
    }
    get activeService() {
      const e = this.codeEditorService.getFocusedCodeEditor();
      if (!e) throw new Error("Quick input service needs a focused editor to work.");
      let t = this.mapEditorToService.get(e);
      if (!t) {
        const i = (t = this.instantiationService.createInstance(Ja, e));
        (this.mapEditorToService.set(e, t), (0, za.I)(e.onDidDispose)(() => {
          (i.dispose(), this.mapEditorToService.delete(e));
        }));
      }
      return t;
    }
    get quickAccess() {
      return this.activeService.quickAccess;
    }
    pick(e, t = {}, i = V.T.None) {
      return this.activeService.pick(e, t, i);
    }
    createQuickPick() {
      return this.activeService.createQuickPick();
    }
  };
  el = Qa([Xa(0, Pn.TG), Xa(1, Y.$)], el);
  class tl {
    constructor(e) {
      ((this.editor = e), (this.widget = new il(this.editor)));
    }
    static get(e) {
      return e.getContribution(tl.ID);
    }
    dispose() {
      this.widget.dispose();
    }
  }
  tl.ID = "editor.controller.quickInput";
  class il {
    constructor(e) {
      ((this.codeEditor = e), (this.domNode = document.createElement("div")), this.codeEditor.addOverlayWidget(this));
    }
    getId() {
      return il.ID;
    }
    getDomNode() {
      return this.domNode;
    }
    getPosition() {
      return {
        preference: 2
      };
    }
    dispose() {
      this.codeEditor.removeOverlayWidget(this);
    }
  }
  var nl;
  ((il.ID = "editor.contrib.quickInputWidget"), (0, gn._K)(tl.ID, tl), (function (e) {
    const t = new Rn.y();
    class i {
      constructor(e, t) {
        ((this._serviceId = e), (this._factory = t), (this._value = null));
      }
      get id() {
        return this._serviceId;
      }
      get(e) {
        if (!this._value) {
          if ((e && (this._value = e[this._serviceId.toString()]), this._value || (this._value = this._factory(e)), !this._value)) throw new Error("Service " + this._serviceId + " is missing!");
          t.set(this._serviceId, this._value);
        }
        return this._value;
      }
    }
    e.LazyStaticService = i;
    let n = [];
    function o(e, t) {
      let o = new i(e, t);
      return (n.push(o), o);
    }
    ((e.init = function (e) {
      let t = new Rn.y();
      for (const [e, i] of (0, Or.d)()) t.set(e, i);
      for (let i in e) e.hasOwnProperty(i) && t.set((0, Pn.yh)(i), e[i]);
      n.forEach(i => t.set(i.id, i.get(e)));
      let i = new mr(t, !0);
      return (t.set(Pn.TG, i), [t, i]);
    }), (e.instantiationService = o(Pn.TG, () => new mr(t, !0))));
    const s = new qi();
    ((e.configurationService = o(gi.Ui, () => s)), (e.resourceConfigurationService = o(_t.V, () => new Zi(s))), (e.resourcePropertiesService = o(_t.y, () => new Gi(s))), (e.contextService = o(Oi.ec, () => new Qi())), (e.labelService = o(_r.e, () => new en())), (e.telemetryService = o(Os.b, () => new Yi())), (e.dialogService = o(hr.S, () => new zi())), (e.notificationService = o(Ai.lT, () => new ji())), (e.markerService = o(wr.lT, () => new xr())), (e.modeService = o(Ce.h, e => new Go())), (e.standaloneThemeService = o(fo.Z, () => new _s())), (e.logService = o(wt.VZ, () => new wt.$V(new wt.kw()))), (e.undoRedoService = o(Wr.tJ, t => new ea(e.dialogService.get(t), e.notificationService.get(t)))), (e.languageConfigurationService = o(Ke.c_, t => new Ke.UU(e.configurationService.get(t), e.modeService.get(t)))), (e.modelService = o(vt.q, t => new Yo.BR(e.configurationService.get(t), e.resourcePropertiesService.get(t), e.standaloneThemeService.get(t), e.logService.get(t), e.undoRedoService.get(t), e.modeService.get(t), e.languageConfigurationService.get(t)))), (e.markerDecorationsService = o(Ir.i, t => new Ar(e.modelService.get(t), e.markerService.get(t)))), (e.contextKeyService = o(xi.i6, t => new Ts(e.configurationService.get(t)))), (e.codeEditorService = o(Y.$, t => new Mo(null, e.contextKeyService.get(t), e.standaloneThemeService.get(t)))), (e.editorProgressService = o(zn.e, () => new Hi())), (e.storageService = o(Sr.Uy, () => new Sr.vm())), (e.editorWorkerService = o(ye.p, t => new Lt(e.modelService.get(t), e.resourceConfigurationService.get(t), e.logService.get(t)))));
  })(nl || (nl = {})));
  class ol extends ue.JT {
    constructor(e, t) {
      super();
      const [i, n] = nl.init(t);
      ((this._serviceCollection = i), (this._instantiationService = n));
      const o = this.get(gi.Ui),
        s = this.get(Ai.lT),
        r = this.get(Os.b),
        a = this.get(mn.XE),
        l = this.get(wt.VZ),
        c = this.get(xi.i6);
      let d = (e, i) => {
        let n = null;
        return (t && (n = t[e.toString()]), n || (n = i()), this._serviceCollection.set(e, n), n);
      };
      (d(_o.F, () => new Fr(c, o)), d(br.Lw, () => new br.XN(a)));
      let h = d(ne.H, () => new Ui(this._instantiationService)),
        u = d(vo.d, () => this._register(new $i(c, h, r, s, l, e))),
        g = d(ar, () => new tn(nl.codeEditorService.get(Y.$), e));
      d(Ua.eJ, () => new el(n, nl.codeEditorService.get(Y.$)));
      let p = d(Fn.u, () => this._register(new dr(g)));
      (d(Hn.p, () => new Vr()), d(Fn.i, () => {
        const e = new rr(r, s, p, u, a);
        return (e.configure({
          blockMouse: !1
        }), this._register(e));
      }), d(mo.co, () => new Nr(h)), d(di.vu, () => new Ji(nl.modelService.get(vt.q))));
    }
    get(e) {
      let t = this._serviceCollection.get(e);
      if (!t) throw new Error("Missing service " + e);
      return t;
    }
    set(e, t) {
      this._serviceCollection.set(e, t);
    }
    has(e) {
      return this._serviceCollection.has(e);
    }
  }
  function sl(e, t, i) {
    let n = new ol(e, t),
      o = null;
    (n.has(xe.S) || ((o = new Wi(nl.modelService.get())), n.set(xe.S, o)), n.has(oe.v4) || n.set(oe.v4, new de(n.get(Y.$), n.get(ne.H))));
    let s = i(n);
    return (o && o.setEditor(s), s);
  }
  function rl(e, t, i) {
    return sl(e, i || {}, i => new Vo(e, t, i, i.get(Pn.TG), i.get(Y.$), i.get(ne.H), i.get(xi.i6), i.get(vo.d), i.get(Fn.u), i.get(fo.Z), i.get(Ai.lT), i.get(gi.Ui), i.get(_o.F), i.get(vt.q), i.get(Ce.h)));
  }
  function al(e) {
    return nl.codeEditorService.get().onCodeEditorAdd(t => {
      e(t);
    });
  }
  function ll(e, t, i) {
    return sl(e, i || {}, i => new Wo(e, t, i, i.get(Pn.TG), i.get(xi.i6), i.get(vo.d), i.get(Fn.u), i.get(ye.p), i.get(Y.$), i.get(fo.Z), i.get(Ai.lT), i.get(gi.Ui), i.get(Fn.i), i.get(zn.e), i.get(Hn.p)));
  }
  function cl(e, t) {
    return new fe(e, t);
  }
  function dl(e, t, i) {
    return Ho(nl.modelService.get(), nl.modeService.get(), e, t, i);
  }
  function hl(e, t) {
    nl.modelService.get().setMode(e, nl.modeService.get().create(t));
  }
  function ul(e, t, i) {
    e && nl.markerService.get().changeOne(t, e.uri, i);
  }
  function gl(e) {
    return nl.markerService.get().read(e);
  }
  function pl(e) {
    return nl.markerService.get().onMarkerChanged(e);
  }
  function fl(e) {
    return nl.modelService.get().getModel(e);
  }
  function ml() {
    return nl.modelService.get().getModels();
  }
  function vl(e) {
    return nl.modelService.get().onModelAdded(e);
  }
  function _l(e) {
    return nl.modelService.get().onModelRemoved(e);
  }
  function bl(e) {
    return nl.modelService.get().onModelModeChanged(t => {
      e({
        model: t.model,
        oldLanguage: t.oldModeId
      });
    });
  }
  function wl(e) {
    return (function (e, t) {
      return new At(e, t);
    })(nl.modelService.get(), e);
  }
  function yl(e, t) {
    const i = nl.standaloneThemeService.get();
    return (i.registerEditorContainer(e), ni.colorizeElement(i, nl.modeService.get(), e, t));
  }
  function Cl(e, t, i) {
    return (nl.standaloneThemeService.get().registerEditorContainer(document.body), ni.colorize(nl.modeService.get(), e, t, i));
  }
  function xl(e, t, i = 4) {
    return (nl.standaloneThemeService.get().registerEditorContainer(document.body), ni.colorizeModelLine(e, t, i));
  }
  function Sl(e, t) {
    nl.modeService.get().triggerMode(t);
    let i = (function (e) {
        let t = be.RW.get(e);
        return (t || {
          getInitialState: () => we.nO,
          tokenize: (t, i, n, o) => (0, we.Ri)(e, t, n, o)
        });
      })(t),
      n = (0, De.uq)(e),
      o = [],
      s = i.getInitialState();
    for (let e = 0, t = n.length; e < t; e++) {
      let t = n[e],
        r = i.tokenize(t, !0, s, 0);
      ((o[e] = r.tokens), (s = r.endState));
    }
    return o;
  }
  function kl(e, t) {
    nl.standaloneThemeService.get().defineTheme(e, t);
  }
  function Ll(e) {
    nl.standaloneThemeService.get().setTheme(e);
  }
  function Nl() {
    (0, ln.P)();
  }
  function Dl(e, t) {
    return ne.P.registerCommand({
      id: e,
      handler: t
    });
  }
  function Il(e, t) {
    return "boolean" == typeof e ? e : t;
  }
  function El(e, t) {
    return "string" == typeof e ? e : t;
  }
  function Tl(e, t = !1) {
    t && (e = e.map(function (e) {
      return e.toLowerCase();
    }));
    const i = (function (e) {
      const t = {};
      for (const i of e) t[i] = !0;
      return t;
    })(e);
    return t ? function (e) {
      return (void 0 !== i[e.toLowerCase()] && i.hasOwnProperty(e.toLowerCase()));
    } : function (e) {
      return void 0 !== i[e] && i.hasOwnProperty(e);
    };
  }
  function Ml(e, t) {
    t = t.replace(/@@/g, "");
    let i,
      n = 0;
    do {
      ((i = !1), (t = t.replace(/@(\w+)/g, function (n, o) {
        i = !0;
        let s = "";
        if ("string" == typeof e[o]) s = e[o];else {
          if (!(e[o] && e[o] instanceof RegExp)) throw void 0 === e[o] ? jt(e, "language definition does not contain attribute '" + o + "', used at: " + t) : jt(e, "attribute reference '" + o + "' must be a string, used at: " + t);
          s = e[o].source;
        }
        return Wt(s) ? "" : "(?:" + s + ")";
      })), n++);
    } while (i && n < 5);
    t = t.replace(/\x01/g, "@");
    let o = (e.ignoreCase ? "i" : "") + (e.unicode ? "u" : "");
    return new RegExp(t, o);
  }
  function Al(e, t, i, n) {
    let o = -1,
      s = i,
      r = i.match(/^\$(([sS]?)(\d\d?)|#)(.*)$/);
    r && (r[3] && ((o = parseInt(r[3])), r[2] && (o += 100)), (s = r[4]));
    let a,
      l = "~",
      c = s;
    if ((s && 0 !== s.length ? /^\w*$/.test(c) ? (l = "==") : ((r = s.match(/^(@|!@|~|!~|==|!=)(.*)$/)), r && ((l = r[1]), (c = r[2]))) : ((l = "!="), (c = "")), ("~" !== l && "!~" !== l) || !/^(\w|\|)*$/.test(c))) {
      if ("@" === l || "!@" === l) {
        let i = e[c];
        if (!i) throw jt(e, "the @ match target '" + c + "' is not defined, in rule: " + t);
        if (!(function (e, t) {
          if (!t) return !1;
          if (!Array.isArray(t)) return !1;
          for (const i of t) if (!e(i)) return !1;
          return !0;
        })(function (e) {
          return "string" == typeof e;
        }, i)) throw jt(e, "the @ match target '" + c + "' must be an array of strings, in rule: " + t);
        let n = Tl(i, e.ignoreCase);
        a = function (e) {
          return "@" === l ? n(e) : !n(e);
        };
      } else if ("~" === l || "!~" === l) {
        if (c.indexOf("$") < 0) {
          let t = Ml(e, "^" + c + "$");
          a = function (e) {
            return "~" === l ? t.test(e) : !t.test(e);
          };
        } else a = function (t, i, n, o) {
          return Ml(e, "^" + Ut(e, c, i, n, o) + "$").test(t);
        };
      } else if (c.indexOf("$") < 0) {
        let t = Ht(e, c);
        a = function (e) {
          return "==" === l ? e === t : e !== t;
        };
      } else {
        let t = Ht(e, c);
        a = function (i, n, o, s, r) {
          let a = Ut(e, t, n, o, s);
          return "==" === l ? i === a : i !== a;
        };
      }
    } else {
      let t = Tl(c.split("|"), e.ignoreCase);
      a = function (e) {
        return "~" === l ? t(e) : !t(e);
      };
    }
    return -1 === o ? {
      name: i,
      value: n,
      test: function (e, t, i, n) {
        return a(e, e, t, i, n);
      }
    } : {
      name: i,
      value: n,
      test: function (e, t, i, n) {
        let s = (function (e, t, i, n) {
          if (n < 0) return e;
          if (n < t.length) return t[n];
          if (n >= 100) {
            n -= 100;
            let e = i.split(".");
            if ((e.unshift(i), n < e.length)) return e[n];
          }
          return null;
        })(e, t, i, o);
        return a(s || "", e, t, i, n);
      }
    };
  }
  function Ol(e, t, i) {
    if (i) {
      if ("string" == typeof i) return i;
      if (i.token || "" === i.token) {
        if ("string" != typeof i.token) throw jt(e, "a 'token' attribute must be of type string, in rule: " + t);
        {
          let n = {
            token: i.token
          };
          if ((i.token.indexOf("$") >= 0 && (n.tokenSubst = !0), "string" == typeof i.bracket)) if ("@open" === i.bracket) n.bracket = 1;else {
            if ("@close" !== i.bracket) throw jt(e, "a 'bracket' attribute must be either '@open' or '@close', in rule: " + t);
            n.bracket = -1;
          }
          if (i.next) {
            if ("string" != typeof i.next) throw jt(e, "the next state must be a string value in rule: " + t);
            {
              let o = i.next;
              if (!/^(@pop|@push|@popall)$/.test(o) && ("@" === o[0] && (o = o.substr(1)), o.indexOf("$") < 0 && !(function (e, t) {
                let i = t;
                for (; i && i.length > 0;) {
                  if (e.stateNames[i]) return !0;
                  const t = i.lastIndexOf(".");
                  i = t < 0 ? null : i.substr(0, t);
                }
                return !1;
              })(e, Ut(e, o, "", [], "")))) throw jt(e, "the next state '" + i.next + "' is not defined in rule: " + t);
              n.next = o;
            }
          }
          return ("number" == typeof i.goBack && (n.goBack = i.goBack), "string" == typeof i.switchTo && (n.switchTo = i.switchTo), "string" == typeof i.log && (n.log = i.log), "string" == typeof i.nextEmbedded && ((n.nextEmbedded = i.nextEmbedded), (e.usesEmbedded = !0)), n);
        }
      }
      if (Array.isArray(i)) {
        let n = [];
        for (let o = 0, s = i.length; o < s; o++) n[o] = Ol(e, t, i[o]);
        return {
          group: n
        };
      }
      if (i.cases) {
        let n = [];
        for (let o in i.cases) if (i.cases.hasOwnProperty(o)) {
          const s = Ol(e, t, i.cases[o]);
          "@default" === o || "@" === o || "" === o ? n.push({
            test: void 0,
            value: s,
            name: o
          }) : "@eos" === o ? n.push({
            test: function (e, t, i, n) {
              return n;
            },
            value: s,
            name: o
          }) : n.push(Al(e, t, o, s));
        }
        const o = e.defaultToken;
        return {
          test: function (e, t, i, s) {
            for (const o of n) {
              if (!o.test || o.test(e, t, i, s)) return o.value;
            }
            return o;
          }
        };
      }
      throw jt(e, "an action must be a string, an object with a 'token' or 'cases' attribute, or an array of actions; in rule: " + t);
    }
    return {
      token: ""
    };
  }
  class Pl {
    constructor(e) {
      ((this.regex = new RegExp("")), (this.action = {
        token: ""
      }), (this.matchOnlyAtLineStart = !1), (this.name = ""), (this.name = e));
    }
    setRegex(e, t) {
      let i;
      if ("string" == typeof t) i = t;else {
        if (!(t instanceof RegExp)) throw jt(e, "rules must start with a match string or regular expression: " + this.name);
        i = t.source;
      }
      ((this.matchOnlyAtLineStart = i.length > 0 && "^" === i[0]), (this.name = this.name + ": " + i), (this.regex = Ml(e, "^(?:" + (this.matchOnlyAtLineStart ? i.substr(1) : i) + ")")));
    }
    setAction(e, t) {
      this.action = Ol(e, this.name, t);
    }
  }
  function Rl(e) {
    jo.dQ.registerLanguage(e);
  }
  function Fl() {
    let e = [];
    return ((e = e.concat(jo.dQ.getLanguages())), e);
  }
  function Bl(e) {
    return nl.modeService.get().languageIdCodec.encodeLanguageId(e);
  }
  function Vl(e, t) {
    let i = nl.modeService.get().onDidEncounterLanguage(n => {
      n === e && (i.dispose(), t());
    });
    return i;
  }
  function Wl(e, t) {
    const i = nl.modeService.get().validateLanguageId(e);
    if (!i) throw new Error(`Cannot set configuration for unknown language ${e}`);
    return Ke.zu.register(i, t, 100);
  }
  class Hl {
    constructor(e, t) {
      ((this._languageId = e), (this._actual = t));
    }
    getInitialState() {
      return this._actual.getInitialState();
    }
    tokenize(e, t, i, n) {
      if ("function" == typeof this._actual.tokenize) return zl.adaptTokenize(this._languageId, this._actual, e, i, n);
      throw new Error("Not supported!");
    }
    tokenize2(e, t, i) {
      let n = this._actual.tokenizeEncoded(e, i);
      return new K.Hi(n.tokens, n.endState);
    }
  }
  class zl {
    constructor(e, t, i, n) {
      ((this._languageId = e), (this._actual = t), (this._modeService = i), (this._standaloneThemeService = n));
    }
    getInitialState() {
      return this._actual.getInitialState();
    }
    static _toClassicTokens(e, t, i) {
      let n = [],
        o = 0;
      for (let s = 0, r = e.length; s < r; s++) {
        const r = e[s];
        let a = r.startIndex;
        (0 === s ? (a = 0) : a < o && (a = o), (n[s] = new K.WU(a + i, r.scopes, t)), (o = a));
      }
      return n;
    }
    static adaptTokenize(e, t, i, n, o) {
      let s,
        r = t.tokenize(i, n),
        a = zl._toClassicTokens(r.tokens, e, o);
      return ((s = r.endState.equals(n) ? n : r.endState), new K.hG(a, s));
    }
    tokenize(e, t, i, n) {
      return zl.adaptTokenize(this._languageId, this._actual, e, i, n);
    }
    _toBinaryTokens(e, t, i) {
      const n = e.encodeLanguageId(this._languageId),
        o = this._standaloneThemeService.getColorTheme().tokenTheme;
      let s = [],
        r = 0,
        a = 0;
      for (let e = 0, l = t.length; e < l; e++) {
        const l = t[e],
          c = o.match(n, l.scopes);
        if (r > 0 && s[r - 1] === c) continue;
        let d = l.startIndex;
        (0 === e ? (d = 0) : d < a && (d = a), (s[r++] = d + i), (s[r++] = c), (a = d));
      }
      let l = new Uint32Array(r);
      for (let e = 0; e < r; e++) l[e] = s[e];
      return l;
    }
    tokenize2(e, t, i, n) {
      let o,
        s = this._actual.tokenize(e, i),
        r = this._toBinaryTokens(this._modeService.languageIdCodec, s.tokens, n);
      return ((o = s.endState.equals(i) ? i : s.endState), new K.Hi(r, o));
    }
  }
  function jl(e) {
    return e && "function" == typeof e.then;
  }
  function Ul(e) {
    if (e) {
      const t = [null];
      for (let i = 1, n = e.length; i < n; i++) t[i] = Qo.Il.fromHex(e[i]);
      nl.standaloneThemeService.get().setColorMapOverride(t);
    } else nl.standaloneThemeService.get().setColorMapOverride(null);
  }
  function $l(e, t) {
    const i = nl.modeService.get().validateLanguageId(e);
    if (!i) throw new Error(`Cannot set tokens provider for unknown language ${e}`);
    const n = e => (function (e) {
      return "tokenizeEncoded" in e;
    })(e) ? new Hl(i, e) : new zl(i, e, nl.modeService.get(), nl.standaloneThemeService.get());
    return jl(t) ? be.RW.registerPromise(e, t.then(e => n(e))) : be.RW.register(e, n(t));
  }
  function Kl(e, t) {
    const i = t => (function (e, t, i, n) {
      return new Jt(e, t, i, n);
    })(nl.modeService.get(), nl.standaloneThemeService.get(), e, (function (e, t) {
      if (!t || "object" != typeof t) throw new Error("Monarch: expecting a language definition object");
      let i = {};
      ((i.languageId = e), (i.includeLF = Il(t.includeLF, !1)), (i.noThrow = !1), (i.maxStack = 100), (i.start = "string" == typeof t.start ? t.start : null), (i.ignoreCase = Il(t.ignoreCase, !1)), (i.unicode = Il(t.unicode, !1)), (i.tokenPostfix = El(t.tokenPostfix, "." + i.languageId)), (i.defaultToken = El(t.defaultToken, "source")), (i.usesEmbedded = !1));
      let n = t;
      function o(e, s, r) {
        for (const a of r) {
          let r = a.include;
          if (r) {
            if ("string" != typeof r) throw jt(i, "an 'include' attribute must be a string at: " + e);
            if (("@" === r[0] && (r = r.substr(1)), !t.tokenizer[r])) throw jt(i, "include target '" + r + "' is not defined at: " + e);
            o(e + "." + r, s, t.tokenizer[r]);
          } else {
            const t = new Pl(e);
            if (Array.isArray(a) && a.length >= 1 && a.length <= 3) {
              if ((t.setRegex(n, a[0]), a.length >= 3)) {
                if ("string" == typeof a[1]) t.setAction(n, {
                  token: a[1],
                  next: a[2]
                });else {
                  if ("object" != typeof a[1]) throw jt(i, "a next state as the last element of a rule can only be given if the action is either an object or a string, at: " + e);
                  {
                    const e = a[1];
                    ((e.next = a[2]), t.setAction(n, e));
                  }
                }
              } else t.setAction(n, a[1]);
            } else {
              if (!a.regex) throw jt(i, "a rule must either be an array, or an object with a 'regex' or 'include' field at: " + e);
              (a.name && "string" == typeof a.name && (t.name = a.name), a.matchOnlyAtStart && (t.matchOnlyAtLineStart = Il(a.matchOnlyAtLineStart, !1)), t.setRegex(n, a.regex), t.setAction(n, a.action));
            }
            s.push(t);
          }
        }
      }
      if (((n.languageId = e), (n.includeLF = i.includeLF), (n.ignoreCase = i.ignoreCase), (n.unicode = i.unicode), (n.noThrow = i.noThrow), (n.usesEmbedded = i.usesEmbedded), (n.stateNames = t.tokenizer), (n.defaultToken = i.defaultToken), !t.tokenizer || "object" != typeof t.tokenizer)) throw jt(i, "a language definition must define the 'tokenizer' attribute as an object");
      i.tokenizer = [];
      for (let e in t.tokenizer) if (t.tokenizer.hasOwnProperty(e)) {
        i.start || (i.start = e);
        const n = t.tokenizer[e];
        ((i.tokenizer[e] = new Array()), o("tokenizer." + e, i.tokenizer[e], n));
      }
      if (((i.usesEmbedded = n.usesEmbedded), t.brackets)) {
        if (!Array.isArray(t.brackets)) throw jt(i, "the 'brackets' attribute must be defined as an array");
      } else t.brackets = [{
        open: "{",
        close: "}",
        token: "delimiter.curly"
      }, {
        open: "[",
        close: "]",
        token: "delimiter.square"
      }, {
        open: "(",
        close: ")",
        token: "delimiter.parenthesis"
      }, {
        open: "<",
        close: ">",
        token: "delimiter.angle"
      }];
      let s = [];
      for (let e of t.brackets) {
        let t = e;
        if ((t && Array.isArray(t) && 3 === t.length && (t = {
          token: t[2],
          open: t[0],
          close: t[1]
        }), t.open === t.close)) throw jt(i, "open and close brackets in a 'brackets' attribute must be different: " + t.open + "\n hint: use the 'bracket' attribute if matching on equal brackets is required.");
        if ("string" != typeof t.open || "string" != typeof t.token || "string" != typeof t.close) throw jt(i, "every element in the 'brackets' array must be a '{open,close,token}' object or array");
        s.push({
          token: t.token + i.tokenPostfix,
          open: Ht(i, t.open),
          close: Ht(i, t.close)
        });
      }
      return ((i.brackets = s), (i.noThrow = !0), i);
    })(e, t));
    return jl(t) ? be.RW.registerPromise(e, t.then(e => i(e))) : be.RW.register(e, i(t));
  }
  function ql(e, t) {
    return be.FL.register(e, t);
  }
  function Zl(e, t) {
    return be.G0.register(e, t);
  }
  function Gl(e, t) {
    return be.nD.register(e, t);
  }
  function Yl(e, t) {
    return be.xp.register(e, {
      provideHover: (e, i, n) => {
        let o = e.getWordAtPosition(i);
        return Promise.resolve(t.provideHover(e, i, n)).then(e => {
          if (e) return (!e.range && o && (e.range = new U.e(i.lineNumber, o.startColumn, i.lineNumber, o.endColumn)), e.range || (e.range = new U.e(i.lineNumber, i.column, i.lineNumber, i.column)), e);
        });
      }
    });
  }
  function Ql(e, t) {
    return be.vJ.register(e, t);
  }
  function Xl(e, t) {
    return be.vH.register(e, t);
  }
  function Jl(e, t) {
    return be.id.register(e, t);
  }
  function ec(e, t) {
    return be.Ct.register(e, t);
  }
  function tc(e, t) {
    return be.vI.register(e, t);
  }
  function ic(e, t) {
    return be.tA.register(e, t);
  }
  function nc(e, t) {
    return be.He.register(e, t);
  }
  function oc(e, t, i) {
    return be.H9.register(e, {
      providedCodeActionKinds: null == i ? void 0 : i.providedCodeActionKinds,
      provideCodeActions: (e, i, n, o) => {
        let s = nl.markerService.get().read({
          resource: e.uri
        }).filter(e => U.e.areIntersectingOrTouching(e, i));
        return t.provideCodeActions(e, i, {
          markers: s,
          only: n.only
        }, o);
      },
      resolveCodeAction: t.resolveCodeAction
    });
  }
  function sc(e, t) {
    return be.Az.register(e, t);
  }
  function rc(e, t) {
    return be.vN.register(e, t);
  }
  function ac(e, t) {
    return be.ln.register(e, t);
  }
  function lc(e, t) {
    return be.pM.register(e, t);
  }
  function cc(e, t) {
    return be.KZ.register(e, t);
  }
  function dc(e, t) {
    return be.OH.register(e, t);
  }
  function hc(e, t) {
    return be.aC.register(e, t);
  }
  function uc(e, t) {
    return be.RN.register(e, t);
  }
  function gc(e, t) {
    return be.AC.register(e, t);
  }
  function pc(e, t) {
    return be.wT.register(e, t);
  }
  function fc(e, t) {
    return be.K7.register(e, t);
  }
  function mc(e, t) {
    return be.zu.register(e, t);
  }
  function vc(e, t) {
    return be.mX.register(e, t);
  }
  var _c,
    bc = i(23606);
  ((B.BH.wrappingIndent.defaultValue = 0), (B.BH.glyphMargin.defaultValue = !1), (B.BH.autoIndent.defaultValue = 3), (B.BH.overviewRulerLanes.defaultValue = 2), bc.xC.setFormatterSelector((e, t, i) => Promise.resolve(e[0])));
  const wc = Z();
  ((wc.editor = {
    create: rl,
    onDidCreateEditor: al,
    createDiffEditor: ll,
    createDiffNavigator: cl,
    createModel: dl,
    setModelLanguage: hl,
    setModelMarkers: ul,
    getModelMarkers: gl,
    onDidChangeMarkers: pl,
    getModels: ml,
    getModel: fl,
    onDidCreateModel: vl,
    onWillDisposeModel: _l,
    onDidChangeModelLanguage: bl,
    createWebWorker: wl,
    colorizeElement: yl,
    colorize: Cl,
    colorizeModelLine: xl,
    tokenize: Sl,
    defineTheme: kl,
    setTheme: Ll,
    remeasureFonts: Nl,
    registerCommand: Dl,
    AccessibilitySupport: n,
    ContentWidgetPositionPreference: l,
    CursorChangeReason: c,
    DefaultEndOfLine: d,
    EditorAutoIndentStrategy: u,
    EditorOption: g,
    EndOfLinePreference: p,
    EndOfLineSequence: f,
    MinimapPosition: C,
    MouseTargetType: x,
    OverlayWidgetPositionPreference: S,
    OverviewRulerLane: k,
    RenderLineNumbersType: L,
    RenderMinimap: N,
    ScrollbarVisibility: I,
    ScrollType: D,
    TextEditorCursorBlinkingStyle: O,
    TextEditorCursorStyle: P,
    TrackedRangeStickiness: R,
    WrappingIndent: F,
    ConfigurationChangedEvent: B.Bb,
    BareFontInfo: me.E4,
    FontInfo: me.pR,
    TextModelResolvedOptions: _e.dJ,
    FindMatch: _e.tk,
    EditorType: ve.g,
    EditorOptions: B.BH
  }), (wc.languages = {
    register: Rl,
    getLanguages: Fl,
    onLanguage: Vl,
    getEncodedLanguageId: Bl,
    setLanguageConfiguration: Wl,
    setColorMap: Ul,
    setTokensProvider: $l,
    setMonarchTokensProvider: Kl,
    registerReferenceProvider: ql,
    registerRenameProvider: Zl,
    registerCompletionItemProvider: cc,
    registerSignatureHelpProvider: Gl,
    registerHoverProvider: Yl,
    registerDocumentSymbolProvider: Ql,
    registerDocumentHighlightProvider: Xl,
    registerLinkedEditingRangeProvider: Jl,
    registerDefinitionProvider: ec,
    registerImplementationProvider: tc,
    registerTypeDefinitionProvider: ic,
    registerCodeLensProvider: nc,
    registerCodeActionProvider: oc,
    registerDocumentFormattingEditProvider: sc,
    registerDocumentRangeFormattingEditProvider: rc,
    registerOnTypeFormattingEditProvider: ac,
    registerLinkProvider: lc,
    registerColorProvider: dc,
    registerFoldingRangeProvider: hc,
    registerDeclarationProvider: uc,
    registerSelectionRangeProvider: gc,
    registerDocumentSemanticTokensProvider: pc,
    registerDocumentRangeSemanticTokensProvider: fc,
    registerInlineCompletionsProvider: mc,
    registerInlayHintsProvider: vc,
    DocumentHighlightKind: h,
    CompletionItemKind: s,
    CompletionItemTag: r,
    CompletionItemInsertTextRule: o,
    SymbolKind: M,
    SymbolTag: A,
    IndentAction: m,
    CompletionTriggerKind: a,
    SignatureHelpTriggerKind: T,
    InlayHintKind: v,
    InlineCompletionTriggerKind: _,
    FoldingRangeKind: be.AD
  }));
  (wc.CancellationTokenSource, wc.Emitter);
  const yc = wc.KeyCode,
    Cc = wc.KeyMod,
    xc = (wc.Position, wc.Range, wc.Selection),
    Sc = (wc.SelectionDirection, wc.MarkerSeverity, wc.MarkerTag, wc.Uri, wc.Token, wc.editor),
    kc = wc.languages;
  (((null === (_c = Le.li.MonacoEnvironment) || void 0 === _c ? void 0 : _c.globalAPI) || ("function" == typeof define && i.amdO)) && (self.monaco = wc), void 0 !== self.require && "function" == typeof self.require.config && self.require.config({
    ignoreDuplicateModules: ["vscode-languageserver-types", "vscode-languageserver-types/main", "vscode-languageserver-textdocument", "vscode-languageserver-textdocument/main", "vscode-nls", "vscode-nls/vscode-nls", "jsonc-parser", "jsonc-parser/main", "vscode-uri", "vscode-uri/index", "vs/basic-languages/typescript/typescript"]
  }));
};