// //Set local storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");


// //Set local storage item
// sessionStorage.setItem("name", "Beth");

//remove from storage
//localStorage.removeItem("name");

// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// //Clear local storate
// localStorage.clear();

// console.log(name, age);

document.querySelector("form").addEventListener("submit", function (event) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved");

  event.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(task => console.log(task));
