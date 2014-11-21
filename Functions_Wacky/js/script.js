/**
 * Created by jasonscott on 11/20/14.
 */
//Jason Scott wacky functions example 11/20/2014

alert("Will that MoonBounce fit in your back yard???")


var w = prompt("How many feet wide is your yard?");

while(isNaN(w) || w===""){

    w = prompt("Please enter a number!");
}console.log(w);


var l = prompt("How many feet long is your yard?");


while(isNaN(l) || l===""){

    l = prompt("Please enter a number!");
}console.log(l);

var yard = calcArea(w,l);

function calcArea(w, l){
    var area = w * l
    return area;

}
alert("Your yard is" +yard+ "square feet!");

alert("That moon bounce is 800 square feet");


if (yard >=800){
    alert("WHOOO HOOO!!! MOUNBOUNCE!.");
    console.log("MOONBOUNCE!");

}
else
    alert("The moon bounce is too big for your yard. EPIC FAIL");
console.log("EPIC FAIL");