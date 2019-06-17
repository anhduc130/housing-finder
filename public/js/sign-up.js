const url = "http://localhost:2019/signup";
const error = (request) => {
    console.log(request.responseText);
    if (request.statusText == 'Created') {
        alert('Successfully signed up. Please sign in now.')
        location.reload();
    } else {
        alert('There is an error occured')
    }
};

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
        url: url,
        data: JSON.stringify(landlord),
        error: error,
        dataType: 'json'
    });
}
