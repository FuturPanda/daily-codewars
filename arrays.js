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

