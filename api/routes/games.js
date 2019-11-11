const Games = require('../controllers/gamesController')

module.exports = function(app) {

    app.route('/games')
        .get(Games.getGames)

    app.route('/games/:week')
        .get(Games.getWeek)
        
}
    /**
     * @swagger
     * /games/{week}:
     *  get:
     *    description: Get games by week
     *    produces: 
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     *      '204':
     *        description: No games are available
     *      '404': 
     *        description: invalid week, must be a number or week doesnt exist 
     *    parameters:
     *        - name: week
     *          description: /{week} - Get games for given week 
     *          in: path
     *          required: false
     *          type: string
     *       
     */

    /**
     * @swagger
     * /games:
     *  get:
     *    description: Get all games 
     *    produces: 
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     *      '204':
     *        description: No games are available
     *    
     *       
     */