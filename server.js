const express = require("express");
const app = express();
const mysql = require("mysql");
const signUp = require("./sign-up");
const signIn = require("./sign-in");
const createRentalUnit = require("./create-rental-unit");
const addFeatureListToRentalUnit = require("./add-feature-list-to-rental-unit");
const getRentalUnitsByLandlordId = require("./get-rental-units-by-landlord-id");
const getAllRentalUnits = require("./get-all-rental-units");
const initialize = require("./seedDB");
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

/**
 * Uncomment this line to initialize
 */
// initialize(connection);

app.get("/rental-units", async function (request, response) {
  const cookies = parseCookies(request);
  let rentalUnits;
  try {
    if (request.query.onlyLandlordUnits) {
      if (!cookies['landlord-id'] || !cookies['logged-in-key']) {
        response.status(401).send('Session has expired. Please log in again.');
        return;
      }
      rentalUnits = await getRentalUnitsByLandlordId(cookies['landlord-id'], connection);
    } else {
      rentalUnits = await getAllRentalUnits(connection);
    }
    response.send(rentalUnits);
  } catch (error) {
    response.status(400).send(error);
  }
});

app.get("/rental-units/:unitId", function (request, response) {
  // connection.query(`SELECT * FROM rental_unit WHERE unit_id = ${request.params.unitId}`, (err, unit) => {
  //   if(err || !unit.unit_id) {
  //     response.redirect('/rental-units');
  //   }
  //   connection.query(`SELECT * FROM landlord L, neighbourhood N, city C, province P, school S,  hospital H,
  //                     restaurant R, parks Pa, supermarket Su
  //                     WHERE L.landlord_id = ${unit.landlord_id} AND N.postal_code = ${unit.postal_code} AND 
  //                     C.city_id = N.city_id AND P.province_name = C.province_name AND S.postal_code = N.postal_code AND
  //                     H.postal_code = N.postal_code AND S.postal_code = N.postal_code AND S.postal_code = N.postal_code`, (err, result) => {
  //                       postJSON.post.title = result.unit_title;
  //                       postJSON.post.address = result.unit_address;
  //                       postJSON.post.city = result.city_name
  //                       postJSON.post.province = result.province_name
  //                       postJSON.post.
  //                       postJSON.post.
  //                       postJSON.post.
  //                     })
  // });
  response.render('housing-posting', {post:post});
  // response.send("GET rental-units/housingId endpoint");
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

app.post("/signup", async function (request, response) {
  try {
    await signUp(request.body, connection);
    response.status(201).send("You are successfully signed up! Please sign in now.");
  } catch (error) {
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
