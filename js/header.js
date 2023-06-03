const links = document.querySelectorAll('.sidebar nav ul li:not(:last-child) a');
for (const link of links) {
  link.addEventListener('click', ()=> {
    for (const otherLink of links) {
      otherLink.classList.remove('active');
    }
    link.classList.add('active');
  });
}