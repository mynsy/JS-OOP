const _items = new WeakMap()
class Stack {
  constructor() {
    _items.set(this, [])
  }
  push(value) {
    _items.get(this).push(value)
  }
  pop() {
    const items = _items.get(this)

    if (items.length <= 0) 
      throw Error("count is empty")
    
    return items.pop()
  }
  peek() {
    const items = _items.get(this)

    if (items.length <= 0) 
      throw Error("count is empty")
      
    return items
  }
  get count () {
    return _items.get(this).length
  }
}

const s = new Stack()