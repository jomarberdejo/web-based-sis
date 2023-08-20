    let cards= document.querySelectorAll('.card');


for (let card of cards){
    card.addEventListener('click', ()=>{
        window.location.href= "studentlist.html";
    })
}


function updateDashboard() {
    let studentList = JSON.parse(localStorage.getItem('studentList')) || [];

    let totalStudents = studentList.length;
    let enrolledStudents = studentList.filter(function(student) {
      return student.status === 'Enrolled';
    }).length;
    let inProgress = studentList.filter(function(student) {
      return student.status === 'In Progress';
    }).length;


    let enrollmentRate = totalStudents !== 0 ? (enrolledStudents / totalStudents * 100).toFixed(2) : 0;


    let males = studentList.filter(function(student) {
      return student.gender === 'Male';
    }).length;
    let females = studentList.filter(function(student) {
      return student.gender === 'Female';
    }).length;

    document.getElementById("totalStudents").textContent = totalStudents;
    document.getElementById("enrolledStudents").textContent = enrolledStudents;
    document.getElementById("inProgress").textContent = inProgress;
    document.getElementById("enrollmentRate").textContent = enrollmentRate + "%";
    document.getElementById("maleStudents").textContent = males;
    document.getElementById("femaleStudents").textContent = females;
  }

  updateDashboard();