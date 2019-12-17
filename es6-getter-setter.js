// ES6 中的getter 和setter

const _radius = new WeakMap()

class Circle {
  constructor(radius) {
    _radius.set(this, radius)
    // 外部读取私有属性
    Object.defineProperty(this, 'radius', {
      get() {
        return _radius.get(this)
      }
    })
  }

  // 外部读取私有属性
  getRadius() {
    return _radius.get(this)
  }

  // ES6 getter 写法，与：Object.defineProperty 一致
  // 使用：c.radius2
  get radius2() {
    return _radius.get(this)
  }
  // ES6 setter 写法，使用：c.radius2 = 2
  set radius2(value) {
    _radius.set(this, value)
  }
}

const c = new Circle(1)