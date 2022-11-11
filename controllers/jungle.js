var jungle = require('../models/jungle');
// List of all jungles
exports.jungle_list = function(req, res) {
    res.send('NOT IMPLEMENTED: jungle list');
};
// for a specific jungle.

exports.jungle_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await jungle.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle jungle update form on PUT.

exports.jungle_update_put = async function(req, res) {

    console.log(`update on id ${req.params.id} with body

${JSON.stringify(req.body)}`)

    try {

        let toUpdate = await jungle.findById( req.params.id)

        // Do updates of properties

        if(req.body.animal_name)

               toUpdate.animal_name = req.body.animal_name;

        if(req.body.type) toUpdate.type = req.body.type;

        if(req.body.quantity) toUpdate.quantity = req.body.quantity;

        let result = await toUpdate.save();

        console.log("Sucess " + result)

        res.send(result)

    } catch (err) {

        res.status(500)

        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
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