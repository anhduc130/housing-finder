const getAveragePriceOfAllRentalUnits = (landlordId, connection) => {
    const sql = `SELECT AVG(price) as averagePrice, landlord_id
                FROM rental_unit
                GROUP BY landlord_id`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err)
                reject(err);
            }
            else if (result.length == 0) resolve();
            else {
                result.forEach((row) => {
                    if (row.landlord_id == landlordId) {
                        resolve(row.averagePrice)
                        return
                    }
                })
            }
        });
    });
}

module.exports = getAveragePriceOfAllRentalUnits
