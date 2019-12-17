// 使用symbol创建私有属性
let _radius = Symbol()
let _draw = Symbol()

class Circle {
  constructor(radius) {
    this[_radius] = radius
    // this[Symbol()] = radius
  }
  // 私有化方法
  // ES6有一个新特性，就是可以计算生产属性名称，
  // 在方括号里面，写一个表达式
  // 当这个表达式可以计算出结果
  // 这个结果就会被设置成属性或者方法的名称
  // 传入`_draw`，这个表达式就是Symbol，并且可以得到值
  // 得到的是一个唯一值
  [_draw]() {

  }
}

let c = new Circle(1)
c._radius

console.log(Object.getOwnPropertyNames(c)) // []
console.log(Object.getOwnPropertySymbols(c)) // [Symbol()]

console.log(c[Object.getOwnPropertySymbols(c)[0]]) // 1