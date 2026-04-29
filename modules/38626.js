module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    X: () => o,
    Z: () => n
  });
  class n {
    constructor(e) {
      ((this.domNode = e), (this._maxWidth = -1), (this._width = -1), (this._height = -1), (this._top = -1), (this._left = -1), (this._bottom = -1), (this._right = -1), (this._fontFamily = ""), (this._fontWeight = ""), (this._fontSize = -1), (this._fontFeatureSettings = ""), (this._lineHeight = -1), (this._letterSpacing = -100), (this._className = ""), (this._display = ""), (this._position = ""), (this._visibility = ""), (this._backgroundColor = ""), (this._layerHint = !1), (this._contain = "none"), (this._boxShadow = ""));
    }
    setMaxWidth(e) {
      this._maxWidth !== e && ((this._maxWidth = e), (this.domNode.style.maxWidth = this._maxWidth + "px"));
    }
    setWidth(e) {
      this._width !== e && ((this._width = e), (this.domNode.style.width = this._width + "px"));
    }
    setHeight(e) {
      this._height !== e && ((this._height = e), (this.domNode.style.height = this._height + "px"));
    }
    setTop(e) {
      this._top !== e && ((this._top = e), (this.domNode.style.top = this._top + "px"));
    }
    unsetTop() {
      -1 !== this._top && ((this._top = -1), (this.domNode.style.top = ""));
    }
    setLeft(e) {
      this._left !== e && ((this._left = e), (this.domNode.style.left = this._left + "px"));
    }
    setBottom(e) {
      this._bottom !== e && ((this._bottom = e), (this.domNode.style.bottom = this._bottom + "px"));
    }
    setRight(e) {
      this._right !== e && ((this._right = e), (this.domNode.style.right = this._right + "px"));
    }
    setFontFamily(e) {
      this._fontFamily !== e && ((this._fontFamily = e), (this.domNode.style.fontFamily = this._fontFamily));
    }
    setFontWeight(e) {
      this._fontWeight !== e && ((this._fontWeight = e), (this.domNode.style.fontWeight = this._fontWeight));
    }
    setFontSize(e) {
      this._fontSize !== e && ((this._fontSize = e), (this.domNode.style.fontSize = this._fontSize + "px"));
    }
    setFontFeatureSettings(e) {
      this._fontFeatureSettings !== e && ((this._fontFeatureSettings = e), (this.domNode.style.fontFeatureSettings = this._fontFeatureSettings));
    }
    setLineHeight(e) {
      this._lineHeight !== e && ((this._lineHeight = e), (this.domNode.style.lineHeight = this._lineHeight + "px"));
    }
    setLetterSpacing(e) {
      this._letterSpacing !== e && ((this._letterSpacing = e), (this.domNode.style.letterSpacing = this._letterSpacing + "px"));
    }
    setClassName(e) {
      this._className !== e && ((this._className = e), (this.domNode.className = this._className));
    }
    toggleClassName(e, t) {
      (this.domNode.classList.toggle(e, t), (this._className = this.domNode.className));
    }
    setDisplay(e) {
      this._display !== e && ((this._display = e), (this.domNode.style.display = this._display));
    }
    setPosition(e) {
      this._position !== e && ((this._position = e), (this.domNode.style.position = this._position));
    }
    setVisibility(e) {
      this._visibility !== e && ((this._visibility = e), (this.domNode.style.visibility = this._visibility));
    }
    setBackgroundColor(e) {
      this._backgroundColor !== e && ((this._backgroundColor = e), (this.domNode.style.backgroundColor = this._backgroundColor));
    }
    setLayerHinting(e) {
      this._layerHint !== e && ((this._layerHint = e), (this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : ""));
    }
    setBoxShadow(e) {
      this._boxShadow !== e && ((this._boxShadow = e), (this.domNode.style.boxShadow = e));
    }
    setContain(e) {
      this._contain !== e && ((this._contain = e), (this.domNode.style.contain = this._contain));
    }
    setAttribute(e, t) {
      this.domNode.setAttribute(e, t);
    }
    removeAttribute(e) {
      this.domNode.removeAttribute(e);
    }
    appendChild(e) {
      this.domNode.appendChild(e.domNode);
    }
    removeChild(e) {
      this.domNode.removeChild(e.domNode);
    }
  }
  function o(e) {
    return new n(e);
  }
};