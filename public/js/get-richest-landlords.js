const richestLandlordsUrl = "http://localhost:2019/richest-landlords";

const addCellsToElement = (richestLandlordElement, richestLandlord) => {
    
    const name = richestLandlordElement.insertCell(0);
    const nameText = document.createTextNode(richestLandlord.landlord_name);
    name.append(nameText);

    const numOfHouses = richestLandlordElement.insertCell(1);
    const numOfHousesText = document.createTextNode(richestLandlord.numOfHouses)
    numOfHouses.append(numOfHousesText);

    const income = richestLandlordElement.insertCell(2);
    const incomeText = document.createTextNode(richestLandlord.totalIncome);
    income.append(incomeText);
}

const richestLandlordsSuccess = (response) => {
    
    const richestLandlords = response.richestLandlords

    const tableRef = document.getElementById('richest-landlords-table')
    for (let i = 0; i < richestLandlords.length; i++) {
        const richestLandlord = richestLandlords[i];
        const richestLandlordElement = tableRef.insertRow(-1);
        addCellsToElement(richestLandlordElement, richestLandlord);
    }
    console.log(response)
}

const richestLandlordsError = (response) => {
    
    console.log(response)
}

const getRichestLandlords = () => {
    $.ajax({
        type: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        url: richestLandlordsUrl,
        error: richestLandlordsError,
        success: richestLandlordsSuccess,
        dataType: 'json'
    });
}