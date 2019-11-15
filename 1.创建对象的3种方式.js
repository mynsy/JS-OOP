
// 字面量方式创建对象
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2
  },
  draw: function() {
    console.log('draw')
  }
}

circle.draw()

// 工厂函数方式创建对象 factory function

function createCircle (radius) {
  return {
    radius,
    draw: function() {
      console.log('factory function')
    }
  }
}

const circle2 = createCircle(2)
circle2.draw()

// 构造函数方式创建对象 constructor

function Circle(radius) {
  console.log(this) // Circle {}
  this.radius = radius
  this.draw = function() {
    console.log('constructor')
  }
}

const circle3 = new Circle(1)
circle3.draw()

console.log(circle2.constructor)