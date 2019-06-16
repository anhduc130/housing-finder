const uuidv1 = require('uuid/v1');

const signUp = (landlord, connection) => {
    const landlordId = JSON.stringify(uuidv1());
    const landlordName = JSON.stringify(landlord.name);
    const landlordEmail = JSON.stringify(landlord.email);
    const landlordPassword = JSON.stringify(landlord.password);
    const landlordPhoneNumber = JSON.stringify(landlord.phoneNumber);

    const sql = `INSERT INTO  rental_unit 
        VALUES  (${landlordId}, ${landlordName}, ${landlordEmail}, ${landlordPassword}, ${landlordPhoneNumber})`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Success: A landlord signed up!');
    });
}

module.exports = signUp
