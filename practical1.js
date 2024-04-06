// Practical1 : Write  a  JavaScript  to  demonstrate  properties  and  methods  of String reference Type 
// Name: Alok Swain
// Enrollment No: 202203103510229
// Batch:B.Tech CSE

//String methods 

//length
var str = "Hello";
console.log(str.length);

//concate
str2 = "word";
str3 = str.concat(" ",str2);
console.log(str3);

//trim
str3 = "    hello   ";
newStr = str3.trim();
console.log(newStr);

//split
let text = "a,b,c,d,e,f";
let myArray = text.split(",");
console.log(myArray);

// toLower
str = "HELL";
newStr = str.toLocaleLowerCase();
console.log(newStr);

// toUpper
let myString = "SUUUUUU";
let myNewString = myString.toUpperCase();
console.log(myNewString);

// replace 
str = "Hello World";
newStr = str.replace("World" , "User");
console.log(newStr);

//indexof
text = "Please locate where 'locate' occurs!";
index = text.indexOf("locate");
console.log(index);

//search
text = "Please locate where 'this' occurs!";
console.log(text.search("this"));
