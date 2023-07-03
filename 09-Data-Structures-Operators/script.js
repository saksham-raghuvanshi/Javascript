'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },

  orderDelivery: function ({ starterindex, mainindex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterindex]} and ${this.mainMenu[mainindex]} will be delivered to ${address} at ${time}}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainingredients, ...otheringredients) {
    console.log(mainingredients);
    console.log(otheringredients);
  },
};

//Simple Array assignment

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// by Destructing Array

const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, , third] = restaurant.categories;
console.log(main, third);

// switching variables without Destructing

const temp = main;
main = third;
third = temp;
console.log(main, third);

// switching with destructing

[main, third] = [third, main];
console.log(main, third, 'By Destructing');

//so this basically allows us to return multiple value from a function

//write a function to order food

// receive 2 return values from a function
const [order1, order2] = restaurant.order(2, 0);
console.log(order1, 'and', order2);

const nested = [2, 4, [5, 6]];

const [i, , j] = nested;
console.log(i, j, 'nested array');

// taking all individual value
//we need do destructive under destructive

const [h, , [q, k]] = nested;
console.log(h, q, k, 'individual array');

//default value

const [p = 1, r = 1, s = 1] = [8, 9];
console.log(p, r, s);

// Destructing Object
//variables name same as objects name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// if we want to change variable name

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//default value  for APi call
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };

({ d, e } = obj);
console.log(d, e);

//Nested Object
const {
  fri: { open: o, close: cl },
} = openingHours;

console.log(o, cl);

restaurant.orderDelivery({
  time: '22:30',
  address: 'pathankot',
  mainindex: 2,
  starterindex: 2,
});

// create new array by adding beg array

const arr1 = [7, 8, 9];
const begnewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(begnewArr);

//spread operator
const newArr = [1, 2, ...arr1];
console.log(newArr);
console.log(...newArr, 'Show individual');

//individual ellement Iterables
const str = 'Saksham';
const letters = [...str];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt("Let's make pasta! Ingredient1?"),
  prompt('Ingredient2?'),
  prompt('Ingredient1?'),
];

console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
restaurant.orderPasta(...ingredients);

const newRestaurant = { ...restaurant, founder: 'Saksham' };
console.log(newRestaurant);

const restaurantcopy = { ...restaurant };
restaurantcopy.name = 'Saksham Restaurant';
console.log(restaurantcopy.name);
console.log(restaurant.name);

const arr2 = [1, 2, ...[3, 4]];

const [t, u, ...others] = [1, 2, 3, 4, 5];
console.log(t, u, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherfood);

//objects rest

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const tp = [23, 5, 7];
add(...tp);

restaurant.orderPizza('mushrooms', 'onion', 'olives');

restaurant.orderPizza('mushrooms');

//short-circuiting
// use any data type, return any data type
console.log('-----OR-----');
console.log(3 || 'Saksham');
console.log('' || 'Saksham');
console.log(true || 0);
console.log(undefined || null);

const guest = restaurant.numguest ? restaurant.numguest : 10;
console.log(guest);

console.log('-----AND-----');

console.log(0 && 'Saksham');
console.log(7 && 'Saksham');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('a', 'b');

//Nullish operator : null and undefined ( Not 0 or " ")
const gurstcorrect = restaurant.numguest ?? 10;
console.log(gurstcorrect);
