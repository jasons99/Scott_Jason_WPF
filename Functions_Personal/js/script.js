/**
 * Created by jasonscott on 11/20/14.
 */

//Jason Scott personal functions example 11/20/2014
    //Picking Lottery numbers

alert("Let's pick some lottery numbers for this week.")
alert("We will determine a range of numbers to choose from and the computer will pick them out for us.")

var min = prompt("Type the first number in the range. any number please.");

while(isNaN(min) || min===""){

    min = prompt("Please enter a number! Numeric value only!");
}console.log(min);


var max = prompt("Now let's select the maximum number in our range.");

alert("The computer will now give us 20 different numbers for our lottery picks this week.")

while(isNaN(max) || max===""){

    max = prompt("Please enter a number! Numeric value only!");
}console.log(max);

var result=randomizer(min,max)


function randomizer(minNumber,maxNumber){

    var randomNumber = Math.round(Math.random()*(maxNumber-minNumber)+ Number(minNumber));
    return randomNumber;
    console.log(randomNumber)
}

for(var y=0; y<20; y++){

    alert(randomizer(min,max));


}
