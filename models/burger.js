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

