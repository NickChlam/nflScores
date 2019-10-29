const mongoose = require('mongoose')


const picksSchema = new mongoose.Schema({
    week : { 
        type : String, 
        required : true
    }, 
    picks : { 
        type : Array, 
        required : true
    },
    user : {
        type : Object,
        required : true
    }
   
})

module.exports = Pick = mongoose.model('Picks', picksSchema); 