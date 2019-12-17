function HtmlElement() {
  this.click = function() {
    console.log('click')
  }
}

HtmlElement.prototype.focus = function() {
  console.log('focus')
}

function HtmlSelectElement() {
  this.items = [],
  this.addItem = function(item) {
    this.items.push(item)
  }
  this.removeItem = function(item) {
    this.items = this.items.filter(i => i !== item)
  }
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype)
HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

/*
为什么不使用：
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype)
因为如果这样写，继承的就是HtmlElementBase，
继承的就是对象的原型，就没有对象实例的click方法了
*/