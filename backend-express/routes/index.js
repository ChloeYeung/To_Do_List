var express = require('express');
var router = express.Router();
const responseHandler = require("../utils/responseFormat")
/* GET home page. */
router.get('/', function (req, res) {
  return responseHandler({ res, code: 200, message: "Welcome to API Server" })
});

module.exports = router;
