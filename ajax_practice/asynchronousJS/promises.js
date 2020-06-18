const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("people");
const btn = document.querySelector("button");

function getJSON (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        // console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        resolve(data);   
      } else {
        reject(Error(xhr.statusText))
      }
    };
    xhr.onerror = () => reject(Error("A network error occurred"))
    xhr.send();
  });
}

function generateHTML(data) {

  data.people.forEach(person => {
    getJSON(`${wikiUrl}${person.name}`)
      .then((data) => {
        const section = document.createElement("section");
        section.innerHTML = `
          <img src="${data.thumbnail.source}">
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
  getJSON(astrosUrl)
    .then(generateHTML)
    .catch(err => console.log(err))
    .finally(() => event.target.remove())
});