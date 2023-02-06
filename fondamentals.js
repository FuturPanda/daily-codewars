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

// --- 04 Feb 2023 ---
// --- Instruction : 
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// --- My Solution : 
// function betterThanAverage(classPoints, yourPoints) {
//   const average = (classPoints.reduce((sum, e) => sum+e)+yourPoints)/(classPoints.length + 1)
//   return average > yourPoints ? false : true
// }

// --- Best Practice : 
// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }

//          ----           ----           -----           ----            ----            ----            ---- 

// --- 05 Feb 2023 ---
// --- Instruction : 
// Complete the solution so that it reverses the string passed into it.

// --- My Solution : 
// function solution(str){
//   return str.split('').reverse().toString().replaceAll(',', '')
// }

// --- Best Practice : 
// function solution(str){
//   return str.split('').reverse().join('');  
// }

// --- Interessant : 
// const solution = s => [...s].reverse().join('')


//          ----           ----           -----           ----            ----            ----            ---- 


