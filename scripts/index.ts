// QUESTION 1
// Declare an array that accepts only number and boolean values.
let numBool: (number | boolean)[];

// QUESTION 2
// Declare a tuple that takes 3 values: a boolean, a string, and a number.
let tuple: [boolean, string, number];

tuple = [false, "hello", 47];

// QUESTION 3
// Set the Type for the arguments and return value for this function.
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}


// QUESTION 4
// Create an interface that could be used for these objects.
[
	{ name: "Burt", age: 77, jobTitle: "Magician" },
	{ name: "Walt", age: 11 },
	{ name: "Spencer", age: 107, jobTitle: "Bus conductor" },
];

interface IsMember {
    name:string,
    age:number,
    jobTitle:string
}

let member:IsMember = {
    name:"Burt",
    age: 77,
    jobTitle: "Magician"
}



// QUESTION 5
// Create a numeric enum that has 3 members: Paid, Unpaid, Unknown.
enum Rent {
    Paid,
    Unpaid,
    Unknown
}

console.log(Rent.Unpaid);
// 1

// QUESTION 6
// Create a Person class.
// The class's constructor should set a name property when instantiated, and the class should contain a method that returns the string: "My name is " + the value of the name property.
class Person {
    name: string;

    constructor(hisName: string) {
        this.name = hisName;
    }

    displayName() {
        return " My name is " + this.name;
    }
}

const newPerson = new Person(Peter);
const personName = newPerson.displayName();

console.log(personName);



// QUESTION 7 
// Create type aliases for the arguments in this function.
function getDetails(name: string | boolean, details: { id: number | string, status: string | boolean }){}


