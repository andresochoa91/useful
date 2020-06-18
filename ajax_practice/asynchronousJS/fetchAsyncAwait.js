const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("people");
const btn = document.querySelector("button");

function generateHTML(data) {
  data.people.forEach(async (person) => {
    const craft = person.craft;
    const wikiJSON = await getJSON(`${wikiUrl}${person.name}`);
    const section = document.createElement("section");
    section.innerHTML = `
      <img src="${wikiJSON.thumbnail.source}">
      <span>${craft}</span>
      <h2>${wikiJSON.title}</h2>
      <p>${wikiJSON.description}</p>
      <p>${wikiJSON.extract}</p>
    `;
    peopleList.appendChild(section);
  });
}

async function getJSON(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

btn.addEventListener("click", async (event) => {
  event.target.textContent = "Loading";
  const getPeopleInSpace = await getJSON(astrosUrl);
  generateHTML(getPeopleInSpace);
  event.target.remove();
});