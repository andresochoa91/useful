// //Event Bubbling

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


//Event delegation

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(event) {
  // if (event.target.parentElement.className === "delete-item secondary-content") {
  //   console.log("delete item");
  // }

  if (event.target.parentElement.classList.contains("delete-item")) { //This is better than above if you want to add new different classes to specific elements
    console.log("delete item");
    event.target.parentElement.parentElement.remove();   
  }
}