const addFeatureListToRentalUnit = (featureList, rentalUnitId, connection) => {
    const unitId = rentalUnitId;
    const numOfRooms = JSON.stringify(featureList.numOfRooms);
    const parking = JSON.stringify(featureList.parking);
    const smoking = JSON.stringify(featureList.smoking);
    const pets = JSON.stringify(featureList.pets);
    const postedDate = JSON.stringify(new Date().toISOString());

    const sql = `INSERT INTO  feature_list 
        VALUES  (${unitId}, ${numOfRooms}, ${parking}, ${smoking}, 
                ${pets}, ${postedDate})`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) reject(err);
            else {
                resolve();
                console.log(`Success: Added feature list to rental unit - ${unitId}`);
            }
        });
    })
}

module.exports = addFeatureListToRentalUnit
