document.addEventListener("DOMContentLoaded", function() {
    // Function to load data from local storage
    function loadProfileData(profileId) {
        const profileData = JSON.parse(localStorage.getItem(profileId));
        if (profileData) {
            document.getElementById("student-name").textContent = profileData.name || "Carlobert B. Cate";
            document.getElementById("roll-number").textContent = profileData.rollNumber || "2022-00273-MR-0";
            document.getElementById("batch").textContent = profileData.batch || "2024";
            document.getElementById("program").textContent = profileData.program || "Diploma in Information Technology";
            document.getElementById("email").textContent = profileData.email || "carlobertcate@gmail.com";
            document.getElementById("elementary").textContent = profileData.elementary || "[Your Elementary School]";
            document.getElementById("junior-high").textContent = profileData.juniorHigh || "[Your Junior High School]";
            document.getElementById("senior-high").textContent = profileData.seniorHigh || "[Your Senior High School]";
            document.getElementById("college").textContent = profileData.college || "[Your College]";
        }
    }

    // Function to save data to local storage
    function saveProfileData(profileId, data) {
        localStorage.setItem(profileId, JSON.stringify(data));
    }

    const profileId = document.getElementById("roll-number").textContent; // Unique identifier for the profile
    loadProfileData(profileId);

    const editButton = document.getElementById("edit-button");
    editButton.addEventListener("click", function() {
        const studentName = document.getElementById("student-name");
        const rollNumber = document.getElementById("roll-number");
        const batch = document.getElementById("batch");
        const program = document.getElementById("program");
        const email = document.getElementById("email");
        const elementary = document.getElementById("elementary");
        const juniorHigh = document.getElementById("junior-high");
        const seniorHigh = document.getElementById("senior-high");
        const college = document.getElementById("college");

        const newName = prompt("Enter new name:", studentName.textContent);
        const newRollNumber = prompt("Enter new roll number:", rollNumber.textContent);
        const newBatch = prompt("Enter new batch:", batch.textContent);
        const newProgram = prompt("Enter new program:", program.textContent);
        const newEmail = prompt("Enter new email:", email.textContent);
        const newElementary = prompt("Enter new elementary school:", elementary.textContent);
        const newJuniorHigh = prompt("Enter new junior high school:", juniorHigh.textContent);
        const newSeniorHigh = prompt("Enter new senior high school:", seniorHigh.textContent);
        const newCollege = prompt("Enter new college:", college.textContent);

        const updatedData = {
            name: newName !== null && newName !== "" ? newName : studentName.textContent,
            rollNumber: newRollNumber !== null && newRollNumber !== "" ? newRollNumber : rollNumber.textContent,
            batch: newBatch !== null && newBatch !== "" ? newBatch : batch.textContent,
            program: newProgram !== null && newProgram !== "" ? newProgram : program.textContent,
            email: newEmail !== null && newEmail !== "" ? newEmail : email.textContent,
            elementary: newElementary !== null && newElementary !== "" ? newElementary : elementary.textContent,
            juniorHigh: newJuniorHigh !== null && newJuniorHigh !== "" ? newJuniorHigh : juniorHigh.textContent,
            seniorHigh: newSeniorHigh !== null && newSeniorHigh !== "" ? newSeniorHigh : seniorHigh.textContent,
            college: newCollege !== null && newCollege !== "" ? newCollege : college.textContent
        };

        studentName.textContent = updatedData.name;
        rollNumber.textContent = updatedData.rollNumber;
        batch.textContent = updatedData.batch;
        program.textContent = updatedData.program;
        email.textContent = updatedData.email;
        elementary.textContent = updatedData.elementary;
        juniorHigh.textContent = updatedData.juniorHigh;
        seniorHigh.textContent = updatedData.seniorHigh;
        college.textContent = updatedData.college;

        saveProfileData(profileId, updatedData);
    });

    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", function() {
        window.location.href = "login.html";
    });
});
