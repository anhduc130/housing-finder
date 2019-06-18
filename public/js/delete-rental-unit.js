const deleteRentalUnitUrl = "http://localhost:2019/rental-units";
const deleteRentalError = (response) => {
    if (response.statusText == "Unauthorized") {
        window.location.replace("signin.html");
    } else if (response.statusText == "Created") {
        window.location.replace("my-rental-units.html");
    } else if (response.statusText == "OK") {
        location.reload()
    }
};
const deleteRentalSuccess = (response) => {
    console.log(response)
}

/**
 * DELETE RENTAL UNIT
 */
const deleteRentalUnit = (unitId) => {
    $.ajax({
        type: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        url: `${deleteRentalUnitUrl}/${unitId}`,
        error: deleteRentalError,
        success: deleteRentalSuccess,
        dataType: 'json'
    });
}