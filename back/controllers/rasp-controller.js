const dateFunctions = require('../functions/date-functions')
const findFunctions = require('../functions/find-functions')
const mongoose = require('mongoose');
const cartController = require('./cart-controller')

module.exports = {
    orderCocktail(cocktail) {
        axios.post('', cocktail)
        .then(response => console.log(response))
        .catch(error => {
            console.error('There was an error!', error);
        });
    },
    commandIsDone(req, res) {
        const message = req.body.message 
        // if (message !== 'done') {
        //     console.log("commande toujours en cours")
        // }
        const myData = mongoose.model('carts').find({}).exec(function(err,items){
            if(err) {
                res.send("Bad request");
            } else{
                tempData = items;
                if(tempData.length === 0) {
                    console.log("Il n'y plus de cocktails à préparer")
                }
                else {
                    oldestOrder = findFunctions.findTheOldestElement(tempData)
                      console.log(oldestOrder)
                    // // mongoose.model('carts').find({
                    // //     dateOrdered : oldestOrder
                    // // }).exec(function(err,item){
                    // //     if(err) {
                    // //         res.send("Bad request");
                    // //     }
                    // //     else{
                            
                    // //         console.log("item")
                    // //     }
                    // })
                }
                
            }
        })
    }
    

};