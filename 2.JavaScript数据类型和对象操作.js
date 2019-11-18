// 值类型
let x = 10;
let y = x;

x = 20;
console.log(x); // 20
console.log(y); // 10

// 引用类型
let xx = { value: 10 };
let yy = xx;

xx.value = 20;

console.log(xx.value); // 20
console.log(yy.value); // 20

// 添加对象属性
let obj = {};
obj.x = 1;
// 或者
obj["x"] = 1;
// 访问对象的属性
console.log(obj.x);
console.log(obj["x"]);

// 删除对象的属性
delete obj.x;
// 或者
delete obj["x"];
console.log(obj);

// 对象的遍历

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

let circle = new Circle(10);

// 遍历 for-in
for (const key in circle) {
  console.log(key); // 得到的对象的 key
  console.log(circle[key]); // 对象的 value
  // 只想的到 属性，不想得到 方法
  if (typeof circle[key] !== "function") console.log(key, circle[key]); // radius 10
}

// 另一种方式：得到对象所有的 key，但是该方式不能区分是属性和方法
let keys = Object.keys(circle);
console.log(keys); // [ 'radius', 'draw' ]

// 判断对象中是否有给定的属性
if ("radius" in circle) console.log("circle hava radius");
