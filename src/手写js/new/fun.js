function Fun (name) {
  this.name = name;
  // return 1
  // return '1'
  return true
  // return null

  // err
  // return {}
  // return function () {}
  // return []
  return /w/
}
Fun.prototype.age = 'prototype age'
Fun.prototype.say = function() {
  console.log('prototype function say')
}

let f = new Fun('name')
console.log(f)
console.log(f.name)
console.log(f.age)
console.log(f.say())