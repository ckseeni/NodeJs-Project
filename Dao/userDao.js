var User = require("../model/userModel");

async function saveUser(userObj) {
    let result = await userObj.save();
    return result;
}

async function findUser(userObj) {
    let result = await User.findOne({username:userObj.username});
    return result;
}

module.exports = {
    saveUser : saveUser,
    findUser : findUser
}