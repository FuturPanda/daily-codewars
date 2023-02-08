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


function deleteNth(arr,n){
    let obj = {}
    let indexToRemove = []
    for (let i=0 ; i<arr.length; i++ ){
      if(!obj[arr[i]]) {
        obj[arr[i]] = 1
        console.log(`${i} : create 1 ${obj}`)
      }
      else if(obj[arr[i]] === n){
        indexToRemove.push(i)
      }
      else {
        obj[arr[i]] = ++obj[arr[i]]
        console.log(`${i} : added 1 ! ${obj}`)
        }
    } 
    for (let i=0 ; i<indexToRemove.length;i++) {
        arr.splice(indexToRemove[i]-i, 1)
    }
    console.log(indexToRemove)
    console.log(arr)
    return arr
  }
deleteNth([1,2,3,1,1,2,1,2,3,3,2,4,5,3,1], 3)  