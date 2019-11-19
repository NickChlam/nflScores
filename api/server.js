const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const option = require('./config/swaggerOptions')

//swagger
const swaggerJsDoc= require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
// https://swagger.io/specification/#infoObject
const swaggerDocs= swaggerJsDoc(option.swaggerOptions)
// set up and serve
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))


// import routes 
const games = require('./routes/games')
const picks = require('./routes/picks')
const results = require('./routes/results')
const winner = require('./routes/winner')
const week= require('./routes/week') 
const mail = require('./routes/mail')


//middleware
app.use(cors())
app.use(bodyParser.json())
app.use(helmet());

if(app.get('env') === 'development'){
    console.log('app in development ')
}

// TODO: fix docker string and put in env variables 
let conn = 'mongodb://localhost:27017/scores'
const isWin = process.platform === "win32";

// is windows? 
if(isWin){
    conn = 'mongodb://localhost:27017/scores'
}



// database connection 
// TODO : replace connection string with envirnment vars 
mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongoDB'))
    .catch('something went wrong')

// routes
games(app)
picks(app)
results(app)
winner(app)
week(app)
mail(app)


// config
const port = process.env.PORT || 3001

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`app: ${app.get('env')}`)


// listen! 
app.listen( port, () => {
    console.log(`started listening on port ${port}`)
})