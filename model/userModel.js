var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {type : String},
    password : {type : String}
}, { versionKey: false });

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;