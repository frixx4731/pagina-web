document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("formContainer");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    showRegister.addEventListener("click", function () {
        formContainer.classList.add("rotate");
    });

    showLogin.addEventListener("click", function () {
        formContainer.classList.remove("rotate");
    });
});
