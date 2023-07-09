const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const error = document.getElementById("error")
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = password.value === confirm_password.value && password !== null;
    console.log(isValid);
    if (isValid) {
        password.classList.remove("active");
        error.classList.remove("active");
    }
    else {
        password.classList.add("active");
        error.classList.add("active");
    }
})
