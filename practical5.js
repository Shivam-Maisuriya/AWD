//Practical5 :  Create a regular expression to find pattern from the given text as follow: 1) All the words starting with 'A'. 2) All the words starting with consonants.
// Name: Alok Swain
// Enrollment No: 202203103510229
// Batch:B.Tech CSE

var text1 = "My Name Is User. I Am From Metaverse."
var text2 = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."

// 1. All the words starting with 'A'
let patternA = /\bA\w+\b/g;
let a = text1.match(patternA);
console.log(a);

// 2. All the words starting with consonants
let patternB = /\b[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]\w+\b/g
let b = text2.match(patternB);
console.log(b)