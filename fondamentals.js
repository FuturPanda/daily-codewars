// --- 02 February 2023
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// My Solution 
// function squareSum(numbers){
//     if(numbers.length == 0) return 0
//     const arraySquared = numbers.map( e => e*e)
//     console.log(arraySquared)
//     const arraySum = arraySquared.reduce((sum, e) => sum + e)
//       console.log(arraySum)
  
//     return arraySum
//   }

// Best Practise : 
// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
//   }

//          ----           ----           -----           ----            ----            ----            ----

// --- 03 February 2023 
//Implement a function which convert the given boolean value into its string representation.
//Note: Only valid inputs will be given.

// My Solution : 
// function booleanToString(b){
//   let result
//   b ? result ="true" : result = "false"
//   return result
// }

// Best Practice : 
// function booleanToString(b){
//   return b.toString();
// }
// OR
// function booleanToString(b){
//   return b ? 'true' : 'false';
// }

//          ----           ----           -----           ----            ----            ----            ----

// --- 03 Feb 2023 ---
// --- Instruction : 
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// --- My Solution : 
// function lovefunc(flower1, flower2){
//   return flower1%2 === flower2%2 ? false : true
// }

// --- Best Practice : 
// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }

//          ----           ----           -----           ----            ----            ----            ---- 


