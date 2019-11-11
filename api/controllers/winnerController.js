const Result = require('../models/result')
const Picks = require('../models/pick')

exports.getWinner = async function(req, res){
    
    week = req.params.week;
    // get scores 
    const results = await Result.find({'week': week}, err => {
        if(err) return res.status(500).send({'error': true, 'message': 'something went wrong pleae try again later'})
    }).select('-_id')
    if(!results.length) return res.status(204).send({})
    result = results.map(x => x.game.name)
    
    // get picks 
    const picks = await Picks.find({'week': week}, err => {
        if(err) return res.status(500).send({'error': true, 'message': 'something went wrong pleae try again later'})
    })
    if(!picks.length) return res.status(204).send({})
   

    const winner = await this.calcGames(picks, result, res)
     // TODO: create logic for a tie 
    last = winner.length
    res.status(200).send(winner[last-1])
}   

exports.getScores = async function (req, res){
    week = req.params.week;
    // get scores 
    const results = await Result.find({'week': week}, err => {
        if(err) return res.status(500).send({'error': true, 'message': 'something went wrong getting results please try again later'})
    }).select('-_id')
    if(!results.length) return res.status(204).send({})
    result = results.map(x => x.game.name)
    // get picks 
    const picks = await Picks.find({'week': week}, err => {
        if(err) return res.status(500).send({'error': true, 'message': 'something went wrong getting picks please try again later'})
    })
    if(!picks.length) return res.status(204).send({})
    // calc winner

   const gamesWon = await this.calcGames(picks,result, res)
   if(gamesWon.length) res.status(200).send(gamesWon)
   
}

calcGames = async function (picks, result, res){
    let wins= {};
    let gamesWon = [];
    picks.forEach(element => {
        try {
            const match = result.filter(el => element.picks.includes(el))
                winner = match.length
                wins = {'name': element.user.knownAs,"gamesWon": winner, 'email': element.user.email, 'games': match}
                gamesWon.push(wins)
            
        }
        catch(err){ return res.status(500).send({'error': true, 'message': err})}
        
    });

    // sort by gamesWon
    gamesWon.sort((a,b) => a.gamesWon - b.gamesWon)
    return gamesWon

}