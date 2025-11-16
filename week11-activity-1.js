// Original contacts array
let contacts = [
  { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk" },
  { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
  { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

// 1. Add a new contact using the push() method
contacts.push({ name: "John Doe", phone: "123-456-7890", email: "john@example.com" });

// 2. Update the phone number for Helen Richards
// Loop through the array to find and update the contact
for (let i = 0; i < contacts.length; i++) {
  if (contacts[i].name === "Helen Richards") {
    contacts[i].phone = "0800 2222"; // Updated phone number
    break;
  }
}
// 3. Delete the contact for Raja Villarreal
// Use filter() to create a new array without the specified contact
contacts = contacts.filter(contact => contact.name !== "Raja Villarreal");

// 4. Display the first and last contact in the format: name / phone / email

  // First contact (index 0)
  console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
  // Last contact (use length property to get the index)
  console.log(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);
// Final array for reference (optional debug output)
console.log(contacts);
