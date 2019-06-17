const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPasswod = (password) => {
    return bcrypt.hash(password, saltRounds);
}

const signUp = async (landlord, connection) => {
    const landlordId = JSON.stringify(uuidv1());
    const landlordName = JSON.stringify(landlord.name);
    const landlordEmail = JSON.stringify(landlord.email);
    const landlordPassword = JSON.stringify(await hashPasswod(landlord.password));
    const landlordPhoneNumber = JSON.stringify(landlord.phoneNumber);

    const sql = `INSERT INTO  landlord 
        VALUES  (${landlordId}, ${landlordName}, ${landlordEmail}, ${landlordPassword}, ${landlordPhoneNumber}, "")`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) reject(err);
            else {
                console.log('Success: A landlord signed up!');
                resolve()
            }
        });
    })
}

module.exports = signUp
