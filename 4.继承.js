let z = {};
let y = {};

// Object.getPrototypeOf 获取对象的原型
console.log(Object.getPrototypeOf(z) === Object.getPrototypeOf(y)); // true

// 可能会说 __proto__ 指向的是对象的原型，可不可以这样对比？
console.log(z.__proto__ === y.__proto__);

// 答案是不可以
// 因为这个属性现在已经被废弃了，具体可以看：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto


function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
}

const circle = new Circle(10)

let persion = {
  name: 'abc'
}

console.log(persion)

for (let key in persion) {
  console.log(key)
}

console.log(Object.keys(persion))

// 获取对象的原型（ES6）
let objectBase = Object.getPrototypeOf(persion)
// 获取对象的描述 (ES6)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor)

// 自定义属性的描述
Object.defineProperty(persion, 'name', {
  writable: false, // 设置为只读
  enumerable: false, // 不能枚举
})

persion.name = 'zxy'
console.log(persion) // {name: "abc"}
console.log(Object.keys(persion)) // []


// 原型和实例成员
function Circle2(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
}
const c1 = new Circle2(1)
const c2 = new Circle2(1)
// 改为：
function Circle3(radius) {
  this.radius = radius;
  this.move = function () {
    this.toString()
    console.log('move')
  }
}
Circle3.prototype.draw = function() {
  this.move()
  console.log('draw')
}
const c3 = new Circle3(1)
const c4 = new Circle3(1)

Circle3.prototype.toString = function() {
  console.log('toString')
  // 通过this来获取原型对象里的属性
  return 'Circle radius is：' + this.radius
}
