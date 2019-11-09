const express = require('express')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
var cors = require('cors');
var helmet = require('helmet');

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

// TODO: fix docker string and put in env variables 
let conn = 'mongodb://mongo:27017/scores'
const isWin = process.platform === "win32";

// is windows? 
if(isWin){
    conn = 'mongodb://localhost:27017/scores'
}

console.log(process.env)

// database connection 
// TODO : replace connection string with envirnment vars 
mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongoDB'))
    .catch('something went wrong')

// establish routes /
games(app)
picks(app)
results(app)
winner(app)
week(app)
mail(app)

// listen! 

const port = process.env.PORT || 3001

app.listen( port, () => {
    console.log(`started listening on port ${port}`)
})