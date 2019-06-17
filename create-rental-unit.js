const uuidv1 = require('uuid/v1');

const createRentalUnit = (landlord, rentalUnit, connection) => {
    const unitId = JSON.stringify(uuidv1());
    const landlordId = JSON.stringify(landlord.landlordId);
    const unitTitle = JSON.stringify(rentalUnit.unitTitle);
    const unitAddress = JSON.stringify(rentalUnit.unitAddress);
    const unitPrice = JSON.stringify(rentalUnit.unitPrice);
    const unitPostalCode = JSON.stringify(rentalUnit.unitPostalCode);
    const unitType = JSON.stringify(rentalUnit.unitType);
    const unitDescription = JSON.stringify(rentalUnit.unitDescription);

    const sql = `INSERT INTO  rental_unit 
        VALUES  (${unitId}, ${unitTitle}, ${unitDescription}, ${unitPrice}, ${unitAddress}, 
                ${unitType}, ${unitPostalCode}, ${landlordId})`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) reject(err);
            else {
                resolve(unitId)
                console.log('Success: A rental unit inserted!');
            }
        });
    })
}

module.exports = createRentalUnit
