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