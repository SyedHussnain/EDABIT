// Challenge No.2
// Return the Sum of Two Numbers
function sum(a, b) {
  return a + b;
}
console.log("Return the sum of Two Numbers = " + sum(15, 32));

// Challenge No.3
// Convert Minutes into Seconds
function minToSec(min) {
    return min * 60;
}
console.log("Minutes in to Seconds = " + minToSec(60));

// Challenge No.4
// Return the Next Number from the Integer Passed
function nextNumber(x) {
  return x + 1;
}
console.log("Next Number is = " + nextNumber(15));

// Challenge No.5
// Area of a Triangle
// (base * height) / 2
function triArea(x, y) {
  return (x * y)/2;
}
console.log("Area of triAngle = " + triArea(10, 20));

// Challenge No.6
// Convert Age to Days
// year * 365
function ageToDays(year) {
  return year * 365;
}
console.log("Age in Days = " + ageToDays(10));

// Challenge No.7
// Buggy Code (Part 1)
function cubes(a) {
  return a ** 3;
}
console.log("Cubes in = " + cubes(10));

// Challenge No.8
// Return the First Element in an Array
function firstElement(a) { 
  return a[0];
}
console.log("First Element of an array = " + firstElement([20, 4, 6, 8, 10,]));

// Challenge No.9
// Power Calculator
function circuitPower(voltage,current) {
  return voltage * current
}
console.log("Circuit Power = " + circuitPower(230, 10));

// Chalenge No.10
// Convert Hours into Seconds
function hoursIntoSeconds(hours) {
  return hours * 3600;
}
console.log("Hours in Seconds = " + hoursIntoSeconds(2));

// Challenge No.11
// Maximum Edge of a Triangle
function edgeOfTriangle(side1, side2) {
  return (side1 + side2)-1 
}
console.log("Third Edge of Triangle = " + edgeOfTriangle(8, 10));

// Challenge No.12
// Return the Remainder from Two Numbers
function remainderOfTwoNumbers(x, y) {
  return x % y;
}
console.log("Remainder of Two Numbers = " + remainderOfTwoNumbers(10, 4));

// Challenge No.13
// Find the Perimeter of a Rectangle
function perimeterOfRectangle(lenght, width) {
  return 2 * (lenght + width);
}
console.log("Perimeter of Rectangle = " + perimeterOfRectangle(6, 7));

// Challenge No.14
// Return Something to Me!
function giveMeSomething(a) {
  return "something " + a;
}
console.log("Return Something to Me = " + giveMeSomething("Hussnain Ali"));

// Challenge No.15
// Correct the Mistakes
function squared(a) {
  return a * a;
}
console.log("Squared Value = " + squared(5));

// Challenge No.16
// Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(x) {
  return x <= 0;
}
console.log("Number is Less Or Equal to Zero = " + lessThanOrEqualToZero(10));

// Challenge No.17
// Sum of Polygon Angles
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
// n will always be greater than 2.
function sumPolygon(n) {
  return (n - 2) * 180;
}
console.log("Sum of Polygon = " + sumPolygon(4));

// Challenge No.18
// Basketball Points
function points(pointer2,pointer3) {
  return (pointer2 * 2) + (pointer3 * 3); 
}
console.log("Total Points = " + points(2, 3));

// Challenge No.19
// Basic Variable Assignment
function nameString(name) {
  return name + "Edabit";
}
console.log("Name with Edabit = " + nameString("Hussnain"));

// Challenge No.20
// Less Than 100?
function lessThan100(a, b) {
  return a + b <= 100;
}
console.log("Sum of two Numbers Less than Zero = " + lessThan100(50, 49));

// Challenge No.21
// Buggy Code (Part 5)
function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
console.log(printArray(10));


// Challange No.22
// Buggy Code (Part 7)
function swap(a, b) {
  let temp;
  temp = a;
  a = b;
  b = temp;
  return [a, b];
}
console.log(swap(10, 20));

// Challenge No.23
// The Farm Problem
function animals(chick, pig, cow) {
  return chick * 2 + pig * 4 + cow * 4;
}
console.log("Total Legs of Animals = " + animals(2, 3, 5));

// Challenge No.24
// Using the "&&" Operator
function and(a, b) {
  return "Answer is = " + (a == true && b == true);
}
console.log(and(true, true));

// Challenge No.25
// Are the Numbers Equal?
function isSameNum(a, b) {
  return a == b;
}
console.log("Number is Same = " + isSameNum(15, 9));

// Challenge No.26
// Football Points
function teamPoints(win, draw, loss) {
  return win * 3 + draw + loss * 0;
}
console.log("Total Point of the Team = " + teamPoints(9, 2, 4));

// Challenge No.27
// Convert Hours and Minutes into Seconds
function hrMinToSec(hr, min) {
  return hr * 3600 + min * 60;
}
console.log("Time in Seconds = " + hrMinToSec(1, 20));

// Challenge No.28
// Fix the Expression
function equalToSeven(num) {
  return num === 7;
}
console.log("Number is equal to seven = " + equalToSeven(7));

// Chalenge No.29
// Equality Check
function checkEquality(a, b) {
  return typeof a === typeof b;
}

console.log(
  "Data Type of Both Parameters are equal = " + checkEquality("Hellow", "0")
);

// Challenge No.30
// Profitable Gamble
function profitableGamble(prob, prize, pay) {
  return prob * prize > pay;
}
console.log("Profitable Gamble  = " + profitableGamble(0.9, 3, 2));

// Challenge No.31
// Boolean to String Conversion
function boolToString(a) {
  return "" + a;
}
 console.log(boolToString(true)); 
 console.log(typeof boolToString(false)); 
 
//  Challenge No.32
// Using Arrow Functions
arrowFunc = (a) => 3;
console.log("Arrow Function = " + arrowFunc(3));

// Challenge No.33
// Frames Per Second
function frames(certainFps,min) {
  return certainFps * (min * 60);
}
console.log("Frames Per Second = " + frames(10, 25));

// Challenge No.34
// Miserable Parody of a Calculator
function calculator(a) {
  return eval(a);
}
console.log("String Calculation = " + calculator("23+4"));

// Challenge No.35
// Buggy Code (Part 4)
function greeting(name) {
  if (name == "Hussnain") {
    return "Hello, my Love!";
  }
  return "Hello, " + name + "!";
}
console.log(greeting("Hussnain"));

// Challenge No.36
// Two Makes Ten
function twoMakesTen(m, n) {
  return m === 10 || n === 10 || m + n === 10;
}
console.log(twoMakesTen(5, 5));

// Challenge No.37
// Let's Fuel Up!
function calculateFuel(distance) {
  return distance * 10 >= 100 ? distance * 10 : 100;
  }
console.log(calculateFuel(3));

// Challenge No.38
// Buggy Code (Part 2)
function maxNum(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
console.log(maxNum(10, 5));

// Challenge No.39
// Pair Mangement
// return as an Array
function makePair(o, p) {
  return [o, p];
}
console.log(makePair(10, 20));

// Challenge No.40
// Compare Strings by Count of Characters
function comp(b, x) {
  if (typeof b === "string" && typeof x === "string") {
    if (b.length === x.length) {
      return "Both Strings are Equal";
    } else {
      return "Both Strings are not Equal";
    }
  } else {
    return "Please Enter a Valid String";
  }
}
console.log(comp("Helo", "Helo"));

// Challenge No.41
// Is the String Empty?
function isEmpty(x) {
  return x === "";
}
console.log("Empty = " + isEmpty(" "));

// Challenge No.42
// Check if an Integer is Divisible By Five
function divisibleByFive(num) {
  return num / 5 === 0;
}
console.log("This number is Divisible by Five = " + divisibleByFive(99));