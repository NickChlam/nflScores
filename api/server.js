const express = require('express')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
var cors = require('cors');

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

let conn = 'mongodb://mongo:27017/scores'
const isWin = process.platform === "win32";

// is windows? 
if(isWin){
    conn = 'mongodb://localhost:27017/scores'
}
console.log(conn)
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
const port = 3001
app.listen( port, () => {
    console.log(`started listening on port ${port}`)
})