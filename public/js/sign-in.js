const signInUrl = "http://localhost:2019/signin";
const signInError = (response) => {
    alert(`${response.responseText}`)
};
const signInSuccess = (response) => {
    console.log(response)
    window.location.replace("my-rental-units.html");    
}

/**
 * SIGN IN
 */
const signIn = () => {
    const email = document.getElementById('signInEmail').value
    const password = document.getElementById('signInPassword').value
    const landlord = { email, password }

    $.ajax({
        type: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        url: signInUrl,
        data: JSON.stringify(landlord),
        error: signInError,
        success: signInSuccess,
        dataType: 'json'
    });
}
