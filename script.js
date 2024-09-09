let themebtn = document.querySelector("#swap");
let bodyElement = document.querySelector("body");

function swapTheme() {
  // Check if the body currently has a light theme (white background)
  if (bodyElement.classList.contains("day")) {
    // Switch to dark mode
    bodyElement.classList.remove("day");
    bodyElement.classList.add("night");
    
    // Update button class for dark mode
    themebtn.classList.remove("button_day");
    themebtn.classList.add("button_night");

    // Set the background of the body to black
    bodyElement.style.backgroundColor = "black";
    bodyElement.style.color = "white";
  } else {
    // Switch to light mode
    bodyElement.classList.remove("night");
    bodyElement.classList.add("day");
    
    // Update button class for light mode
    themebtn.classList.remove("button_night");
    themebtn.classList.add("button_day");

    // Set the background of the body to white
    bodyElement.style.backgroundColor = "white";
    bodyElement.style.color = "black";
  }
}

// Add the event listener to the button
themebtn.addEventListener("click", swapTheme);


