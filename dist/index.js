// QUESTION 1
// Declare an array that accepts only number and boolean values.
var numBool;
// QUESTION 2
// Declare a tuple that takes 3 values: a boolean, a string, and a number.
var tuple;
tuple = [false, "hello", 47];
// QUESTION 3
// Set the Type for the arguments and return value for this function.
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
// QUESTION 4
// Create an interface that could be used for these objects.
[
    { name: "Burt", age: 77, jobTitle: "Magician" },
    { name: "Walt", age: 11 },
    { name: "Spencer", age: 107, jobTitle: "Bus conductor" },
];
var member = {
    name: "Burt",
    age: 77,
    jobTitle: "Magician"
};
// QUESTION 5
// Create a numeric enum that has 3 members: Paid, Unpaid, Unknown.
var Rent;
(function (Rent) {
    Rent[Rent["Paid"] = 0] = "Paid";
    Rent[Rent["Unpaid"] = 1] = "Unpaid";
    Rent[Rent["Unknown"] = 2] = "Unknown";
})(Rent || (Rent = {}));
console.log(Rent.Unpaid);
// 1
// QUESTION 6
// Create a Person class.
// The class's constructor should set a name property when instantiated, and the class should contain a method that returns the string: "My name is " + the value of the name property.
var Person = /** @class */ (function () {
    function Person(hisName) {
        this.name = hisName;
    }
    Person.prototype.displayName = function () {
        return " My name is " + this.name;
    };
    return Person;
}());
var newPerson = new Person(Peter);
var personName = newPerson.displayName();
console.log(personName);
// QUESTION 7 
// Create type aliases for the arguments in this function.
function getDetails(name, details) { }
