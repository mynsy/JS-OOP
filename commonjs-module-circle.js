// 实现细节 Implementation Detail
const _radius = new WeakMap()

// 公共接口 Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius)
  }

  draw() {
    console.log('circle radius is: ' + _radius.get(this))
  }
}

// module：Node 中的关键字
// 也就是引用当前模块
// exports 属性，它是一个对象
// 可以向它添加一个或多个属性
// 这里我们添加Circle属性，值为Circle类

// module.exports.Circle = Circle
// 导入模块得到一个对象，对象里有Circle属性，值为Circle类

// 如果只导出一个属性，可以简写
module.exports = Circle
// 简写后导入模块就得到一个Circle类

// 如果有多个类需要公开，也可以这样做：
// module.exports.Circle = Circle
// module.exports.Square = Square