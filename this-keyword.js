// 创建一个构造函数
const Circle = function() {
  this.draw = function() {
      console.log(this)
  }
}

const c = new Circle()
c.draw() // this -> Circle {draw: ƒ}

// 换个方式调用
const draw = c.draw // 注意是赋值，没有()调用
draw() // this -> Window {parent: Window, postMessage: ƒ, close: ƒ, …}


class Square {
  draw() {
    console.log(this)
  }
}

const s = new Square()
s.draw() // this -> Square {}

const draw2 = s.draw
draw2() // this -> undefined