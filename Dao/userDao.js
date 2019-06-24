var User = require("../model/userModel");

async function registerUser(userObj) {
    let result = await userObj.save();
    return result;
}

async function logInUser(userObj) {
    let result = await User.findOne({username:userObj.username});
    return result;
}

module.exports = {
    registerUser : registerUser,
    logInUser : logInUser
}