const _radius = new WeakMap()

// 当在Circle类前面加上关键字 export
// 这个类就向外公布了
// 别的文件引入当前模块后，就可以访问到Circle类了
export class Circle {
  constructor(radius) {
    _radius.set(this, radius)
  }

  draw() {
    console.log('circle radius is: ' + _radius.get(this))
  }
}