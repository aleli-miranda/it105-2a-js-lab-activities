let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];


//INSTRUCTIONS
/*
1.  ADD a new contact using the appropriate array method.
The new contact is: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.
*/
contacts.push({
 name: "Maisie Haley",
 phone: "0913 531 3030",
 email: "risus.Quisque@urna.ca"
});


/*
2. UPDATE the phone number for Helen Richards to: 0800 2222.
*/
contacts[2].phone = "0800 2222";


/*
3.  DELETE the contact for Raja Villarreal from the array.
*/
contacts.splice(1, 1);



// 4. Display the first and last student,
// again in the format: name / phone / email.
// Use the length property of the array to determine the index of the last element.
// Remember that the array elements are indexed starting at 0

console.log(contacts[0].name + " / " +
 contacts[0].phone + " / " +
 contacts[0].email
);

console.log(
 contacts[contacts.length - 1].name + " / " +
 contacts[contacts.length - 1].phone + " / " +
 contacts[contacts.length - 1].email
);