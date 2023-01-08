const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden"
const USERNAME_KEY = "username"

function LoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintgreetings();
}

function paintgreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS)
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    paintgreetings()
}