//Objects
/*
Question 1: Create an object that describes a train ticket and
store it in the ticket variable. The object must have three fields:

-starting station (key name from, give the name of the nearest station in your area as a value);
-end station (key name to, give any other station within 100km as a value);
-the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).

The object must be created using curly brackets,
in which all created fields will be listed immediately.
Then display the values of all fields of the ticket on the console.
*/
//start code here

// Question 1
let ticket = {
  from: "Shinjuku Station",
  to: "Yokohama Station",
  price: 920
};

console.log("From: " + ticket.from);
console.log("To: " + ticket.to);
console.log(`Price: ¥${ticket.price.toFixed(0)}`);

/*Question 2:
Declare an empty object and save it to a person variable.
Using dot notation, add the name and surname fields to the
object by entering your data as values.
Try to display the individual fields on the console. */

let person = {};

person.name = "Carlo";
person.surname = "Creus";

console.log("Name: " + person.name);
console.log("Surname: " + person.surname);