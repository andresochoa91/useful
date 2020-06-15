var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { /* status === 200 means successful http request, 404 file not found, etc */
    /* 0 to 3 represent early stages, 4 is ready state, when the server already sent all data to the browser */
    if (xhr.status === 200) {
      document.querySelector("#content").innerHTML = xhr.responseText;
    } else if (xhr.status === 404) {
      alert ("Not found")
    } else if (xhr.status === 500) {
      alert ("Error")
    } 
  }
};

// xhr.open("GET", "side.html");
xhr.open("GET", "sid.html"); /* to generate an error */

function sendAJAX() {
  xhr.send();
  document.querySelector("#load").style.display = "none";
}