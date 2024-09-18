const express = require('express');
const app = express();

const { Port } = require('./configs/env')

// *** Controller Imports *** //
const indexController = require("./controllers/index")
const testController = require("./controllers/testController")

// *** Route Imports *** //
const indexRoutes = require("./routes/index")
const testRoutes = require("./routes/testRoutes")

// *** Routes *** //
app.use('/', indexRoutes)
app.use('/test', testRoutes)

const { database } = require("./configs/database")

database.init()


app.listen(Port, () => {
  console.log('Web Server is listening at port ' + (Port));
});
