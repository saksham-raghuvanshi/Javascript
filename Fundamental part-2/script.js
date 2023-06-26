"use-strict"; // it secure oyr javascript code or to avoid accidental error

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive :D");

//const private = 534 //reserved ki words

//function

//declaration function
function logger() {
  console.log("My name is Saksham");
}

logger();
logger();
logger();

//function with parameter and return data

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = fruitProcessor(5, 2);
console.log(applejuice);

//function expression
const calage = function (birthyeah) {
  return 2023 - birthyeah;
};

const age = calage(2002);
console.log(age);

//Arrow Function

const calages = (birthyeah, firstname) => {
  const age = 2023 - birthyeah;
  return `${firstname} age is ${age}`;
};
console.log(calages(2002, "Saksham"));

const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessors(apples, oranges) {
  const applepieces = cutPieces(apples);
  const orangepieces = cutPieces(oranges);
  const juice = `juice with ${applepieces} pieces of apples and ${orangepieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessors(5, 4));

const friends = ["Saksham", "yugesh", "Harshit"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

const firstName = "tenzing";

const group = [firstName, "Lovepreet", "ishita", friends];
console.log(group);

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array total containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills, tips, totals);

//Objects
const saksham = {
  firstname: "Saksham",
  lastname: "Raghuvanshi",
  age: "20",
  friends: ["harshit", "Yugesh", "Love"],
};

console.log(saksham);
console.log(saksham.firstname);
console.log(saksham.friends);

const interestedIn = prompt(
  "What do you want to Know about Jonas? Choose between firstname, Lastname, age and friends"
);

if (saksham[interestedIn]) {
  console.log(saksham[interestedIn]);
} else {
  console.log("Wrong Request! Choose b/w firstName, lastName, age and friends");
}

saksham.location = "Pathankot";

console.log(saksham);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI());

//Loops

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting Weight repetition ${rep}`);
  }
}

//while loop

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You Rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  // if (dice === 6) {
  //   console.log("Loop End");
  // }
}
