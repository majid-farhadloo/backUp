var express = require('express');
var router = express.Router();
var food_menu = require('../lib/menu');
var mongoose = require('mongoose');

//CONNECT TO DATABASE
mongoose.connect("mongodb://heroku_vtkwsl62:1234qwer@ds235778.mlab.com:35778/heroku_vtkwsl61");
var db = mongoose.connection;
db.once("open",function() {
    console.log("DB connected!");
});
db.on("error", function (err) {
    console.log("DB ERROR :", err);
});

router.get('/', function(req, res) {
    // if(!req.session.user)
    // return res.json({"result":false,
    //                   "message":"User not logged in"
    //                 });
    food_menu.find(function(err, result) {
	    if(err) {
	        next(err);
	    } else {
	    	console.log(result);
	        return res.status(200).json(result);
	    }
    });
  });

module.exports = router;
