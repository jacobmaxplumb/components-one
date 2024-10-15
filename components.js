function createAPersonCard(person) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("profile-card");

  const personName = document.createElement("h2");
  personName.classList.add("profile-name");
  personName.textContent = person.name;

  const title = document.createElement("p");
  title.classList.add("profile-title");
  title.textContent = person.title;

  const emailSection = document.createElement("div");
  emailSection.classList.add("profile-info");

  const emailStrong = document.createElement("strong");
  emailStrong.textContent = "Email:";

  const emailSpan = document.createElement("span");
  emailSpan.textContent = person.email;

  emailSection.appendChild(emailStrong);
  emailSection.appendChild(emailSpan);

  const phoneSection = document.createElement("div");
  phoneSection.classList.add("profile-info");

  const phoneStrong = document.createElement("strong");
  phoneStrong.textContent = "Phone:";

  const phoneSpan = document.createElement("span");
  phoneSpan.textContent = person.phone;

  phoneSection.appendChild(phoneStrong);
  phoneSection.appendChild(phoneSpan);

  const locationSection = document.createElement("div");
  locationSection.classList.add("profile-info");

  const locationStrong = document.createElement("strong");
  locationStrong.textContent = "Location:";

  const locationSpan = document.createElement("span");
  locationSpan.textContent = person.location;

  locationSection.appendChild(locationStrong);
  locationSection.appendChild(locationSpan);

  cardDiv.appendChild(personName);
  cardDiv.appendChild(title);
  cardDiv.appendChild(emailSection);
  cardDiv.appendChild(phoneSection);
  cardDiv.appendChild(locationSection);

  return cardDiv;
}
