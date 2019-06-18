const updateRentalUnitError = response => {
    if (response.statusText == "Unauthorized") {
        alert(`${response.responseText}`)
        window.location.replace("signin.html");
    }
};

const updateRentalUnitSuccess = response => {
    console.log(response)
};

/**
 * Update Rental Unit
 */
const updateRentalUnit = () => {
    debugger
    $.ajax({
        type: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        url: `${rentalUnitsUrl}/${unitId}`,
        error: errorCallback,
        success: successCallback,
        data: { rentalUnit },
        dataType: 'json'
    });
}

const renderRentalUnit = () => {
    const urlStr = window.location.href
    const url = new URL(urlStr);
    const unitId = url.searchParams.get("id");

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
