const bcrypt = require('bcrypt');

const getLandlord = (landlordEmail, connection) => {
    const sql = `SELECT * 
                FROM landlord 
                WHERE landlord_email = ${JSON.stringify(landlordEmail)}`;

    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) throw err;
            else if (!result[0]) reject(result);
            else resolve(result[0]);
        });
    });
}

const signIn = async (landlord, connection) => {
    const email = landlord.email;
    const password = landlord.password

    try {
        const landlord = await getLandlord(email, connection);
        const result = await bcrypt.compare(password, landlord.landlord_password);

        return result ? landlord : null;
    } catch (e) {
        throw e;
    }
}

module.exports = signIn
