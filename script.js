/ Question 1: Declare and initialize an empty multidimensional array
let emptyMultiArr = [];

// Question 2: Declare and initialize a multidimensional array
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];

// Question 3: Program to print numeric counting from 1 to 10
document.write("<b>Counting:</b><br>");
for (let i = 1; i <= 10; i++) {
    document.write(i + (i < 10 ? ", " : "<br><br>"));
}

// Question 4: Print multiplication table of a given number
let num = prompt("Enter a number to show its multiplication table:");
let lengthOfTable = prompt("Enter length of multiplication table:");
document.write("<b>Multiplication table of " + num + ":</b><br>");
for (let i = 1; i <= lengthOfTable; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// Question 5: Write a program to print items of the following array using a loop
let fruitsName = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<b>Fruits:</b><br>");
for (let i = 0; i < fruitsName.length; i++) {
    document.write(fruitsName[i] + "<br>");
}

// Question 6: Generate various series
document.write("<b>Counting:</b><br>");
for (let i = 1; i <= 15; i++) {
    document.write(i + (i < 15 ? ", " : "<br><br>"));
}
document.write("<b>Reverse Counting:</b><br>");
for (let i = 10; i >= 1; i--) {
    document.write(i + (i > 1 ? ", " : "<br><br>"));
}
document.write("<b>Even:</b><br>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + (i < 20 ? ", " : "<br><br>"));
}
document.write("<b>Odd:</b><br>");
for (let i = 1; i < 20; i += 2) {
    document.write(i + (i < 19 ? ", " : "<br><br>"));
}
document.write("<b>Series:</b><br>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k" + (i < 20 ? ", " : "<br><br>"));
}

// Question 7: Search in an array
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let nput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
if (items.indexOf(input.toLowerCase()) !== -1) {
    document.write(input + " is <b>available</b> at index " + items.indexOf(input.toLowerCase()) + " in our bakery.<br><br>");
} else {
    document.write("We are sorry. " + input + " is <b>not available</b> in our bakery.<br><br>");
}

// Question 8: Identify the largest number
let number = [24, 53, 78, 91, 12];
let largestNumber = Math.max(...number);
document.write("<b>Array items:</b> " + number.join(", ") + "<br>");
document.write("The largest number is " + largestNumber + "<br><br>");

// Question 9: Identify the smallest number
let smallestNumber = Math.min(...number);
document.write("<b>Array items:</b> " + number.join(", ") + "<br>");
document.write("The smallest number is " + smallestNumber + "<br><br>");

// Question 10: Print multiples of 5 ranging from 1 to 100
document.write("<b>Multiples of 5 from 1 to 100:</b><br>");
for (let i = 5; i <= 100; i += 5) {
    document.write(i + (i < 100 ? ", " : ""));
               }
