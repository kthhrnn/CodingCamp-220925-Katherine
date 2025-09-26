welcomeMessage();

function welcomeMessage() {
    let username = prompt("Enter your name:");
    if (username) {
        document.getElementById("username").textContent = username;
        alert(`Welcome to my portofolio, ${username}!`);
    } else {
        alert("Welcome to my portofolio!");
    }
}

// Form Validation
function validateForm() {
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        // If any field is empty,show an alert
        alert("Please fill in all fields.");
    } else {
        // Update tulisan di home
        document.getElementById("username").textContent = name;

        // If all fields are filled, show a succes message
        alert(`Thanks, ${name}! Form submitted succesfully`);
    }
}