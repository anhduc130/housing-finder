const updateFeatureList = (unitId, featureList, connection) => {
    const numOfRooms = JSON.stringify(featureList.numOfRooms);
    const parking = JSON.stringify(featureList.parking);
    const smoking = JSON.stringify(featureList.smoking);
    const pets = JSON.stringify(featureList.pets);
    const postedDate = JSON.stringify(new Date().toISOString());

    const sql = `UPDATE feature_list
                SET number_of_rooms = ${numOfRooms},
                    parking = ${parking},
                    smoking = ${smoking},
                    pets = ${pets},
                    posted_date = ${postedDate}
                WHERE unit_id =  ${JSON.stringify(unitId)}`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) reject(err);
            else {
                resolve();
                console.log(`Success: Updated feature list to rental unit - ${unitId}`);
            }
        });
    })
}

module.exports = updateFeatureList
