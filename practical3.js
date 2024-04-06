// Practical3 : Write a JavaScript to demonstrate properties and methods of Date reference Type. 
// Name: Alok Swain
// Enrollment No: 202203103510229
// Batch:B.Tech CSE

//Create object 
var today = new Date();

//fulldate with time
console.log("Full time : ",today);
//only date
console.log("Current Date : ",today.getDate());
//only year
console.log("Current Year : ",today.getFullYear());
//month but month starts with 0
console.log("Current Month : ",today.getMonth() + 1);
//day
console.log("Current Day : ",today.getDay());
//hour
console.log("UTC Hour : ",today.getUTCHours());
//minutes
console.log("UTC Minutes : ",today.getUTCMinutes());
//seconds
console.log("UTC Second : ",today.getUTCSeconds());
//miliseconds
console.log("UTC Milisecond : ",today.getUTCMilliseconds());

// Format 
console.log("ISO Format : ",today.toISOString());
console.log("UTC Format : ",today.toUTCString());

// to set year
today.setFullYear(2026);
console.log("UTC Second : ",today.getFullYear());