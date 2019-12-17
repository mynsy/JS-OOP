
// 使用require函数，这个函数是CommonJS中的
// 所以，CommonJS定义了require函数和module对象
// require函数，需要传入一个相对路径
// 文件名无需添加.js后缀，默认情况下自动会加上
// 当使用require这个函数，就得到了对应模块的对象
// 所以，require调用的模块和exports公开的对象时一样的
const Circle = require('./commonjs-module-circle')

const c = new Circle(1)
c.draw()
