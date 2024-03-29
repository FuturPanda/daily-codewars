// 01 February 2023

//Write a function, which takes a non-negative integer (seconds) as input and
//returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// function humanReadable(seconds) {
//     let secs = seconds%60
//     let mins = seconds / 60
//     let hours = mins / 60
// mins < 1 ? mins = 00 : (mins = Math.floor(mins)  )
// hours < 1 ? hours = 00 : hours = Math.floor(hours)
// seconds%60 === 0 ? secs = 00 : secs = seconds%60 * 60 / 100
// console.log(seconds)
//     console.log(seconds%60)
//     console.log (mins, hours)

//     console.log ( `${hours < 10 ? hours = '0'+hours : hours = hours }:${mins < 10 ? mins = 0+mins : mins = mins}:${secs < 10 ? secs = 0+secs : secs = secs}`)

// }

// --- 6 Feb 2023 ---
// --- Instruction :
// Write a function that when given a URL as a string, parses out just the domain
// name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// --- My Solution :
// function domainName(url){
//   let truncHttp, truncW
//   if (url.includes("http://")) {
//     truncHttp = url.slice(7)
//   }
//   else if(url.includes("https://")) {
//     truncHttp = url.slice(8)
//   }
//   else truncHttp = url
//   if (truncHttp.includes("www.")) {
//     truncW = truncHttp.slice(4)
//     return truncW.slice(0, truncW.indexOf("."))
//   }
//   else {
//     return truncHttp.slice(0, truncHttp.indexOf("."))
//   }
// }

// --- Best Practice :
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

//          ----           ----           -----           ----            ----            ----            ----

// --- 07 Feb 2023 ---
// --- Instruction :
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// --- My Solution :
// const doTheMath = (obj) => {

//     const {rightOperand, operand, leftOperand} = obj
//     let result = 0

//     if(operand === "plus"){
//         result = leftOperand + rightOperand
//     }
//     if(operand === "minus"){
//         result = leftOperand - rightOperand

//     }
//     if(operand === "dividedBy"){
//         result = Math.floor(leftOperand / rightOperand)

//     }
//     if(operand === "times"){
//         result = leftOperand * rightOperand
//     }
//     console.log("Do the math : " + result + ` operation : ${obj.leftOperand}${obj.operand}${obj.rightOperand} `)
//     return result
// }
// const checkThisOut = (nb, obj) => {
//     if(obj) {
//         obj.leftOperand = nb
//         return doTheMath(obj)
//     }
//     return {rightOperand : nb}
// }
// function zero(obj) {
//     return checkThisOut(0, obj)
// }
// function one(obj) {
//     return checkThisOut(1, obj)
// }
// function two(obj) {
//    return checkThisOut(2, obj)
// }
// function three(obj) {
//     return checkThisOut(3, obj)
// }
// function four(obj) {
//     return checkThisOut(4, obj)
// }
// function five(obj) {
//     return checkThisOut(5, obj)
// }
// function six(obj) {
//     return checkThisOut(6, obj)
// }
// function seven(obj) {
//     return checkThisOut(7, obj)
// }
// function eight(obj) {
//     return checkThisOut(8, obj)
// }
// function nine(obj) {
//     return checkThisOut(9, obj)
// }
// function plus(obj) {
//     obj.operand = "plus"
//     return obj
// }
// function minus(obj) {
//     obj.operand = "minus"
//     return obj
// }
// function times(obj) {
//     obj.operand = "times"
//     return obj
// }
// function dividedBy(obj) {
//     obj.operand = "dividedBy"
//     return obj
// }

// --- Best Practice :
// function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {return fn ? fn(3) : 3}
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5) : 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) {return fn ? fn(8) : 8}
// function nine(fn) {return fn ? fn(9) : 9}
// function plus(n) {return function(v) {return v + n}}
// function minus(n) {return function(v) {return v - n}}
// function times(n) {return function(v) {return v * n}}
// function dividedBy(n) {return function(v) {return v / n}}

// --- Observation :
// Returning a fonction was my blind spot. Should have thought about this
//  instead of returning an object
//          ----           ----           -----           ----            ----            ----            ----

// --- 08 Feb 2023 ---
// --- Instruction :
// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// --- My Solution :
// function deleteNth(arr,n){
//     let obj = {}
//     let indexToRemove = []
//     for (let i=0 ; i<arr.length; i++ ){
//       if(!obj[arr[i]]) {
//         obj[arr[i]] = 1
//         console.log(`${i} : create 1 ${obj}`)
//       }
//       else if(obj[arr[i]] === n){
//         indexToRemove.push(i)
//       }
//       else {
//         obj[arr[i]] = ++obj[arr[i]]
//         console.log(`${i} : added 1 ! ${obj}`)
//         }
//     }
//     for (let i=0 ; i<indexToRemove.length;i++) {
//         arr.splice(indexToRemove[i]-i, 1)
//     }
//     console.log(indexToRemove)
//     console.log(arr)
//     return arr
//   }

// --- Best Practice :
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }

//          ----           ----           -----           ----            ----            ----            ----
// --- 9 Feb 2023 ---
// --- Instruction :

// --- My Solution :

// function scramble(str1, str2) {

//     const oneWord = str1.split('').sort()
//     const twoWord = str2.split('').sort()

//     const result = oneWord.filter(letter => {
//         twoWord.includes(letter)).join('')
//     }
//     const result2 = twoWord.join('')

//     console.log(oneWord, twoWord, result, result2)
//     if (result === result2) console.log(true)
//     else console.log(false)
// }

// scramble('rkqodlw','world')
// scramble('scriptingjava',     'javascript' )
// Works but too slow ?

// function scramble(str1, str2) {
//     const oneWord = str1.split('')
//     const twoWord = str2.split('')
//     const trueFalse = []
//     for (i=0;i<twoWord.length;i++) {
//       if ( oneWord.includes(twoWord[i])){
//         oneWord.splice(oneWord.indexof(twoWord[i]), 1)
//       }
//       else {return false}
//     }
//     return true;
//   }

//

// --- Best Practice :
//

// --- Interesting :
// https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/#:~:text=n%20indicates%20the%20input%20size,of%20the%20input%20size%20n%20.
// Time Complexity is a thing !
// Big O notation en algorythmie.
//          ----           ----           -----           ----            ----            ----            ----

// --- 10 Feb 23 ---
// --- Instruction :

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

// --- My Solution :
// function solution(input, markers) {
//     const array = [...input]
//     let afterMarker = false
//     let markerIndex

//     for (marker of markers) {
//         const numb = array.filter((v) => (v === marker)).length;
//         for ( let i = 0; i < numb; i++){
//             for (let i=0; i<array.length ; i++) {
//                 const item=array[i]
//                 if(i === (array.length-1) && afterMarker === true) {
//                     array.splice(markerIndex)
//                 }
//                 else if (item === marker){
//                     afterMarker = true
//                     markerIndex = i
//                 }
//                 else if ( array[i] == "\n" && afterMarker === true) {
//                     array.splice(markerIndex, i-markerIndex)
//                     afterMarker = false
//                 }
//                 else if (item === "\n" && afterMarker === false && array[i-1] === " "){
//                     array.splice(i-1, 1)
//                 }
//             }

//         }
//         if (array[array.length-1] === " ") array.splice(array.length-1)
//     }
//     const restring= array.join('')
//     return restring
// }

// --- Best Practice :
// function solution(input, markers) {

//   console.log(input.split('\n').map(
//     line => markers.reduce(
//       (line, marker) => line.split(marker)[0].trim(), line
//     )
//   ).join('\n'))
//     }
// solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

//          ----           ----           -----           ----            ----            ----            ----

// --- 11 Feb 2023 ---
// --- Instruction :
// Write an algorithm that takes an array and moves all of the zeros to
// the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a"]

// --- My Solution :
// function moveZeros(arr) {
//   const arrNoZero = arr.filter((item) => item !== 0)
//   const howManyZero = arr.length - arrNoZero.length
//   for (i=0; i<howManyZero; i++){
//     arrNoZero.push(0)
//   }
//   return arrNoZero

// }

// --- Best Practice :
// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }

// --- Best Practice 2 :
// var moveZeros = function (arr) {
//     return [
//       ...(arr.filter(n => n !== 0)),
//       ...(arr.filter(n => n === 0))
//     ];
//   }

// --- Observation : éviter les for loops au maximum.
//          ----           ----           -----           ----            ----            ----            ----

// --- 12 Feb 23 ---
// --- Instruction :
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

// --- My Solution :
// function tribonacci(signature,n){
//   let result = []
//   if(n==0)return result
//   else if(n<3) {
//     for (i=0; i<n;i++){
//       result.push(signature[i])
//     }
//     return result
//   }
//   else {
//   result = [...signature]
//   result.push(signature.reduce((a,b) => a+b))

//   for(i=1; i<(n-3); i++){
//     console.log(result)
//     const newItem = [result[i],result[i+1],result[i+2] ]
//     console.log(newItem)
//     result.push(newItem.reduce((a, b) => a+b))
//     console.log(result)
//   }
//   return result
//     }
// }

// --- Best Practice :
// function tribonacci(signature,n){
//   for (var i = 0; i < n-3; i++) { // iterate n times
//     signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

// --- Observation : A refaire !!
//          ----           ----           -----           ----            ----            ----            ----

// --- 13 Feb 23 ---
// --- Instruction :
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// --- My Solution :
// function generateHashtag (str) {
//     if (str == "") return false
//     const result = str.split(" ").map(item => item == "" ? "" : item[0].toString().toUpperCase() + item.slice(1).toLowerCase()).join("")
//     return result.length > 139 || result == "" ? false : "#" + result
//   }

// --- Best Practice :
// function generateHashtag (str) {
//     if(!str || str.length < 1) return false;

//     var r = '#' + str.split(' ').map(function(el) {
//       return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//     }).join('');
//     return r.length > 140?false:r;
//  }

//          ----           ----           -----           ----            ----            ----            ----

// --- 14 Feb 23 ---
// --- Instruction :
// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// Have fun!

// --- My Solution :
// function pickPeaks(arr){
//   let pos = []
//   let peaks = []
//   for (let i=0, plateau=false, posPlateau;i<arr.length;i++) {
//     if (arr[i] > arr[i-1] && plateau == true) {
//       plateau = false
//       if(arr[i] > arr[i+1]) {
//             pos.push(i)
//             peaks.push(arr[i])
//         }
//       else if (arr[i] == arr[i+1] && arr[i] > arr[i-1]){
//            plateau=true
//             posPlateau = i
//         }
//     }
//     else if (arr[i] > arr[i+1] && arr[i] > arr[i-1] ){
//       pos.push(i)
//       peaks.push(arr[i])
//     }
//     else if (arr[i] == arr[i+1] && arr[i] > arr[i-1]){
//       plateau=true
//       posPlateau = i
//     }
//     else if (arr[i] < arr[i-1] && plateau == true){
//       pos.push(posPlateau)
//       peaks.push(arr[posPlateau])
//       plateau = false
//     }

//   }
//   return {pos, peaks}
// }

// --- Best Practice :
//---- #1
// function pickPeaks(arr){
//   var result = {pos: [], peaks: []};
//   if(arr.length > 2) {
//     var pos = -1;
//     for(var i=1; i<arr.length;i++){
//       if(arr[i] > arr[i-1]) {
//         pos = i;
//       } else if(arr[i] < arr[i-1] && pos != -1) {
//         result.pos.push(pos);
//         result.peaks.push(arr[pos]);
//         pos = -1;
//       }
//     }
//   }
//   return result;
// }
// --- #2
// function pickPeaks(arr){
//     var result = {pos: [], peaks: []};
//     var pos;
//     var peak;
//     if(arr.length === 0) {return result;}

//     arr.reduce((prev, curr, index) => {
//       if(curr > prev) {
//         pos = index;
//         peak = curr;
//       } else if(curr < prev && pos >= 0) {
//         result.pos.push(pos);
//         result.peaks.push(peak);
//         pos = -1;
//       }

//       return curr;
//     });

//     return result;
//     //  return {pos:[],peaks:[]}
//   }

//          ----           ----           -----           ----            ----            ----            ----

// --- 15 Feb 23 ---
// --- Instruction :
// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
// --- My Solution :
//
// function removeNb (n) {
//     let sum = ((n+1)/2)*n
//     let nArray = []
//     let result = []
//     let b = 0
//      for (let j = Math.floor(n/2) ; j<n;j++){
//         a = j
//         for (let k = Math.floor(n/2); k<n ; k ++ ){
//           b = k
//           if (a*b == sum -(a+b)) {
//             result.push([a, b])
//           }
//         }
//       }
//       return result

//   }

// --- Best Practice :
//

//          ----           ----           -----           ----            ----            ----            ----

// --- 16 Feb 23 ---
// --- Instruction :
// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency
// --- My Solution :
// function dblLinear(n) {
//     let x, y, z
//     let uArr = [0]
//     for (let i=0; i<=n*10; i++) {
//         x = uArr[i]
//         y = uArr[i]*2+1
//         z = uArr[i]*3+1
//         uArr.push(y)
//         uArr.push(z)
//     }
//     const result = [... new Set(uArr)].sort((a,b) => a-b)
//     console.log(uArr)
//     console.log(uArr[n+1])

//     return result[n+1]

//   }

// --- Observation :
// For the big O notation : garder un if() dans le for loop c'esttrop gourmand
// filter ou sort aussi. Du coup tout passer après la loop, mais ça demande d'avoir un set plus grand
// de x pour être raccord lors de la selection de u(n). Ici pas scalable car n+10 juste suffisant pour passer
// les test a grands nombres. Peut-être essayer avec n+(n/4) ou un truc du genre.

// --- Best Practice :
// function dblLinear(n) {
//   var ai = 0, bi = 0, eq = 0;
//   var sequence = [1];
//   while (ai + bi < n + eq) {
//     var y = 2 * sequence[ai] + 1;
//     var z = 3 * sequence[bi] + 1;
//     if (y < z) { sequence.push(y); ai++; }
//     else if (y > z) { sequence.push(z); bi++; }
//     else { sequence.push(y); ai++; bi++; eq++; }
//   }
//   return sequence.pop();
// }

//function dblLinear(n) {

// var u = [1], pt2 = 0, pt3 = 0; //two pointer

// for(var i = 1;i<=n;i++){
//   u[i] = Math.min(2* u[pt2] + 1, 3*u[pt3] + 1);
//   if(u[i] == 2 * u[pt2] + 1) pt2++;
//   if(u[i] == 3 * u[pt3] + 1) pt3++;
// }

// return u[n];

// }
//          ----           ----           -----           ----            ----            ----            ----

// --- 17 Feb 23 ---
// --- Instruction :
// Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

// The data structure is a multi-dimensional Array, i.e:

// [
//   [7,8,4,  1,5,9,  3,2,6],
//   [5,3,9,  6,7,2,  8,4,1],
//   [6,1,2,  4,3,8,  7,5,9],

//   [9,2,8,  7,1,5,  4,6,3],
//   [3,5,7,  8,4,6,  1,9,2],
//   [4,6,1,  9,2,3,  5,8,7],

//   [8,7,6,  3,9,4,  2,1,5],
//   [2,4,3,  5,6,1,  9,7,8],
//   [1,9,5,  2,8,7,  6,3,4]
// ]
// Rules for validation

// Data structure dimension: NxN where N > 0 and √N == integer
// Rows may only contain integers: 1..N (N included)
// Columns may only contain integers: 1..N (N included)
// 'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)

// --- My Solution :
// var Sudoku = function(data)
// {
//   //   Private methods
//   // -------------------------
//   let testMethod = function() {
//     console.log(data)
//     if(data.length<2 && data[0] == 1) return true
//     if(data.length<2) return false
//     for (let i=0; i<data.length;i++) {
//         if (data.length !== data[i].length) return false
//          const verifArray = new Set(data[i])
//         if (verifArray.size !== data[i].length) return false
//       }
//     let N = data.length
//     let petitN = Math.sqrt(N)
//     let toPush = []
//     for (let o=0; o<petitN; o++){
//         for (let m=0; m<petitN; m++){
//             for (let i=0; i<petitN; i++) {
//                 let array = data[i]
//                 for (let k =0 ; k<petitN; k++){
//                     toPush.push(array.shift())
//                 }
//             }
//             const verifToPush = new Set(toPush)
//             if(toPush.length !== verifToPush.size) return false
//             toPush=[]
//         }
//         for(let n=0; n<petitN; n++){data.shift()}
//     }
//     return true
//   }

//   //   Public methods
//   // -------------------------
//   return {
//     isValid: function() {

//       return testMethod()
//     }
//   };
// };

// --- Best Practice :
// function Sudoku(board) {
//   var sqrt = Math.sqrt(board.length);
//   var esum = board.length * (board.length + 1) / 2;

//   function checkDigits(selection) {
//     return selection.reduce(function(sum, digit) {
//       return typeof digit == 'number' ? sum + digit : NaN;
//     }, 0) == esum;
//   }

//   return {
//     isValid: function() {
//       return board.every(function(row, i) {
//         return checkDigits(row) &&
//                checkDigits(board.map(function(row) {
//                  return row[i];
//                })) &&
//                checkDigits(board.map(function(_, j) {
//                  return board[(i/sqrt|0)*sqrt+(j/sqrt|0)][i%sqrt*sqrt+j%sqrt];
//                }));
//       });
//     }
//   };
// }

// --- Comment :
// Really ugly, but worked. This nested for loops are a nightmare. I Should have use the privates methods more. Need to review this one.
//          ----           ----           -----           ----            ----            ----            ----

// --- 20 Feb 23 ---
// --- Instruction :
//Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

// --- My Solution :
//
// function sumStrings(a,b) {
//   const lengthAB = a.length < b.length ? b.length : a.length
//   const aArr = a.split("").map(item => Number(item))
//   const bArr = b.split("").map(item => Number(item))
//   const arrToReverseFinal = []
//   let leftToAdd = false
//   let calcul = (sumToPush) => {
//     console.log(leftToAdd)
//     if (leftToAdd) {
//       sumToPush = sumToPush + leftToAdd
//       leftToAdd = false
//     }
//   if (sumToPush == 0 && aArr.length == 0 && bArr.length == 0) return
//   else if (sumToPush<10) arrToReverseFinal.push(sumToPush)
//   else {
//       console.log("pushing")
//       arrToReverseFinal.push(sumToPush - 10)
//       leftToAdd = 1
//   }
//   }

//   for (i=1; i<=lengthAB+1; i++) {
//     let sumToPush
//     if (aArr.length == 0 && bArr.length == 0) {
//       sumToPush = 0
//     }
//     else if (aArr.length == 0 || bArr.length == 0 ) {
//     sumToPush = aArr.length == 0 ? bArr.pop() : aArr.pop()
//     }
//     else sumToPush = aArr.pop()+bArr.pop()

//     calcul(sumToPush)
//   }
//   return(arrToReverseFinal.reverse().join(""))
// }

// --- Best Practice :
//  function sumStrings(a,b) {
//   return (BigInt(a) + BigInt(b)).toString();
// }

// --- Best Practice 2 :
// String.prototype.reverse = function() {
//   return this.split('').reverse().join('');
// }

// function sumStrings(a,b) {
//   a = a.reverse(); b = b.reverse();
//   var carry = 0;
//   var index = 0;
//   var sumDigits = [];
//   while (index < a.length || index < b.length || carry != 0) {
//     var aDigit = index < a.length ? parseInt(a[index]) : 0;
//     var bDigit = index < b.length ? parseInt(b[index]) : 0;
//     var digitSum = aDigit + bDigit + carry;
//     sumDigits.push((digitSum % 10).toString());
//     carry = Math.floor(digitSum / 10);
//     index++;
//   }
//   sumDigits.reverse();
//   while (sumDigits[0] == '0') sumDigits.shift();
//   return sumDigits.join('');
// }

// --- Comment :
// Pas Simple !

//          ----           ----           -----           ----            ----            ----            ----

// --- 21 Feb 23 ---
// --- Instruction :
//To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

// You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

// The professor will give you a simple math expression, of the form

// [number][op][number]=[number]
// He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

// Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

// Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.
// --- My Solution :
//
// function solveExpression(exp) {
//   const mathArr = exp.split('=')
//   const op = mathArr[0].split('')
//   const result = mathArr[1]
//   const possibleNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//   if (op.includes("+")) {
//     const leftOp = op.filter((item, index) => index < op.indexOf("+"))
//     const rightOp = op.filter((item, index) => index > op.indexOf("+"))
//   }
//   else if (op.includes("*")) {
//     const leftOp = op.filter((item, index) => index < op.indexOf("*"))
//     const rightOp = op.filter((item, index) => index > op.indexOf("*"))
//   }
//   else {

//   }

//   for (num of possibleNum){

//   }
// }

// --- Best Practice :
//

// --- Comment :

//          ----           ----           -----           ----            ----            ----            ----

// --- 1 March ---
// --- Instruction :
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
// --- My Solution :
// let result = [];
// function formatDuration(seconds) {
//   if (seconds == 0) return "now";
//   else {
//     getYears(seconds);
//   }
//   let finalResult = [];
//   for (let i = 0; i < result.length; i++) {
//     if (i == result.length - 2) {
//       finalResult.push(result[i] + " and ");
//     } else if (i !== result.length - 1 && i !== result.length - 2) {
//       finalResult.push(result[i] + ", ");
//     } else finalResult.push(result[i]);
//   }
//   result = [];
//   return finalResult.join("");
// }

// const getYears = (secs) => {
//   const toYear = 31536000;
//   const year = Math.floor(secs / toYear);
//   if (year == 0) getDays(secs);
//   else {
//     result.push(year == 1 ? `1 year` : `${year} years`);
//     getDays(secs % toYear);
//   }
// };
// const getDays = (secs) => {
//   const toDay = 86400;
//   const day = Math.floor(secs / toDay);
//   if (day !== 0) {
//     result.push(day == 1 ? `1 day` : `${day} days`);
//     getDays(secs % toDay);
//   } else getHour(secs);
// };
// const getHour = (secs) => {
//   const toHour = 3600;
//   const hour = Math.floor(secs / toHour);
//   if (hour !== 0) {
//     result.push(hour == 1 ? `1 hour` : `${hour} hours`);
//     getMinutes(secs % toHour);
//   } else getMinutes(secs);
// };
// const getMinutes = (secs) => {
//   const toMinutes = 60;
//   const minute = Math.floor(secs / toMinutes);
//   if (minute !== 0) {
//     result.push(minute == 1 ? `1 minute` : `${minute} minutes`);
//     getSecs(secs % toMinutes);
//   } else getSecs(secs);
// };
// const getSecs = (secs) => {
//   if (secs == 1) result.push("1 second");
//   else if (secs !== 0) result.push(`${secs} seconds`);
// };

// --- Best Practice :
//var formatDuration = (function () {

// return function formatDuration (seconds) {
//   return [{name: 'year',   size: 365 * 24 * 60 * 60 * 1},
//           {name: 'day',    size:       24 * 60 * 60 * 1},
//           {name: 'hour',   size:            60 * 60 * 1},
//           {name: 'minute', size:                 60 * 1},
//           {name: 'second', size:                      1}].
//           reduce(parse, { parts: [], seconds: seconds }).
//           parts.
//           reduce(join, 'now');
// };

// function parse (result, part) {
//   var quantity = Math.floor(result.seconds / part.size);
//   if (quantity > 0) {
//     result.seconds -= quantity * part.size;
//     result.parts.push(quantity + ' ' + part.name + (quantity == 1 ? '' : 's'));
//   }
//   return result;
// }

// function join (result, part, index, arr) {
//   switch (index) {
//     case 0: return part;
//     case arr.length - 1: return result + ' and ' + part;
//     default: return result + ', ' + part;
//   }
// }

// }());

// --- Comment :

//          ----           ----           -----           ----            ----            ----            ----

// --- 03 March ---
// --- Instruction :
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// --- My Solution :
//

// function longestConsec(strarr, k, arr = []) {
//   if (strarr.length == 0 || k > strarr.length || k <= 0) return "";
//   if (strarr.length == k) {
//     arr.push(strarr.slice(0, k).join("").split(""));
//     return arr.sort((a, b) => b.length - a.length)[0].join("");
//   }
//   arr.push(strarr.slice(0, k).join("").split(""));
//   strarr.shift();
//   return longestConsec(strarr, k, arr);
// }

// --- Best Practice :
// function longestConsec(strarr, k) {
// 		var longest = "";
// 		for(var i=0;k>0 && i<=strarr.length-k;i++){
// 			var tempArray = strarr.slice(i,i+k);
// 			var tempStr = tempArray.join("");
// 			if(tempStr.length > longest.length){
// 				longest = tempStr;
// 			}
// 		}
// 		return longest;
// }

// --- Comment :
// --- I watched the video from web dev cody on recurives fonctions, so i wanted to try to solve this on with it. It happened to work. It's kind of elegant.

//          ----           ----           -----           ----            ----            ----            ----
// --- 4 March ---
// --- Instruction :
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// --- My Solution :
//
// function add(a, b) {
//   const arrA = a.split("");
//   const arrB = b.split("");
//   let result = [];
//   for (
//     let i = 0, sum = [], result = [];
//     i < (a.length > b.length ? a.length : b.length);
//     i++
//   ) {
//     if (sum.length == 0) {
//       sum = (Number(arrA.splice(-1)) + Number(arrB.splice(-1)))
//         .toString()
//         .split("");
//     } else {
//       sum = (Number(arrA.splice(-1)) + Number(arrB.splice(-1)) + Number(sum[0]))
//         .toString()
//         .split("");
//     }
//     result.push(sum.pop());
//     if (arrA.length == 0 && arrB.length == 0 && sum.length !== 0) {
//       result.push(sum.pop());
//     }
//   }
//   return result.reverse().join("");
// }

// --- Best Practice :
// function add (a, b) {
// var res = '', c = 0
// a = a.split('')
// b = b.split('')
// while (a.length || b.length || c) {
//   c += ~~a.pop() + ~~b.pop()
//   res = c % 10 + res
//   c = c > 9
// }
// return res

// --- Comment :
// In some browsers, using ~~ can faster than using Math.floor.

//          ----           ----           -----           ----            ----            ----            ----

// --- 8 March 23 ---
// --- Instruction :
// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// --- My Solution :
//
// let validateBattlefield = (field) => {
//   const adjencylist = makeAdjencyList(field);
//   let count = 0;
//   let ships = {};
//   ships.result = {
//     battleship: 0,
//     cruiser: 0,
//     destroyer: 0,
//     submarine: 0,
//   };
//   let visited = new Set();
//   let i = 1;
//   for (let node in adjencylist) {
//     ships[i] = new Set();

//     let shipCount = explore(adjencylist, node, visited, ships, i);
//     if (shipCount === true) {
//       count += 1;
//     }

//     const check = checkForm(ships[i]);
//     if (check == false) return false;

//     if (ships[i].size === 1) {
//       ships.result.submarine += 1;
//     } else if (ships[i].size === 2) {
//       ships.result.destroyer += 1;
//     } else if (ships[i].size === 3) {
//       ships.result.cruiser += 1;
//     } else if (ships[i].size === 4) {
//       ships.result.battleship += 1;
//     }
//     i++;
//   }
//   if (count !== 10) return false;
//   if (
//     ships.result.submarine == 4 &&
//     ships.result.destroyer == 3 &&
//     ships.result.cruiser == 2 &&
//     ships.result.battleship == 1
//     )
//     return true;
//     else return false;
//   };
//   const explore = (graph, current, visited, ships, i) => {
//     if (visited.has(String(current))) return false;
//     visited.add(String(current));
//     ships[i].add(String(current));
//     for (neighbor of graph[current]) {
//       explore(graph, neighbor, visited, ships, i);
//     }
//     return true;
//   };

//   function makeAdjencyList(field) {
//     let cells = {};
//     for (let i = 0; i < field.length; i++) {
//       for (j = 0; j < field[i].length; j++) {
//         if (field[i][j] == 1) {
//           cells[[i, j]] = [];
//           if (field[i] && field[i][j + 1] == 1) cells[[i, j]].push([i, j + 1]);
//           if (field[i] && field[i][j - 1] == 1) cells[[i, j]].push([i, j - 1]);
//           if (field[i + 1] && field[i + 1][j] == 1)
//           cells[[i, j]].push([i + 1, j]);
//           if (field[i - 1] && field[i - 1][j] == 1)
//           cells[[i, j]].push([i - 1, j]);
//           if (field[i + 1] && field[i + 1][j + 1] == 1)
//           cells[[i, j]].push([i + 1, j + 1]);
//           if (field[i - 1] && field[i - 1][j + 1] == 1)
//           cells[[i, j]].push([i - 1, j + 1]);
//           if (field[i + 1] && field[i + 1][j - 1] == 1)
//           cells[[i, j]].push([i + 1, j - 1]);
//           if (field[i - 1] && field[i - 1][j - 1] == 1)
//           cells[[i, j]].push([i - 1, j - 1]);
//         }
//       }
//     }
//     return cells;
//   }
//   const checkForm = (set) => {
//     const arrfromSet = [...set];
//     const tuples = arrfromSet.map((item) => item.split(","));
//     let check = [];
//     if (tuples.length > 2) {
//       for (let i = 0; i < tuples.length; i++) {
//         if (tuples[i + 1]) {
//           let pairString = [];
//           pairString.push(tuples[i][0] - tuples[i + 1][0]);
//           pairString.push(tuples[i][1] - tuples[i + 1][1]);
//           check.push(pairString.join(","));
//         }
//       }
//     }
//     if (check.length > 0) {
//       const filteredCheck = check.filter((item, index) => {
//         if (item === check[index + 1]) {
//           return true;
//         } else if (item === check[index - 1]) return true;
//         else return false;
//       });
//       if (check.length !== filteredCheck.length) return false;
//     }
//     return true;
//   };

// --- Best Practice :
// function validateBattlefield(field) {
//   var hit = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
//   for (var ships = [10,0,0,0,0], row = 0; row < 10; row++) {
//     for (var col = 0; col < 10; col++) {
//       if ( hit(row,col) ) {
//         if ( hit(row-1, col-1) || hit(row-1, col+1) ) return false; // Corner is touching
//         if ( hit(row-1, col  ) && hit(row  , col-1) ) return false; // Side is touching
//         if ( ( field[row][col] += hit(row-1, col) + hit(row, col-1) ) > 4 ) return false; // Ship is too long
//         ships[field[row][col]]++; ships[field[row][col] - 1]--;
//   } } }
//   return [0,4,3,2,1].every((s,i) => s == ships[i]);
// }

// --- Comment :
// I don't even really understand this code...
//          ----           ----           -----           ----            ----            ----            ----

// --- DATE ---
// --- Instruction :
// General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy but they are all encrypted. Those messages are crucial to getting the jump on the enemy and winning the war. Luckily intelligence also captured an encoding device as well. However even the smartest programmers weren't able to crack it though. So the general is asking you , his most odd but brilliant programmer.

// You can call the encoder like this.

// console.log (device.encode ('What the hell')) ;
// Our cryptoanalysts kept poking at it and found some interesting patterns.
// --- My Solution :
//

// device.decode = function (w) {
//   const encryptKey =
//     "abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH";

//   let letters = w.split("");

//   let result = [];
//   for (i = 0; i < letters.length; i++) {
//     let letter = "";
//     let char = "!@#$%^&*()_+-";
//     let index = encryptKey.indexOf(letters[i]) - i - 1;
//     if (char.includes(letters[i])) {
//       result.push(letters[i]);
//     } else if (index < 0) {
//       letter = encryptKey[encryptKey.length + index];
//     } else if (index > 66) {
//       letter = encryptKey[index - encryptKey.length];
//     } else letter = encryptKey[index];
//     result.push(letter);
//   }
//   return result.join("");
// };

// --- Best Practice :
// device.decode = function (w) {
//   let key = 'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH',
//   len = key.length,
//   pos = null;

// w = w.split('').map(function(symbol, idx) {
// pos = key.indexOf(symbol);
// return pos === -1 ? symbol : key.substr(pos - idx - 1, 1);
// }).join('');

// return w ;
// }

// --- Comment :
// Loop + chained if are not best practice !
//          ----           ----           -----           ----            ----            ----            ----

// Binomial Expansion
// The purpose of this kata is to write a program that can do some algebra.

// Write a function expand that takes in an expression with a single, one character variable, and expands it.
// The expression is in the form (ax+b)^n where a and b are integers which may be positive or negative,
// x is any single character variable, and n is a natural number. If a = 1, no coefficient will be placed in front
//  of the variable. If a = -1, a "-" will be placed in front of the variable.

// The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are the coefficients
//  of the term, x is the original one character variable that was passed in the original expression and b, d, and f, are the powers
//   that x is being raised to in each term and are in decreasing order.

// If the coefficient of a term is zero, the term should not be included. If the coefficient of a term is one,
// the coefficient should not be included. If the coefficient of a term is -1, only the "-" should be included.
// If the power of the term is 0, only the coefficient should be included. If the power of the term is 1, the
// caret and power should be excluded.

// const expand = (equationString) => {
//   const array = equationString.split("^");
//   const expression = array[0]
//     .split("")
//     .filter((item) => item !== "(" && item !== ")");
//   const coefficient = array[1];
//   const result = [];
//   console.log(expression);
//   console.log(coefficient);
//   for (i = 0; i < coefficient; i++) {
//     result.push();
//   }
// };
// console.log(Math.pow(2, 3));
// expand("(x-1)^2");

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

// -------------------
// Screen Locking Patterns
// You might already be familiar with many smartphones that allow you to use a geometric pattern as a security measure. To unlock the device, you need to connect a sequence of dots/points in a grid by swiping your finger without lifting it as you trace the pattern through the screen.

// The image below has an example pattern of 7 dots/points: (A -> B -> I -> E -> D -> G -> C).

// lock_example.png

// For this kata, your job is to implement a function that returns the number of possible patterns starting from a given first point, that have a given length.

// More specifically, for a function countPatternsFrom(firstPoint, length), the parameter firstPoint is a single-character string corresponding to the point in the grid (e.g.: 'A') where your patterns start, and the parameter length is an integer indicating the number of points (length) every pattern must have.

// For example, countPatternsFrom("C", 2), should return the number of patterns starting from 'C' that have 2 two points. The return value in this case would be 5, because there are 5 possible patterns:

// (C -> B), (C -> D), (C -> E), (C -> F) and (C -> H).

// Bear in mind that this kata requires returning the number of patterns, not the patterns themselves, so you only need to count them. Also, the name of the function might be different depending on the programming language used, but the idea remains the same.

// Rules
// In a pattern, the dots/points cannot be repeated: they can only be used once, at most.
// In a pattern, any two subsequent dots/points can only be connected with direct straight lines in either of these ways:
// Horizontally: like (A -> B) in the example pattern image.
// Vertically: like (D -> G) in the example pattern image.
// Diagonally: like (I -> E), as well as (B -> I), in the example pattern image.
// Passing over a point between them that has already been 'used': like (G -> C) passing over E, in the example pattern image. This is the trickiest rule. Normally, you wouldn't be able to connect G to C, because E is between them, however when E has already been used as part the pattern you are tracing, you can connect G to C passing over E, because E is ignored, as it was already used once.

// The sample tests have some examples of the number of combinations for some cases to help you check your code.

// Haskell Note: A data type Vertex is provided in place of the single-character strings. See the solution setup code for more details.

// Fun fact:

// In case you're wondering out of curiosity, for the Android lock screen, the valid patterns must have between 4 and 9 dots/points. There are 389112 possible valid patterns in total; that is, patterns with a length between 4 and 9 dots/points.
