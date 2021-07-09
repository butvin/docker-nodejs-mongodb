const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Express is listening on port 3000!')
})


const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://mongodb:27017';

MongoClient.connect(url, (error, client) => {
    if(error){
        throw new Error('No connect to the database');
    }

    console.log('Successfully connected to the database');
})

app.get('/', (request, res) => {
    res.send('Index page');
    console.log(req);
    console.log(res);
});

