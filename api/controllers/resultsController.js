const Result = require('../models/result')


exports.getResults = async function(req, res){
    // get games scores from database 
    const results = await Result.find().select('-_id')
    if (results.length) return res.status(200).send(results)
    // if no data return not found 
    return res.status(404).send({'error': true, 'message': 'no data'})
}

exports.getResultByWeek = async function(req, res){
    // get game scores by week 
    const results = await Result.find({'week': req.params.week}).select('-_id')
    if(results.length) return res.status(200).send(results)
    // return not found if no data 
    return res.status(404).send({'error': true, 'message': 'no data'})
}