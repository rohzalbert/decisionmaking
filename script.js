//Decision Making (if-else and switch):

// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

// function checkLeapYear(year) {
//   // Check if the year is divisible by 4
//   if (year % 4 === 0) {
//   // Check if the year is also divisible by 100
//       if (year % 100 === 0) {
//   // Check if the year is also divisible by 400
//           if (year % 400 === 0) {
//               return `${year} is a leap year.`; 
//           } else {
//               return `${year} is not a leap year.`; 
//           }
//       } else {
//           return `${year} is a leap year.`; 
//       }
//   } else {
//       return `${year} is not a leap year.`; 
//   }
// }

// console.log(checkLeapYear(1998));


//Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20


// function ticketPrice() {
//   // Prompt the user for their age
//   let age = parseInt(prompt("Please enter your age:"));

//   // Validate the input to make sure it's a number
//   if (isNaN(age)) {
//       console.log("Invalid input. Please enter a valid age.");
//       return; 
//   }

//   // Check the ticket price based on the age
//   if (age <= 12) {
//     return "The ticket price is: $10";
//   } else if (age >= 13 && age <= 17) {  
//     return "The ticket price: $15";
//   } else if (age >= 18) {
//     return "The ticket price is: $20";
//   } else {
//     return "Please enter a valid age.";
//   }
// }

// console.log (ticketPrice());


//RECURSION:
// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

// function fibonacci(n) {
//   if (n === 0) {
//       return 0;  
//   }
//   if (n === 1) {
//       return 1;  
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);  
// }


// console.log(fibonacci(10)); 


// Power Function: Write a recursive function to calculate the result of raising a number to a given power.
function power(base, exponent) {
  // Any number to the power of 0 is 1
  if (exponent === 0) {
      return 1;
  }

  // Negative exponents
  if (exponent < 0) {
      return 1 / power(base, -exponent);
  }

  // Recursive case: multiply the base by the result of base raised to the power of (exponent - 1)
  return base * power(base, exponent - 1);
}

console.log(power(2, -12)); 
