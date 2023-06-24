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
const ages = 20;
console.log(ages > 21);

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

//typeof
//void
//delete
//await The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 20);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log("Await : ", x);
}

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

const age = 15;
if (age >= 18) {
  console.log("You can start driving");
} else {
  const yearleft = 18 - age;
  console.log(`you too young. wait another ${yearleft} year :)`);
}

//Type Conversion

const inputyear = "2002";
console.log(inputyear + 21);
console.log(Number(inputyear) + 21);
console.log(Number("Saksham")); //Number
console.log(typeof NaN);
console.log(String(21), 21);

//5 falsy values: 0,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Saksham"));
console.log(Boolean({}));

//True fasly value
const money = 0;
if (money) {
  console.log("Don't spend it All");
} else {
  console.log("You should get a job!");
}

//Simple way of getting a value from webpage by prompt function

const favourite = prompt("What is Your Favourite Number? ");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
  console.log("Cool!");
}

if (favourite === 23) {
  console.log("Cool!");
} else {
  console.log("Not 23 Number Because prompt take string and we use ===");
}

//switch Statement
const day = "saturday";

switch (day) {
  case "monday":
    console.log("Plan Course Structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory Videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the Weekend");
    break;
  default:
    console.log("Not a Valid Day");
}

if (day === "monday") {
  console.log("Plan Course Structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory Videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the Weekend");
} else {
  console.log("Not a Valid Day");
}
