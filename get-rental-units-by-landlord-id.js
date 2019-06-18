const getRentalUnitsByLandlordId = (landlordId, connection) => {
    const sql = `SELECT * 
                FROM rental_unit 
                WHERE landlord_id = ${JSON.stringify(landlordId)}`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) reject(err);
            else if (result.length == 0) resolve();
            else resolve(result);
        });
    });
}

module.exports = getRentalUnitsByLandlordId
