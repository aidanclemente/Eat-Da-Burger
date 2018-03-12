// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(burger_data) {
        var hbsObject = { burgers: burger_data };
        // console.log("------ Burger Data -------");
        // console.log(hbsObject);
        // console.log("--------------------------");
        res.render("index", hbsObject);
    });
    
});

router.post("/create", function(req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(result) {
        res.redirect("/");
    });
});

router.put("/burger/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("put condition: ", condition);

    burger.update({
        devoured: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.redirect("/");
        }
    });
});

module.exports = router;