function loginMode() {
    // Change the hidden flag for the post request
    document.getElementById("mode").value = "login";
    // Swap the button color
    document.getElementById("loginButton").style.backgroundColor = "#42A5F5";
    document.getElementById("signupButton").style.backgroundColor = "#90CAF9";
    // Hide all extra fields used for signing up
    const elements = document.getElementsByClassName("signup");
    for (let index in elements) {
        if (elements.hasOwnProperty(index)) {
            elements[index].style.display = "none";
        }
    }
}

function signupMode() {
    // Change the hidden flag for the post request
    document.getElementById("mode").value = "signup";
    // Swap the button color
    document.getElementById("loginButton").style.backgroundColor = "#90CAF9";
    document.getElementById("signupButton").style.backgroundColor = "#42A5F5";
    // Show all extra fields used for signing up
    const elements = document.getElementsByClassName("signup");
    for (let index in elements) {
        if (elements.hasOwnProperty(index)) {
            elements[index].style.display = "block";
        }
    }
}