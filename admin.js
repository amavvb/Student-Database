const students = [
    { id: 1, name: "Carlobert B. Cate", rollNumber: "2022-00273-MR-0", batch: "2024", class: "Information Technology", gender: "Male", picture: "carlo.jpeg.jpg" },
    { id: 2, name: "Arman Marc Adriel G. Dolorito", rollNumber: "2022-00532-MR-0", batch: "2024", class: "Information Technology", gender: "Male", picture: "ama.jpeg.jpg" },
    { id: 3, name: "Lemuel T. Lucirit", rollNumber: "2022-00282-MR-0", batch: "2024", class: "Information Technology", gender: "Male", picture: "lem.jpeg.jpg" },
    { id: 4, name: "Nealie O. Bidbid", rollNumber: "2022-00270-MR-0", batch: "2024", class: "Information Technology", gender: "Female", picture: "nea.jpeg.jpg" },
    { id: 5, name: "Mecaella B. Gloriani", rollNumber: "2022-00278-MR-0", batch: "2024", class: "Information Technology", gender: "Female", picture: "meca.jpeg.jpg" },
    { id: 6, name: "Jamaica Angeilyn S. Legaspi", rollNumber: "2022-00281-MR-0", batch: "2024", class: "Information Technology", gender: "Female", picture: "jamaica.jpeg.jpg" },
    { id: 7, name: "Kathrisha H. Sapon", rollNumber: "2022-00292-MR-0", batch: "2024", class: "Information Technology", gender: "Female", picture: "kath.jpeg.jpg" }
];

// Function to render the student list
function renderStudentList() {
    const tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${student.picture}" alt="Profile Picture" class="profile-picture"></td>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.batch}</td>
            <td>${student.class}</td>
            <td>${student.gender}</td>
            <td>
                <button class="view" data-id="${student.id}">View</button>
                <button class="delete" data-id="${student.id}">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Attach event listeners to the view and delete buttons
    tbody.addEventListener("click", function(event) {
        if (event.target.classList.contains("view")) {
            const studentId = parseInt(event.target.getAttribute("data-id"));
            viewStudent(studentId);
        } else if (event.target.classList.contains("delete")) {
            const studentId = parseInt(event.target.getAttribute("data-id"));
            deleteStudent(studentId);
        }
    });
}

// Function to view a student (dummy function for demonstration)
function viewStudent(studentId) {
    // Replace with your view functionality (e.g., open a modal or navigate to student profile page)
    alert(`View student with ID ${studentId}`);
}

// Function to delete a student
function deleteStudent(studentId) {
    const confirmed = confirm(`Are you sure you want to remove student with ID ${studentId}?`);
    if (confirmed) {
        const index = students.findIndex(student => student.id === studentId);
        if (index !== -1) {
            students.splice(index, 1);
            renderStudentList(); // Re-render the student list after deletion
        }
    }
}

// Function to add a student (dummy function for demonstration)
function addStudent() {
    const newStudent = {
        id: students.length + 1,
        name: prompt("Enter student name:"),
        rollNumber: prompt("Enter roll number:"),
        batch: prompt("Enter batch:"),
        class: prompt("Enter class:"),
        gender: prompt("Enter gender:"),
        picture: prompt("Enter picture URL:")
    };
    students.push(newStudent);
    renderStudentList(); // Re-render the student list after adding a new student
}

// Attach event listener to the add student button
document.getElementById("add-student-button").addEventListener("click", addStudent);

// Call renderStudentList to initially render the student list
window.onload = function() {
    renderStudentList();
};
function renderStudentList() {
    const tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img class="profile-picture" src="${student.picture}" alt="Profile Picture"></td>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.batch}</td>
            <td>${student.class}</td>
            <td>${student.gender}</td>
            <td>
                <button class="delete" data-id="${student.id}">Delete</button>
                <button class="view" data-id="${student.id}">View Schedule</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    tbody.addEventListener("click", function(event) {
        if (event.target.classList.contains("edit")) {
            const studentId = parseInt(event.target.getAttribute("data-id"));
            editStudent(studentId);
        } else if (event.target.classList.contains("delete")) {
            const studentId = parseInt(event.target.getAttribute("data-id"));
            deleteStudent(studentId);
        } else if (event.target.classList.contains("view")) {
            const studentId = parseInt(event.target.getAttribute("data-id"));
            viewStudent(studentId);
        }
    });
}

function viewStudent(studentId) {
    const student = students.find(s => s.id === studentId);
    if (student) {
        const schedulePage = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>${student.name}'s Schedule</title>
</head>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: white;
        margin: 0;
        padding: 0;
    }

    .container {
        width: 80%;
        margin: auto;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    nav {
        background-color: #8B0000;
        color: white;
        padding: 10px 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    nav ul {
        list-style: none;
        padding: 0;
        text-align: center;
    }

    nav ul li {
        display: inline;
        margin: 0 10px;
    }

    nav ul li a {
        color: white;
        text-decoration: none;
    }

    .header-container {
        background-color: #8B0000;
        color: white;
        padding: 20px;
        border-radius: 8px 8px 0 0;
        text-align: center;
    }

    h1 {
        margin: 0;
        font-size: 2em;
    }

    .table-container {
        padding: 20px;
    }

    h2 {
        color: #333;
        border-bottom: 2px solid #ddd;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: center;
    }

    th {
        background-color: #f2f2f2;
        color: #333;
    }

    .red-button {
        background-color: #8B0000;
        color: white;
        border: none;
        padding: 10px 20px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 20px;
    }

    .red-button:hover {
        background-color: #B22222;
    }

    .profile-picture {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>
<body>
    <div class="header-container">
        <h1>${student.name}'s Schedule</h1>
    </div>
    <div class="container">
        <div class="table-container">
            <h2>School Schedule</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Time</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>2:00 PM - 6:00 PM</td>
                        <td>Pathfit 4</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>7:30 AM - 12:30 PM</td>
                        <td>Information Management</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>12:30 PM - 6:00 PM</td>
                        <td>Object Oriented Programming</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>7:30 AM - 10:30 AM</td>
                        <td>Quantitative Methods with Modeling and Simulation</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>10:30 AM - 12:30 PM</td>
                        <td>Business Intelligence</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>12:30 PM - 5:30 PM</td>
                        <td>Network Administration</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>11:00 AM - 4:00 PM</td>
                        <td>Systems Administration Maintenance</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>7:30 AM - 10:00 AM</td>
                        <td>Human Computer Interaction</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>10:00 AM - 12:30 PM</td>
                        <td>Business Intelligence</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>1:00 PM - 6:00 PM</td>
                        <td>Web Development</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>

        `;

        const newWindow = window.open();
        newWindow.document.write(schedulePage);
        newWindow.document.close();
    }
}

window.onload = function() {
    renderStudentList();
};

    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
