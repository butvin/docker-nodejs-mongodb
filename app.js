const express = require('express');
const App = express();
const router = express.Router();


const db = require('./db');
const app = require('./routes/app');


App.engine('html', require('ejs').renderFile);
App.set('view engine', 'html');
App.use(express.urlencoded({ extended: true }));


const path = __dirname + '/views/';
App.use(express.static(path));
App.use('/app', app);


const port = process.env.PORT || 8080;
App.listen(port, function () {
  console.log(`App listening on port: ${port}`)
})