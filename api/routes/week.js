const Week = require('../controllers/weekController')

module.exports = function(app) {
    app.route('/week')
        .get(Week.getWeek)
}