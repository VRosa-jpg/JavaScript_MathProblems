// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const isDivisibleBy5 = n1 % 5 && n2 % 5 && n3 % 5 && n4 % 5;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
let isLargerThanLast = n1 > n2 && n2 > n3 && n3 > n4;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
const math = (n1 - n2) * n3


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Part 2:
const budget = 175;
const perGallon = 3;
const totalDistance = 1500;

// Miles per hour
let is55mile = 55;
let is60mile = 60;
let is75mile = 75;

// Miles per gallon
let is30pergallon = 30;
let is28pergallon = 28;
let is23pergallon = 23;

// Calculations: How many hours will the trip
const speed55theHours = totalDistance / is55mile; // 27 hours
const speed60theHours = totalDistance / is60mile; // 25 hours
const speed75theHours = totalDistance / is75mile; // 20 hours



// Calculations: How many gallons will you need
const isGalOnTrip55 = totalDistance / is30pergallon // 50 gallons
const isGalOnTrip60 = totalDistance / is28pergallon // 53 gallons
const isGalOnTrip75 = totalDistance / is23pergallon // 65 gallons

console.log(isGalOnTrip60)

// Calculations: Will budegt be enough to cover fuel
const costOn55 = isGalOnTrip55 * perGallon // 150$
const costOn60 = isGalOnTrip60 * perGallon // 159$
const costOn75 = isGalOnTrip75 * perGallon // 195$

// Best options:
console.log(`At 55 miles per hour it takes ${speed55theHours} hours and ${isGalOnTrip55} gallons to get there. The budegt is ${costOn55}.`)

console.log(`At 60 miles per hour it takes ${speed60theHours} hours and ${isGalOnTrip60} gallons to get there. The budget is ${costOn60}.`)

console.log(`At 75 miles per hour it takes ${speed75theHours} hours and ${isGalOnTrip75} gallons to get there. The budget is ${costOn75}.`)