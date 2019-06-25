var dbConfig = require("./dbConfig");
var mongooseClient = dbConfig.client;
var url = dbConfig.url;

var log4js = require("log4js");
var config = require("../logConfig/config");
log4js.configure(config);
var logger = log4js.getLogger("dbConnection");

logger.info("Trying to connect to DB....");
var db = mongooseClient.connect(url);
logger.info("DB connected successfully");

module.exports = {
    db : db
}