"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Default';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "greeting",
        value: function greeting() {
            return "Welcome " + this.name;
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return this.name + " is " + this.age + " year(s) old.";
        }
    }]);

    return Person;
}();

var person = new Person("Mark", 45);
console.log(person.greeting());
console.log(person.getDescription());

var other = new Person();
console.log(other.greeting());
console.log(other.getDescription());

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: "hasMajor",
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "getDescription", this).call(this);
            if (this.hasMajor()) {
                description += " Major is " + this.major;
            }
            return description;
        }
    }]);

    return Student;
}(Person);

var student = new Student("Jimmy", 32, "Computer Science");

console.log(student.getDescription());

var billy = new Student("Billy", 32);
console.log(billy.getDescription());

var Traveller = function (_Person2) {
    _inherits(Traveller, _Person2);

    function Traveller(name, age, homeLocation) {
        _classCallCheck(this, Traveller);

        var _this2 = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveller, [{
        key: "greeting",
        value: function greeting() {
            var greeting = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), "greeting", this).call(this);
            if (this.hasHomeLocation()) {
                greeting += " comes from " + this.homeLocation;
            }
            return greeting;
        }
    }, {
        key: "hasHomeLocation",
        value: function hasHomeLocation() {
            return !!this.homeLocation;
        }
    }]);

    return Traveller;
}(Person);

var traveller = new Traveller("Jimmy", 12, "Kampala Mukadde");
console.log(traveller.greeting());
var traveller2 = new Traveller("Kassode", 2);
console.log(traveller2.greeting());
