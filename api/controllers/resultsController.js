const Result = require('../models/result')


exports.getResults = async function(req, res){
    // get games scores from database 
    const results = await Result.find().select('-_id')
    if (results.length) return res.status(200).send(results)
    // if no data return not found 
    return res.status(204).send({})
}

exports.getResultByWeek = async function(req, res){
    // get game scores by week 
    const results = await Result.find({'week': req.params.week}, err => {
        if(err) { return res.status(500).send({'error': true, 'message' : 'something went wrong please try again later'})}
    }).select('-_id')
    if(results.length) return res.status(200).send(results)
    // return empty object if no data 
    return res.status(204).send({})
} 