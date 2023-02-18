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


// --- 12 Feb 2022 ---
// --- Instruction : 
// Your goal in this kata is to implement a difference function, which 
// subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b 
// keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from 
// the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// --- My Solution : 
// function arrayDiff(a, b) {
//   return a.filter(item => b.includes(item) === false)
// }

// --- Best Practice : 
// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }

//          ----           ----           -----           ----            ----            ----            ---- 

// --- 18 Feb 23 ---
// --- Instruction : 
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// --- My Solution : 
// 
// function descendingOrder(n){
//   return n<10 ? n : Number(String(n).split('').map(Number).sort((a,b) => b-a).join(""))
// }
// --- Best Practice : 
// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }

//          ----           ----           -----           ----            ----            ----            ---- 
// --- 18 Feb 23 ---
// --- Instruction : 
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
// --- My Solution : 
// 
// function rgb(r, g, b){
//   const letterArr = ["", "A", "B", "C", "D", "E", "F"]
//   let arrRGB = [r, g, b]
//   let arrHEX = []
//   for (color of arrRGB) {
//     let toPush = []
//     let betterColor
//     if (color > 255) betterColor = 255
//     else if (color < 0) betterColor = 0
//     let hexDigits = [Math.floor(betterColor / 16) ,((betterColor/16)-Math.floor(betterColor / 16))*16 ]
//     for (digit of hexDigits){
//       console.log("digit : ", digit)
//       if (digit <10) toPush.push(digit)
//       else {
//         const wow = String(digit).split('').map(Number).reduce((a,b) => a+b)
//         wow > 6 ? toPush.push("F") : toPush.push(letterArr[wow])
//         // const wow = letterArr[Number(String(digit).split('').reduce((a, b) => a+b))]
//         console.log("wow : ", wow)
//       }
//       arrHEX.push(toPush)
//       toPush = []
//     }
//     console.log(arrHEX)
//   }
// }
// rgb(300,255,255)

// --- Best Practice : 
// 

//          ----           ----           -----           ----            ----            ----            ---- 

