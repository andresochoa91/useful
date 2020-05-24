// // //SELECTORS SINGLE ELEMENTS

// let navbar = document.getElementById("main-navbar");
// let firstli = document.querySelector("li a");
// let logo = document.querySelector(".logo a");

// // Get things from the element
// console.log(logo);
// console.log(navbar.id);
// console.log(navbar.className);
// console.log(firstli);

// // Change styling
// navbar.style.backgroundColor = "#ff0000";
// logo.style.color = "#000";
// logo.style.padding = '30px';
// // navbar.style.display = 'none';

// // Change content
// logo.textContent = 'Hahaha';
// // logo.innerText = 'Hahaha'; /* not recommended */
// logo.innerHTML = '<p style="color:#00f">Hehehe</p>';
// firstli.style.color = '#333';
// document.querySelector('li:last-child a').style.color = '#0f0';
// document.querySelector('li:nth-child(2) a').style.color = '#0ff';
// document.querySelector('li:nth-child(4) a').textContent = 'Hello World';
// document.querySelector("[title=playground]").style.backgroundColor = "#666";  /* select type title that is equals to hello */
// document.querySelector('#image').type = "checkbox";




// // //SELECTORS MULTIPLE ELEMENTS

// let boxes = document.getElementsByClassName('box');
// console.log(boxes[0].lastElementChild);
// boxes[0].firstElementChild.textContent = "Manipulated"
// boxes[1].lastElementChild.placeholder = "Manipulated"
// let lis = listItems = document.querySelector('ul').getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[3].querySelector("a").style.color = "#00f"
// // Convert HTML Collection into array
// lis = Array.from(lis);
// lis.reverse();
// console.log(lis)
// lis.forEach((li, index) => console.log(index + ":" + li.getElementsByTagName("a")));
// // document.querySelectorAll()
// document.querySelectorAll('li:nth-child(odd)').forEach(li => li.style.backgroundColor = "#999");
// document.querySelectorAll('li:nth-child(even)').forEach(li => li.style.backgroundColor = "#bbb");
// let items = document.querySelectorAll('.box label');
// console.log(items);
// items.forEach(item => item.style.backgroundColor = "#ccc");




// // //TRAVERSING DOM

// let val;
// let list = document.querySelector('ul');
// let listItem = document.querySelector('li:first-child');

// val = listItem;
// val = list;
// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// // // 1 - Element
// // // 2 - Attribute (deprecated)
// // // 3 - Text node
// // // 8 - Comment
// // // 9 - Document itself
// // // 10 - Doctype

// // // Get children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';
// // // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];
// // // First child
// val = list.firstChild;
// val = list.firstElementChild;
// // // Last child
// val = list.lastChild;
// val = list.lastElementChild;
// // // Count child elements
// val = list.childElementCount;
// val = list.children.length;
// // // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement; /* better than parentNode */
// val = listItem.parentElement.parentElement;
// // // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling; /* Better than nextSibling */
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
// // // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling; /* Better than previousSibling */
// console.log(val);




// // //CREATING ELEMENTS

// // Create element
// let li  = document.createElement('li');
// // Add class
// li.className = 'collection-item';
// // Add id
// li.id = 'new-item';
// // Add attribute
// li.setAttribute('title', 'New Item');
// // Create text node and append
// li.appendChild(document.createTextNode('Example 666'));
// // Create new link element
// let link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // Append link into li
// li.appendChild(link);
// // Append li as child to ul
// document.querySelector('ul#nav-ul').appendChild(li);
// console.log(li);





// //REMOVING AND REPLACING ELEMENTS

// //Replace element
// //Create Element
// const newHeading = document.createElement("h2");
// //Add id
// newHeading.id = "task-title";
// //New text node
// newHeading.appendChild(document.createTextNode("Taks list"));
// //Get the old heading
// const oldHeading = document.getElementById("task-title");
// //Parent
// const cardAction = document.querySelector('.card-action');
// //Replace
// cardAction.replaceChild(newHeading, oldHeading);

// //Remove Element
// const lis = document.querySelectorAll("li");
// const list = document.querySelector("ul");
// //Remove list item
// lis[0].remove();
// //Remove child element
// list.removeChild(lis[3]);
// //CLASSES & ATTRIBUTES
// const firstLi = document.querySelector("li:first-child");
// const link = firstLi.children[0];
// let val;

// //Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add("test");
// link.classList.remove("test");
// val = link;

// //Attributes
// val = link.getAttribute("href");
// val = link.setAttribute("href", "http://google.com");
// link.setAttribute("title", "Google");
// val = link.hasAttribute("title");
// link.removeAttribute("title");
// val = link;

// console.log(val);


// //EVENT LISTENERS AND EVENT OBJECT

// document.querySelector('.clear-tasks').addEventListener("click", function() {
//   console.log("hello");
// })

// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick (event) {
//   let val = event;
//   val = event.target.innerHTML;
//   val = event.target.className;
//   val = event.target.classList;
//   val = event.target.tagName;
//   val = event.type;
//   val = event.timeStamp;
//   val = event.clientY; //Coords relative to the window in pixels
//   val = event.clientX; //Coords relative to the window in pixels
//   val = event.offsetY; //Coords relative to the element in pixels
//   val = event.offsetX; //Coords relative to the element in pixels
//   event.target.innerHTML = "Hello my friend"
//   console.log("Clicked, ", val);  
// }


// //MOUSE EVENTS

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");
// //Click
// clearBtn.addEventListener("click", runEvent);
// clearBtn.addEventListener("dblclick", runEvent); //Double click
// clearBtn.addEventListener("mousedown", runEvent); //When the mouse is hold
// clearBtn.addEventListener("mouseup", runEvent); //the opposite of mousedown
// clearBtn.addEventListener("mouseenter", runEvent); //When mouse is on the element 
// clearBtn.addEventListener("mouseleave", runEvent); //Opposite of mouseenter 
// clearBtn.addEventListener("mouseover", runEvent); //Similar to mouseLeave, but it fires when change element, even if is inside 
// clearBtn.addEventListener("mouseout", runEvent); //Opposite of mouseover 
// card.addEventListener("mousemove", runEvent);
// //Event handler
// function runEvent(event) {
//   console.log(`Event type: ${event.type}`);
//   heading.textContent = `MouseZ: ${event.offsetX} MouseY ${event.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${event.offsetX}, 120, ${event.offsetY})`;
// }


// //KEYBOARD EVENTS

// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector("h5");

// taskInput.value = ""; //If I want to clear input
// form.addEventListener("submit", runEvent);
// taskInput.addEventListener("keydown", runEvent);
// taskInput.addEventListener("keyup", runEvent); //When key up after pressing
// taskInput.addEventListener("keypress", runEvent); //Generalized
// taskInput.addEventListener("focus", runEvent); //When click on input
// taskInput.addEventListener("blur", runEvent); //After clicking on input and afterwards clicking out
// taskInput.addEventListener("change", runEvent); //Good with dropdowns
// taskInput.addEventListener("cut", runEvent); //Run when cut inside input
// taskInput.addEventListener("copy", runEvent); //Run when cut inside input
// taskInput.addEventListener("paste", runEvent); //Run when cut inside input
// taskInput.addEventListener("input", runEvent); //Run with everything that is an input

// function runEvent (event) {
//   console.log(`Event type: ${event.type}`);
//   console.log(event.target.value)
  
//   heading.innerText = event.target.value;
  
//   //Get input value
//   console.log(taskInput.value);
//   event.preventDefault();  //to prevent the action in html run (in this case action="index.php")
// }


// //EVENT BUBBLING

// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card title");
// });

// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card content");
// });

// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function() {
//   console.log("col");
// });


// //Event delegation

// const delItem = document.querySelector(".delete-item");
// delItem.addEventListener("click", deleteItem);
// document.body.addEventListener("click", deleteItem);

// function deleteItem(event) {
//   if (event.target.parentElement.className === "delete-item secondary-content") {
//     console.log("delete item");
//   }

//   if (event.target.parentElement.classList.contains("delete-item")) { //This is better than above if you want to add new different classes to specific elements
//     console.log("delete item");
//     event.target.parentElement.parentElement.remove();   
//   }
// }


// //LOCAL AND SESSION STORAGE

// //Set local storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");


// //Set local storage item
// sessionStorage.setItem("name", "Beth");
// //remove from storage
// localStorage.removeItem("name");
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// //Clear local storate
// localStorage.clear();
// console.log(name, age);

// document.querySelector("form").addEventListener("submit", function (event) {
//   const task = document.getElementById("task").value;

//   let tasks;

//   if (localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }

//   tasks.push(task);

//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   alert("Task saved");

//   event.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem("tasks"));
// tasks.forEach(task => console.log(task));





// // // WINDOW METHODS / OBJECTS / PROPERTIES

// // alert('Hello World');
// // const input = prompt();
// // alert(input);

// // if(confirm('Are you sure')){
// //   console.log('YES');
// // } else {
// //   console.log('NO');
// // }

// let val;

// // Outter height and width
// val = window.outerHeight;
// val = window.outerWidth;
// // // Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;
// // // Scroll points
// val = window.scrollY;
// val = window.scrollX;
// // // Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;  // add this to the url in the browser ?id=1
// // // Redirect
// // window.location.href = 'http://google.com';
// // // Reload
// // window.location.reload();
// // // History Object
// window.history.go(-3);
// val = window.history.length;
// // // Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// console.log(val);





// //EXAMINING DOCUMENT OBJECT

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];
// val = document.images;
// val = document.scripts;
// // val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach(script => console.log(script.getAttribute('src')));
// console.log(val)
