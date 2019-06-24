var userService = require("../service/userService")


function registerUser(req, res) {
    userService.registerUser(req.body).then((result) => {
        res.send("Registration Success");
    }).catch((err) => {
        res.send(err);
    });
}

function logInUser(req, res) {
    userService.logInUser(req.body).then((result) => {    
        res.send("Login success");
    }).catch((err) => {
        res.send(err);
    });
}

module.exports = {
    registerUser : registerUser,
    logInUser : logInUser
}