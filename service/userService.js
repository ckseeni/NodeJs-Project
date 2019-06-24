
var userDao = require("../Dao/userDao");

async function registerUser(userObj) {
    delete userObj[userObj.register]
    var result = await userDao.registerUser(userObj);
    return result;
}

async function logInUser(userObj) {
    delete userObj[userObj.login]
    var result =  await userDao.logInUser(userObj);
    return result;
}

module.exports = {
    registerUser : registerUser,
    logInUser : logInUser
}