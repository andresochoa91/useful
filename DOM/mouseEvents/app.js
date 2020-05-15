const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//Click
// clearBtn.addEventListener("click", runEvent);
// clearBtn.addEventListener("dblclick", runEvent); //Double click
// clearBtn.addEventListener("mousedown", runEvent); //When the mouse is hold
// clearBtn.addEventListener("mouseup", runEvent); //the opposite of mousedown
// clearBtn.addEventListener("mouseenter", runEvent); //When mouse is on the element 
// clearBtn.addEventListener("mouseleave", runEvent); //Opposite of mouseenter 
// clearBtn.addEventListener("mouseover", runEvent); //Similar to mouseLeave, but it fires when change element, even if is inside 
// clearBtn.addEventListener("mouseout", runEvent); //Opposite of mouseover 
card.addEventListener("mousemove", runEvent);

//Event handler
function runEvent(event) {
  console.log(`Event type: ${event.type}`);
  heading.textContent = `MouseZ: ${event.offsetX} MouseY ${event.offsetY}`;
  document.body.style.backgroundColor = `rgb(${event.offsetX}, 120, ${event.offsetY})`;
}