const Winner = require('../controllers/winnerController')


module.exports = function(app) {

    app.route('/winner/wins/:week')
        .get(Winner.getScores)
        
    app.route('/winner/:week')
        .get(Winner.getWinner)   
}

/**
     * @swagger
     * /winner/wins/{week}:
     *  get:
     *    description: Get list of all correct picks for player in a given week 
     *    produces: 
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     *      '204':
     *        description: No wins are available
     *      '500':
     *        description: internal server error.  Try again later
     *    parameters:
     *        - name: week
     *          description: /{week} - Get wins for given week 
     *          in: path
     *          required: false
     *          type: string
     *       
     */

     /**
     * @swagger
     * /winner/{week}:
     *  get:
     *    description: Get the winner for a given week 
     *    produces: 
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     *      '204':
     *        description: No wins are available
     *      '500':
     *        description: internal server error.  Try again later
     *    parameters:
     *        - name: week
     *          description: /{week} - Get winner for given week 
     *          in: path
     *          required: false
     *          type: string
     *       
     */