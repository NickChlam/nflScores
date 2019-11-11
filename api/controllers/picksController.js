const Pick = require('../models/pick')
const Joi = require('@hapi/joi');


exports.getPicks = async function(req, res) {
    
    const picks = await Pick.find().select('week picks user -_id');
    if(!picks.length) return res.status(204).send({'error': true, 'message': 'no Picks were found'})
    
    return res.status(200).send(picks)

}

exports.getPickByWeek = async function(req, res) {
 
    const uid = req.query.uid
    const email = req.query.email
    
    // TODO : learn how to use the mongoose or - not DRY 
    if(uid === undefined && email === undefined){
        const picks = await Pick.find({ week: req.params.week})
            .select('week picks user -_id');
     
        
        if(!picks.length ) return res.status(204).send({})
        return res.status(200).send(picks)
       
    }
    if(email){
        const picks = await Pick.find({ week: req.params.week})
            .where('user.email', email)
            .select('week picks user');
        if(!picks.length) return res.status(204).send({})
        return res.status(200).send(picks)
    }
    if(uid){
        const picks = await Pick.find({ week: req.params.week})
            .where('user.uid', uid)
            .select('week picks user');
        if(!picks.length) return res.status(204).send({})
        return res.status(200).send(picks)
    }


    // const picks = await Pick.find({ week: req.params.week})
    //         .or([{'user.uid': uid}, {'user.email': email}])
    //         .select('week picks user');
    //     if(!picks) return res.status(404).send('no data')
    //     return res.status(200).send(picks)

   
}

exports.savePick = async function( req, res) {
    // validate req.body with Joi 
    const { error } = await validatePick(req.body)
    // send error back and return 
    if(error) return res.status(400).send({"error": true, "message": `${error}`})

    // create document object for pick and save to mongo 
    const picks = new Pick(req.body)
    picks.save( err => {
        // if error return and send error 
        if(err) return res.status(500).send(err)
        // send back pick info 
        res.status(201).send(picks)
    })
}

function validatePick(req) {
    const schema = Joi.object({
        week: Joi.string()
            .required(),
        picks: Joi.array()
            .required(),
        user: Joi.object()
            .required()
    })

    return schema.validate(req)
}