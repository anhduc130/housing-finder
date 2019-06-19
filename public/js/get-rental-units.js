const rentalUnitsUrl = "http://localhost:2019/rental-units";

const isNumeric = (num) => {
    return !isNaN(num)
}

const getRentalUnitError = response => {
    if (response.statusText == "Unauthorized") {
        alert(`${response.responseText}`)
        window.location.replace("signin.html");
    }
};

const addCellsToElement = (rentalUnitElement, rentalUnit) => {
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
    const priceText = document.createTextNode(`$${rentalUnit.price}`);
    price.append(priceText);

    // Insert Actions
    const actions = rentalUnitElement.insertCell(4);

    const button1 = document.createElement("button");
    button1.innerHTML = "View";
    button1.addEventListener("click", () => {
        window.open(`rental-units/${rentalUnit.unit_id}`);
    });

    const button2 = document.createElement("button");
    button2.innerHTML = "Edit";
    button2.addEventListener("click", () => {
        window.location.assign(`update-rental-unit.html?id=${rentalUnit.unit_id}`);
    });

    const button3 = document.createElement("button");
    button3.innerHTML = "Delete";
    button3.addEventListener("click", () => {
        deleteRentalUnit(rentalUnit.unit_id);
    });

    actions.append(button1);
    actions.append(button2);
    actions.append(button3);
}

const getRentalUnitSuccess = response => {
    const rentalUnits = response.rentalUnits
    const tableRef = document.getElementById('rental-unit-table-body');
    for (let i = 0; i < rentalUnits.length; i++) {
        const rentalUnit = rentalUnits[i];
        const rentalUnitElement = tableRef.insertRow(-1);
        addCellsToElement(rentalUnitElement, rentalUnit);
    }

    const rentalUnitElement = tableRef.insertRow(-1);
    const averagePriceText = document.createTextNode(`AVERAGE: $${response.averagePriceOfAllRentalUnits}`);
    rentalUnitElement.insertCell(0)
    rentalUnitElement.insertCell(1)
    rentalUnitElement.insertCell(2)

    const avgPrice = rentalUnitElement.insertCell(3)
    avgPrice.append(averagePriceText)

    rentalUnitElement.insertCell(4)
};

/**
 * GET RENTAL UNITS BY LANDLORD ID
 */
const getRentalUnitsByLandlordId = () => {
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

/**
 * GET RENTAL UNITS BY UNIT ID
 */
const getRentalUnitByUnitId = (unitId, successCallback, errorCallback) => {
    $.ajax({
        type: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        url: `${rentalUnitsUrl}/${unitId}`,
        error: errorCallback,
        success: successCallback,
        data: { jsonOnly: true },
        dataType: 'json'
    });
}

const addCellsToElementAttribute = (rentalUnitElement, rentalUnit) => {

    const unitId = rentalUnitElement.insertCell(0);
    rentalUnit.unit_id
    const unitIdText = document.createElement('p');
    unitIdText.innerHTML = `<a target="_blank" href="rental-units/${rentalUnit.unit_id}">${rentalUnit.unit_id}</a>`
    unitId.append(unitIdText);

    const unitTitle = rentalUnitElement.insertCell(1);
    const unitTitleText = document.createTextNode(rentalUnit.unit_title);
    unitTitle.append(unitTitleText);

    const address = rentalUnitElement.insertCell(2);
    const addressText = document.createTextNode(rentalUnit.unit_address);
    address.append(addressText);

    const type = rentalUnitElement.insertCell(3);
    const typeText = document.createTextNode(rentalUnit.unit_type);
    type.append(typeText);

    const price = rentalUnitElement.insertCell(4);
    const priceText = document.createTextNode(`$${rentalUnit.price}`);
    price.append(priceText);
}
const getRentalUnitsByAttributesSuccess = (response) => {
    const rentalUnits = response.rentalUnits;
    const tableRef = document.getElementById('housing-options-table')

    document.getElementById('minMarketPrice').innerHTML = `$${response.minMarketPrice}`
    document.getElementById('maxMarketPrice').innerHTML = `$${response.maxMarketPrice}`

    for (var i = tableRef.rows.length - 1; i >= 0; i--) {
        tableRef.deleteRow(i);
    }

    const headerRow = tableRef.insertRow(-1)

    const unitId = headerRow.insertCell(0);
    const unitIdText = document.createTextNode('Unit ID')
    unitId.append(unitIdText)

    const unitTitle = headerRow.insertCell(1);
    const unitTitleText = document.createTextNode('Title')
    unitTitle.append(unitTitleText)

    const unitAddress = headerRow.insertCell(2);
    const unitAddressText = document.createTextNode('Address')
    unitAddress.append(unitAddressText)

    const unitType = headerRow.insertCell(3);
    const unitTypeText = document.createTextNode('Type')
    unitType.append(unitTypeText)

    const unitPrice = headerRow.insertCell(4);
    const unitPriceText = document.createTextNode('Price')
    unitPrice.append(unitPriceText)

    for (let i = 0; i < rentalUnits.length; i++) {
        const rentalUnit = rentalUnits[i];
        const rentalUnitElement = tableRef.insertRow(-1);
        addCellsToElementAttribute(rentalUnitElement, rentalUnit);
    }

    const checkTitle = document.getElementById('checkTitle').checked
    const checkAddress = document.getElementById('checkAddress').checked
    const checkUnitType = document.getElementById('checkUnitType').checked

    if (!checkTitle && !checkAddress && !checkUnitType) {
        return
    }
    if (!checkTitle) {
        hideColumn("Title")
    }
    if (!checkAddress) {
        hideColumn("Address")
    }
    if (!checkUnitType) {
        hideColumn("Type")
    }
}
const getRentalUnitsByAttributes = () => {
    let minPrice = document.getElementById('minPrice').value
    let maxPrice = document.getElementById('maxPrice').value
    const checkTitle = document.getElementById('checkTitle').checked
    const checkAddress = document.getElementById('checkAddress').checked
    const checkUnitType = document.getElementById('checkUnitType').checked
    let attributes = []
    if (checkTitle) {
        attributes.push('unit_title')
    }
    if (checkAddress) {
        attributes.push('unit_address')
    }
    if (checkUnitType) {
        attributes.push('unit_type')
    }
    if (attributes == '') {
        attributes = ['unit_title', 'unit_address', 'unit_type']
    }
    attributes = attributes.join(',')

    $.ajax({
        type: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        url: rentalUnitsUrl,
        error: getRentalUnitError,
        success: getRentalUnitsByAttributesSuccess,
        data: {
            jsonOnly: true,
            projectionOnly: true,
            minPrice,
            maxPrice,
            attributes
        },
        dataType: 'json'
    });
}

const hideColumn = (col) => {
    var tbl = document.getElementById("housing-options-table");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                // tbl.rows[i].cells[j].style.display = "";

                if (tbl.rows[i].cells[j].textContent == col ||
                    tbl.rows[i].cells[j].textContent == 'undefined')
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
    }
}
