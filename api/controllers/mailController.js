const Joi = require('@hapi/joi')
const nodemailer = require('nodemailer')

exports.sendMail = async function(req, res) {
  console.log(req.body)
  const { error } = validateMessage(req.body)
    // if error 400 and send error
  if(error) res.status(400).send({"error": true, "message": `${error}`})

    // define service for mailer TODO: import user and pass from env variables 
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pickemRobertHalf@gmail.com',
          pass: '!pickEm123'
        }
      });
      
    const mailOptions = {
        from: 'pickemRobertHalf@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
      };
      
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(req.body)
          console.log(error);
        } else {
            res.status(200).send({'info': info.response, 'message' : req.body})
            // console.log('Email sent: ' + info.response);
        }
      });

}

function validateMessage(req) {
    const schema = Joi.object({
        to: Joi.string()
            .email()
            .required(),
        text: Joi.string()
            .required(),
        subject: Joi.string()
            .required()
    })

    return schema.validate(req)
}