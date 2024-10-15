const cardsSection = document.querySelector(".cards-section");
const people = [
  {
    name: "Jacob Plumb",
    title: "Senior Software Engineer",
    email: "jacobmaxplumb@gmail.com",
    phone: "123-123-1234",
    location: "Ann Arbor, MI",
  },
  {
    name: 'Deema Hagehassan',
    title: 'Lawyer',
    email: 'dhagehassan@hotmail.com',
    phone: '123-123-1233',
    location: 'Ann Arbor, MI'
  }
];

for (let person of people) {
    const card = createAPersonCard(person);
    cardsSection.appendChild(card);
}
