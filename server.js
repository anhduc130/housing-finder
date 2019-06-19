const express = require("express");
const app = express();
const mysql = require("mysql");
const signUp = require("./sign-up");
const signIn = require("./sign-in");
const createRentalUnit = require("./create-rental-unit");
const addFeatureListToRentalUnit = require("./add-feature-list-to-rental-unit");
const getRentalUnitsByLandlordId = require("./get-rental-units-by-landlord-id");
const getAllRentalUnits = require("./get-all-rental-units");
const deleteRentalUnit = require("./delete-rental-unit");
const updateRentalUnit = require("./update-rental-unit");
const updateFeatureList = require("./update-feature-list");
const getAveragePriceOfAllRentalUnits = require("./get-average-price-of-all-rental-units");
const postJSON = require("./post");

app.use(express.static("public"));

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));
app.use(express.json());
app.set('view engine', 'ejs');

/**
 * Parse cookies
 */
function parseCookies(request) {
  const list = {},
    rc = request.headers.cookie;

  rc && rc.split(';').forEach(function (cookie) {
    const parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return list;
}

/**
 * Run server
 */
const server = app.listen(2019, function () {
  const port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});

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

app.get("/rental-units", async function (request, response) {
  if (request.query.jsonOnly && request.query.projectionOnly) {
    let maxPrice = JSON.stringify(request.query.maxPrice);
    let minPrice = JSON.stringify(request.query.minPrice);
    const attributes = request.query.attributes;
    if (!minPrice) {
      minPrice = Number.MIN_VALUE
    }
    if (!maxPrice) {
      maxPrice = Number.MAX_VALUE
    }
    connection.query(`SELECT ${attributes}, unit_id
                        FROM rental_unit
                        WHERE price > ${minPrice} AND price < ${maxPrice}`,
      (error, result) => {
        if (error) throw error;
        response.status(200).send({ rentalUnits: result })
      })
  } else if (request.query.jsonOnly && request.query.getStats) {
    const maxMarketPrice = await new Promise((resolve) => {
      connection.query(`SELECT MAX(price) as maxMarketPrice
                      FROM rental_unit`,
        (error, result) => {
          if (error) throw error;
          if (result) {
            resolve(result[0].maxMarketPrice)
          } else {
            resolve(0)
          }
        })
    })
    const minMarketPrice = await new Promise((resolve) => {
      connection.query(`SELECT MIN(price) as minMarketPrice
                      FROM rental_unit`,
        (error, result) => {
          if (error) throw error;
          if (result) {
            resolve(result[0].minMarketPrice)
          } else {
            resolve(0)
          }
        })
    })
    response.status(200).send({ maxMarketPrice, minMarketPrice })
  } else {
    const cookies = parseCookies(request);
    let rentalUnits;
    try {
      if (request.query.onlyLandlordUnits) {
        if (!cookies['landlord-id'] || !cookies['logged-in-key']) {
          response.status(401).send('Session has expired. Please log in again.');
          return;
        }
        rentalUnits = await getRentalUnitsByLandlordId(cookies['landlord-id'], connection);
        averagePriceOfAllRentalUnits = await getAveragePriceOfAllRentalUnits(cookies['landlord-id'], connection);
      } else {
        rentalUnits = await getAllRentalUnits(connection);
      }
      response.send({ rentalUnits, averagePriceOfAllRentalUnits });
    } catch (error) {
      response.status(400).send(error);
    }
  }
});

// CHANGE THE RESTAURANT TABLE NAME IN THE BELOW QUERY
app.get("/rental-units/:unitId", async function (request, response) {
  connection.query(`SELECT * FROM rental_unit WHERE unit_id = '${request.params.unitId}';`,
    (err, unit) => {
      if (err) {
        console.log(err);
      }
      if (unit.length > 0) {
        console.log(unit[0].unit_id);
        connection.query(`SELECT * FROM landlord L, rental_unit R, neighbourhood N, city C, province P, feature_list F
                        WHERE R.postal_code = '${unit[0].postal_code}' AND R.landlord_id = L.landlord_id AND R.postal_code = N.postal_code AND
                        N.city_id = C.city_id AND C.province_name = P.province_name AND R.unit_id = F.unit_id;`,
          async (err, result) => {
            postJSON.post.title = result[0].unit_title;
            postJSON.post.type = result[0].unit_type;
            postJSON.post.address = result[0].unit_address;
            postJSON.post.postal_code = result[0].postal_code;
            postJSON.post.city = result[0].city_name;
            postJSON.post.province = result[0].province_name;
            postJSON.post.description = result[0].unit_description;
            postJSON.post.price = result[0].price;
            postJSON.post.type = result[0].unit_type;
            postJSON.post.landlord.name = result[0].landlord_name;
            postJSON.post.landlord.email = result[0].landlord_email;
            postJSON.post.landlord.phone = result[0].landlord_phone_number;
            postJSON.features.rooms = result[0].number_of_rooms;
            postJSON.features.parking = result[0].parking;
            postJSON.features.smoking = result[0].smoking;
            postJSON.features.pets = result[0].pets;
            await connection.query(`SELECT * FROM restaurant WHERE restaurant.postal_code = '${unit[0].postal_code}'`,
              (err, restaurants) => {
                postJSON.amenities.restaurants = restaurants;
              })
            await connection.query(`SELECT * FROM supermarket WHERE supermarket.postal_code = '${unit[0].postal_code}'`,
              (err, supermarkets) => {
                postJSON.amenities.supermarkets = supermarkets;
              })
            await connection.query(`SELECT * FROM school WHERE school.postal_code = '${unit[0].postal_code}'`,
              (err, schools) => {
                postJSON.amenities.schools = schools;
              })
            await connection.query(`SELECT * FROM hospital WHERE hospital.postal_code = '${unit[0].postal_code}'`,
              (err, hospitals) => {
                postJSON.amenities.hospitals = hospitals;
              })
            await connection.query(`SELECT * FROM parks_recreation WHERE parks_recreation.postal_code = '${unit[0].postal_code}'`,
            (err, parks) => {
              postJSON.amenities.parks = parks;
            })
            await connection.query(`SELECT TT.route_name FROM translink T, translinkType TT WHERE T.postal_code = '${unit[0].postal_code}' AND T.route_name = TT.route_name AND TT.route_type = 'bus'`,
            (err, buses) => {
              postJSON.transit.buses = buses;
            })
            await connection.query(`SELECT TT.route_name FROM translink T, translinkType TT WHERE T.postal_code = '${unit[0].postal_code}' AND T.route_name = TT.route_name AND TT.route_type = 'skyTrain'`,
            (err, skytrains) => {
              postJSON.transit.skytrains = skytrains;
            })
            if (request.query.jsonOnly) {
              response.status(200).send({ post: postJSON.post, features: postJSON.features, amenities: postJSON.amenities, transit: postJSON.transit })
            } else {
              setTimeout(() => {
                response.render('housing-posting', { post: postJSON.post, features: postJSON.features, amenities: postJSON.amenities, transit: postJSON.transit });
              }, 300);
            }
          })
      }
    });
});

app.post("/rental-units", async function (request, response) {
  const cookies = parseCookies(request);
  try {
    if (!cookies['landlord-id'] || !cookies['logged-in-key']) {
      response.status(401).send('Session has expired. Please log in again.');
      return;
    }

    const landlord = {
      landlordId: cookies['landlord-id'],
      loggedInKey: cookies['logged-in-key']
    }

    const rentalUnitId = await createRentalUnit(landlord, request.body.rentalUnit, connection);
    await addFeatureListToRentalUnit(request.body.unitFeatureList, rentalUnitId, connection);

    response.status(201).send("A rental unit was successfully created!");
  } catch (error) {
    response.status(400).send(error);
  }
});

app.delete("/rental-units/:unitId", async function (request, response) {
  const unitId = request.params.unitId;
  const cookies = parseCookies(request);
  try {
    if (!cookies['landlord-id'] || !cookies['logged-in-key']) {
      response.status(401).send('Session has expired. Please log in again.');
      return;
    }
    deleteRentalUnit(unitId, connection);
    response.status(200).send("Successfully deleted a rental unit.");
  } catch (error) {
    response.status(400).send(error);
  }
});

app.put("/rental-units/:unitId", async function (request, response) {
  const unitId = request.params.unitId;
  const rentalUnit = request.body.rentalUnit;
  const unitFeatureList = request.body.unitFeatureList;
  const cookies = parseCookies(request);
  try {
    if (!cookies['landlord-id'] || !cookies['logged-in-key']) {
      response.status(401).send('Session has expired. Please log in again.');
      return;
    }
    await updateRentalUnit(unitId, rentalUnit, connection);
    await updateFeatureList(unitId, unitFeatureList, connection);
    response.status(200).send("Successfully updated a rental unit.");
  } catch (error) {
    response.status(400).send(error);
  }
});

app.post("/signup", async function (request, response) {
  try {
    await signUp(request.body, connection);
    response.status(201).send("You are successfully signed up! Please sign in now.");
  } catch (error) {
    console.log(error);
    response.status(400).send("Email was already registered");
  }
});

app.post("/signin", async function (request, response) {
  try {
    const result = await signIn(request.body, connection);

    if (result && result.landlord && result.loggedInKey) {
      response.setHeader('Set-Cookie', [`logged-in-key=${result.loggedInKey}`, `landlord-id=${result.landlord.landlord_id}`]);

      delete result.landlord.landlord_password;
      delete result.landlord.logged_in_key;
      delete result.loggedInKey;

      response.status(200).send(result.landlord);
    } else {
      response.status(401).send({ error: "Failed to sign in." });
    }
  } catch (error) {
    response.status(400).send(error);
  }
});
