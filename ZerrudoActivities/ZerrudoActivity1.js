let contacts = [
    { "name": "Maxwell Wright", "phone": "(0191) 719 6495", "email": "Curabitur.egestas.nunc@nonummyac.co.uk" },
    { "name": "Raja Villarreal", "phone": "0866 398 2895", "email": "posuere.vulputate@sed.com" },
    { "name": "Helen Richards", "phone": "0800 1111", "email": "libero@convallis.edu" }
];

contacts.push({ "name": "Maisie Haley", "phone": "0913 531 3030", "email": "risus.Quisque@urna.ca" });

for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === "Helen Richards") {
        contacts[i].phone = "0800 2222";
    }
}

contacts = contacts.filter(contact => contact.name !== "Raja Villarreal");

if (contacts.length > 0) {
    const firstContact = contacts[0];
    console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);

    const lastIndex = contacts.length - 1;
    const lastContact = contacts[lastIndex];
    console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
} else {
    console.log("The contacts array is empty!");
}

console.log(contacts);