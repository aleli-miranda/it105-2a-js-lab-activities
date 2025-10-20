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

// 1. Add new contact
contacts.push({
    name: "Gabriel Velasquez",
    phone: "0913 531 3030",
    email: "gabriel.velasquez@olivarezcollegetagaytay.edu.ph"
});

// 2. Update Helen Richards' phone number
contacts.find(contact => contact.name === "Helen Richards").phone = "0800 2222";

// 3. Delete Raja Villarreal
contacts = contacts.filter(contact => contact.name !== "Raja Villarreal");

// 4. Display first and last contact
console.log("First Contact:");
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log("\nLast Contact:");
console.log(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);