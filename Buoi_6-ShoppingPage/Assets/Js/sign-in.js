// DOM
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password") 
const signUpForm = document.querySelector("#sign-up-form")

// handleSignUp
function handleSignUp(event) {
    event.preventDefault();

    let email = emailInput.value;
    let password = passwordInput.value;
    
    if (email || password) {
        alert("")
    }
}


