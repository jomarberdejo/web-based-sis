// Check if the user is logged in
if (localStorage.getItem("username")) {
  // Get the username from local storage
  const username = localStorage.getItem("username");
  // Get the welcome message element
  const welcomeMessage = document.querySelector(".welcome-message");
  // Set the text content of the welcome message element
  welcomeMessage.textContent = username;
  // Show the welcome message element
  welcomeMessage.style.display = "block";
}


