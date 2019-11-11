const Picks = require('../controllers/picksController')

module.exports = function(app) {

    app.route('/picks')
        .get(Picks.getPicks)
        .post(Picks.savePick)

    app.route('/picks/:week')
        .get(Picks.getPickByWeek)
}

/**
* @swagger
* /picks:
*  get:
*    description: get all Picks
*    produces: 
*      - application/json
*    consumes:
*      - application/json
*    responses:
*      '404':
*          description: No content, no Picks were found 
*      '200':
*          description: Picks found. return all Picks  
*/

/** 
* @swagger
* /picks/{week}:
*  get:
*    description: get Picks by week
*    produces: 
*      - application/json
*    parameters:
*      - name: week
*        description: get Picks by {week} 
*        in: path    
*        required: true
*        type: string
*      - name: email
*        description: get picks by week and email 
*        in: query
*        required: false
*      - name: uid
*        description: get picks by week and user id
*        in: query
*        required: false
*    responses:
*       '204':
*           description: No picks for the week provided
*       '200':
*           description: return Picks requested 
* 
*/


/** 
* @swagger 
* /picks:
*  post:
*   description: save a Pick
*   produces: 
*      - application/json
*   consumes:
*      - application/json
*   parameters:
*      - name: body
*        description: body of pick to save 
*        in: body
*        schema:
*           type: object 
*           example:
*               week: "11"
*               picks: ['raiders', 'browns', 'packers']
*               user: { "LOB" : "RHT", "email": "email@eamail.com", "knownAs": "Name", "offce": "00610", "uid": "hyPfVijPuCdBgExg2PTayYr7Z3c2"}
*   responses: 
*       '200':
*           description: everything is ok
*       '204':
*           description: no data for picks
*/