const rentalUnitsUrl = "http://localhost:2019/rental-units";

const getRentalUnitError = response => {
    debugger
    alert(`${response.responseText}`)
    if (response.statusText == "Unauthorized") {
        window.location.replace("signin.html");
    } else if (response.statusText == "Created") {
        window.location.replace("my-rental-units.html");
    }
};

const addCellsToElement = (rentalUnitElement, rentalUnit) => {
    debugger
    // Insert title
    const title = rentalUnitElement.insertCell(0);
    const titleText = document.createTextNode(rentalUnit.unit_title);
    title.append(titleText);

    // Insert Address
    const address = rentalUnitElement.insertCell(1);
    const addressText = document.createTextNode(rentalUnit.unit_address);
    address.append(addressText);

    // Insert Type
    const type = rentalUnitElement.insertCell(2);
    const typeText = document.createTextNode(rentalUnit.unit_type);
    type.append(typeText);

    // Insert Price
    const price = rentalUnitElement.insertCell(3);
    const priceText = document.createTextNode(rentalUnit.price);
    price.append(priceText);

    // Insert Actions
    const actions = rentalUnitElement.insertCell(4);

    const button1 = document.createElement("button");
    button1.innerHTML = "View";

    const button2 = document.createElement("button");
    button2.innerHTML = "Edit";

    const button3 = document.createElement("button");
    button3.innerHTML = "Delete";

    actions.append(button1);
    actions.append(button2);
    actions.append(button3);
}

const getRentalUnitSuccess = response => {
    debugger
    for (let i = 0; i < response.length; i++) {
        const rentalUnit = response[i];
        const tableRef = document.getElementById('rental-unit-table-body');
        const rentalUnitElement = tableRef.insertRow(-1);
        addCellsToElement(rentalUnitElement, rentalUnit);
    }
    console.log(response)
};

/**
 * GET RENTAL UNITS BY LANDLORD ID
 */
const getRentalUnitsByLandlordId = () => {
    debugger
    $.ajax({
        type: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        url: rentalUnitsUrl,
        error: getRentalUnitError,
        success: getRentalUnitSuccess,
        data: { onlyLandlordUnits: true },
        dataType: 'json'
    });
}
