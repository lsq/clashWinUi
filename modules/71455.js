module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    F2: () => f,
    WX: () => g,
    oQ: () => m
  });
  var n = i(17301),
    o = i(4669),
    s = i(44742),
    r = i(5976),
    a = i(43702),
    l = i(95935),
    c = i(97295),
    d = i(24314),
    h = i(63580),
    u = function (e, t, i, n) {
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
  class g {
    constructor(e, t, i, n) {
      ((this.isProviderFirst = e), (this.parent = t), (this.link = i), (this._rangeCallback = n), (this.id = s.a.nextId()));
    }
    get uri() {
      return this.link.uri;
    }
    get range() {
      var e, t;
      return null !== (t = null !== (e = this._range) && void 0 !== e ? e : this.link.targetSelectionRange) && void 0 !== t ? t : this.link.range;
    }
    set range(e) {
      ((this._range = e), this._rangeCallback(this));
    }
    get ariaMessage() {
      var e;
      const t = null === (e = this.parent.getPreview(this)) || void 0 === e ? void 0 : e.preview(this.range);
      return t ? (0, h.N)({
        key: "aria.oneReference.preview",
        comment: ["Placeholders are: 0: filename, 1:line number, 2: column number, 3: preview snippet of source code"]
      }, "symbol in {0} on line {1} at column {2}, {3}", (0, l.EZ)(this.uri), this.range.startLineNumber, this.range.startColumn, t.value) : (0, h.N)("aria.oneReference", "symbol in {0} on line {1} at column {2}", (0, l.EZ)(this.uri), this.range.startLineNumber, this.range.startColumn);
    }
  }
  class p {
    constructor(e) {
      this._modelReference = e;
    }
    dispose() {
      this._modelReference.dispose();
    }
    preview(e, t = 8) {
      const i = this._modelReference.object.textEditorModel;
      if (!i) return;
      const {
          startLineNumber: n,
          startColumn: o,
          endLineNumber: s,
          endColumn: r
        } = e,
        a = i.getWordUntilPosition({
          lineNumber: n,
          column: o - t
        }),
        l = new d.e(n, a.startColumn, n, o),
        c = new d.e(s, r, s, 1073741824),
        h = i.getValueInRange(l).replace(/^\s+/, ""),
        u = i.getValueInRange(e);
      return {
        value: h + u + i.getValueInRange(c).replace(/\s+$/, ""),
        highlight: {
          start: h.length,
          end: h.length + u.length
        }
      };
    }
  }
  class f {
    constructor(e, t) {
      ((this.parent = e), (this.uri = t), (this.children = []), (this._previews = new a.Y9()));
    }
    dispose() {
      ((0, r.B9)(this._previews.values()), this._previews.clear());
    }
    getPreview(e) {
      return this._previews.get(e.uri);
    }
    get ariaMessage() {
      const e = this.children.length;
      return 1 === e ? (0, h.N)("aria.fileReferences.1", "1 symbol in {0}, full path {1}", (0, l.EZ)(this.uri), this.uri.fsPath) : (0, h.N)("aria.fileReferences.N", "{0} symbols in {1}, full path {2}", e, (0, l.EZ)(this.uri), this.uri.fsPath);
    }
    resolve(e) {
      return u(this, void 0, void 0, function* () {
        if (0 !== this._previews.size) return this;
        for (let t of this.children) if (!this._previews.has(t.uri)) try {
          const i = yield e.createModelReference(t.uri);
          this._previews.set(t.uri, new p(i));
        } catch (e) {
          (0, n.dL)(e);
        }
        return this;
      });
    }
  }
  class m {
    constructor(e, t) {
      ((this.groups = []), (this.references = []), (this._onDidChangeReferenceRange = new o.Q5()), (this.onDidChangeReferenceRange = this._onDidChangeReferenceRange.event), (this._links = e), (this._title = t));
      const [i] = e;
      let n;
      e.sort(m._compareReferences);
      for (let t of e) if (((n && l.SF.isEqual(n.uri, t.uri, !0)) || ((n = new f(this, t.uri)), this.groups.push(n)), 0 === n.children.length || 0 !== m._compareReferences(t, n.children[n.children.length - 1]))) {
        const e = new g(i === t, n, t, e => this._onDidChangeReferenceRange.fire(e));
        (this.references.push(e), n.children.push(e));
      }
    }
    dispose() {
      ((0, r.B9)(this.groups), this._onDidChangeReferenceRange.dispose(), (this.groups.length = 0));
    }
    clone() {
      return new m(this._links, this._title);
    }
    get title() {
      return this._title;
    }
    get isEmpty() {
      return 0 === this.groups.length;
    }
    get ariaMessage() {
      return this.isEmpty ? (0, h.N)("aria.result.0", "No results found") : 1 === this.references.length ? (0, h.N)("aria.result.1", "Found 1 symbol in {0}", this.references[0].uri.fsPath) : 1 === this.groups.length ? (0, h.N)("aria.result.n1", "Found {0} symbols in {1}", this.references.length, this.groups[0].uri.fsPath) : (0, h.N)("aria.result.nm", "Found {0} symbols in {1} files", this.references.length, this.groups.length);
    }
    nextOrPreviousReference(e, t) {
      let {
          parent: i
        } = e,
        n = i.children.indexOf(e),
        o = i.children.length,
        s = i.parent.groups.length;
      return 1 === s || (t && n + 1 < o) || (!t && n > 0) ? ((n = t ? (n + 1) % o : (n + o - 1) % o), i.children[n]) : ((n = i.parent.groups.indexOf(i)), t ? ((n = (n + 1) % s), i.parent.groups[n].children[0]) : ((n = (n + s - 1) % s), i.parent.groups[n].children[i.parent.groups[n].children.length - 1]));
    }
    nearestReference(e, t) {
      const i = this.references.map((i, n) => ({
        idx: n,
        prefixLen: c.Mh(i.uri.toString(), e.toString()),
        offsetDist: 100 * Math.abs(i.range.startLineNumber - t.lineNumber) + Math.abs(i.range.startColumn - t.column)
      })).sort((e, t) => e.prefixLen > t.prefixLen ? -1 : e.prefixLen < t.prefixLen ? 1 : e.offsetDist < t.offsetDist ? -1 : e.offsetDist > t.offsetDist ? 1 : 0)[0];
      if (i) return this.references[i.idx];
    }
    referenceAt(e, t) {
      for (const i of this.references) if (i.uri.toString() === e.toString() && d.e.containsPosition(i.range, t)) return i;
    }
    firstReference() {
      for (const e of this.references) if (e.isProviderFirst) return e;
      return this.references[0];
    }
    static _compareReferences(e, t) {
      return (l.SF.compare(e.uri, t.uri) || d.e.compareRangesUsingStarts(e.range, t.range));
    }
  }
};