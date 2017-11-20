
//if...else statement
var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}


var number = 6;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}


// else if statement

var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}


var musicians = 1;

// your code goes here
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}



var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "ballroom") {
    weapon = "poison"; 
} else if ( room === "gallery") {
    weapon = "trophy";
} else if (room === "billiards room") {
    weapon = "pool stick";
} else {
    weapon = "knife";
}

if (suspect === "Mr. Parkes") {
    solved = room === "dining room";
} else if (suspect === "Ms. Van Cleve") {
   solved = room === "gallery";
} else if (suspect === "Mrs. Sparr") {
   solved = room === "billiards room";
} else {
    solved = room === "ballroom";
}

if (solved) {
	console.log(suspect + " did it in the "+ room + " with the " + weapon + "!");
}
