class Person{
    constructor(name = 'Default', age = 0){
        this.name = name;
        this.age = age;
    }
    
    greeting(){
        return `Welcome ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const person = new Person("Mark", 45); 
console.log(person.greeting());
console.log(person.getDescription());


const other = new Person(); 
console.log(other.greeting());
console.log(other.getDescription());

class Student extends Person {

    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Major is ${this.major}`;
        }
        return description;
    }
}


const student = new Student("Jimmy",32,"Computer Science");

console.log(student.getDescription());

const billy = new Student("Billy",32);
console.log(billy.getDescription());

class Traveller extends Person {

    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    greeting(){
         let greeting = super.greeting();
        if(this.hasHomeLocation()){
            greeting += ` comes from ${this.homeLocation}`;
        }
        return greeting;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }
}

const traveller = new Traveller("Jimmy",12,"Kampala Mukadde");
console.log(traveller.greeting());
const traveller2 = new Traveller("Kassode",2);
console.log(traveller2.greeting());