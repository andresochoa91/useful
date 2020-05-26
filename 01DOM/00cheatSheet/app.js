document.addEventListener("DOMContentLoaded", () => {  /* This allows us to load the app.js file whenever we put the script in our HTML */
  // // //SELECTORS SINGLE ELEMENTS
  
  // const navbar = document.getElementById("main-navbar");
  // const firstli = document.querySelector("li a");
  // const logo = document.querySelector(".logo a");
  
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
  
  // const boxes = document.getElementsByClassName('box');
  // console.log(boxes[0].lastElementChild);
  // boxes[0].firstElementChild.textContent = "Manipulated"
  // boxes[1].lastElementChild.placeholder = "Manipulated"
  // const lis = listItems = document.querySelector('ul').getElementsByTagName('li');
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
  // const items = document.querySelectorAll('.box label');
  // console.log(items);
  // items.forEach(item => item.style.backgroundColor = "#ccc");
  
  
  
  
  // // //TRAVERSING DOM
  
  // const val;
  // const list = document.querySelector('ul');
  // const listItem = document.querySelector('li:first-child');
  
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
  // const li  = document.createElement('li');
  // // Add class
  // li.className = 'collection-item';
  // // Add id
  // li.id = 'new-item';
  // // Add attribute
  // li.setAttribute('title', 'New Item');
  // // Create text node and append
  // li.appendChild(document.createTextNode('Example 666'));
  // // Create new link element
  // const link = document.createElement('a');
  // // Add classes
  // link.className = 'delete-item secondary-content';
  // // Add icon html
  // link.innerHTML = '<i class="fa fa-remove"></i>';
  // // Append link into li
  // li.appendChild(link);
  // // Append li as child to ul
  // document.querySelector('ul#nav-ul').appendChild(li);
  // document.querySelector("ul#nav-ul").insertBefore(li, document.querySelector("#nav-ul li:nth-child(3)"));
  // // console.log(document.querySelector("#nav-ul"))
  // console.log(li);
  
  
  
  
  // // //REPLACING ELEMENTS
  // //Create Element
  // const newHeading = document.createElement("h2");
  // //Add id
  // newHeading.id = "super-title";
  // //New text node
  // newHeading.appendChild(document.createTextNode("DOM DOM DOM"));
  // //Get the old heading
  // const oldHeading = document.querySelector("#form h2");
  // //Pick Parent
  // const form = document.querySelector('#form');
  // //Replace
  // form.replaceChild(newHeading, oldHeading);
  
  
  
  
  // // //REMOVING ELEMENTS
  // const lis = document.querySelectorAll("li");
  // const list = document.querySelector("ul");
  // //Remove list item
  // lis[0].remove();
  // //Remove child element
  // list.removeChild(lis[3]);
  
  
  
  
  // // // CLASSES & ATTRIBUTES
  // const firstBox = document.querySelector(".box:first-child");
  // const link = firstBox.children[0];
  // const val;
  // //Classes
  // val = firstBox.className;
  // val = firstBox.classList;
  // val = firstBox.classList[0];
  // link.classList.add("test");
  // link.classList.remove("test");
  // val = link;
  
  // //Attributes
  // val = link.getAttribute("for");
  // link.setAttribute("title", "Google");
  // val = link.hasAttribute("title");
  // link.removeAttribute("title");
  // val = link;
  // console.log(val);
  
  
  
  
  // // //EVENT LISTENERS AND EVENT OBJECT
  
  // document.querySelector('#nav-ul').addEventListener("click", function() {
  //   console.log("hello");
  // })
  
  // document.querySelector("#nav-ul").addEventListener("click", onClick);
  
  // function onClick (event) {
  //   const val = event;
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
  
  
  
  
  // // // //MOUSE EVENTS
  // const deleteBtn = document.querySelector('#delete');
  // const bioMsg = document.querySelector("figcaption");
  // const bioHeading = document.querySelector("#bio h2");
  // //Click
  // deconsteBtn.addEventListener("click", runEvent);
  // deconsteBtn.addEventListener("dblclick", runEvent); //Double click
  // deconsteBtn.addEventListener("mousedown", runEvent); //When the mouse is hold
  // deconsteBtn.addEventListener("mouseup", runEvent); //the opposite of mousedown
  // deconsteBtn.addEventListener("mouseenter", runEvent); //When mouse is on the element 
  // deconsteBtn.addEventListener("mouseleave", runEvent); //Opposite of mouseenter 
  // deconsteBtn.addEventListener("mouseover", runEvent); //Similar to mouseLeave, but it fires when change element, even if is inside 
  // deconsteBtn.addEventListener("mouseout", runEvent); //Opposite of mouseover 
  // document.querySelector("#showcase").addEventListener("mousemove", runEvent);
  // // //Event handler
  // function runEvent(event) {
  //   console.log(`Event type: ${event.type}`);
  //   bioHeading.textContent = `MouseZ: ${event.offsetX} MouseY ${event.offsetY}`;
  //   document.body.style.backgroundColor = `rgb(${event.offsetX}, 120, ${event.offsetY})`;
  // }
  
  
  
  
  // // //KEYBOARD EVENTS
  
  // const form = document.querySelector("#form");
  // const boxes = document.querySelectorAll("#form .box input");
  // const button = document.querySelector("#form .box button");
  // const heading = document.querySelector("#form h2");
  // const dropdown = document.querySelector("#drop select");
  // console.log(dropdown)
  
  // boxes.forEach(box => box.value = ""); //If I want to clear input
  // // form.addEventListener("submit", runEvent);
  // // form.addEventListener("keydown", runEvent);
  // // form.addEventListener("keyup", runEvent); //When key up after pressing
  // // form.addEventListener("keypress", runEvent); //Generalized
  // // form.children[1][0].addEventListener("focus", runEvent) //When click on input
  // // form.children[1][0].addEventListener("blur", runEvent); //After clicking on input and afterwards clicking out
  // dropdown.addEventListener("change", runEvent); //Good with dropdowns and checkboxes
  // // form.addEventListener("cut", runEvent); //Run when cut inside input
  // // form.addEventListener("copy", runEvent); //Run when cut inside input
  // // form.addEventListener("paste", runEvent); //Run when cut inside input
  // form.addEventListener("input", runEvent); //Run with everything that is an input
  
  // function runEvent (event) {
  //   console.log(`Event type: ${event.type}`);
  //   console.log(event.target);
  //   console.log(event.target.value);
  //   console.log(event.target.checked)
  //   heading.innerText = event.target.value;
  //   //Get input value
  //   event.preventDefault();  //to prevent the action in html run (in this case action="index.php")
  // }
  
  
  
  
  // // //EVENT BUBBLING
  
  // document.querySelector("header").addEventListener("click", function(event) {
  //   console.log("header");
  //   event.preventDefault();
  // });
  
  // document.querySelector("header nav h1").addEventListener("click", function() {
  //   console.log("nav");
  // });
  
  // document.querySelector("header nav ul").addEventListener("click", function() {
  //   console.log("ul");
  // });
  
  // document.querySelector("header nav ul li").addEventListener("click", function() {
  //   console.log("li");
  // });
  
  
  
  
  // // //EVENT DELEGATION
  // const delItem = document.querySelector("#delete");
  // delItem.addEventListener("click", deleteItem);
  // document.body.addEventListener("click", deleteItem);
  
  // function deleteItem(event) {
  //   if (event.target.parentElement.parentElement.parentElement.id === "bio") {
  //     console.log("delete item");
  //   }
  
  //   if (event.target.parentElement.classList.contains("fig")) { //This is better than above if you want to add new different classes to specific elements
  //     console.log("delete item");
  //     event.target.parentElement.parentElement.remove();   
  //   }
  // }
  
  
  
  
  // // //LOCAL AND SESSION STORAGE  /* for later */
  
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
  
  //   const tasks;
  
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
  
  // const val;
  
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
  
  // const scripts = document.scripts;
  // const scriptsArr = Array.from(scripts);
  // scriptsArr.forEach(script => console.log(script.getAttribute('src')));
  // console.log(val)
});
