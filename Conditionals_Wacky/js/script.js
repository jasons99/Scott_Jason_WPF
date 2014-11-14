/**
 * Created by jasonscott on 11/13/14.
 */


//Conditionals Wacky
//Jason Scott Nov 13th 2014
//Who's car are we taking to the Springsteen concert?

alert("Ok so we are going to the Springsteen concert! And it looks like four of your friends are all coming too! This means we need to see who's car we are taking. ");
//There are 5 of you total going to the show

var totalPeople = 5
var jasonsTruck = prompt("How many people can fit in Jason's truck?");

if (jasonsTruck === ""){
    jasonsTruck = prompt("We need to know how many people can fit in your truck.");
}


}
if (jasonsTruck <totalPeople){
    alert("Sorry we need to take another vehicle. There are five of you total.");
    console.log(jasonsTruck)
    console.log("We need a different vehicle.")

    var carlsCar = prompt("What about Carl's car? How many can he fit?");
    if (carlsCar === ""){
        carlsCar = prompt("Please type How many people he can have ride in his car.");
    }
  