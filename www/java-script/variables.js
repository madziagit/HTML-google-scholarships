
var n = 23;				// number
var b = true;			// boolean
var s = "Maciek";		// string

console.log("My favorite number is " + n);
console.log("My husband it " + s);

// 24 % 12  operator reszta z dzielenia 24/12 (modulo)
console.log(25 % 2 === 1);

// comparing numbers < > <= >=  ===  !==
console.log(24 !== 34);

// boolean - true/false; 0/1; like/unlike, etc
console.log(true && false || true && !false);

/*
multiline comment
*/

//string concateneation using  "+"
var firstName ="Julia";
var interest = "cats";
var hobby = "play video games";

var awesomeMessage = "Hi, my name is " + firstName + ". " + 
    "I love " + interest + ". " + 
    "In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);

// Camel case for variables names; e.g totalAfterTax

//Indexing -> starts from 0
console.log(firstName[0] === "J"); 


//escaping strings to avoid quotes in the quetes

console.log("The man whispered,\n\"please speak to me.\"");

/* special characters:
 \\ backslash
 \" double quote
 \' single quote
 \n new line
 \t tab
*/

// case-sensitive -> case (upper-/lowercase matters) -> ASCII codes

// null (value of nathing); undefined (absence of value); NaN (not a number)
var willBeUndefined;
var willBuNull = null;
var willBeNaN = 0 / 0;
console.log(willBeUndefined, willBuNull, willBeNaN);

