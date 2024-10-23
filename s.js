// Basic client-side validation or functionality can go here

document.querySelector("form").addEventListener("submit", function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});
document.querySelector("form").addEventListener("submit", function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Both username and password are required.");
        event.preventDefault();
    }
});