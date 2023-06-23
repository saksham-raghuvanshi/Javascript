let js = "amazing";

if (js == "amazing") {
  alert("JS is Fun");
}

console.log(40 + 8 + 23);

let name = "Saksham";

name = "Arpan";

console.log(name);
const firstname = "Saksham";
// firstname = "Arpan"; //can't be redefine

//Operators

const first = "Saksham";
const last = "Raghuvanshi";

console.log(first + " " + last);
console.log(2 ** 3); //2 power 3

let x = 10 + 3;
console.log(x);
x += 10; //x=x+1
console.log(x);
x++; //x=x+1;
console.log(x);
x--; //x=x-1;
console.log(x);

// comparison operator >,<,>=,<=
const age = 20;
console.log(age > 21);

let BMI;

const massMark = 67;
const heightMark = 1.6;
const massjohn = 57;
const heightjohn = 1.5;

const BMImark = massMark / (heightMark * heightMark); //Grouping operator
const BMIJohn = massjohn / (heightjohn * heightjohn);
console.log(BMIJohn);
console.log(BMImark);
console.log(BMIJohn > BMImark);

//member access

const person = {};
person["firstname"] = "Saksham";
person["lastname"] = "Raghuvanshi";
console.log(person.firstname);
console.log(person.lastname);

//> .optional chaining is a deature of javascript that allows you ti access properties of an object or elements of an array without having to check wwhetther the object  or array is null or undefine first.or aa=rray
//it never throw error is telll null or undefined
const user = {
  name: "Saksham",
  age: 20,
  address: {
    city: "pathankot",
    state: "punjab",
    zip: 145025,
  },
};

console.log(user.address.city);
console.log(user.address.Roadno); //undefined that is good
// console.log(user.address.Roadno.houseno); //error not good here ?. optional chaining work
console.log(user.address.Roadno?.houseno); //undefined Now
console.log(user?.address?.city); //undefined Now
//String

const users = [
  { name: "Saksham", age: 20 },
  { name: "Yugesh", age: 19 },
];

console.log(users[0]?.name);
console.log(users[1]?.name);

name = "Saksham";
const hello = `I'm ${name}`;
console.log(hello);
