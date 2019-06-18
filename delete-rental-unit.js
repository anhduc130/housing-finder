const deleteRentalUnit = (unitId, connection) => {
    const sql = `DELETE FROM rental_unit
                WHERE unit_id =  ${JSON.stringify(unitId)}`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) reject(err);
            else {
                resolve(unitId)
                console.log(`Success: A rental unit deleted - ${unitId}!`);
            }
        });
    })
}

module.exports = deleteRentalUnit
