var dbConfig = require("./dbConfig");
var mongooseClient = dbConfig.client;
var url = dbConfig.url;

var db = mongooseClient.connect(url);

module.exports = {
    db : db
}