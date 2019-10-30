const Games = require('../controllers/gamesController')

module.exports = function(app) {

    app.route('/games')
        .get(Games.getGames)

    app.route('/games/:week')
        .get(Games.getWeek)
        
    
    
}