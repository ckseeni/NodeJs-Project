
var userDao = require("../Dao/userDao");

async function registerUser(userObj) {
    var result = await userDao.registerUser(userObj);
    return result;
}

async function logInUser(userObj) {
    var result =  await userDao.logInUser(userObj);
    return result;
}

module.exports = {
    registerUser : registerUser,
    logInUser : logInUser
}