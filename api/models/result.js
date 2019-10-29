const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    week : { 
        type : String, 
        required : true
    }, 
    game : { 
        type : Object, 
        required : true
    }
   
})

module.exports = Result = mongoose.model('Results', resultSchema); 