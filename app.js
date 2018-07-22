// DEPENDENCIES
const express = require("express")
    , bodyParser = require("body-parser")
    , db = require("./app_api/models")
    , PORT = process.env.PORT || 3001
    , app = express()
    ,  path = require('path')
    , routes = require("./app_api/routes/employee.route")
    , logger = require('morgan')
    , isDev = process.env.NODE_ENV === 'development';

// BODY PARSER CONFIG
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(logger('dev'));

// if (isDev)
    // app.use(express.static('./app_client/public'));
    app.use(express.static(path.join(__dirname, 'build')));
// else
//     app.use(express.static('./app_client/build'));

// API ROUTES
app.use("/api", routes);

// SYNC THE SQL DB AND THEN LISTEN TO PORT
db.sequelize.sync({force: isDev})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    }); // END THEN 
}); // END APP LISTEN
