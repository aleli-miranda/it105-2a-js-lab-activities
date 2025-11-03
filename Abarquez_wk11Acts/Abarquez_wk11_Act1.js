let contacts = [{
name: "Maxwell Wright",
phone: "0191 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"}, 
{
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"}, 
{
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"}];

let newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
};

console.log("----------Number 1: Add contact---------");
contacts.push(newContact);
console.log(`Name: ${contacts[0].name} / Phone: ${contacts[0].phone} / Email: ${contacts[0].email}`);
console.log(`Name: ${contacts[1].name} / Phone: ${contacts[1].phone} / Email: ${contacts[1].email}`);
console.log(`Name: ${contacts[2].name} / Phone: ${contacts[2].phone} / Email: ${contacts[2].email}`);
console.log(`Name: ${contacts[3].name} / Phone: ${contacts[3].phone} / Email: ${contacts[3].email}`);

console.log("----------Number 2: Update number of Helen---------");
const indexToUpdate = 2; 
contacts[indexToUpdate].phone = '0800 2222';
console.log(contacts[2]);

console.log("----------Number 3: Delete Raja---------");
let n1 = contacts.slice(0,1);
let n2 = contacts.slice(2);
let n3 = n1.concat(n2);
console.log(n3[0]);
console.log(n3[1]);
console.log(n3[2]);

console.log("----------Number 4: Display first and last---------");
console.log(`First Contact: ${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`Last Contact: ${contacts[3].name} / ${contacts[3].phone} / ${contacts[3].email}`);

console.log("----------Number 5: Show index of the last---------");
let newConInd = contacts.indexOf(newContact);
console.log("The index of the last element is: " + newConInd);