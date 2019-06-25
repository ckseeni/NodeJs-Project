
var userDao = require("../Dao/userDao");
var bcrypt = require("bcrypt");

var log4js = require("log4js");
var config = require("../logConfig/config");
log4js.configure(config);
var logger = log4js.getLogger("userService");

async function registerUser(userObj) {
    var result = await userDao.findUser(userObj);
    if(result == null) {
        userObj.password = bcrypt.hashSync(userObj.password, 10);
        result = await userDao.saveUser(userObj);
        logger.info("USER : "+userObj.username+" registered");
        return result;
    } else {
        throw "Username already occupied";
    }
}

async function logInUser(userObj) {
    var result =  await userDao.findUser(userObj);
    if(result == null || !(bcrypt.compareSync(userObj.password, result.password))) {
        throw "Username or Password is incorrect";
    } else {
        logger.info("USER : "+userObj.username+" logged in");
        return result;
    }
}

module.exports = {
    registerUser : registerUser,
    logInUser : logInUser
}