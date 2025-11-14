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


contacts.push({
    name: "Shawn Carlos A. Reyes",
    phone: "09166994244",
    email: "shawn.reyes@olivarezcollegetagaytay.edu.ph"
});

contacts.find(contact => contact.name === "Helen Richards").phone = "0800 2222";

contacts = contacts.filter(contact => contact.name !== "Raja Villarreal");

console.log("First Contact:");
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log("\nLast Contact:");
console.log(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);