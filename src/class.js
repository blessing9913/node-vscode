/* eslint-disable */

class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    return `Hi, ${this.name}.`
  }
}

class Student extends Person {
  constructor(name) {
    super(name)
  }

  study() {
    return `${this.name} is studying.`
  }
}

const me = new Student('Edmund')
console.log(me.greet())
console.log(me.study())
