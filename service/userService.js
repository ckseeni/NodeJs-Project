
var userDao = require("../Dao/userDao");
var bcrypt = require("bcrypt");

async function registerUser(userObj) {
    var result = await userDao.findUser(userObj);
    if(result == null) {
        userObj.password = bcrypt.hashSync(userObj.password, 10);
        result = await userDao.saveUser(userObj);
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
        return result;
    }
}

module.exports = {
    registerUser : registerUser,
    logInUser : logInUser
}