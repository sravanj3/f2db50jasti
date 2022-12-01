// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('jungle', { title: 'Search Results jungle' });
// });

// module.exports = router;

var express = require('express'); 
const jungle_controllers= require('../controllers/jungle'); 
var router = express.Router(); 
 
// A little function to check if we have an authorized user and continue on 
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
 }

/* GET jungle */ 
router.get('/', jungle_controllers.jungle_view_all_Page ); 
module.exports = router; 

// GET request for one jungle. 
router.get('/jungle/:id', jungle_controllers.jungle_detail); 

/* GET detail jungle page */ 
router.get('/detail',secured, jungle_controllers.jungle_view_one_Page); 

/* GET create jungle page */ 
router.get('/create',secured, jungle_controllers.jungle_create_Page); 

/* GET create update page */ 
router.get('/update',secured, jungle_controllers.jungle_update_Page); 

/* GET delete jungle page */ 
router.get('/delete',secured, jungle_controllers.jungle_delete_Page);
