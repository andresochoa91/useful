const allBreeds = "https://dog.ceo/api/breeds/list/all";
const btn = document.querySelector("button");
const select = document.querySelector("select");
const form = document.querySelector("form");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
let option;


input1.addEventListener("keyup", (event) => {
  console.log(event.target.value)
})

function getJSON (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    } else {
      return callback(`Error: ${xhr.responseText}`)
    }
  }
  xhr.onerror = () => new Error("Error finding data");
  xhr.send();
}


function postData (url, data, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onload = () => {
    return callback(xhr.responseText);
  }
  xhr.send(JSON.stringify(data));
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  postData(commentsUrl, {name: input1.value, comment: input2.value}, (post) => {
    console.log(post);
  })
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

getJSON(allBreeds, list)

btn.addEventListener("click", () => {
  randomImage = `https://dog.ceo/api/breed/${option}/images/random`;
  getJSON(randomImage, (img) => {
    let im = document.querySelector("img");
    im.src = img.message;
    im.alt = "img";
  })
})
