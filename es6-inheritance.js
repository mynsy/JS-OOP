// ES6 中的继承

class Shape {
  constructor(color) {
    this.color = color
  }
  move () {
    console.log('move...')
  }
}

class Circle extends Shape {
  // 父类有constructor，子类没有，没问题

  // 父类有constructor，子类也有，但是没有调用super方法
  // 报错：在访问this之前，在子类中必须调用super方法，或在子类构造器中返回
  // 什么意思？
  // 就是：如果在父类中有一个构造器，然后在子类中又想添加一个构造器
  // 那么在子类中就必须先调用父类的构造器，以创建一个父类实例
  // constructor() {}

  // 正确的写法
  constructor(color, radius) {
    super(color)
    this.radius = radius
  }
  draw() {
    console.log('draw...')
  }
}

const c = new Circle('red', 1)

