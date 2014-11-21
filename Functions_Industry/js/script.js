//Jason Scott industry functions example 11/20/2014

alert("We need to see if that new graphic logo you designed will fit in the header box for the web page.")


var h = prompt("Type the height in pixels");

while(isNaN(h) || h===""){

    h = prompt("Please enter a number!");
}console.log(h);


var w = prompt("Now let's enter the width of the logo in pixels");


while(isNaN(w) || w===""){

    w = prompt("Please enter a number!");
}console.log(w);

var total = calcArea(h,w);

function calcArea(w, h){
    var area = w * h
    return area;

}
alert("The image has a pixel area of " +total);

alert("The header area on your web page is 120 X 600 pixels.");


if (total <=72000){
    alert("Ok good. Looks like your image will fit in the header place!.");
    console.log("Success");

}
else
    alert("Ok. It looks like that image won't fit. You better resize it bud.");
console.log("Too big. ");