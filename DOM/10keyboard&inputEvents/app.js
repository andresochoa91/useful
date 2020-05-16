const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

//taskInput.value = ""; //If I want to clear input

//form.addEventListener("submit", runEvent);
 
//taskInput.addEventListener("keydown", runEvent);
//taskInput.addEventListener("keyup", runEvent); //When key up after pressing
//taskInput.addEventListener("keypress", runEvent); //Generalized

//taskInput.addEventListener("focus", runEvent); //When click on input
//taskInput.addEventListener("blur", runEvent); //After clicking on input and afterwards clicking out

//taskInput.addEventListener("change", runEvent); //Good with dropdowns

//taskInput.addEventListener("cut", runEvent); //Run when cut inside input
//taskInput.addEventListener("copy", runEvent); //Run when cut inside input
//taskInput.addEventListener("paste", runEvent); //Run when cut inside input


taskInput.addEventListener("input", runEvent); //Run with everything that is an input

function runEvent (event) {
  console.log(`Event type: ${event.type}`);
  console.log(event.target.value)
  
  //heading.innerText = event.target.value;
  
  // //Get input value
  // console.log(taskInput.value);
  // event.preventDefault();  //to prevent the action in html run (in this case action="index.php")
}