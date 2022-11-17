var jungle = require('../models/jungle'); 
 
// List of all jungle 
exports.jungle_list = async function(req, res) { 
    try{ 
        thejungle = await jungle.find(); 
        res.send(thejungle); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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
 
// Handle jungle delete on DELETE. 
exports.jungle_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await jungle.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
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
        if(req.body.animal_type) toUpdate.animal_type = req.body.animal_type; 
        if(req.body.animal_quantity) toUpdate.animal_quantity = req.body.animal_quantity; 
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
        thejungle = await jungle.find(); 
        res.render('jungle', { title: 'jungle Search Results', results: thejungle }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 // Handle a show one view with id specified by query 
 exports.jungle_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await jungle.findById( req.query.id) 
        res.render('jungledetail',  
{ title: 'jungle Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a jungle. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.jungle_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('junglecreate', { title: 'jungle Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a jungle. 
// query provides the id 
exports.jungle_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await jungle.findById(req.query.id) 
        res.render('jungleupdate', { title: 'jungle Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.jungle_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await jungle.findById(req.query.id) 
        res.render('jungledelete', { title: 'jungle Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
