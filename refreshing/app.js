let h1 = document.querySelector("h1");
h1.style.color = "#f00";
h1.textContent = "Hey Bro";

let li = document.querySelectorAll("li");
li[3].style.color = "#0F0";
li[3].textContent = "This is being manipulated by the DOM";

const liOdd = document.querySelectorAll("li:nth-child(even)");
liOdd.forEach(odd => odd.style.backgroundColor = "#6f6f6f");

const lastLiDom = document.querySelectorAll(".container2 li:last-child");
console.log(lastLiDom)

let containers = document.getElementsByClassName("container");

for (let i = 0; i < containers.length; i++) {
  containers[i].style.backgroundColor = "#f4f4f4";
  containers[i].style.padding = "0px 10px";
  containers[i].style.margin = "5px";
}

