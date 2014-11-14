/**
 * Created by jasonscott on 11/13/14.
 */
/**
 * Created by jasonscott on 11/13/14.
 */
//Conditionals Personal
//Jason Scott Nov 13th 2014
//Can you go to the Bruce Springsteen concert next weekend?

alert("Let's see if you can go to the Bruce Springsteen concert next weekend!");

var work = prompt("Do you have to work next weekend?");

if (work === ""){
    work = prompt("Do you have to work? Please type yes or no.");
}

if (work === "no"){
    alert("Great! Looks like you're free to go to the show! But wait. First we have to see if you can afford to go.");
    console.log(work)
    var myMoney = prompt("How much cash do you have?");
if (myMoney === ""){
    myMoney = prompt("Please type How much cash you have");
}
}
else
    alert("Sorry pal. You gotta go to work. :(");

console.log("Concert is a no go.");


var ticketPrice = 200.00

if (myMoney >=ticketPrice){
    alert("Great! You've got enough to buy those tickets!")
    console.log(myMoney);
    alert("Enjoy the show!!!");
    console.log("Enjoy the show!");
}
else
    alert("Sorry guy. Looks like you can't afford to go.");
console.log("You don't have enough money.");



