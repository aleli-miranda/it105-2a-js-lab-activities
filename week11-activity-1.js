// Original contacts array
let contacts = [
  { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk" },
  { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
  { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

// 1. Add a new contact
contacts.push({ name: "luka doncic", phone: "0913 531 3030", email: "lukadoncic@urna.ca" });

// 2. Update Helen Richards' phone number
const helen = contacts.find(c => c.name === "Helen Richards");
if (helen) helen.phone = "0800 2222";

// 3. Delete Raja Villarreal
contacts = contacts.filter(c => c.name !== "Raja Villarreal");

// 4. Display first and last contact
if (contacts.length) {
  [contacts[0], contacts[contacts.length - 1]].forEach(c =>
    console.log(`${c.name} / ${c.phone} / ${c.email}`)
  );
} else {
  console.log("The contacts array is empty!");
}

// Final array (debug)
console.log(contacts);
