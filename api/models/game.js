const mongoose = require('mongoose')


const gameSchema = new mongoose.Schema({
    week : { 
        type : String, 
        required : true
    }, 
    game : { 
        type : Array, 
        required : true
    }
   
})






module.exports = Game = mongoose.model('Games', gameSchema); 