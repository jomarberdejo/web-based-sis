const enrolledStudents = parseInt(document.getElementById("enrolledStudents").textContent);
  const inProgress = parseInt(document.getElementById("inProgress").textContent);
  const maleStudents = parseInt(document.getElementById("maleStudents").textContent);
  const femaleStudents = parseInt(document.getElementById("femaleStudents").textContent);


  const statusRadio = document.getElementById("statusRadio");
  const genderRadio = document.getElementById("genderRadio");
  const ctx = document.getElementById("dashboardChart").getContext("2d");

  
  let selectedData = [enrolledStudents, inProgress];
  let selectedLabels = ["Enrolled", "In Progress"];

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: selectedLabels,
    datasets: [
      {
        label: "Students", 
        data: selectedData,
        backgroundColor: "gold",
        
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "#ccc",
        },
        beginAtZero: true,
        ticks: {
          color: "#fff", 
        },
      },
      
      y: {
        grid: {
          color: "#ccc", 
        },
        beginAtZero: true,
        ticks: {
          color: "#fff", 
        },
      },
      
    },
    plugins: {
      legend: {
        labels: {
          color: "gold",  
        },
      },
      
    },
  },
});



  function updateChart() {
    if (statusRadio.checked) {
      selectedData = [enrolledStudents, inProgress];
      selectedLabels = ["Enrolled", "In Progress"];
    } else if (genderRadio.checked) {
      selectedData = [maleStudents, femaleStudents];
      selectedLabels = ["Male", "Female"];
    }


    chart.data.labels = selectedLabels;
    chart.data.datasets[0].data = selectedData;


    chart.update();
  }

  
  updateChart();


  statusRadio.addEventListener("change", updateChart);
  genderRadio.addEventListener("change", updateChart);

