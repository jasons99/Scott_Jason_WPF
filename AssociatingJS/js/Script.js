

alert("Welcome!")

var name = prompt ("Please type your name");

alert ("Welcome "+name+"! Let's see how old you are.")
var yearBorn = prompt ("What year were you born?");

console.log (yearBorn);

var currentYear = 2014;

var age = currentYear - yearBorn;

alert(name+" you are "+age+" years old.");

//how old will user be in the future.....


var yearsMore = prompt("How many years in the future would you like to know?");

console.log (yearsMore);

var futureAge = age + Number(yearsMore) ;

console.log(futureAge);

console.log("You will be "+futureAge+" in " +yearsMore+" years.");

alert("You will be "+futureAge+" in " +yearsMore+" years.")