var express = require('express');
var router = express.Router();

var userController = require("../controller/userController");

/* GET users listing. */
router.post('/', function(req, res, next) {

  if(req.body.register) {
    userController.registerUser(req, res);
  }

  if(req.body.login) {
    userController.logInUser(req, res);
  }
   
});

module.exports = router;
