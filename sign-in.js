const bcrypt = require('bcrypt');
const cryptoRandomString = require('crypto-random-string');

const getLandlord = (landlordEmail, connection) => {
    const sql = `SELECT * 
                FROM landlord 
                WHERE landlord_email = ${JSON.stringify(landlordEmail)}`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) throw err;
            else if (!result[0]) reject('Invalid email address');
            else resolve(result[0]);
        });
    });
}

const updateLoggedInKey = (landlordEmail, connection) => {
    const loggedInKey = cryptoRandomString({ length: 15, type: 'base64' });
    const sql = `UPDATE landlord 
                SET logged_in_key =  ${JSON.stringify(loggedInKey)}
                WHERE landlord_email = ${JSON.stringify(landlordEmail)}`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) throw err;
            resolve(loggedInKey)
        });
    });
}

const signIn = async (landlord, connection) => {
    const email = landlord.email;
    const password = landlord.password

    try {
        const landlord = await getLandlord(email, connection);
        const result = await bcrypt.compare(password, landlord.landlord_password);

        if (result) {
            const loggedInKey = await updateLoggedInKey(email, connection);
            return { loggedInKey, landlord }
        } else {
            throw 'Invalid password';
        }
    } catch (e) {
        throw e;
    }
}

module.exports = signIn
