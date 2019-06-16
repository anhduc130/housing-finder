const superagent = require('superagent');
const fs         = require('fs');

//Parse the specified hard-coded SQL file and return an list of valid string SQL statements
function parseSQL(file) {
  return new Promise ((resolve) => {
      fs.readFile('./public/static-sql/' + file, 'utf8', (err, data) => {
        if(err) {
          console.log(err);
        } else {
          var sql = data.split(';');
          sql.forEach((e) => {
            e.trim();
            var statement = e + ';';
            // console.log(statement);
          })
          sql.pop();
          resolve(sql);
        }
      })
    }
  )
  
}

//Get list of static SQL statements and strore each entry in DB
async function storeStatic(db, file) {
  return new Promise (async (resolve) => {
    let commands = await parseSQL(file).catch((err) => console.log(err));
    commands.forEach((statement) => {
      db.query(statement, (err, success) => {
        if(err) {
          console.log(err);
        } else {
          console.log('Success');
        }
      })
    })
    resolve('success');
  })
}

// Initialize the DB with all required static data and 3rd party API data
async function initialize(db) {
  success = await storeStatic(db, 'province.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'city.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'neighbourhood.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'parks_recreation.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'hospital.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'school.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'landlord.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'rental_unit.sql').catch((err) => console.log(err));
  // superagent
  // .get('https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=49.263372&longitude=-123.119660&radius=2500&limit=50')
  // .query(null)
  // .set('Accept', 'application/json')
  // .set('Authorization', 'Bearer uqiByH8CvARU3-_0UHYblksffNoFkxNCh4GefygRJsUGktYgG0DDFyhV-cIvYbzxKXNHmb8CkC4pYiGnH5_o384lO8IqiHlR6588br8RPjjWoLuLcq9ngyCH7Uv1XHYx')
  // .then( response => {
  //   response.body.businesses.forEach(business => {
  //     db.query(`INSERT INTO restaurants VALUES (${JSON.stringify(business.location.address1)}, ${JSON.stringify(business.name)}, ${JSON.stringify(business.categories[0].title)}, ${JSON.stringify(business.location.zip_code)})`,
  //               (err, rows) => {
  //                 if(err) console.log(err);
  //               })
  //   })
  // })
}

module.exports = initialize;