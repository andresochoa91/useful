//SELECTORS SINGLE ELEMENTS

document.getElementById();
console.log(document.getElementById('task-title'));
// // Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);
// // Change styling
const taskTitle = document.getElementById('task-title');
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'none';
// // Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';
// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


//SELECTORS MULTIPLE ELEMENTS

document.getElementsByClassName();

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);
document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';
// Convert HTML Collection into array
lis = Array.from(lis);
lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
console.log(lis);

document.querySelectorAll()
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}
console.log(items);


//TRAVERSING DOM

let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;
// // Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// // Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// // Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];
// // First child
val = list.firstChild;
val = list.firstElementChild;
// // Last child
val = list.lastChild;
val = list.lastElementChild;
// // Count child elements
val = list.childElementCount;
// // Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
// // Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
// // Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);


//CREATING ELEMENTS

// Create element
const li  = document.createElement('li');
// Add class
li.className = 'collection-item';
// Add id
li.id = 'new-item';
// Add attribute
li.setAttribute('title', 'New Item');
// Create text node and append
li.appendChild(document.createTextNode('Hello World'));
// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append link into li
li.appendChild(link);
// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);


//REMOVING AND REPLACING ELEMENTS

//Replace element
//Create Element
const newHeading = document.createElement("h2");
//Add id
newHeading.id = "task-title";
//New text node
newHeading.appendChild(document.createTextNode("Taks list"));
//Get the old heading
const oldHeading = document.getElementById("task-title");
//Parent
const cardAction = document.querySelector('.card-action');
//Replace
cardAction.replaceChild(newHeading, oldHeading);

//Remove Element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");
//Remove list item
lis[0].remove();
//Remove child element
list.removeChild(lis[3]);
//CLASSES & ATTRIBUTES
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];
let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

//Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;

console.log(val);


//EVENT LISTENERS AND EVENT OBJECT

document.querySelector('.clear-tasks').addEventListener("click", function() {
  console.log("hello");
})

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick (event) {
  let val = event;
  val = event.target.innerHTML;
  val = event.target.className;
  val = event.target.classList;
  val = event.type;
  val = event.timeStamp;
  val = event.clientY; //Coords relative to the window in pixels
  val = event.clientX; //Coords relative to the window in pixels
  val = event.offsetY; //Coords relative to the element in pixels
  val = event.offsetX; //Coords relative to the element in pixels
  event.target.innerHTML = "Hello my friend"
  console.log("Clicked, ", val);  
}


//MOUSE EVENTS

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector(".card");
const heading = document.querySelector("h5");
//Click
clearBtn.addEventListener("click", runEvent);
clearBtn.addEventListener("dblclick", runEvent); //Double click
clearBtn.addEventListener("mousedown", runEvent); //When the mouse is hold
clearBtn.addEventListener("mouseup", runEvent); //the opposite of mousedown
clearBtn.addEventListener("mouseenter", runEvent); //When mouse is on the element 
clearBtn.addEventListener("mouseleave", runEvent); //Opposite of mouseenter 
clearBtn.addEventListener("mouseover", runEvent); //Similar to mouseLeave, but it fires when change element, even if is inside 
clearBtn.addEventListener("mouseout", runEvent); //Opposite of mouseover 
card.addEventListener("mousemove", runEvent);
//Event handler
function runEvent(event) {
  console.log(`Event type: ${event.type}`);
  heading.textContent = `MouseZ: ${event.offsetX} MouseY ${event.offsetY}`;
  document.body.style.backgroundColor = `rgb(${event.offsetX}, 120, ${event.offsetY})`;
}


//KEYBOARD EVENTS

const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

taskInput.value = ""; //If I want to clear input
form.addEventListener("submit", runEvent);
taskInput.addEventListener("keydown", runEvent);
taskInput.addEventListener("keyup", runEvent); //When key up after pressing
taskInput.addEventListener("keypress", runEvent); //Generalized
taskInput.addEventListener("focus", runEvent); //When click on input
taskInput.addEventListener("blur", runEvent); //After clicking on input and afterwards clicking out
taskInput.addEventListener("change", runEvent); //Good with dropdowns
taskInput.addEventListener("cut", runEvent); //Run when cut inside input
taskInput.addEventListener("copy", runEvent); //Run when cut inside input
taskInput.addEventListener("paste", runEvent); //Run when cut inside input
taskInput.addEventListener("input", runEvent); //Run with everything that is an input

function runEvent (event) {
  console.log(`Event type: ${event.type}`);
  console.log(event.target.value)
  
  heading.innerText = event.target.value;
  
  //Get input value
  console.log(taskInput.value);
  event.preventDefault();  //to prevent the action in html run (in this case action="index.php")
}


//EVENT BUBBLING

document.querySelector(".card-title").addEventListener("click", function() {
  console.log("card title");
});

document.querySelector(".card-content").addEventListener("click", function() {
  console.log("card content");
});

document.querySelector(".card").addEventListener("click", function() {
  console.log("card");
});

document.querySelector(".col").addEventListener("click", function() {
  console.log("col");
});


//Event delegation

const delItem = document.querySelector(".delete-item");
delItem.addEventListener("click", deleteItem);
document.body.addEventListener("click", deleteItem);

function deleteItem(event) {
  if (event.target.parentElement.className === "delete-item secondary-content") {
    console.log("delete item");
  }

  if (event.target.parentElement.classList.contains("delete-item")) { //This is better than above if you want to add new different classes to specific elements
    console.log("delete item");
    event.target.parentElement.parentElement.remove();   
  }
}


//LOCAL AND SESSION STORAGE

//Set local storage item
localStorage.setItem("name", "John");
localStorage.setItem("age", "30");


//Set local storage item
sessionStorage.setItem("name", "Beth");
//remove from storage
localStorage.removeItem("name");
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
//Clear local storate
localStorage.clear();
console.log(name, age);

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


// WINDOW METHODS / OBJECTS / PROPERTIES

alert('Hello World');
const input = prompt();
alert(input);

if(confirm('Are you sure')){
  console.log('YES');
} else {
  console.log('NO');
}

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;
// // Inner height and width
val = window.innerHeight;
val = window.innerWidth;
// // Scroll points
val = window.scrollY;
val = window.scrollX;
// // Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;  // add this to the url in the browser ?id=1
// Redirect
window.location.href = 'http://google.com';
// Reload
window.location.reload();
// History Object
window.history.go(-3);
val = window.history.length;
// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);


//EXAMINING DOCUMENT OBJECT

let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];
val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);


