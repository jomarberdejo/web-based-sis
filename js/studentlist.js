function allData() {
  
  let table = document.getElementById('table');
  table.innerHTML = '';

  let studentList = JSON.parse(localStorage.getItem('studentList')) || [];

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
        <td>
          <div class= "__actions">
          <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" onclick="openEditModal(${student.id})">
            <i class= "fa fa-edit"> </i>
          </button>
          <button class="btn btn-sm btn-danger" onclick="removeData(${student.id})">
            <i class="fa fa-trash"></i>
           
          </button>
         </div>
        </td>
      </tr>`;
  });
}

allData();