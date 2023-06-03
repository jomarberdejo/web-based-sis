// Show the spinner and progress loading bar when the document is ready

document.addEventListener('DOMContentLoaded', function() {

  let spinner = document.getElementById('spinner');
  let progressBar = document.getElementById('progress-bar');
  spinner.style.display = 'flex';
  progressBar.style.display = 'block';

  // Hide the spinner and progress loading bar after the page is fully loaded
  window.addEventListener('load', function() {
    spinner.style.display = 'none';
    progressBar.style.display = 'none';
  });
});
