// 抽象
function Circle(radius) {
  let color = "red";
  this.radius = radius;
  this.defaultLocation = { x: 1, y: 2 }; // 不应该被外部访问的属性
  // 不应该被外部调用的方法
  this.computeOptimunLocation = function() {
    // todo something
  };
  this.draw = function() {
    this.computeOptimunLocation();
    console.log("draw");
  };
}
let circle = new Circle(10);

// 私有对象的属性和方法-使用本地变量
function Circle2(radius) {
  this.radius = radius;
  // 不应该被外部访问的属性-本地变量
  let defaultLocation = { x: 1, y: 2 };
  // 不应该被外部调用的方法-本地变量
  let computeOptimunLocation = function() {
    // todo something
  };
  this.draw = function() {
    computeOptimunLocation();
    console.log("draw");
  };
}
let circle2 = new Circle2(10);

// 访问构造函数里的本地变量
function Circle3(radius) {
  this.radius = radius;
  // 不应该被外部访问的属性-本地变量
  let defaultLocation = { x: 1, y: 2 };

  // 提供方法，让外部读取本地变量
  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    computeOptimunLocation();
    console.log("draw");
  };
}
let circle3 = new Circle3(10);
console.log(circle3.getDefaultLocation()); // 读取本地变量

// 但是不想使用方法的方式，想像访问属性一样直接访问

// getter 和 setter
function Circle4(radius) {
  this.radius = radius;
  // 不应该被外部访问的属性-本地变量
  let defaultLocation = { x: 1, y: 2 };
  this.draw = function() {
    computeOptimunLocation();
    console.log("draw");
  };
  // 通过defineProperty方法设置
  Object.defineProperty(this, "defaultLocation", {
    // 当通过对象.defaultLocation访问时，这个get方法就会被调用
    get: function() {
      return defaultLocation;
    },
    // 设置值，因为这里使用了方法，那么就可以在设置的时候，
    // 做一些值验证
    set: function(value) {
      if (!value.x || !value.y) throw new Error("Invalid location");
      defaultLocation = value;
    }
  });
}

let circle4 = new Circle4(10);
// 现在就可以直接访问构造函数里的本地方法了
// defaultLocation 是一个实时演算的值
console.log(circle4.defaultLocation);

// 设置值
circle4.defaultLocation = { x: 2, y: 1 };
console.log(circle4.defaultLocation);

// exercise
function Switch() {
  let duration = 0;
  let running = false;
  let startTime = null;
  let endTime = null;

  this.start = function() {
    if (running) throw new Error("start is started");
    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error("stop is started");
    running = false;
    endTime = new Date();

    let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    duration = 0;
    running = false;
    startTime = null;
    endTime = null;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
