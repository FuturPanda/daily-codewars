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

// --- 22 Feb 23 ---
// --- Instruction :
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// --- My Solution :
// function persistence(num) {
//   if (num.toString().length == 1) return 0
//   else {
//   let numArr = String(num).split('').map(item => Number(item))
//   let nextNum
//   let i = 0
//     while(true) {
//     i ++
//     nextNum = numArr.reduce((result, next) => result * next)
//     if (nextNum.toString().length == 1) return i
//     numArr = String(nextNum).split('').map(item => Number(item))
//     }
//   }
// }

// --- Best Practice :
//function persistence(num) {
//   var times = 0;

//   num = num.toString();

//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }

//   return times;
// }

// --- Comment :

//          ----           ----           -----           ----            ----            ----            ----

// --- 22 Feb 23 ---
// --- Instruction :
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// --- My Solution :
// function order(words){
//   if (words == "") return ""
//   else {
//     const wordArr = words.split(" ")
//     const finalArr = []
//     for (let i=1; i<=wordArr.length; i++) {
//       finalArr.push(wordArr.filter(item => item.includes(i)))
//     }
//     return finalArr.join(" ")
//   }
// }
// --- Best Practice :
// function order(words){

//   return words.split(' ').sort(function(a, b){
//     return a.match(/\d/) - b.match(/\d/);
//  }).join(' ');
// }
//

// --- Comment :
// No best practices without regex.
//          ----           ----           -----           ----            ----            ----            ----

// --- 23 Feb 23 ---
// --- Instruction :
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// --- My Solution :
//
// function findUniq(arr) {
//   const num = arr.filter(
//     (item, index) => item !== arr[index + 1] && item !== arr[index - 1]
//   );
//   console.log(num[0]);
// }
// // findUniq([1, 0, 0]);
// // findUniq([1, 1, 1, 2, 1, 1]);
// // findUniq([3, 10, 3, 3, 3]);
// // findUniq([0, 1, 0]);

// --- Best Practice :
//

// --- Comment :

//          ----           ----           -----           ----            ----            ----            ----

// --- DATE ---
// --- Instruction :

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// --- My Solution :
//
// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   const sqArr = array1.map((item) => item * item);
//   const validation = array2.map((item, index) => {
//     if (sqArr.includes(item)) {
//       sqArr.splice(sqArr.indexOf(item), 1);
//       array1.splice(array1.indexOf(Math.sqrt(item)), 1);
//       return item;
//     } else if (array1.includes(item)) {
//       sqArr.splice(sqArr.indexOf(item * item), 1);
//       array1.splice(array1.indexOf(item), 1);
//     } else return null;
//   });
//   if (validation.includes(null)) return false;
//   else return true;
// }

// --- Best Practice :
// function comp(array1, array2) {
//   if(array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//   return array1.map(v => v * v).every((v, i) => v == array2[i]);
// }

// --- Comment :
// Array.prototype.every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// Try it:
// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// // Expected output: true
//          ----           ----           -----           ----            ----            ----            ----

// --- 9 March ---
// --- Instruction :
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
// --- My Solution :
// function disemvowel(str) {
//   const voyels = ["a", "e", "i", "o", "u"];
//   return str
//     .split(" ")
//     .map((item) =>
//       item
//         .split("")
//         .map((item) => (voyels.includes(item.toLowerCase()) ? "" : item))
//         .join("")
//     )
//     .join(" ");
// }

// --- Best Practice :
// REGEX
//function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }
// FILTER
// const vowels = 'aeiou';

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }

// --- Comment :
// Filtering is a subtler solution !
//          ----           ----           -----           ----            ----            ----            ----

// --- 9 March  ---
// --- Instruction :
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// --- My Solution :
// function isValidWalk(walk) {
//   if (
//     walk.length !== 10 ||
//     walk.filter(item => item == "n").length !== walk.filter(item => item == "s").length ||
//     walk.filter(item => item == "e").length !== walk.filter(item => item == "w").length
//     )
//     return false
//   else return true
// }

// --- Best Practice :
// function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function(a){return a==val;}).length;
//   }
//   return walk.length==10 && count('n')==count('s') && count('w')==count('e');
// }

// --- Comment :

//          ----           ----           -----           ----            ----            ----            ----

// --- 12 March  ---
// --- Instruction :
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// --- My Solution :
// var uniqueInOrder=function(iterable){
//   return typeof iterable == "object" ? iterable.filter((item, index) => item !== iterable[index+1] ) : iterable.split("").filter((item, index) => item !== iterable[index+1] )
// }
// OR
// var uniqueInOrder=function(iterable){
//   if ( typeof iterable !== "object"  ) iterable = iterable.split("")
//   return iterable.filter((item, index) => item !== iterable[index+1] )
// }

// --- Best Practice :
//var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

// --- Comment :
// Second option more DRY.
// Best practice : the nature of the iterable mean you can spread it... nice i missed that.
//          ----           ----           -----           ----            ----            ----            ----

// --- 16 March ---
// --- Instruction :
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// --- My Solution :

// function bmi(weight, height) {
//   const BMI = weight / (height * height);
//   const seuil = [18.5, 25, 30];
//   const desc = ["Underweight", "Normal", "Overweight"];
//   if (BMI > 30) return "Obese";
//   for (i = 0; i < seuil.length; i++) {
//     if (BMI <= seuil[i]) return desc[i];
//   }
// }
//

// --- Best Practice :
//

// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";

// --- Comment :
// I didn't know we could use nested ternary operator.

//          ----           ----           -----           ----            ----            ----            ----

// function findEvenIndex(arr, acc = 0) {
//   const right = arr
//     .filter((item, index) => index > acc)
//     .reduce((a, b) => a + b);
//   const left = arr.filter((item, index) => index < acc).reduce((a, b) => a + b);
//   if ((acc == 0 && right == 0) || arr.length == 1) return 0;
//   else if (acc == arr.length - 1) return left == 0 ? acc : -1;
//   else if (acc > 0 && left == right) return acc;
//   else return findEvenIndex(arr, acc + 1);
// }

// function findEvenIndex(arr, acc = 0) {
//   if (
//     (acc == 0 &&
//       arr.filter((item, index) => index > acc).reduce((a, b) => a + b) == 0) ||
//     arr.length == 1
//   )
//     return 0;
//   else if (acc == arr.length - 1)
//     return arr.filter((item, index) => index < acc).reduce((a, b) => a + b) == 0
//       ? acc
//       : -1;
//   else if (
//     acc > 0 &&
//     arr.filter((item, index) => index < acc).reduce((a, b) => a + b) ==
//       arr.filter((item, index) => index > acc).reduce((a, b) => a + b)
//   )
//     return acc;
//   else return findEvenIndex(arr, acc + 1);
// }

// console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
// console.log(findEvenIndex([0, 1, 2, 3, 4, 5]));

// --- 18 March  ---
// --- Instruction :
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// --- My Solution :

// function XO(str) {
//   const arr = str
//     .toLowerCase()
//     .split("")
//   return arr.filter((item) => item == "o").length ==
//     arr.filter((item) => item == "x").length
//     ? true
//     : false;
// }
//

// --- Best Practice :
// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

// --- Comment :
// always forget that an equality return true or false.

//          ----           ----           -----           ----            ----            ----            ----

// --- 19 March ---

// --- Instruction :
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// --- My Solution :
// function printerError(s) {
//   const good = "abcdefghijklm"
//   const errors = s.split('').filter(item => !good.includes(item) )
//   return `${errors.length}/${s.length}`
// }

// --- Best Practice :
//

// --- Comment :
// No best practices. Best is regex.
//          ----           ----           -----           ----            ----            ----            ----

// Binomial Expansion
// The purpose of this kata is to write a program that can do some algebra.

// Write a function expand that takes in an expression with a single, one character variable, and expands it. The expression is in the form (ax+b)^n where a and b are integers which may be positive or negative, x is any single character variable, and n is a natural number. If a = 1, no coefficient will be placed in front of the variable. If a = -1, a "-" will be placed in front of the variable.

// The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are the coefficients of the term, x is the original one character variable that was passed in the original expression and b, d, and f, are the powers that x is being raised to in each term and are in decreasing order.

// If the coefficient of a term is zero, the term should not be included. If the coefficient of a term is one, the coefficient should not be included. If the coefficient of a term is -1, only the "-" should be included. If the power of the term is 0, only the coefficient should be included. If the power of the term is 1, the caret and power should be excluded.

// it("Should correctly expand binomials where a=1 and b is positive", function() {
//   assert.strictEqual(expand("(x+1)^0"),"1");
//   assert.strictEqual(expand("(x+1)^1"),"x+1");
//   assert.strictEqual(expand("(x+1)^2"),"x^2+2x+1");
// });
// it("Should correctly expand binomials where a=1 and b is negative", function() {
//   assert.strictEqual(expand("(x-1)^0"),"1");
//   assert.strictEqual(expand("(x-1)^1"),"x-1");
//   assert.strictEqual(expand("(x-1)^2"),"x^2-2x+1");
// });
// it("Should correctly expand binomials where a is positive.", function() {
//   assert.strictEqual(expand("(5m+3)^4"),"625m^4+1500m^3+1350m^2+540m+81");
//   assert.strictEqual(expand("(2x-3)^3"),"8x^3-36x^2+54x-27");
//   assert.strictEqual(expand("(7x-7)^0"),"1");
// });
// it("Should correctly expand binomials where a is negative.", function() {
//   assert.strictEqual(expand("(-5m+3)^4"),"625m^4-1500m^3+1350m^2-540m+81");
//   assert.strictEqual(expand("(-2k-3)^3"),"-8k^3-36k^2-54k-27");
//   assert.strictEqual(expand("(-7x-7)^0"),"1");
// });
