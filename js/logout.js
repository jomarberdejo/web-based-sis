
document.querySelector('.logout-link').addEventListener('click', function(e) {
  e.preventDefault();
  // Prompt the user if they want to log out
  Swal.fire({
    title: 'Are you sure you want to log out?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, log out!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Clear the login credentials from local storage
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      // Redirect the user to the login page
      window.location.href = "index.html";

    
    }
  

  })
});