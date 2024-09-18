const dotenv = require('dotenv');

// Configure dotenv to look for the .env file in the "configs" folder
dotenv.config({ path: './configs/.env' });


// *** Define Variables (that'll be exported later) ***/
const Port = process.env.PORT // process.env.PORT

const dbVars = {
  DB_Username: process.env.DB_USERNAME,
  DB_Password: process.env.DB_PASSWORD,
}

module.exports = { Port, dbVars }