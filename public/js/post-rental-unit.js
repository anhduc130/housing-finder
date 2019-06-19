const postRentalUnitUrl = "http://localhost:2019/rental-units";
const postRentalError = (response) => {
    alert(`${response.responseText}`)
    if (response.statusText == "Unauthorized") {
        window.location.replace("signin.html");
    } else if (response.statusText == "Created") {
        window.location.replace("my-rental-units.html");
    }
};
const postRentalSuccess = (response) => {
    console.log(response)
}

/**
 * POST RENTAL UNIT
 */
const postRentalUnit = () => {
    const unitTitle = document.getElementById('rentalUnitTitle').value
    const unitAddress = document.getElementById('rentalUnitAddress').value
    const unitPrice = document.getElementById('rentalUnitPrice').value
    const unitPostalCode = document.getElementById('rentalUnitPostalCode').value.substring(0, 3)
    const unitType = document.getElementById('rentalUnitType').value
    const unitDescription = document.getElementById('rentalUnitDescription').value

    const numOfRooms = document.getElementById('rentalUnitRoomNum').value
    const parkingYes = document.getElementById('parkingYes').checked
    const smokingYes = document.getElementById('smokingYes').checked
    const petsYes = document.getElementById('petsYes').checked

    if (!unitTitle || !unitAddress || !unitPostalCode) {
        return;
    }

    const rentalUnit = {
        unitTitle,
        unitAddress,
        unitPrice,
        unitPostalCode,
        unitType,
        unitDescription
    }

    const unitFeatureList = {
        numOfRooms,
        parking: parkingYes ? 'yes' : 'no',
        smoking: smokingYes ? 'yes' : 'no',
        pets: petsYes ? 'yes' : 'no',
    }

    debugger

    $.ajax({
        type: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        url: postRentalUnitUrl,
        data: JSON.stringify({ rentalUnit, unitFeatureList }),
        error: postRentalError,
        success: postRentalSuccess,
        dataType: 'json'
    });
}
