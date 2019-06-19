const superagent = require('superagent');
const fs         = require('fs');
// const parser     = require('xml2json');
const mysql = require("mysql");

/**
 * Create DB connection
 */
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 8889,
  database: "housing-finder",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function (err) {
  if (err)
    // throw err;
    console.log("Connected!");
});

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
          console.log(`Successfully executed ${statement}`);
        }
      })
    })
    resolve('success');
  })
}

// Initialize the DB with all required static data and 3rd party API data
async function initialize(db) {

  //running predefined SQL scripts
  success = await storeStatic(db, 'province.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'city.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'neighbourhood.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'parks_recreation.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'hospital.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'school.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'landlord.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'rental_unit.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'feature_list.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'tables.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'translinkType.sql').catch((err) => console.log(err));
  success = await storeStatic(db, 'translink.sql').catch((err) => console.log(err));

  //Inserting data from Yelp and Translink APIs for each neighbourhood
  db.query('SELECT postal_code FROM neighbourhood;', (err, neighbourhoods) => {
    neighbourhoods.forEach(async (neighbourhood, index) => {
      await superagent
      .get(`http://geocoder.ca?postal=${neighbourhood.postal_code}1c3&geoit=XML`)
      .then(response => {

        setTimeout(() => {
          var json = JSON.parse(parser.toJson(response.text, {reversible: false}));
          console.log(JSON.stringify(json.geodata.latt));
          console.log(JSON.stringify(json.geodata.longt));
          superagent
          .get(`https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=${JSON.stringify(json.geodata.latt).replace('"', '').replace('"', '')}&longitude=${JSON.stringify(json.geodata.longt).replace('"', '').replace('"', '')}&radius=2500&limit=6`)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer uqiByH8CvARU3-_0UHYblksffNoFkxNCh4GefygRJsUGktYgG0DDFyhV-cIvYbzxKXNHmb8CkC4pYiGnH5_o384lO8IqiHlR6588br8RPjjWoLuLcq9ngyCH7Uv1XHYx')
          .then(response => {
            console.log(response.body.businesses[0]);
            response.body.businesses.forEach(business => {
              if(business.location.zip_code.includes(neighbourhood.postal_code)) {
                db.query(`INSERT INTO restaurant VALUES 
                        (${JSON.stringify(business.location.address1)}, ${JSON.stringify(business.name)}, 
                        ${JSON.stringify(business.categories[0].title)}, ${JSON.stringify(neighbourhood.postal_code)})`,
                          (err, rows) => {
                            if(err) console.log(err);
                          })
              }
            })
          }).catch(err => console.log(err))
        }, index * 1000);

        setTimeout(() => {
          var json = JSON.parse(parser.toJson(response.text, {reversible: false}));
          console.log(JSON.stringify(json.geodata.latt));
          console.log(JSON.stringify(json.geodata.longt));
          superagent
          .get(`https://api.yelp.com/v3/businesses/search?categories=grocery&latitude=${JSON.stringify(json.geodata.latt).replace('"', '').replace('"', '')}&longitude=${JSON.stringify(json.geodata.longt).replace('"', '').replace('"', '')}&radius=2500&limit=6`)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer uqiByH8CvARU3-_0UHYblksffNoFkxNCh4GefygRJsUGktYgG0DDFyhV-cIvYbzxKXNHmb8CkC4pYiGnH5_o384lO8IqiHlR6588br8RPjjWoLuLcq9ngyCH7Uv1XHYx')
          .then(response => {
            console.log(response.body.businesses[0]);
            response.body.businesses.forEach(business => {
              if(business.location.zip_code.includes(neighbourhood.postal_code)) {
                db.query(`INSERT INTO supermarket VALUES 
                        (${JSON.stringify(business.location.address1)}, ${JSON.stringify(business.name)}, 
                        ${JSON.stringify(business.categories[0].title)}, ${JSON.stringify(neighbourhood.postal_code)})`,
                          (err, rows) => {
                            if(err) console.log(err);
                          })
              }
            })
          }).catch(err => console.log(err))
        }, index * 1000);
        
      })
      .catch(err => console.log(err))
    });
  })
}

initialize(connection);

module.exports = initialize;