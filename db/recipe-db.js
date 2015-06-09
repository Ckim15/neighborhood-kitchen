
var connector = require ('./connector-db.js');

function createRecipe(keyName,req){

    connector.createCommand(keyName,req);
}
//
function getRecipe(keyName,recipeId){

    connector.getCommand(keyName,recipeId);

}
function deleteRecipe(keyName,recipeId){

    connector.deleteCommand(keyName,recipeId);
}

module.exports = {
    createRecipe:createRecipe,
    getRecipe:getRecipe,
    deleteRecipe:deleteRecipe
}

