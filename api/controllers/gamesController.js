const Game = require('../models/game')

exports.getGames = async function(req, res) {
    const games = await Game.find().select('game week -_id')
    if(!games) return res.status(404).send('no data')
    return res.status(200).send(games)

}

exports.getWeek = async function(req, res) {
    // get id
    
    week = req.params.week
    // validate id 
    if (!week) return res.status(404).send('valid id required ')

    // get games for week 
    const games = await Game.find({
        week: week
    }).select('game week -_id')

    // reutrn 404 if no games found 
    if(!games.length) return res.status(404).send(`no games in week ${week}`)

    //return games for week 
    return res.status(200).send(games)
}


