const Picks = require('../controllers/picksController')

module.exports = function(app) {

    app.route('/picks')
        .get(Picks.getPicks)
        .post(Picks.savePick)

    app.route('/picks/:week')
        .get(Picks.getPickByWeek)
}