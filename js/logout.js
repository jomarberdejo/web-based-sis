

document.querySelector('.logout-link').addEventListener('click', function(e) {
  e.preventDefault();

  Swal.fire({
    title: 'Are you sure you want to log out?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, log out!'
  }).then((result) => {
    if (result.isConfirmed) {

      localStorage.removeItem("username");
      localStorage.removeItem("password");

      window.location.href = "index.html";

    
    }
  

  })
});


const signOut= document.getElementById('signout');

signOut.addEventListener('click', ()=>{
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  window.location.href= "index.html";
})


const sidebarToggle= document.querySelector('.sidebar-toggle');

const sidebar= document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', ()=> {
  sidebar.classList.toggle('open');
})

