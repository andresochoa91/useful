const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("people");
const btn = document.querySelector("button");

function generateHTML(data) {
  data.people.forEach(person => {
    const craft = person.craft;
    fetch(`${wikiUrl}${person.name}`)
      .then(response => response.json())
      .then((data) => {
        const section = document.createElement("section");
        section.innerHTML = `
          <img src="${data.thumbnail.source}">
          <span>${craft}</span>
          <h2>${data.title}</h2>
          <p>${data.description}</p>
          <p>${data.extract}</p>
        `;
        peopleList.appendChild(section);
      })
      .catch(err => Error(`${err}This is an error`));
  });
}

btn.addEventListener("click", (event) => {
  event.target.textContent = "Loading";
  fetch(astrosUrl)
    .then(response => response.json())
    .then(generateHTML)
    .catch(err => console.log(err))
    .finally(() => event.target.remove())
});