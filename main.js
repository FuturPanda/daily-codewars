// 31 Janvier -- Write a function, which takes a non-negative integer (seconds) as input and 
//returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable(seconds) {
    let secs = seconds%60
    let mins = seconds / 60
    let hours = mins / 60
    // mins < 1 ? mins = 00 : (mins = Math.floor(mins)  )
    // hours < 1 ? hours = 00 : hours = Math.floor(hours)
    // seconds%60 === 0 ? secs = 00 : secs = seconds%60 * 60 / 100
// console.log(seconds)
//     console.log(seconds%60)
//     console.log (mins, hours)

    console.log ( `${hours < 10 ? hours = '0'+hours : hours = hours }:${mins < 10 ? mins = 0+mins : mins = mins}:${secs < 10 ? secs = 0+secs : secs = secs}`)

}



// humanReadable(0) // '00:00:00'
// humanReadable(59) // '00:00:59'
// humanReadable(60) // '00:01:00'
humanReadable(90) // '00:01:30'
// humanReadable(3599) // '00:59:59'
// humanReadable(3600) // '01:00:00'
// humanReadable(45296) // '12:34:56'
// humanReadable(86399) // '23:59:59'
// humanReadable(86400) // '24:00:00'
// humanReadable(359999) // '99:59:59'
