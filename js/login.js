function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.querySelector("#toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.src = "../icons/hide.png";
  } else {
    passwordInput.type = "password";
    togglePasswordButton.src = "../icons/show.png";
  }
}



function validateLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (username === "") {
    usernameInput.classList.add("shake");
    setTimeout(() => {
      usernameInput.classList.remove("shake");
    }, 500);
    let form = document.getElementById("login-form")
    form.reset()
  }

  else if (username !== "" && password === "") {

    passwordInput.classList.add("shake");

    setTimeout(() => {
      passwordInput.classList.remove("shake");
    }, 500);
    let form = document.getElementById("login-form")

    form.reset()

  }



  else if (username !== "Admin" || password !== "EVSUCC") {
    usernameInput.classList.add("shake");
    passwordInput.classList.add("shake");
    setTimeout(() => {
      usernameInput.classList.remove("shake");
      passwordInput.classList.remove("shake");
    }, 500);
    let form = document.getElementById("login-form")
    form.reset()
  } else {

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);


    let form = document.getElementById("login-form");
    form.action = "home.html";


    let spinner = document.getElementById('spinner');
    let progressBar = document.getElementById('progress-bar');
    spinner.style.display = 'flex';
    progressBar.style.display = 'block';

    form.submit();
  }
}

// Check if already logged in

const username = localStorage.getItem("username");

const password = localStorage.getItem("password");
if (username && password) {

  document.getElementById("username").value = username;
  document.getElementById("password").value = password;


  let form = document.getElementById("login-form")
  form.action = "home.html";
  form.submit();
}

