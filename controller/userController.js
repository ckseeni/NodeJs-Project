var userService = require("../service/userService")
var User = require("../model/userModel");

function registerUser(req, res) {
    var user = new User(req.body);
    userService.registerUser(user).then((result) => {
        res.render("index", {message : "Registration Success"});
    }).catch((err) => {
        res.render("index", {message : "Registration Failed. "+err});
    });
}

function logInUser(req, res) {
    var user = new User(req.body);
    userService.logInUser(user).then((result) => {    
        res.send("Login success");
    }).catch((err) => {
        res.render("index", {message : "Login Failed. "+err});
    });
}

module.exports = {
    registerUser : registerUser,
    logInUser : logInUser
}