var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phone, state, zipcode, occupation, hourlyWage, hours) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
        this.state = state;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if (hours) {
            this.hours = hours;
        }
        else {
            this.hours = 40;
        }
    }
    //getters
    Person.prototype.getFullName = function () {
        return "Full Name: " + this.firstName + " " + this.lastName;
    };
    Person.prototype.setFullName = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    Person.prototype.getNameAndPhone = function () {
        return this.getFullName() +
            "\nPhone Number: " + this.phone;
    };
    Person.prototype.getLocation = function () {
        return this.getFullName() + " lives in the state of " + this.state + " within the zipcode of " + this.zipcode;
    };
    Person.prototype.getOccupation = function () {
        return this.getFullName() + " works as a " + this.occupation + " at age " + this.age;
    };
    Person.prototype.weeklyWage = function (wage) {
        wage = this.hourlyWage * this.hours;
        return wage;
    };
    Person.prototype.personInfo = function () {
        return this.getFullName() + " makes $" + this.weeklyWage() + " per Week!";
    };
    Person.prototype.addCerts = function () {
        var certs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certs[_i] = arguments[_i];
        }
        for (var i = 0; i < certs.length; i++) {
            this.degrees.push(certs[i]);
        }
    };
    Person.newPerson = function (config) {
        var newPerson = {
            age: "30",
            phone: "K-000"
        };
        if (config.age) {
            newPerson.age = config.age;
        }
        if (config.phone) {
            newPerson.phone = config.phone;
        }
        return newPerson;
    };
    return Person;
}());
var person0 = Person.newPerson({ firstName: "George", lastName: "Bergs", age: "23", phone: "K098" });
console.log(person0);
var person1 = new Person("John", "Carter", "25", "K-589", "New York", "12345", "Logger", 34);
var person2 = new Person("Miley", "Cyrus", "67", "K-674", "Florida", "84598", "Dancer", 78);
var person3 = new Person("Carl", "Johnson", "46", "K-902", "California", "84698", "Driver", 68);
var person4 = new Person("All", "Might", "56", "K-555", "Tokyo", "84762", "Symbol of Peace", 1000);
document.getElementById("id1").innerHTML = person1.getFullName();
document.getElementById("id2").innerHTML = person2.getLocation();
document.getElementById("id3").innerHTML = person3.getNameAndPhone();
document.getElementById("id4").innerHTML = person4.getOccupation();
document.getElementById("id5").innerHTML = person3.personInfo();
