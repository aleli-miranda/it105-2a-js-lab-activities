// Original contacts array
let contacts = [
  { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk" },
  { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
  { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

// 1. Add a new contact using the push() method
contacts.push({ name: "Maisie Haley", phone: "0913 531 3030", email: "risus.Quisque@urna.ca" });

// 2. Update the phone number for Helen Richards
// Loop through the array to find and update the contact
for (let i = 0; i < contacts.length; i++) {
  if (contacts[i].name === "Helen Richards") {
    contacts[i].phone = "0800 2222";  // Update the phone number
  }
}

// 3. Delete the contact for Raja Villarreal
// Use filter() to create a new array without the specified contact
contacts = contacts.filter(contact => contact.name !== "Raja Villarreal");

// 4. Display the first and last contact in the format: name / phone / email
if (contacts.length > 0) {
  // First contact (index 0)
  const firstContact = contacts[0];
  console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);
  
  // Last contact (use length property to get the index)
  const lastIndex = contacts.length - 1;  // Remember, arrays are 0-based
  const lastContact = contacts[lastIndex];
  console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
} else {
  console.log("The contacts array is empty!");
}

// Final array for reference (optional debug output)
console.log(contacts);