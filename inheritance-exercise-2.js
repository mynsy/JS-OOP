function HtmlElement() {
  this.click = function() {
    console.log('click')
  }
}

HtmlElement.prototype.focus = function() {
  console.log('focus')
}

function HtmlSelectElement(items=[]) {
  this.items = items,
  this.addItem = function(item) {
    this.items.push(item)
  }
  this.removeItem = function(item) {
    this.items = this.items.filter(i => i !== item)
  }

  this.render = function() {
    return `
<select>${this.items.map(i => `
  <option>${i}</option>`).join('')}
</select>`
  }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

function HtmlImgElement(src) {
  this.src = src
  this.render = function() {
    return `<img src="${this.src}" />`
  }
}

HtmlImgElement.prototype = new HtmlElement()
HtmlImgElement.prototype.constructor = HtmlImgElement

