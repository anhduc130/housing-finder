const signUpUrl = "http://localhost:2019/signup";
const signUpError = (request) => {
    alert(`${request.responstText}`)
};
const signUpSuccess = (request) => {
    console.log(request.responstText)
}

/**
 * SIGN UP
 */
const signUp = () => {
    const email = document.getElementById('signUpEmail').value
    const password = document.getElementById('signUpPassword').value
    const confirmPassword = document.getElementById('signUpConfirmSignUpPassword').value
    const phoneNumber = document.getElementById('signUpPhoneNumber').value
    const name = document.getElementById('signUpName').value

    const landlord = {
        name,
        email,
        password,
        phoneNumber
    }

    if (password != confirmPassword) {
        alert("Passwords don't match. Please re-enter!")
        return
    }

    $.ajax({
        type: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        url: signUpUrl,
        data: JSON.stringify(landlord),
        error: signUpError,
        success: signUpSuccess,
        dataType: 'json'
    });
}
