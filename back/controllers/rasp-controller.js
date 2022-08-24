const dateFunctions = require('../functions/date-functions')
const findFunctions = require('../functions/find-functions')
const mongoose = require('mongoose');
const cartController = require('./cart-controller');
const { resolve } = require('path');


function CommandIsDone() {
    return new Promise((resolve,reject)=>{
        mongoose.model('carts').find({}).exec(function(err,items){
            if(err) {
                reject(err)
            } else{
                tempData = items;
                if(tempData.length === 0) {
                    console.log("Il n'y plus de cocktails à préparer")
                }
                else {
                    oldestOrder = findFunctions.findTheOldestElement(tempData);
                    OrderCocktail(oldestOrder);
                    resolve(oldestOrder);
                }
            }
        })
    })
}

function OrderCocktail(cocktail) {
    return new Promise((resolve, reject) => {
        
    console.log('%crasp-controller.js line:8 cocktail', 'color: #007acc;', cocktail);
    // axios.post('', cocktail)
    // .then(response => console.log(response))
    // .catch(error => {
    //     console.error('There was an error!', error);
    // });
})
}

module.exports = {
    CommandIsDone: async () => {
        let commandIsDone = await CommandIsDone()
        return commandIsDone;
      },
    OrderCocktail: async(cocktail) => {
        let orderCocktail = await OrderCocktail(cocktail)
        return orderCocktail
    }
}