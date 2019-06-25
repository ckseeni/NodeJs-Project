var User = require("../model/userModel");
var db = require("../db/dbConnection");

var log4js = require("log4js");
var config = require("../logConfig/config");
log4js.configure(config);
var logger = log4js.getLogger("userDao");

async function saveUser(userObj) {
    let result = await userObj.save();
    logger.debug("USER : "+userObj.username+" added in DB");
    return result;
}

async function findUser(userObj) {
    let result = await User.findOne({username:userObj.username});
    logger.debug("USER : "+userObj.username+" details retreived from DB");
    return result;
}

module.exports = {
    saveUser : saveUser,
    findUser : findUser
}