var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
      let people = JSON.parse(xhr.responseText);
      let ul = document.createElement("ul");
      for (let i = 0; i < people.length; i++) {
        let li = document.createElement("li");
        li.textContent = `Name: ${people[i].name}. Age: ${people[i].age}`;
        if (people[i].isValid) {
          li.style.backgroundColor = "#0f0";
        } else {
          li.style.backgroundColor = "#f00";
        }
        ul.appendChild(li);
      }
      document.querySelector("#content").appendChild(ul);
    }
  }
};

xhr.open("GET", "./employees.json");

function active () {
  xhr.send();
  document.querySelector("#load").style.backgroundColor = "#f00";
}
