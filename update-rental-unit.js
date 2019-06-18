const updateRentalUnit = (unitId, rentalUnit, connection) => {
    const unitTitle = JSON.stringify(rentalUnit.unitTitle);
    const unitAddress = JSON.stringify(rentalUnit.unitAddress);
    const unitPrice = JSON.stringify(rentalUnit.unitPrice);
    const unitPostalCode = JSON.stringify(rentalUnit.unitPostalCode);
    const unitType = JSON.stringify(rentalUnit.unitType);
    const unitDescription = JSON.stringify(rentalUnit.unitDescription);
    const sql = `UPDATE rental_unit
                SET unit_title = ${unitTitle},
                    unit_address = ${unitAddress},
                    price = ${unitPrice},
                    postal_code = ${unitPostalCode},
                    unit_type = ${unitType},
                    unit_description = ${unitDescription}
                WHERE unit_id =  ${JSON.stringify(unitId)}`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) reject(err);
            else {
                resolve(unitId)
                console.log(`Success: A rental unit updated - ${unitId}!`);
            }
        });
    })
}

module.exports = updateRentalUnit
