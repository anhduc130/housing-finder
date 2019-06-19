const dirtyScript = () => {
    const postalCodes = ['V5K', 'V5L', 'V5N', 'V5P', 'V5R', 'V5S', 'V5X', 'V5Y', 'V5Z', 'V6A',
        'V6B', 'V6G', 'V6J', 'V6K', 'V6L', 'V6M', 'V6N', 'V6P', 'V6R', 'V6T', 'V6Z']
    const unitTypes = ['Apartment', 'House', 'Laneway House', 'Basement']
    const checkedValues = [true, false]

    postalCodes.forEach(postalCode => {
        document.getElementById('rentalUnitTitle').value = `Rental unit at ${postalCode}`
        document.getElementById('rentalUnitAddress').value = `Address at ${postalCode}`
        document.getElementById('rentalUnitPrice').value = Math.floor(Math.random() * Math.floor(5000))
        document.getElementById('rentalUnitPostalCode').value = postalCode
        document.getElementById('rentalUnitType').value = unitTypes[Math.floor(Math.random() * Math.floor(4))]
        document.getElementById('rentalUnitDescription').value = `This is a random description at ${postalCode}`

        document.getElementById('rentalUnitRoomNum').value = Math.floor(1 + Math.random() * Math.floor(5))

        document.getElementById('parkingYes').checked = checkedValues[Math.floor(Math.random() * Math.floor(2))]
        document.getElementById('smokingYes').checked = checkedValues[Math.floor(Math.random() * Math.floor(2))]
        document.getElementById('petsYes').checked = checkedValues[Math.floor(Math.random() * Math.floor(2))]

        document.getElementById('parkingNo').checked = !document.getElementById('parkingYes').checked
        document.getElementById('smokingNo').checked = !document.getElementById('smokingYes').checked
        document.getElementById('petsNo').checked = !document.getElementById('petsYes').checked

        postRentalUnit();
    })
}