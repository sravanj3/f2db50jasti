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
 
/* GET jungle */ 
router.get('/', jungle_controllers.jungle_view_all_Page ); 
module.exports = router; 

// GET request for one jungle. 
router.get('/jungle/:id', jungle_controllers.jungle_detail); 

/* GET detail jungle page */ 
router.get('/detail', jungle_controllers.jungle_view_one_Page); 

/* GET create jungle page */ 
router.get('/create', jungle_controllers.jungle_create_Page); 

/* GET create update page */ 
router.get('/update', jungle_controllers.jungle_update_Page); 

/* GET delete jungle page */ 
router.get('/delete', jungle_controllers.jungle_delete_Page);

/* GET create jungle page */
router.get('/create', jungle_controllers.jungle_create_Page);

/* GET create update page */
router.get('/update', jungle_controllers.jungle_update_Page);
