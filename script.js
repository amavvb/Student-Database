// Define student and admin credentials with their respective redirect URLs
const users = [
    { username: "student1", password: "password1", redirectUrl: "student1.html" },
    { username: "student2", password: "password2", redirectUrl: "student2.html" },
    { username: "student3", password: "password3", redirectUrl: "student3.html" },
    { username: "student4", password: "password4", redirectUrl: "student4.html" },
    { username: "student5", password: "password5", redirectUrl: "student5.html" },
    { username: "student6", password: "password6", redirectUrl: "student6.html" },
    { username: "student7", password: "password7", redirectUrl: "student7.html" },
    { username: "admin", password: "adminpassword", redirectUrl: "admin.html" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the entered username and password match any in the users array
    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        // Redirect to the appropriate page based on user role
        window.location.href = authenticatedUser.redirectUrl;
    } else {
        document.getElementById("message").textContent = "Invalid username or password";
    }
});
