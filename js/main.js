// add.html

function save(event) {
  var studentId = document.getElementById('inputStudentId').value;
  var fullName = document.getElementById('inputFullName').value;
  var age = document.getElementById('inputAge').value;
  var gender = document.getElementById('inputGender').value;
  var email = document.getElementById('inputEmail').value;
  var section = document.getElementById('inputSection').value;
  var status = document.getElementById('inputStatus').value;

  var studentList = JSON.parse(localStorage.getItem('studentList')) || [];

  if (studentId === "" || fullName === "" || age === "" || gender === "" || email === "" || section === "" || status === "") {
    alert("Please fill out the form");
    return;
  }

  var student = {
    id: studentList.length > 0 ? studentList[studentList.length - 1].id + 1 : 1,
    studentId: studentId,
    fullName: fullName,
    age: age,
    gender: gender,
    email: email,
    section: section,
    status: status
  };

  studentList.push(student);
   Swal.fire({
      title: `Student named ${fullName} added successfully.`,
      icon: "success",
      
      confirmButtonText: 'Done',
    });
  
  localStorage.setItem('studentList', JSON.stringify(studentList));
  document.getElementById('form1').reset();
  document.getElementById('form2').reset();
}

// studentlist.html

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
function removeData(id) {
  var studentList = JSON.parse(localStorage.getItem('studentList')) || [];
  studentList = studentList.filter(function (student) {
    
    return student.id != id;
  });
  
  localStorage.setItem('studentList', JSON.stringify(studentList));
  allData();
}

function openEditModal(id) {
  var studentList = JSON.parse(localStorage.getItem('studentList')) || [];
  var student = studentList.find(function (student) {
    return student.id == id;
  });

  if (student) {
    document.getElementById('editId').value = student.id;
    document.getElementById('editStudentId').value = student.studentId;
    document.getElementById('editFullName').value = student.fullName;
    document.getElementById('editAge').value = student.age;
    document.getElementById('editGender').value = student.gender;
    document.getElementById('editEmail').value = student.email;
    document.getElementById('editSection').value = student.section;
    document.getElementById('editStatus').value = student.status;
  }
}

function updateData() {
  var id = document.getElementById('editId').value;
  var studentId = document.getElementById('editStudentId').value;
  var fullName = document.getElementById('editFullName').value;
  var age = document.getElementById('editAge').value;
  var gender = document.getElementById('editGender').value;
  var email = document.getElementById('editEmail').value;
  var section = document.getElementById('editSection').value;
  var status = document.getElementById('editStatus').value;

  // Check if any field is empty
  if (studentId === '' || fullName === '' || age === '' || gender === '' || email === '' || section === '' || status === '') {
    alert('Please fill out all the fields');
    return;
  }

  var studentList = JSON.parse(localStorage.getItem('studentList')) || [];

  studentList.forEach(function (student) {
    if (student.id == id) {
      student.studentId = studentId;
      student.fullName = fullName;
      student.age = age;
      student.gender = gender;
      student.email = email;
      student.section = section;
      student.status = status;
    }
  });

  localStorage.setItem('studentList', JSON.stringify(studentList));
  allData();
  var modal = document.getElementById('editModal');
  modal.classList.remove('show');
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
  var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
  modalBackdrop.parentNode.removeChild(modalBackdrop);
}


 function search() {
      var query = document.getElementById('searchInput').value.toLowerCase();
      var table = document.getElementById('table');
      var rows = table.getElementsByTagName('tr');

      for (var i = 0; i < rows.length; i++) {
        var studentId = rows[i].cells[0].textContent.toLowerCase();
        var fullName = rows[i].cells[1].textContent.toLowerCase();

        if (studentId.includes(query) || fullName.includes(query)) {
          rows[i].style.display = '';
         
        } else {
          rows[i].style.display = 'none';
         
        }
      }
 }