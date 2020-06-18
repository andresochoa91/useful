const allBreeds = "https://dog.ceo/api/breeds/list/all";
const btn = document.querySelector("button");
const select = document.querySelector("select");
const form = document.querySelector("form");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
let option;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = input1.value;
  let comment = input2.value;

  fetch(commentsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, comment })
  })
    .then(response => response.json())
    .then(console.log);
})


function list (json) {
  let breedsList = Object.keys(json.message);
  breedsList.forEach(breed => {
    select.innerHTML += `
    <option value="${breed}">${breed}</option>
    `;
  }) 
}

select.addEventListener("click", () => {
  if (event.target.tagName === "OPTION") {
    option = event.target.value;
  }
})

fetch(allBreeds)
  .then(response => response.json())
  .then(data => list(data))
  .catch(err => console.error(err));

btn.addEventListener("click", () => {
  randomImage = `https://dog.ceo/api/breed/${option}/images/random`;
  fetch(randomImage)
    .then(response => response.json())
    .then(data => {
      let im = document.querySelector("img");
      im.src = data.message;
      im.alt = "img";
    })
    .catch(err => console.error(err));
})
