const Results = require('../controllers/resultsController')

module.exports = function(app) {

    app.route('/results')
        .get(Results.getResults)
    
    app.route('/results/:week')
       .get(Results.getResultByWeek)
}

/**
* @swagger
* /results:
*  get:
*    description: get all results of picks.  Returns an object of correct picks, and the user object
*    produces: 
*      - application/json
*    consumes:
*      - application/json
*    responses:
*      '204':
*          description: No content, no Results were found 
*      '200':
*          description: Results found. return all Results  
*/

/**
     * @swagger
     * /results/{week}:
     *  get:
     *    description: Get results by week
     *    produces: 
     *      - application/json
     *    responses:
     *      '200':
     *        description: A successful response
     *      '204':
     *        description: No games are available
     *      '500':
     *        description: internal server error.  Try again later
     *    parameters:
     *        - name: week
     *          description: /{week} - Get games for given week 
     *          in: path
     *          required: false
     *          type: string
     *       
     */