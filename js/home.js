// Check if the user is logged in
if (localStorage.getItem("username")) {

  const username = localStorage.getItem("username");

  const welcomeMessage = document.querySelector(".welcome-message");

  welcomeMessage.textContent = username;

  welcomeMessage.style.display = "block";
}


