/**
 * Created by jasonscott on 11/13/14.
 */

//Conditionals Industry
//Jason Scott Nov 13th 2014

//Let's see if you need to upgrade your end users anti virus software

alert("Let's see if you need to upgrade your end users anti virus software.");

//Let's assume that all users are using the same version of software

var lastCheck = prompt("Have you checked for an update in the last six months?");

if (lastCheck === ""){
    lastCheck = prompt("Please type yes or no if you checked the software versions.");
}

if (lastCheck === "no"){
    alert("Ok. It looks like the software may be out of tolerance. We need check your users software versions.");
    console.log(lastCheck)
    var version = prompt("What version are they currently running?");
    if (version === ""){
        version = prompt("Please type the version they are currently running")
    }
}

