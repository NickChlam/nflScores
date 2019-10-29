const Results = require('../controllers/resultsController')

module.exports = function(app) {

    app.route('/results')
        .get(Results.getResults)
    
    app.route('/results/:week')
        .get(Results.getResultByWeek)
}