const Game = require('../models/game')

exports.getGames = async function(req, res) {
    
    const games = await Game.find().select('game week -_id')
    
    if(!games.length) return res.status(204).send({"error": true, "message": 'no data '})
    return res.status(200).send(games)

}

exports.getWeek = async function(req, res) {
    // get id
    
    week = req.params.week
    // validate id 
    if (!week) return res.status(404).send({"error": true, "message": 'valid week required '})

    // get games for week 
    const games = await Game.find({
        week: week
    }).select('game week -_id')

    // reutrn 204 if no games found 
    if(!games.length) return res.status(204).send({"error": true, "message": `no games in week ${week}`})

    //return games for week 
    return res.status(200).send(games)
}


