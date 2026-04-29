module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    T: () => o,
    o: () => s
  });
  var n = i(85427);
  class o {
    constructor(e, t) {
      ((this._prefixSumIndexOfResultBrand = void 0), (this.index = e), (this.remainder = t));
    }
  }
  class s {
    constructor(e) {
      ((this.values = e), (this.prefixSum = new Uint32Array(e.length)), (this.prefixSumValidIndex = new Int32Array(1)), (this.prefixSumValidIndex[0] = -1));
    }
    insertValues(e, t) {
      e = (0, n.A)(e);
      const i = this.values,
        o = this.prefixSum,
        s = t.length;
      return (0 !== s && ((this.values = new Uint32Array(i.length + s)), this.values.set(i.subarray(0, e), 0), this.values.set(i.subarray(e), e + s), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), (this.prefixSum = new Uint32Array(this.values.length)), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(o.subarray(0, this.prefixSumValidIndex[0] + 1)), !0));
    }
    changeValue(e, t) {
      return ((e = (0, n.A)(e)), (t = (0, n.A)(t)), this.values[e] !== t && ((this.values[e] = t), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0));
    }
    removeValues(e, t) {
      ((e = (0, n.A)(e)), (t = (0, n.A)(t)));
      const i = this.values,
        o = this.prefixSum;
      if (e >= i.length) return !1;
      let s = i.length - e;
      return (t >= s && (t = s), 0 !== t && ((this.values = new Uint32Array(i.length - t)), this.values.set(i.subarray(0, e), 0), this.values.set(i.subarray(e + t), e), (this.prefixSum = new Uint32Array(this.values.length)), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(o.subarray(0, this.prefixSumValidIndex[0] + 1)), !0));
    }
    getTotalSum() {
      return 0 === this.values.length ? 0 : this._getPrefixSum(this.values.length - 1);
    }
    getPrefixSum(e) {
      return e < 0 ? 0 : ((e = (0, n.A)(e)), this._getPrefixSum(e));
    }
    _getPrefixSum(e) {
      if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
      let t = this.prefixSumValidIndex[0] + 1;
      (0 === t && ((this.prefixSum[0] = this.values[0]), t++), e >= this.values.length && (e = this.values.length - 1));
      for (let i = t; i <= e; i++) this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
      return ((this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e)), this.prefixSum[e]);
    }
    getIndexOf(e) {
      ((e = Math.floor(e)), this.getTotalSum());
      let t = 0,
        i = this.values.length - 1,
        n = 0,
        s = 0,
        r = 0;
      for (; t <= i;) if (((n = (t + (i - t) / 2) | 0), (s = this.prefixSum[n]), (r = s - this.values[n]), e < r)) i = n - 1;else {
        if (!(e >= s)) break;
        t = n + 1;
      }
      return new o(n, e - r);
    }
  }
};