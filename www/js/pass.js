const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);

    iconEye.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            iconEye.classList.add("ri-eye-line");
            iconEye.classList.remove("ri-eye-off-line");
        } else {
            input.type = "password";
            iconEye.classList.remove("ri-eye-line");
            iconEye.classList.add("ri-eye-off-line");
        }
    });
};
showHiddenPass("login-pass", "login-eye");
document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault();
    const enteredPassword = document.getElementById("login-pass").value;
    if (enteredPassword === "aya1014") {
        window.location.href = "../pages/home.html";
    } else {
        alert("Incorrect password! Please try again.");
    }
});