module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    FoldingController: () => Q,
    editorFoldForeground: () => ie,
    foldBackgroundBackground: () => te
  }));
  var n = i(15393),
    o = i(17301),
    s = i(22258),
    r = i(5976),
    a = i(97295),
    l = i(98401),
    c = (i(42680), i(39925)),
    d = i(16830),
    h = i(29102),
    u = i(44101),
    g = i(83831),
    p = i(4669);
  const f = 16777215,
    m = 4278190080;
  class v {
    constructor(e, t, i) {
      if (e.length !== t.length || e.length > 65535) throw new Error("invalid startIndexes or endIndexes size");
      ((this._startIndexes = e), (this._endIndexes = t), (this._collapseStates = new Uint32Array(Math.ceil(e.length / 32))), (this._types = i), (this._parentsComputed = !1));
    }
    ensureParentIndices() {
      if (!this._parentsComputed) {
        this._parentsComputed = !0;
        let e = [],
          t = (t, i) => {
            let n = e[e.length - 1];
            return (this.getStartLineNumber(n) <= t && this.getEndLineNumber(n) >= i);
          };
        for (let i = 0, n = this._startIndexes.length; i < n; i++) {
          let n = this._startIndexes[i],
            o = this._endIndexes[i];
          if (n > f || o > f) throw new Error("startLineNumber or endLineNumber must not exceed " + f);
          for (; e.length > 0 && !t(n, o);) e.pop();
          let s = e.length > 0 ? e[e.length - 1] : -1;
          (e.push(i), (this._startIndexes[i] = n + ((255 & s) << 24)), (this._endIndexes[i] = o + ((65280 & s) << 16)));
        }
      }
    }
    get length() {
      return this._startIndexes.length;
    }
    getStartLineNumber(e) {
      return this._startIndexes[e] & f;
    }
    getEndLineNumber(e) {
      return this._endIndexes[e] & f;
    }
    getType(e) {
      return this._types ? this._types[e] : void 0;
    }
    hasTypes() {
      return !!this._types;
    }
    isCollapsed(e) {
      let t = (e / 32) | 0,
        i = e % 32;
      return 0 != (this._collapseStates[t] & (1 << i));
    }
    setCollapsed(e, t) {
      let i = (e / 32) | 0,
        n = e % 32,
        o = this._collapseStates[i];
      this._collapseStates[i] = t ? o | (1 << n) : o & ~(1 << n);
    }
    setCollapsedAllOfType(e, t) {
      let i = !1;
      if (this._types) for (let n = 0; n < this._types.length; n++) this._types[n] === e && (this.setCollapsed(n, t), (i = !0));
      return i;
    }
    toRegion(e) {
      return new _(this, e);
    }
    getParentIndex(e) {
      this.ensureParentIndices();
      let t = ((this._startIndexes[e] & m) >>> 24) + ((this._endIndexes[e] & m) >>> 16);
      return 65535 === t ? -1 : t;
    }
    contains(e, t) {
      return this.getStartLineNumber(e) <= t && this.getEndLineNumber(e) >= t;
    }
    findIndex(e) {
      let t = 0,
        i = this._startIndexes.length;
      if (0 === i) return -1;
      for (; t < i;) {
        let n = Math.floor((t + i) / 2);
        e < this.getStartLineNumber(n) ? (i = n) : (t = n + 1);
      }
      return t - 1;
    }
    findRange(e) {
      let t = this.findIndex(e);
      if (t >= 0) {
        if (this.getEndLineNumber(t) >= e) return t;
        for (t = this.getParentIndex(t); -1 !== t;) {
          if (this.contains(t, e)) return t;
          t = this.getParentIndex(t);
        }
      }
      return -1;
    }
    toString() {
      let e = [];
      for (let t = 0; t < this.length; t++) e[t] = `[${this.isCollapsed(t) ? "+" : "-"}] ${this.getStartLineNumber(t)}/${this.getEndLineNumber(t)}`;
      return e.join(", ");
    }
  }
  class _ {
    constructor(e, t) {
      ((this.ranges = e), (this.index = t));
    }
    get startLineNumber() {
      return this.ranges.getStartLineNumber(this.index);
    }
    get endLineNumber() {
      return this.ranges.getEndLineNumber(this.index);
    }
    get regionIndex() {
      return this.index;
    }
    get parentIndex() {
      return this.ranges.getParentIndex(this.index);
    }
    get isCollapsed() {
      return this.ranges.isCollapsed(this.index);
    }
    containedBy(e) {
      return (e.startLineNumber <= this.startLineNumber && e.endLineNumber >= this.endLineNumber);
    }
    containsLine(e) {
      return this.startLineNumber <= e && e <= this.endLineNumber;
    }
  }
  class b {
    constructor(e, t) {
      ((this._updateEventEmitter = new p.Q5()), (this.onDidChange = this._updateEventEmitter.event), (this._textModel = e), (this._decorationProvider = t), (this._regions = new v(new Uint32Array(0), new Uint32Array(0))), (this._editorDecorationIds = []), (this._isInitialized = !1));
    }
    get regions() {
      return this._regions;
    }
    get textModel() {
      return this._textModel;
    }
    get isInitialized() {
      return this._isInitialized;
    }
    toggleCollapseState(e) {
      if (!e.length) return;
      e = e.sort((e, t) => e.regionIndex - t.regionIndex);
      const t = {};
      (this._decorationProvider.changeDecorations(i => {
        let n = 0,
          o = -1,
          s = -1;
        const r = e => {
          for (; n < e;) {
            const e = this._regions.getEndLineNumber(n),
              t = this._regions.isCollapsed(n);
            (e <= o && i.changeDecorationOptions(this._editorDecorationIds[n], this._decorationProvider.getDecorationOption(t, e <= s)), t && e > s && (s = e), n++);
          }
        };
        for (let i of e) {
          let e = i.regionIndex,
            n = this._editorDecorationIds[e];
          if (n && !t[n]) {
            ((t[n] = !0), r(e));
            let i = !this._regions.isCollapsed(e);
            (this._regions.setCollapsed(e, i), (o = Math.max(o, this._regions.getEndLineNumber(e))));
          }
        }
        r(this._regions.length);
      }), this._updateEventEmitter.fire({
        model: this,
        collapseStateChanged: e
      }));
    }
    update(e, t = []) {
      let i = [],
        n = -1,
        o = (o, s) => {
          const r = e.getStartLineNumber(o),
            a = e.getEndLineNumber(o);
          (s || (s = e.isCollapsed(o)), s && ((e, i) => {
            for (let n of t) if (e < n && n <= i) return !0;
            return !1;
          })(r, a) && (s = !1), e.setCollapsed(o, s));
          const l = this._textModel.getLineMaxColumn(r),
            c = {
              startLineNumber: r,
              startColumn: Math.max(l - 1, 1),
              endLineNumber: r,
              endColumn: l
            };
          (i.push({
            range: c,
            options: this._decorationProvider.getDecorationOption(s, a <= n)
          }), s && a > n && (n = a));
        },
        s = 0,
        r = () => {
          for (; s < this._regions.length;) {
            let e = this._regions.isCollapsed(s);
            if ((s++, e)) return s - 1;
          }
          return -1;
        },
        a = 0,
        l = r();
      for (; -1 !== l && a < e.length;) {
        let t = this._textModel.getDecorationRange(this._editorDecorationIds[l]);
        if (t) {
          let i = t.startLineNumber;
          if (t.startColumn === Math.max(t.endColumn - 1, 1) && this._textModel.getLineMaxColumn(i) === t.endColumn) for (; a < e.length;) {
            let t = e.getStartLineNumber(a);
            if (!(i >= t)) break;
            (o(a, i === t), a++);
          }
        }
        l = r();
      }
      for (; a < e.length;) (o(a, !1), a++);
      ((this._editorDecorationIds = this._decorationProvider.deltaDecorations(this._editorDecorationIds, i)), (this._regions = e), (this._isInitialized = !0), this._updateEventEmitter.fire({
        model: this
      }));
    }
    getMemento() {
      let e = [];
      for (let t = 0; t < this._regions.length; t++) if (this._regions.isCollapsed(t)) {
        let i = this._textModel.getDecorationRange(this._editorDecorationIds[t]);
        if (i) {
          let n = i.startLineNumber,
            o = i.endLineNumber + this._regions.getEndLineNumber(t) - this._regions.getStartLineNumber(t);
          e.push({
            startLineNumber: n,
            endLineNumber: o
          });
        }
      }
      if (e.length > 0) return e;
    }
    applyMemento(e) {
      if (!Array.isArray(e)) return;
      let t = [];
      for (let i of e) {
        let e = this.getRegionAtLine(i.startLineNumber);
        e && !e.isCollapsed && t.push(e);
      }
      this.toggleCollapseState(t);
    }
    dispose() {
      this._decorationProvider.deltaDecorations(this._editorDecorationIds, []);
    }
    getAllRegionsAtLine(e, t) {
      let i = [];
      if (this._regions) {
        let n = this._regions.findRange(e),
          o = 1;
        for (; n >= 0;) {
          let e = this._regions.toRegion(n);
          ((t && !t(e, o)) || i.push(e), o++, (n = e.parentIndex));
        }
      }
      return i;
    }
    getRegionAtLine(e) {
      if (this._regions) {
        let t = this._regions.findRange(e);
        if (t >= 0) return this._regions.toRegion(t);
      }
      return null;
    }
    getRegionsInside(e, t) {
      let i = [],
        n = e ? e.regionIndex + 1 : 0,
        o = e ? e.endLineNumber : Number.MAX_VALUE;
      if (t && 2 === t.length) {
        const e = [];
        for (let s = n, r = this._regions.length; s < r; s++) {
          let n = this._regions.toRegion(s);
          if (!(this._regions.getStartLineNumber(s) < o)) break;
          for (; e.length > 0 && !n.containedBy(e[e.length - 1]);) e.pop();
          (e.push(n), t(n, e.length) && i.push(n));
        }
      } else for (let e = n, s = this._regions.length; e < s; e++) {
        let n = this._regions.toRegion(e);
        if (!(this._regions.getStartLineNumber(e) < o)) break;
        (t && !t(n)) || i.push(n);
      }
      return i;
    }
  }
  function w(e, t, i = Number.MAX_VALUE, n) {
    let o = [];
    if (n && n.length > 0) for (let s of n) {
      let n = e.getRegionAtLine(s);
      if (n && (n.isCollapsed !== t && o.push(n), i > 1)) {
        let s = e.getRegionsInside(n, (e, n) => e.isCollapsed !== t && n < i);
        o.push(...s);
      }
    } else {
      let n = e.getRegionsInside(null, (e, n) => e.isCollapsed !== t && n < i);
      o.push(...n);
    }
    e.toggleCollapseState(o);
  }
  function y(e, t, i, n) {
    let o = [];
    for (let s of n) {
      let n = e.getAllRegionsAtLine(s, (e, n) => e.isCollapsed !== t && n <= i);
      o.push(...n);
    }
    e.toggleCollapseState(o);
  }
  function C(e, t, i) {
    let n = [];
    for (let t of i) n.push(e.getAllRegionsAtLine(t, void 0)[0]);
    let o = e.getRegionsInside(null, e => n.every(t => !t.containedBy(e) && !e.containedBy(t)) && e.isCollapsed !== t);
    e.toggleCollapseState(o);
  }
  function x(e, t, i) {
    let n = e.textModel,
      o = e.regions,
      s = [];
    for (let e = o.length - 1; e >= 0; e--) if (i !== o.isCollapsed(e)) {
      let i = o.getStartLineNumber(e);
      t.test(n.getLineContent(i)) && s.push(o.toRegion(e));
    }
    e.toggleCollapseState(s);
  }
  function S(e, t, i) {
    let n = e.regions,
      o = [];
    for (let e = n.length - 1; e >= 0; e--) i !== n.isCollapsed(e) && t === n.getType(e) && o.push(n.toRegion(e));
    e.toggleCollapseState(o);
  }
  var k = i(9488),
    L = i(24314);
  class N {
    constructor(e) {
      ((this._updateEventEmitter = new p.Q5()), (this._foldingModel = e), (this._foldingModelListener = e.onDidChange(e => this.updateHiddenRanges())), (this._hiddenRanges = []), e.regions.length && this.updateHiddenRanges());
    }
    get onDidChange() {
      return this._updateEventEmitter.event;
    }
    get hiddenRanges() {
      return this._hiddenRanges;
    }
    updateHiddenRanges() {
      let e = !1,
        t = [],
        i = 0,
        n = 0,
        o = Number.MAX_VALUE,
        s = -1,
        r = this._foldingModel.regions;
      for (; i < r.length; i++) {
        if (!r.isCollapsed(i)) continue;
        let a = r.getStartLineNumber(i) + 1,
          l = r.getEndLineNumber(i);
        (o <= a && l <= s) || (!e && n < this._hiddenRanges.length && this._hiddenRanges[n].startLineNumber === a && this._hiddenRanges[n].endLineNumber === l ? (t.push(this._hiddenRanges[n]), n++) : ((e = !0), t.push(new L.e(a, 1, l, 1))), (o = a), (s = l));
      }
      (e || n < this._hiddenRanges.length) && this.applyHiddenRanges(t);
    }
    applyMemento(e) {
      if (!Array.isArray(e) || 0 === e.length) return !1;
      let t = [];
      for (let i of e) {
        if (!i.startLineNumber || !i.endLineNumber) return !1;
        t.push(new L.e(i.startLineNumber + 1, 1, i.endLineNumber, 1));
      }
      return (this.applyHiddenRanges(t), !0);
    }
    getMemento() {
      return this._hiddenRanges.map(e => ({
        startLineNumber: e.startLineNumber - 1,
        endLineNumber: e.endLineNumber
      }));
    }
    applyHiddenRanges(e) {
      ((this._hiddenRanges = e), this._updateEventEmitter.fire(e));
    }
    hasRanges() {
      return this._hiddenRanges.length > 0;
    }
    isHidden(e) {
      return null !== D(this._hiddenRanges, e);
    }
    adjustSelections(e) {
      let t = !1,
        i = this._foldingModel.textModel,
        n = null,
        o = e => ((n && (function (e, t) {
          return e >= t.startLineNumber && e <= t.endLineNumber;
        })(e, n)) || (n = D(this._hiddenRanges, e)), n ? n.startLineNumber - 1 : null);
      for (let n = 0, s = e.length; n < s; n++) {
        let s = e[n],
          r = o(s.startLineNumber);
        r && ((s = s.setStartPosition(r, i.getLineMaxColumn(r))), (t = !0));
        let a = o(s.endLineNumber);
        (a && ((s = s.setEndPosition(a, i.getLineMaxColumn(a))), (t = !0)), (e[n] = s));
      }
      return t;
    }
    dispose() {
      (this.hiddenRanges.length > 0 && ((this._hiddenRanges = []), this._updateEventEmitter.fire(this._hiddenRanges)), this._foldingModelListener && (this._foldingModelListener.dispose(), (this._foldingModelListener = null)));
    }
  }
  function D(e, t) {
    let i = (0, k.lG)(e, e => t < e.startLineNumber) - 1;
    return i >= 0 && e[i].endLineNumber >= t ? e[i] : null;
  }
  var I = i(44174);
  class E {
    constructor(e) {
      ((this.editorModel = e), (this.id = "indent"));
    }
    dispose() {}
    compute(e) {
      let t = g.zu.getFoldingRules(this.editorModel.getLanguageId()),
        i = t && !!t.offSide,
        n = t && t.markers;
      return Promise.resolve((function (e, t, i, n = 5e3) {
        const o = e.getOptions().tabSize;
        let s,
          r = new T(n);
        i && (s = new RegExp(`(${i.start.source})|(?:${i.end.source})`));
        let a = [],
          l = e.getLineCount() + 1;
        a.push({
          indent: -1,
          endAbove: l,
          line: l
        });
        for (let i = e.getLineCount(); i > 0; i--) {
          let n,
            l = e.getLineContent(i),
            c = I.yO.computeIndentLevel(l, o),
            d = a[a.length - 1];
          if (-1 !== c) {
            if (s && (n = l.match(s))) {
              if (!n[1]) {
                a.push({
                  indent: -2,
                  endAbove: i,
                  line: i
                });
                continue;
              }
              {
                let e = a.length - 1;
                for (; e > 0 && -2 !== a[e].indent;) e--;
                if (e > 0) {
                  ((a.length = e + 1), (d = a[e]), r.insertFirst(i, d.line, c), (d.line = i), (d.indent = c), (d.endAbove = i));
                  continue;
                }
              }
            }
            if (d.indent > c) {
              do {
                (a.pop(), (d = a[a.length - 1]));
              } while (d.indent > c);
              let e = d.endAbove - 1;
              e - i >= 1 && r.insertFirst(i, e, c);
            }
            d.indent === c ? (d.endAbove = i) : a.push({
              indent: c,
              endAbove: i,
              line: i
            });
          } else t && (d.endAbove = i);
        }
        return r.toIndentRanges(e);
      })(this.editorModel, i, n));
    }
  }
  class T {
    constructor(e) {
      ((this._startIndexes = []), (this._endIndexes = []), (this._indentOccurrences = []), (this._length = 0), (this._foldingRangesLimit = e));
    }
    insertFirst(e, t, i) {
      if (e > f || t > f) return;
      let n = this._length;
      ((this._startIndexes[n] = e), (this._endIndexes[n] = t), this._length++, i < 1e3 && (this._indentOccurrences[i] = (this._indentOccurrences[i] || 0) + 1));
    }
    toIndentRanges(e) {
      if (this._length <= this._foldingRangesLimit) {
        let e = new Uint32Array(this._length),
          t = new Uint32Array(this._length);
        for (let i = this._length - 1, n = 0; i >= 0; i--, n++) ((e[n] = this._startIndexes[i]), (t[n] = this._endIndexes[i]));
        return new v(e, t);
      }
      {
        let t = 0,
          i = this._indentOccurrences.length;
        for (let e = 0; e < this._indentOccurrences.length; e++) {
          let n = this._indentOccurrences[e];
          if (n) {
            if (n + t > this._foldingRangesLimit) {
              i = e;
              break;
            }
            t += n;
          }
        }
        const n = e.getOptions().tabSize;
        let o = new Uint32Array(this._foldingRangesLimit),
          s = new Uint32Array(this._foldingRangesLimit);
        for (let r = this._length - 1, a = 0; r >= 0; r--) {
          let l = this._startIndexes[r],
            c = e.getLineContent(l),
            d = I.yO.computeIndentLevel(c, n);
          (d < i || (d === i && t++ < this._foldingRangesLimit)) && ((o[a] = l), (s[a] = this._endIndexes[r]), a++);
        }
        return new v(o, s);
      }
    }
  }
  const M = {},
    A = "syntax";
  class O {
    constructor(e, t, i, n = 5e3) {
      ((this.editorModel = e), (this.providers = t), (this.limit = n), (this.id = A));
      for (const e of t) "function" == typeof e.onDidChange && (this.disposables || (this.disposables = new r.SL()), this.disposables.add(e.onDidChange(i)));
    }
    compute(e) {
      return (function (e, t, i) {
        let n = null,
          s = e.map((e, s) => Promise.resolve(e.provideFoldingRanges(t, M, i)).then(e => {
            if (!i.isCancellationRequested && Array.isArray(e)) {
              Array.isArray(n) || (n = []);
              let i = t.getLineCount();
              for (let t of e) t.start > 0 && t.end > t.start && t.end <= i && n.push({
                start: t.start,
                end: t.end,
                rank: s,
                kind: t.kind
              });
            }
          }, o.Cp));
        return Promise.all(s).then(e => n);
      })(this.providers, this.editorModel, e).then(e => {
        if (e) {
          return R(e, this.limit);
        }
        return null;
      });
    }
    dispose() {
      var e;
      null === (e = this.disposables) || void 0 === e || e.dispose();
    }
  }
  class P {
    constructor(e) {
      ((this._startIndexes = []), (this._endIndexes = []), (this._nestingLevels = []), (this._nestingLevelCounts = []), (this._types = []), (this._length = 0), (this._foldingRangesLimit = e));
    }
    add(e, t, i, n) {
      if (e > f || t > f) return;
      let o = this._length;
      ((this._startIndexes[o] = e), (this._endIndexes[o] = t), (this._nestingLevels[o] = n), (this._types[o] = i), this._length++, n < 30 && (this._nestingLevelCounts[n] = (this._nestingLevelCounts[n] || 0) + 1));
    }
    toIndentRanges() {
      if (this._length <= this._foldingRangesLimit) {
        let e = new Uint32Array(this._length),
          t = new Uint32Array(this._length);
        for (let i = 0; i < this._length; i++) ((e[i] = this._startIndexes[i]), (t[i] = this._endIndexes[i]));
        return new v(e, t, this._types);
      }
      {
        let e = 0,
          t = this._nestingLevelCounts.length;
        for (let i = 0; i < this._nestingLevelCounts.length; i++) {
          let n = this._nestingLevelCounts[i];
          if (n) {
            if (n + e > this._foldingRangesLimit) {
              t = i;
              break;
            }
            e += n;
          }
        }
        let i = new Uint32Array(this._foldingRangesLimit),
          n = new Uint32Array(this._foldingRangesLimit),
          o = [];
        for (let s = 0, r = 0; s < this._length; s++) {
          let a = this._nestingLevels[s];
          (a < t || (a === t && e++ < this._foldingRangesLimit)) && ((i[r] = this._startIndexes[s]), (n[r] = this._endIndexes[s]), (o[r] = this._types[s]), r++);
        }
        return new v(i, n, o);
      }
    }
  }
  function R(e, t) {
    let i,
      n = e.sort((e, t) => {
        let i = e.start - t.start;
        return (0 === i && (i = e.rank - t.rank), i);
      }),
      o = new P(t),
      s = [];
    for (let e of n) if (i) {
      if (e.start > i.start) if (e.end <= i.end) (s.push(i), (i = e), o.add(e.start, e.end, e.kind && e.kind.value, s.length));else {
        if (e.start > i.end) {
          do {
            i = s.pop();
          } while (i && e.start > i.end);
          (i && s.push(i), (i = e));
        }
        o.add(e.start, e.end, e.kind && e.kind.value, s.length);
      }
    } else ((i = e), o.add(e.start, e.end, e.kind && e.kind.value, s.length));
    return o.toIndentRanges();
  }
  const F = "init";
  class B {
    constructor(e, t, i, n) {
      if (((this.editorModel = e), (this.id = F), t.length)) {
        let o = t => ({
          range: {
            startLineNumber: t.startLineNumber,
            startColumn: 0,
            endLineNumber: t.endLineNumber,
            endColumn: e.getLineLength(t.endLineNumber)
          },
          options: {
            description: "folding-initializing-range-provider",
            stickiness: 1
          }
        });
        ((this.decorationIds = e.deltaDecorations([], t.map(o))), (this.timeout = setTimeout(i, n)));
      }
    }
    dispose() {
      (this.decorationIds && (this.editorModel.deltaDecorations(this.decorationIds, []), (this.decorationIds = void 0)), "number" == typeof this.timeout && (clearTimeout(this.timeout), (this.timeout = void 0)));
    }
    compute(e) {
      let t = [];
      if (this.decorationIds) for (let e of this.decorationIds) {
        let i = this.editorModel.getDecorationRange(e);
        i && t.push({
          start: i.startLineNumber,
          end: i.endLineNumber,
          rank: 1
        });
      }
      return Promise.resolve(R(t, Number.MAX_VALUE));
    }
  }
  var V = i(63580),
    W = i(38819),
    H = i(73910),
    z = i(97781),
    j = i(73046),
    U = i(59554);
  const $ = (0, U.q5)("folding-expanded", j.lA.chevronDown, (0, V.N)("foldingExpandedIcon", "Icon for expanded ranges in the editor glyph margin.")),
    K = (0, U.q5)("folding-collapsed", j.lA.chevronRight, (0, V.N)("foldingCollapsedIcon", "Icon for collapsed ranges in the editor glyph margin."));
  class q {
    constructor(e) {
      ((this.editor = e), (this.autoHideFoldingControls = !0), (this.showFoldingHighlights = !0));
    }
    getDecorationOption(e, t) {
      return t ? q.HIDDEN_RANGE_DECORATION : e ? this.showFoldingHighlights ? q.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION : q.COLLAPSED_VISUAL_DECORATION : this.autoHideFoldingControls ? q.EXPANDED_AUTO_HIDE_VISUAL_DECORATION : q.EXPANDED_VISUAL_DECORATION;
    }
    deltaDecorations(e, t) {
      return this.editor.deltaDecorations(e, t);
    }
    changeDecorations(e) {
      return this.editor.changeDecorations(e);
    }
  }
  ((q.COLLAPSED_VISUAL_DECORATION = I.qx.register({
    description: "folding-collapsed-visual-decoration",
    stickiness: 1,
    afterContentClassName: "inline-folded",
    isWholeLine: !0,
    firstLineDecorationClassName: z.kS.asClassName(K)
  })), (q.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION = I.qx.register({
    description: "folding-collapsed-highlighted-visual-decoration",
    stickiness: 1,
    afterContentClassName: "inline-folded",
    className: "folded-background",
    isWholeLine: !0,
    firstLineDecorationClassName: z.kS.asClassName(K)
  })), (q.EXPANDED_AUTO_HIDE_VISUAL_DECORATION = I.qx.register({
    description: "folding-expanded-auto-hide-visual-decoration",
    stickiness: 1,
    isWholeLine: !0,
    firstLineDecorationClassName: z.kS.asClassName($)
  })), (q.EXPANDED_VISUAL_DECORATION = I.qx.register({
    description: "folding-expanded-visual-decoration",
    stickiness: 1,
    isWholeLine: !0,
    firstLineDecorationClassName: "alwaysShowFoldIcons " + z.kS.asClassName($)
  })), (q.HIDDEN_RANGE_DECORATION = I.qx.register({
    description: "folding-hidden-range-decoration",
    stickiness: 1
  })));
  var Z = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    G = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const Y = new W.uy("foldingEnabled", !1);
  let Q = class e extends r.JT {
    constructor(e, t) {
      (super(), (this.contextKeyService = t), (this.localToDispose = this._register(new r.SL())), (this.editor = e));
      const i = this.editor.getOptions();
      ((this._isEnabled = i.get(37)), (this._useFoldingProviders = "indentation" !== i.get(38)), (this._unfoldOnClickAfterEndOfLine = i.get(41)), (this._restoringViewState = !1), (this._currentModelHasFoldedImports = !1), (this._foldingImportsByDefault = i.get(40)), (this.foldingModel = null), (this.hiddenRangeModel = null), (this.rangeProvider = null), (this.foldingRegionPromise = null), (this.foldingStateMemento = null), (this.foldingModelPromise = null), (this.updateScheduler = null), (this.cursorChangedScheduler = null), (this.mouseDownInfo = null), (this.foldingDecorationProvider = new q(e)), (this.foldingDecorationProvider.autoHideFoldingControls = "mouseover" === i.get(98)), (this.foldingDecorationProvider.showFoldingHighlights = i.get(39)), (this.foldingEnabled = Y.bindTo(this.contextKeyService)), this.foldingEnabled.set(this._isEnabled), this._register(this.editor.onDidChangeModel(() => this.onModelChanged())), this._register(this.editor.onDidChangeConfiguration(e => {
        if ((e.hasChanged(37) && ((this._isEnabled = this.editor.getOptions().get(37)), this.foldingEnabled.set(this._isEnabled), this.onModelChanged()), e.hasChanged(98) || e.hasChanged(39))) {
          const e = this.editor.getOptions();
          ((this.foldingDecorationProvider.autoHideFoldingControls = "mouseover" === e.get(98)), (this.foldingDecorationProvider.showFoldingHighlights = e.get(39)), this.onModelContentChanged());
        }
        (e.hasChanged(38) && ((this._useFoldingProviders = "indentation" !== this.editor.getOptions().get(38)), this.onFoldingStrategyChanged()), e.hasChanged(41) && (this._unfoldOnClickAfterEndOfLine = this.editor.getOptions().get(41)), e.hasChanged(40) && (this._foldingImportsByDefault = this.editor.getOptions().get(40)));
      })), this.onModelChanged());
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    saveViewState() {
      let e = this.editor.getModel();
      if (!e || !this._isEnabled || e.isTooLargeForTokenization()) return {};
      if (this.foldingModel) {
        let t = this.foldingModel.isInitialized ? this.foldingModel.getMemento() : this.hiddenRangeModel.getMemento(),
          i = this.rangeProvider ? this.rangeProvider.id : void 0;
        return {
          collapsedRegions: t,
          lineCount: e.getLineCount(),
          provider: i,
          foldedImports: this._currentModelHasFoldedImports
        };
      }
    }
    restoreViewState(e) {
      let t = this.editor.getModel();
      if (!t || !this._isEnabled || t.isTooLargeForTokenization() || !this.hiddenRangeModel) return;
      if (!e || e.lineCount !== t.getLineCount()) return;
      if (((this._currentModelHasFoldedImports = !!e.foldedImports), !e.collapsedRegions)) return;
      (e.provider !== A && e.provider !== F) || (this.foldingStateMemento = e);
      const i = e.collapsedRegions;
      if (this.hiddenRangeModel.applyMemento(i)) {
        const e = this.getFoldingModel();
        e && e.then(e => {
          if (e) {
            this._restoringViewState = !0;
            try {
              e.applyMemento(i);
            } finally {
              this._restoringViewState = !1;
            }
          }
        }).then(void 0, o.dL);
      }
    }
    onModelChanged() {
      this.localToDispose.clear();
      let e = this.editor.getModel();
      this._isEnabled && e && !e.isTooLargeForTokenization() && ((this._currentModelHasFoldedImports = !1), (this.foldingModel = new b(e, this.foldingDecorationProvider)), this.localToDispose.add(this.foldingModel), (this.hiddenRangeModel = new N(this.foldingModel)), this.localToDispose.add(this.hiddenRangeModel), this.localToDispose.add(this.hiddenRangeModel.onDidChange(e => this.onHiddenRangesChanges(e))), (this.updateScheduler = new n.vp(200)), (this.cursorChangedScheduler = new n.pY(() => this.revealCursor(), 200)), this.localToDispose.add(this.cursorChangedScheduler), this.localToDispose.add(u.aC.onDidChange(() => this.onFoldingStrategyChanged())), this.localToDispose.add(this.editor.onDidChangeModelLanguageConfiguration(() => this.onFoldingStrategyChanged())), this.localToDispose.add(this.editor.onDidChangeModelContent(() => this.onModelContentChanged())), this.localToDispose.add(this.editor.onDidChangeCursorPosition(() => this.onCursorPositionChanged())), this.localToDispose.add(this.editor.onMouseDown(e => this.onEditorMouseDown(e))), this.localToDispose.add(this.editor.onMouseUp(e => this.onEditorMouseUp(e))), this.localToDispose.add({
        dispose: () => {
          (this.foldingRegionPromise && (this.foldingRegionPromise.cancel(), (this.foldingRegionPromise = null)), this.updateScheduler && this.updateScheduler.cancel(), (this.updateScheduler = null), (this.foldingModel = null), (this.foldingModelPromise = null), (this.hiddenRangeModel = null), (this.cursorChangedScheduler = null), (this.foldingStateMemento = null), this.rangeProvider && this.rangeProvider.dispose(), (this.rangeProvider = null));
        }
      }), this.onModelContentChanged());
    }
    onFoldingStrategyChanged() {
      (this.rangeProvider && this.rangeProvider.dispose(), (this.rangeProvider = null), this.onModelContentChanged());
    }
    getRangeProvider(e) {
      if (this.rangeProvider) return this.rangeProvider;
      if (((this.rangeProvider = new E(e)), this._useFoldingProviders && this.foldingModel)) {
        let t = u.aC.ordered(this.foldingModel.textModel);
        if (0 === t.length && this.foldingStateMemento && this.foldingStateMemento.collapsedRegions) {
          return (this.rangeProvider = new B(e, this.foldingStateMemento.collapsedRegions, () => {
            ((this.foldingStateMemento = null), this.onFoldingStrategyChanged());
          }, 3e4));
        }
        t.length > 0 && (this.rangeProvider = new O(e, t, () => this.onModelContentChanged()));
      }
      return ((this.foldingStateMemento = null), this.rangeProvider);
    }
    getFoldingModel() {
      return this.foldingModelPromise;
    }
    onModelContentChanged() {
      this.updateScheduler && (this.foldingRegionPromise && (this.foldingRegionPromise.cancel(), (this.foldingRegionPromise = null)), (this.foldingModelPromise = this.updateScheduler.trigger(() => {
        const e = this.foldingModel;
        if (!e) return null;
        const t = this.getRangeProvider(e.textModel);
        let i = (this.foldingRegionPromise = (0, n.PG)(e => t.compute(e)));
        return i.then(t => {
          if (t && i === this.foldingRegionPromise) {
            let i;
            if (this._foldingImportsByDefault && !this._currentModelHasFoldedImports) {
              const e = t.setCollapsedAllOfType(u.AD.Imports.value, !0);
              e && ((i = c.ZF.capture(this.editor)), (this._currentModelHasFoldedImports = e));
            }
            let n = this.editor.getSelections(),
              o = n ? n.map(e => e.startLineNumber) : [];
            (e.update(t, o), i && i.restore(this.editor));
          }
          return e;
        });
      }).then(void 0, e => ((0, o.dL)(e), null))));
    }
    onHiddenRangesChanges(e) {
      if (this.hiddenRangeModel && e.length && !this._restoringViewState) {
        let e = this.editor.getSelections();
        e && this.hiddenRangeModel.adjustSelections(e) && this.editor.setSelections(e);
      }
      this.editor.setHiddenAreas(e);
    }
    onCursorPositionChanged() {
      this.hiddenRangeModel && this.hiddenRangeModel.hasRanges() && this.cursorChangedScheduler.schedule();
    }
    revealCursor() {
      const e = this.getFoldingModel();
      e && e.then(e => {
        if (e) {
          let t = this.editor.getSelections();
          if (t && t.length > 0) {
            let i = [];
            for (let n of t) {
              let t = n.selectionStartLineNumber;
              this.hiddenRangeModel && this.hiddenRangeModel.isHidden(t) && i.push(...e.getAllRegionsAtLine(t, e => e.isCollapsed && t > e.startLineNumber));
            }
            i.length && (e.toggleCollapseState(i), this.reveal(t[0].getPosition()));
          }
        }
      }).then(void 0, o.dL);
    }
    onEditorMouseDown(e) {
      if (((this.mouseDownInfo = null), !this.hiddenRangeModel || !e.target || !e.target.range)) return;
      if (!e.event.leftButton && !e.event.middleButton) return;
      const t = e.target.range;
      let i = !1;
      switch (e.target.type) {
        case 4:
          const n = e.target.detail,
            o = e.target.element.offsetLeft;
          if (n.offsetX - o < 5) return;
          i = !0;
          break;
        case 7:
          if (this._unfoldOnClickAfterEndOfLine && this.hiddenRangeModel.hasRanges()) {
            if (!e.target.detail.isAfterLines) break;
          }
          return;
        case 6:
          if (this.hiddenRangeModel.hasRanges()) {
            let e = this.editor.getModel();
            if (e && t.startColumn === e.getLineMaxColumn(t.startLineNumber)) break;
          }
          return;
        default:
          return;
      }
      this.mouseDownInfo = {
        lineNumber: t.startLineNumber,
        iconClicked: i
      };
    }
    onEditorMouseUp(e) {
      const t = this.getFoldingModel();
      if (!t || !this.mouseDownInfo || !e.target) return;
      let i = this.mouseDownInfo.lineNumber,
        n = this.mouseDownInfo.iconClicked,
        s = e.target.range;
      if (s && s.startLineNumber === i) {
        if (n) {
          if (4 !== e.target.type) return;
        } else {
          let e = this.editor.getModel();
          if (!e || s.startColumn !== e.getLineMaxColumn(i)) return;
        }
        t.then(t => {
          if (t) {
            let o = t.getRegionAtLine(i);
            if (o && o.startLineNumber === i) {
              let s = o.isCollapsed;
              if (n || s) {
                let n = [];
                if (e.event.altKey) {
                  let e = e => !e.containedBy(o) && !o.containedBy(e),
                    i = t.getRegionsInside(null, e);
                  for (const e of i) e.isCollapsed && n.push(e);
                  0 === n.length && (n = i);
                } else {
                  let i = e.event.middleButton || e.event.shiftKey;
                  if (i) for (const e of t.getRegionsInside(o)) e.isCollapsed === s && n.push(e);
                  (!s && i && 0 !== n.length) || n.push(o);
                }
                (t.toggleCollapseState(n), this.reveal({
                  lineNumber: i,
                  column: 1
                }));
              }
            }
          }
        }).then(void 0, o.dL);
      }
    }
    reveal(e) {
      this.editor.revealPositionInCenterIfOutsideViewport(e, 0);
    }
  };
  ((Q.ID = "editor.contrib.folding"), (Q = Z([G(1, W.i6)], Q)));
  class X extends d.R6 {
    runEditorCommand(e, t, i) {
      let n = Q.get(t);
      if (!n) return;
      let o = n.getFoldingModel();
      return o ? (this.reportTelemetry(e, t), o.then(e => {
        if (e) {
          this.invoke(n, e, t, i);
          const o = t.getSelection();
          o && n.reveal(o.getStartPosition());
        }
      })) : void 0;
    }
    getSelectedLines(e) {
      let t = e.getSelections();
      return t ? t.map(e => e.startLineNumber) : [];
    }
    getLineNumbers(e, t) {
      return e && e.selectionLines ? e.selectionLines.map(e => e + 1) : this.getSelectedLines(t);
    }
    run(e, t) {}
  }
  function J(e) {
    if (!l.o8(e)) {
      if (!l.Kn(e)) return !1;
      const t = e;
      if (!l.o8(t.levels) && !l.hj(t.levels)) return !1;
      if (!l.o8(t.direction) && !l.HD(t.direction)) return !1;
      if (!(l.o8(t.selectionLines) || (l.kJ(t.selectionLines) && t.selectionLines.every(l.hj)))) return !1;
    }
    return !0;
  }
  class ee extends X {
    getFoldingLevel() {
      return parseInt(this.id.substr(ee.ID_PREFIX.length));
    }
    invoke(e, t, i) {
      !(function (e, t, i, n) {
        let o = e.getRegionsInside(null, (e, o) => o === t && e.isCollapsed !== i && !n.some(t => e.containsLine(t)));
        e.toggleCollapseState(o);
      })(t, this.getFoldingLevel(), !0, this.getSelectedLines(i));
    }
  }
  ((ee.ID_PREFIX = "editor.foldLevel"), (ee.ID = e => ee.ID_PREFIX + e));
  ((0, d._K)(Q.ID, Q), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.unfold",
        label: V.N("unfoldAction.label", "Unfold"),
        alias: "Unfold",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: 3161,
          mac: {
            primary: 2649
          },
          weight: 100
        },
        description: {
          description: "Unfold the content in the editor",
          args: [{
            name: "Unfold editor argument",
            description: "Property-value pairs that can be passed through this argument:\n\t\t\t\t\t\t* 'levels': Number of levels to unfold. If not set, defaults to 1.\n\t\t\t\t\t\t* 'direction': If 'up', unfold given number of levels up otherwise unfolds down.\n\t\t\t\t\t\t* 'selectionLines': The start lines (0-based) of the editor selections to apply the unfold action to. If not set, the active selection(s) will be used.\n\t\t\t\t\t\t",
            constraint: J,
            schema: {
              type: "object",
              properties: {
                levels: {
                  type: "number",
                  default: 1
                },
                direction: {
                  type: "string",
                  enum: ["up", "down"],
                  default: "down"
                },
                selectionLines: {
                  type: "array",
                  items: {
                    type: "number"
                  }
                }
              }
            }
          }]
        }
      });
    }
    invoke(e, t, i, n) {
      let o = (n && n.levels) || 1,
        s = this.getLineNumbers(n, i);
      n && "up" === n.direction ? y(t, !1, o, s) : w(t, !1, o, s);
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.unfoldRecursively",
        label: V.N("unFoldRecursivelyAction.label", "Unfold Recursively"),
        alias: "Unfold Recursively",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2137),
          weight: 100
        }
      });
    }
    invoke(e, t, i, n) {
      w(t, !1, Number.MAX_VALUE, this.getSelectedLines(i));
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.fold",
        label: V.N("foldAction.label", "Fold"),
        alias: "Fold",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: 3159,
          mac: {
            primary: 2647
          },
          weight: 100
        },
        description: {
          description: "Fold the content in the editor",
          args: [{
            name: "Fold editor argument",
            description: "Property-value pairs that can be passed through this argument:\n\t\t\t\t\t\t\t* 'levels': Number of levels to fold.\n\t\t\t\t\t\t\t* 'direction': If 'up', folds given number of levels up otherwise folds down.\n\t\t\t\t\t\t\t* 'selectionLines': The start lines (0-based) of the editor selections to apply the fold action to. If not set, the active selection(s) will be used.\n\t\t\t\t\t\t\tIf no levels or direction is set, folds the region at the locations or if already collapsed, the first uncollapsed parent instead.\n\t\t\t\t\t\t",
            constraint: J,
            schema: {
              type: "object",
              properties: {
                levels: {
                  type: "number"
                },
                direction: {
                  type: "string",
                  enum: ["up", "down"]
                },
                selectionLines: {
                  type: "array",
                  items: {
                    type: "number"
                  }
                }
              }
            }
          }]
        }
      });
    }
    invoke(e, t, i, n) {
      let o = this.getLineNumbers(n, i);
      const s = n && n.levels,
        r = n && n.direction;
      "number" != typeof s && "string" != typeof r ? (function (e, t, i) {
        let n = [];
        for (let o of i) {
          let i = e.getAllRegionsAtLine(o, e => e.isCollapsed !== t);
          i.length > 0 && n.push(i[0]);
        }
        e.toggleCollapseState(n);
      })(t, !0, o) : "up" === r ? y(t, !0, s || 1, o) : w(t, !0, s || 1, o);
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.foldRecursively",
        label: V.N("foldRecursivelyAction.label", "Fold Recursively"),
        alias: "Fold Recursively",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2135),
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      let n = this.getSelectedLines(i);
      w(t, !0, Number.MAX_VALUE, n);
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.foldAll",
        label: V.N("foldAllAction.label", "Fold All"),
        alias: "Fold All",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2069),
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      w(t, !0);
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.unfoldAll",
        label: V.N("unfoldAllAction.label", "Unfold All"),
        alias: "Unfold All",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2088),
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      w(t, !1);
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.foldAllBlockComments",
        label: V.N("foldAllBlockComments.label", "Fold All Block Comments"),
        alias: "Fold All Block Comments",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2133),
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      if (t.regions.hasTypes()) S(t, u.AD.Comment.value, !0);else {
        const e = i.getModel();
        if (!e) return;
        const n = g.zu.getComments(e.getLanguageId());
        if (n && n.blockCommentStartToken) {
          x(t, new RegExp("^\\s*" + (0, a.ec)(n.blockCommentStartToken)), !0);
        }
      }
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.foldAllMarkerRegions",
        label: V.N("foldAllMarkerRegions.label", "Fold All Regions"),
        alias: "Fold All Regions",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2077),
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      if (t.regions.hasTypes()) S(t, u.AD.Region.value, !0);else {
        const e = i.getModel();
        if (!e) return;
        const n = g.zu.getFoldingRules(e.getLanguageId());
        if (n && n.markers && n.markers.start) {
          x(t, new RegExp(n.markers.start), !0);
        }
      }
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.unfoldAllMarkerRegions",
        label: V.N("unfoldAllMarkerRegions.label", "Unfold All Regions"),
        alias: "Unfold All Regions",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2078),
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      if (t.regions.hasTypes()) S(t, u.AD.Region.value, !1);else {
        const e = i.getModel();
        if (!e) return;
        const n = g.zu.getFoldingRules(e.getLanguageId());
        if (n && n.markers && n.markers.start) {
          x(t, new RegExp(n.markers.start), !1);
        }
      }
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.foldAllExcept",
        label: V.N("foldAllExcept.label", "Fold All Regions Except Selected"),
        alias: "Fold All Regions Except Selected",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2131),
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      C(t, !0, this.getSelectedLines(i));
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.unfoldAllExcept",
        label: V.N("unfoldAllExcept.label", "Unfold All Regions Except Selected"),
        alias: "Unfold All Regions Except Selected",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2129),
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      C(t, !1, this.getSelectedLines(i));
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.toggleFold",
        label: V.N("toggleFoldAction.label", "Toggle Fold"),
        alias: "Toggle Fold",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2090),
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      !(function (e, t, i) {
        let n = [];
        for (let o of i) {
          let i = e.getRegionAtLine(o);
          if (i) {
            const o = !i.isCollapsed;
            if ((n.push(i), t > 1)) {
              let s = e.getRegionsInside(i, (e, i) => e.isCollapsed !== o && i < t);
              n.push(...s);
            }
          }
        }
        e.toggleCollapseState(n);
      })(t, 1, this.getSelectedLines(i));
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.gotoParentFold",
        label: V.N("gotoParentFold.label", "Go to Parent Fold"),
        alias: "Go to Parent Fold",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      let n = this.getSelectedLines(i);
      if (n.length > 0) {
        let e = (function (e, t) {
          let i = null,
            n = t.getRegionAtLine(e);
          if (null !== n && ((i = n.startLineNumber), e === i)) {
            let e = n.parentIndex;
            i = -1 !== e ? t.regions.getStartLineNumber(e) : null;
          }
          return i;
        })(n[0], t);
        null !== e && i.setSelection({
          startLineNumber: e,
          startColumn: 1,
          endLineNumber: e,
          endColumn: 1
        });
      }
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.gotoPreviousFold",
        label: V.N("gotoPreviousFold.label", "Go to Previous Folding Range"),
        alias: "Go to Previous Folding Range",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      let n = this.getSelectedLines(i);
      if (n.length > 0) {
        let e = (function (e, t) {
          let i = t.getRegionAtLine(e);
          if (null !== i && i.startLineNumber === e) {
            if (e !== i.startLineNumber) return i.startLineNumber;
            {
              let e = i.parentIndex,
                n = 0;
              for (-1 !== e && (n = t.regions.getStartLineNumber(i.parentIndex)); null !== i;) {
                if (!(i.regionIndex > 0)) return null;
                if (((i = t.regions.toRegion(i.regionIndex - 1)), i.startLineNumber <= n)) return null;
                if (i.parentIndex === e) return i.startLineNumber;
              }
            }
          } else if (t.regions.length > 0) for (i = t.regions.toRegion(t.regions.length - 1); null !== i;) {
            if (i.startLineNumber < e) return i.startLineNumber;
            i = i.regionIndex > 0 ? t.regions.toRegion(i.regionIndex - 1) : null;
          }
          return null;
        })(n[0], t);
        null !== e && i.setSelection({
          startLineNumber: e,
          startColumn: 1,
          endLineNumber: e,
          endColumn: 1
        });
      }
    }
  }), (0, d.Qr)(class extends X {
    constructor() {
      super({
        id: "editor.gotoNextFold",
        label: V.N("gotoNextFold.label", "Go to Next Folding Range"),
        alias: "Go to Next Folding Range",
        precondition: Y,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          weight: 100
        }
      });
    }
    invoke(e, t, i) {
      let n = this.getSelectedLines(i);
      if (n.length > 0) {
        let e = (function (e, t) {
          let i = t.getRegionAtLine(e);
          if (null !== i && i.startLineNumber === e) {
            let e = i.parentIndex,
              n = 0;
            if (-1 !== e) n = t.regions.getEndLineNumber(i.parentIndex);else {
              if (0 === t.regions.length) return null;
              n = t.regions.getEndLineNumber(t.regions.length - 1);
            }
            for (; null !== i;) {
              if (!(i.regionIndex < t.regions.length)) return null;
              if (((i = t.regions.toRegion(i.regionIndex + 1)), i.startLineNumber >= n)) return null;
              if (i.parentIndex === e) return i.startLineNumber;
            }
          } else if (t.regions.length > 0) for (i = t.regions.toRegion(0); null !== i;) {
            if (i.startLineNumber > e) return i.startLineNumber;
            i = i.regionIndex < t.regions.length ? t.regions.toRegion(i.regionIndex + 1) : null;
          }
          return null;
        })(n[0], t);
        null !== e && i.setSelection({
          startLineNumber: e,
          startColumn: 1,
          endLineNumber: e,
          endColumn: 1
        });
      }
    }
  }));
  for (let e = 1; e <= 7; e++) (0, d.QG)(new ee({
    id: ee.ID(e),
    label: V.N("foldLevelAction.label", "Fold Level {0}", e),
    alias: `Fold Level ${e}`,
    precondition: Y,
    kbOpts: {
      kbExpr: h.u.editorTextFocus,
      primary: (0, s.gx)(2089, 2048 | (21 + e)),
      weight: 100
    }
  }));
  const te = (0, H.P6)("editor.foldBackground", {
      light: (0, H.Zn)(H.hE, 0.3),
      dark: (0, H.Zn)(H.hE, 0.3),
      hc: null
    }, V.N("foldBackgroundBackground", "Background color behind folded ranges. The color must not be opaque so as not to hide underlying decorations."), !0),
    ie = (0, H.P6)("editorGutter.foldingControlForeground", {
      dark: H.XZ,
      light: H.XZ,
      hc: H.XZ
    }, V.N("editorGutter.foldingControlForeground", "Color of the folding control in the editor gutter."));
  (0, z.Ic)((e, t) => {
    const i = e.getColor(te);
    i && t.addRule(`.monaco-editor .folded-background { background-color: ${i}; }`);
    const n = e.getColor(ie);
    n && t.addRule(`\n\t\t.monaco-editor .cldr${z.kS.asCSSSelector($)},\n\t\t.monaco-editor .cldr${z.kS.asCSSSelector(K)} {\n\t\t\tcolor: ${n} !important;\n\t\t}\n\t\t`);
  });
};