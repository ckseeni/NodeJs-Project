var dbConfig = require("./dbConfig");
var mongoClient = dbConfig.client;
var url = dbConfig.url;

var db;

async function getDbConnection() {
    if(db) {
        return db;
    }
    else {
        db = await mongoClient.connect(url);
        return db;
    }
}

module.exports = {
    getDbConnection : getDbConnection
}