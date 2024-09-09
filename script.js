let themebtn = document.querySelector("#swap");
let mainElement = document.querySelector("main");

function swapTheme() {
  // Check if the main element currently has the 'day' class
  if (mainElement.classList.contains("day")) {
    // Switch to dark mode
    mainElement.classList.remove("day");
    mainElement.classList.add("night");
    
    // Update button class for dark mode
    themebtn.classList.remove("button_day");
    themebtn.classList.add("button_night");

    // Set the background of the body to black and text to white
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    // Switch to light mode
    mainElement.classList.remove("night");
    mainElement.classList.add("day");
    
    // Update button class for light mode
    themebtn.classList.remove("button_night");
    themebtn.classList.add("button_day");

    // Set the background of the body to white and text to black
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}

// Add the event listener to the button
themebtn.addEventListener("click", swapTheme);
