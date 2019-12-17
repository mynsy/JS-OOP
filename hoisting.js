
// 构造函数的方式

// function Circle() {
//   this.radius = radius
//   this.draw = function () {
//       console.log('draw')
//   }
// }

// 使用类的方式
class Circle {
  // 特殊的方法，用它来实例化对象，和构造函数一样
  constructor(radius) {
    this.radius = radius
    this.move = function() {
        console.log('move')
    }
  }
  draw() {
    console.log('draw')
  }
  static parse(str) {
    const radius = JSON.parse(str).radius
    return new Circle(radius)
  }
}

// const c = new Circle(1)
const c = Circle.parse('{"radius": 3}')