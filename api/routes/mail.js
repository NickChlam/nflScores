const Mail = require('../controllers/mailController')

module.exports = function(app){
    app.route('/mail')
        .post(Mail.sendMail)
}

/**
* @swagger
* /mail:
*  post:
*    description: Send an email message
*    produces: 
*      - application/json
*    consumes:
*      - application/json
*    parameters:
*       - name: body
*         description: send an email, use request body for adress, subject and body  
*         in: body
*         required: true
*         properties: 
*           to: 
*               type: string
*           subject:
*               type: string
*           text:
*               type: string
*         example:
*           to: email@email.com
*           subject: subject of the email 
*           text: the body of the email 
*    responses:
*      '400':
*          description: Bad Request, request body is not valid 
*      '200':
*          description: message has been sent 
*          
*       
*/

