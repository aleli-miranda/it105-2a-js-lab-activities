// Initial contacts array
let contacts = [
  { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk" },
  { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
  { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

// 1. Add a new contact
contacts.push({
  name: "Maisie Haley",
  phone: "0913 531 3030",
  email: "risus.Quisque@urna.ca"
});

// 2. Update Helen Richards' phone number
const helen = contacts.find(contact => contact.name === "Helen Richards");
if (helen) {
  helen.phone = "0800 2222";
}

// 3. Remove Raja Villarreal from the contacts
contacts = contacts.filter(contact => contact.name !== "Raja Villarreal");

// 4. Display the first and last contact
if (contacts.length > 0) {
  const [firstContact] = contacts;
  const lastContact = contacts[contacts.length - 1];

  console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);
  console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
} else {
  console.log("The contacts array is empty!");
}

// Optional: Display the final contacts array
console.log("Final Contacts:", contacts);