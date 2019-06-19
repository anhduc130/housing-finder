const urlStr = window.location.href
const url = new URL(urlStr);
const unitId = url.searchParams.get("id");

const updateRentalUnitError = response => {
    if (response.statusText == "Unauthorized") {
        alert(`${response.responseText}`)
        window.location.replace("signin.html");
    } else if (response.statusText == "OK") {
        alert('Successfully updated rental unit!')
        window.location.replace("my-rental-units.html");
    }
};

const updateRentalUnitSuccess = response => {
    console.log(response)
};

/**
 * Update Rental Unit
 */
const updateRentalUnit = () => {
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

    $.ajax({
        type: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        url: `${rentalUnitsUrl}/${unitId}`,
        error: updateRentalUnitError,
        success: updateRentalUnitSuccess,
        data: JSON.stringify({ rentalUnit, unitFeatureList }),
        dataType: 'json'
    });
}

const renderRentalUnit = () => {
    getRentalUnitByUnitId(unitId,
        (responseSuccess) => {
            document.getElementById('rentalUnitTitle').value = responseSuccess.post.title
            document.getElementById('rentalUnitAddress').value = responseSuccess.post.address
            document.getElementById('rentalUnitPrice').value = responseSuccess.post.price
            document.getElementById('rentalUnitPostalCode').value = responseSuccess.post.postal_code
            document.getElementById('rentalUnitType').value = responseSuccess.post.type
            document.getElementById('rentalUnitDescription').value = responseSuccess.post.description

            document.getElementById('rentalUnitRoomNum').value = responseSuccess.features.rooms
            document.getElementById('parkingYes').checked = responseSuccess.features.parking == "yes"
            document.getElementById('parkingNo').checked = responseSuccess.features.parking == "no"

            document.getElementById('smokingYes').checked = responseSuccess.features.smoking == "yes"
            document.getElementById('smokingNo').checked = responseSuccess.features.smoking == "no"

            document.getElementById('petsYes').checked = responseSuccess.features.pets == "yes"
            document.getElementById('petsNo').checked = responseSuccess.features.pets == "no"
        }, (responseError) => {
            console.log(responseError)
        });
}
