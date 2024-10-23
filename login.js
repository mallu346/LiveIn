// Client-side validation and interaction

document.querySelector("form").addEventListener("submit", function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Both username and password are required.");
        event.preventDefault();
    }
});
