/**
 * Created by chkim on 6/6/2015.
 */

function createRecipe(req,res){


    // this sends back a JSON response which is a single string

    console.log("name = "+req.swagger.params.body.value.recipeCountry);

    var resObject = {
        "recipeId": "01",
        "name": req.swagger.params.body.value.name,
        "category": req.swagger.params.body.value.category,
        "rank": "NA",
        "recipeCountry": req.swagger.params.body.value.recipeCountry
    }

    //res.send(req.swagger.params.body);
    res.send(resObject);
}
module.exports ={
    createRecipe: createRecipe
}