// 使用WeakMap来创建私有属性
const _radius = new WeakMap()
const _move = new WeakMap()

class Circle {
  constructor(radius) {
    // 私有属性
    _radius.set(this, radius)

    // 私有方法
    // _move.set(this, function() {
    //   console.log('move', this) // move undefined
    // })
    // 私有方法
    _move.set(this, () => {
      console.log('move', this) // move Circle {}
    })
  }
  draw() {
    // 在类中访问方法
    _move.get(this)()
    // 在类中访问属性
    console.log(_radius.get(this))
  }
}

let c = new Circle(1)