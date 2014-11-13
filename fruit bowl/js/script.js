var fruitBowl = ["peach", "pear", "apple", "banana"];

console.log(fruitBowl);

fruitBowl[0] = "pear";

console.log(fruitBowl);

console.log(fruitBowl.length);


//check item one
var numPears = 0;

if (fruitBowl[0] === "pear"){

    numPears ++;
}else{

    console.log("This fruit is not a pear");
}
//check item two
if (fruitBowl[1] === "pear"){

    numPears ++;
}else{

    console.log("This fruit is not a pear");
}


console.log(numPears);
//check item three
if (fruitBowl[2] === "pear"){

    numPears ++;
}else{

    console.log("This fruit is not a pear");
}
//check item four
if (fruitBowl[3] === "pear"){

    numPears ++;
}else{

    console.log("This fruit is not a pear");
}

var name = prompt("What is your name?");
console.log(name);

if (name === ""){

    name = prompt("Please enter your name.")
}

console.log(name);