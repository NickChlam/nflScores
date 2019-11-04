const Mail = require('../controllers/mailController')

module.exports = function(app){
    app.route('/mail')
        .post(Mail.sendMail)
}