// Original contacts array
let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

// 1. Add a new contact using the push() method
contacts.push({ 
  name: "Lebron James",
  phone: "0912 345 6789", 
  email: "kingjamesforever23@gmail.com"
});

// 2. Update the phone number for Helen Richards
contacts.find(contact => contact.name === "Helen Richards").phone = "0987 654 3210";

// 3. Delete the contact for Raja Villarreal
contacts = contacts.filter(contact => contact.name !== "Raja Villarreal");

// 4. Display the first and last contact in the format: name / phone / email
console.log("First Contact:");
console.log(`${contacts[0].name} | ${contacts[0].phone} | ${contacts[0].email}`);
console.log("\nLast Contact:");
console.log(`${contacts[contacts.length - 1].name} | ${contacts[contacts.length - 1].phone} | ${contacts[contacts.length - 1].email}`);
