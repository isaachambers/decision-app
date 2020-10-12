
//Use of the  babel-plugin-transform-class-properties to transform claa properties to avoid binding methods all the time.
class Old {
    constructor() {
        this.name = "ben"
        this.greeting = this.greeting.bind(this)
    }

    greeting() {
        return `Hello ${this.name}`
    }
}

const old = new Old();
const oldGreeting = old.greeting
console.log(oldGreeting())

class New {
    name = "mike"
    greeting = () => {
        return `Hello ${this.name}`
    }
}

const newNew = new New();
const newGreeting = newNew.greeting
console.log(newGreeting())