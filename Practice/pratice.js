"use strict";

document.getElementById("output").innerHTML = "I am now inside the function";

function printText() {
  document.write("I am now inside the function 2");
}

// Mixing string and Numbers
//Javascript interpreter evalute expression from left to right
//nummber can eaisly convert into string but not string
// left to right
console.log(8 + 8); //16
console.log("8" + 8); //88
console.log("8" + "8"); //88
console.log(8 + "8"); //88
console.log(8 + 8 + "8"); //168
console.log(8 + "8" + 8);
console.log("3" + +3);
console.log("3" + +"3");
console.log(3 + +"3");
//in this first three number ++ change second string into number
// but number with ++ never change
//++ sign if you put before a string then it converts it into a number
//but if its put before a number then it does nothing
