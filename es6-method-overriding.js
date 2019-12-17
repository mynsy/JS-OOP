// ES6 中的方法重写

class Shape {
  constructor() {
    this.color = 'red'
  }
  move () {
    console.log('move...')
  }
}

class Circle extends Shape {
  // 重写父类的move方法
  move() {
    // 调用父类的方法
    super.move()
    // 调用本类类体的方法
    this.draw()
    // 调用父类constructor里的属性
    console.log('move circle...', this.color)
  }
  draw() {
    console.log('draw...')
  }
}

const c = new Circle()