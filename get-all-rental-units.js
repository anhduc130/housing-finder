const getRentalUnitsByLandlordId = () => {
    const sql = `SELECT *  FROM rental_unit`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) reject(err);
            else if (result.length == 0) resolve();
            else resolve(result);
        });
    });
}

module.exports = getRentalUnitsByLandlordId
