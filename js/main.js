// add.html

function save(event) {
  let studentId = document.getElementById('inputStudentId').value;
  let fullName = document.getElementById('inputFullName').value;
  let age = document.getElementById('inputAge').value;
  let gender = document.getElementById('inputGender').value;
  let email = document.getElementById('inputEmail').value;
  let section = document.getElementById('inputSection').value;
  let status = document.getElementById('inputStatus').value;

  let studentList = JSON.parse(localStorage.getItem('studentList')) || [];

  if (studentId === "" || fullName === "" || age === "" || gender === "" || email === "" || section === "" || status === "") {
    alert("Please fill out the form");
    return;
  }

  let student = {
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
function removeData(id) {
  let studentList = JSON.parse(localStorage.getItem('studentList')) || [];
  studentList = studentList.filter(function (student) {
    
    return student.id != id;
  });
  
  localStorage.setItem('studentList', JSON.stringify(studentList));
  allData();
}

function openEditModal(id) {
  let studentList = JSON.parse(localStorage.getItem('studentList')) || [];
  let student = studentList.find(function (student) {
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
  let id = document.getElementById('editId').value;
  let studentId = document.getElementById('editStudentId').value;
  let fullName = document.getElementById('editFullName').value;
  let age = document.getElementById('editAge').value;
  let gender = document.getElementById('editGender').value;
  let email = document.getElementById('editEmail').value;
  let section = document.getElementById('editSection').value;
  let status = document.getElementById('editStatus').value;

  // Check if any field is empty
  if (studentId === '' || fullName === '' || age === '' || gender === '' || email === '' || section === '' || status === '') {
    alert('Please fill out all the fields');
    return;
  }

  let studentList = JSON.parse(localStorage.getItem('studentList')) || [];

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
  let modal = document.getElementById('editModal');
  modal.classList.remove('show');
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
  let modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
  modalBackdrop.parentNode.removeChild(modalBackdrop);
}


 function search() {
      let query = document.getElementById('searchInput').value.toLowerCase();
      let table = document.getElementById('table');
      let rows = table.getElementsByTagName('tr');

      for (let i = 0; i < rows.length; i++) {
        let studentId = rows[i].cells[0].textContent.toLowerCase();
        let fullName = rows[i].cells[1].textContent.toLowerCase();

        if (studentId.includes(query) || fullName.includes(query)) {
          rows[i].style.display = '';
         
        } else {
          rows[i].style.display = 'none';
         
        }
      }
 }