const express = require('express');
const router = express.Router();
const app = require('../controllers/app');

router.get('/', function(req, res){
    app.index(req,res);
});

router.post('/app/add', function(req, res) {
    app.create(req,res);
});

router.get('/app/get', function(req, res) {
    app.list(req,res);
});

module.exports = router;
