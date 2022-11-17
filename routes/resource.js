var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var jungle_controller = require('../controllers/jungle'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// jungle ROUTES /// 
 
// POST request for creating a jungle.  
router.post('/jungle', jungle_controller.jungle_create_post); 
 
// DELETE request to delete jungle. 
router.delete('/jungle/:id', jungle_controller.jungle_delete); 
 
// PUT request to update jungle. 
router.put('/jungle/:id', jungle_controller.jungle_update_put); 
 
// GET request for one jungle. 
router.get('/jungle/:id', jungle_controller.jungle_detail); 
 
// GET request for list of all jungle items. 
router.get('/jungle', jungle_controller.jungle_list); 
 
module.exports = router;