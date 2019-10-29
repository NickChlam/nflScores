const Winner = require('../controllers/winnerController')


module.exports = function(app) {

    app.route('/winner/wins/:week')
        .get(Winner.getScores)
        
    app.route('/winner/:week')
        .get(Winner.getWinner)

    
}