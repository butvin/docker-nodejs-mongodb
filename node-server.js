// include package express and  app instance
const express = require('express')
const MongoClient = require('mongodb').MongoClient


const app = express()
console.log(app)

// mongodb checking
const url = 'mongodb://mongodb:27017'

// const url = process.env.MONGO_CONNECT_URL
MongoClient.connect(url, (error, client) => {
    if(error){
        throw new Error(`No connect to the database`)
    }

    console.log(`Successfully connected to the database`)
})

const port = process.env.APP_PORT || 3000
app.listen(3000, () => {
    console.log('Express is listening on port 3000!')
})

app.get('/', (req, res) => {
    res.send('Index page');
    console.log(req)
    console.log(res)
});

