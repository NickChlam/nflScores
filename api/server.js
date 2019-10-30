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


//middleware
app.use(cors())
app.use(bodyParser.json())

// database connection
mongoose.connect('mongodb://localhost:27017/scores', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongoDB'))
    .catch('something went wrong')

// establish routes
games(app)
picks(app)
results(app)
winner(app)
week(app)

// listen! 
const port = 3001
app.listen( port, () => {
    console.log(`started listening on port ${port}`)
})