//Working with String

//mdn String replace
"use-strict";
const airline = "TAP Air India";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));

console.log(airline.slice(4)); //after 4 poistion
console.log(airline.slice(4, 7)); //slice before 4 and after 7
console.log(airline.slice(airline.indexOf(" ")));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle Seats
  const s = seat.slice(-1);

  if (s == "B" || s == "E") console.log("You got the Middle seat 😊");
  else console.log("YOu got lucky 😎");
};
// -------------------------------------------lowercase and toUpperCase-----------------------------------
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Saksham"));

console.log(typeof new String("Saksham"));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// -----------------------------------------------------Slice-------------------------------
const passenger = "sAksHAM"; //Saksham
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// ---------------------------------------------------trim-----------------------------------
const email = "contact@frontendgyaan.com";
const loginEmail = " Contact@Frontendgyaan.Com \n";
//convert Cap and Space into loginEmail and make like Email

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// in one step
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

// ---------------------------------------------replace----------------------------------------------
const priceRUP = "30,000₹";
const priceUS = priceRUP.replace("₹", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 232. Boarding door 23";
console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceALL("door", "gate"));
//for here we use regular expression

console.log(announcement.replace(/door/g, "gate"));

// ------------------------------------------------Booleans(include,Startwith)---------------------------
const planee = "Airbus A320neo";

console.log(planee.includes("A320"));
console.log(planee.startsWith("Air"));

if (planee.startsWith("Airbus") && planee.endsWith("neo")) {
  console.log("Part of New Airbus Family");
}

// ----------------------spilit----------------------------------

console.log("a+vicy+nice+string".split("+"));
console.log("Saksham Raghuvanshi".split(" "));

const [firstName, lastName] = "Saksham Raghuvanshi".split(" ");
console.log(firstName);

// --------------------------------JOIN -----------------------------------------------

const newName = ["Mr", firstName, lastName].join(" ");
console.log(newName);

//Capitalize firstletter

const CapitalizeName = function (name) {
  const names = name.split(" ");

  nameUpper = [];

  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};

CapitalizeName("saksham raghuvanshi");
CapitalizeName("mulakh raj raghuvanshi");

// ------------------------------Padding----------------------------------

const message = "Go to gate 23";
console.log(message.padStart(25, "+")); // 25 long
console.log("Saksham".padStart(25, "+")); //25 long

const repeat = "Bad weather... All Departues Delayed...";
console.log(repeat.repeat(5)); //repeat 5 times
