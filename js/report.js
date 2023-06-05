allData();
    
function allData() {
  var table = document.getElementById('table');
  table.innerHTML = '';

  var studentList = JSON.parse(localStorage.getItem('studentList')) || [];

  studentList.forEach(function (student) {
    table.innerHTML += `
      <tr>
        <td>${student.studentId}</td>
        <td>${student.fullName}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.email}</td>
        <td>${student.section}</td>
        <td>${student.status}</td>
      </tr>`;
  });
}
