var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;


//  NOT SURE IF NEEDED -----------------------------------------------------------------
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// -----------------------------------------------------------------

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });