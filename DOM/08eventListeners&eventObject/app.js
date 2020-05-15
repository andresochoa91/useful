// document.querySelector('.clear-tasks').addEventListener("click", function() {
//   console.log("hello");
// })

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
  //event.target.innerHTML = "Hello my friend"
  console.log("Clicked, ", val);  
}