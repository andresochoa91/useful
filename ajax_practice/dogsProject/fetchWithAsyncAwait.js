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

  async function postData () {
    try {
      const fetching = await fetch(commentsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, comment })
      })
      const getJson = await fetching.json();
      console.log(getJson);
    } catch (err) {
      console.error(err);
    } 
  }
  postData();
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

async function fun() {
  try {
    const fetching = await fetch(allBreeds);
    const getJson = await fetching.json();
    list(getJson)
  } catch (err) {
    console.error(err);
  } 
}
fun();

btn.addEventListener("click", () => {
  async function img () {
    try {
      randomImage = `https://dog.ceo/api/breed/${option}/images/random`;
      const fetching = await fetch(randomImage);
      const getJson = await fetching.json();
      let im = document.querySelector("img");
      im.src = getJson.message;
      im.alt = "img";
    } catch (err) {
      console.error(err);
    }
  }
  img();
})
