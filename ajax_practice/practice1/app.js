//Creating an XML HTTP request object
var xhr = new XMLHttpRequest();

//the onreadystatechange is triggered when there is a a change in the ajax request. We need to create a callback to respond to that event
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    document.getElementById("ajax").innerHTML = xhr.responseText;
  }
};
  
//Open a request
xhr.open("GET", "side.html");
  
//Send a request
function sendAJAX() {
  xhr.send();
  document.getElementById("load").style.display = "none";
} 