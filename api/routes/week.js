const Week = require('../controllers/weekController')

module.exports = function(app) {
    app.route('/week')
        .get(Week.getWeek)
}

/**
     * @swagger
     * /week:
     *  get:
     *    description: Get the current football week return as a string 
     *    produces: 
     *      - application/json
     *    responses:
     *      '200':
     *        description: returns a successful response or week not allowed
     *       
     */