var userService = require("../service/userService")
var User = require("../model/userModel");

function registerUser(req, res) {
    var user = new User(req.body);
    userService.registerUser(user).then((result) => {
        res.send("Registration Success");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
}

function logInUser(req, res) {
    var user = new User(req.body);
    userService.logInUser(user).then((result) => {    
        res.send("Login success");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
}

module.exports = {
    registerUser : registerUser,
    logInUser : logInUser
}