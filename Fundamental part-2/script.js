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
