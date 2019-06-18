const superagent = require('superagent');
const url = "http://localhost:2019/housing-options/";

/**
 * GET HOUSING OPTIONS
 */
function getRentalPosting(unitId) {
    superagent
    .get(url + unitId)
    .then(response )
}