const uuidv1 = require('uuid/v1');

const createRentalUnit = (housing, connection) => {
    const rentalId = JSON.stringify(uuidv1());
    const price = JSON.stringify(housing.price);
    const landlordId = JSON.stringify(housing.landlordId);
    const postalCode = JSON.stringify(housing.postal_code);
    const unitType = JSON.stringify(housing.unitType);
    const unitAddress = JSON.stringify(housing.unitAddress);
    const unitDescription = JSON.stringify(housing.unitDescription);

    const sql = `INSERT INTO  rental_unit 
        VALUES  (${rentalId}, ${unitDescription}, ${price}, ${unitAddress}, 
                ${unitType}, ${postalCode}, ${landlordId})`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Success: A rental unit inserted!');
    });
}

module.exports = createRentalUnit
