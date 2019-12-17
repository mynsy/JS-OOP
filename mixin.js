function mixin (target, ...source) {
  return Object.assign(target, ...source)
}

const canEat = {
  eat() {
    this.hunger--
    console.log('eating...')
  }
}

const canWalk = {
  walk() {
    console.log('walking...')
  }
}

let person = mixin({}, canEat, canWalk)
console.log(person)

function Person() {}
mixin(Person.prototype, canEat, canWalk)
let person2 = new Person()
console.log(person2)

const canSwim = {
  swim () {
    console.log('swiming...')
  }
}

let goldfish = mixin({}, canSwim, canEat)
let duck = mixin({}, canSwim, canEat, canWalk)