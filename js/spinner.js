

document.addEventListener('DOMContentLoaded', function() {

  let spinner = document.getElementById('spinner');
  let progressBar = document.getElementById('progress-bar');
  spinner.style.display = 'flex';
  progressBar.style.display = 'block';


  window.addEventListener('load', function() {
    spinner.style.display = 'none';
    progressBar.style.display = 'none';
  });
});
