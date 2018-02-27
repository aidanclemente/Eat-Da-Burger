// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

    // This will be the burgers object with the functions that will interact with the database

            // selectAll()
            // insertOne()
            // updateOne()

// Export at the end of the burger.js file.

var orm = require("../config/orm.js");

var burger = {
    // Show all of the burgers
    all: function(generalCallBack) {
        orm.all("burgers", function(res) {
            generalCallBack(res);
        });
    },

    // Create a new burger
    create: function(column, value, callBack) {
        orm.create("burgers", column, value, function(results) {
            callBack(results);
        });
    },

    // Update burger once devoured
    update: function(objColVals, condition, callBack) {
        orm.update("burgers", objColVals, condition, function(res) {
            callBack(res);
        });
    }
};

// This is exported for burgers_controller.js to use the database functions when certain routes are hit
module.exports = burger;

