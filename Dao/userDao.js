
var dbConnection = require("../db/dbConnection");

async function registerUser(userObj) {
    let db = await dbConnection.getDbConnection();
    let result = await db.collection("users").insertOne(userObj);
    return result;
}

async function logInUser(userObj) {
    let db = await dbConnection.getDbConnection();
    let result = await db.collection("users").find({"username" : userObj.username}).toArray();
    return result;
}

module.exports = {
    registerUser : registerUser,
    logInUser : logInUser
}