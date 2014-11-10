/**
 * Created by jasonscott on 11/8/14.
 */
alert("Expression Assignment")
//Jason Scott Expression Assignment WPF

//Industry example
//Calculate how many trouble tickets for tech issues were submitted this month.

alert ("Let's calculate how many trouble tickets for tech issues were submitted this month.");
var weekOne = prompt ("How many trouble tickets were submitted the first week of this month?");

console.log (weekOne);

var weekTwo = prompt ("How many tickets were submitted the second week of this month?");

console.log (weekTwo)

var weekThree = prompt ("How many tickets were submitted the third week of this month?");

console.log (weekThree)

var finalWeek = prompt ("How many tickets were submitted the final week of this month?");

console.log (finalWeek)

var totalOrders =  (+weekOne) + (+weekTwo) + (+weekThree) + (+finalWeek);

alert(" There were "+totalOrders+" trouble tickets submitted this month.");

console.log (totalOrders);
