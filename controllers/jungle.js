var jungle = require('../models/jungle');
// List of all jungles
exports.jungle_list = function(req, res) {
    res.send('NOT IMPLEMENTED: jungle list');
};
// for a specific jungle.
exports.jungle_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: jungle detail: ' + req.params.id);
};
// Handle jungle create on POST.
exports.jungle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new jungle();
    document.animal_name = req.body.animal_name;
    document.animal_type = req.body.animal_type;
    document.animal_quantity = req.body.animal_quantity;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle jungle delete form on DELETE.
exports.jungle_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: jungle delete DELETE ' + req.params.id);
};
// Handle jungle update form on PUT.
exports.jungle_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: jungle update PUT' + req.params.id);
};
exports.jungle_list = async function(req, res) {
    try{
        thejungles = await jungle.find();
        res.send(thejungles);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// VIEWS
// Handle a show all view
exports.jungle_view_all_Page = async function(req, res) {
    try{
        thejungles = await jungle.find();
        res.render('jungle', { title: 'jungle Search Results', results: thejungles });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};