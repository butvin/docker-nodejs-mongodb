const path = require('path');
const App = require('../models/App');


exports.index = function (req, res) {
    res.sendFile(path.resolve('views/app.html'));
};


exports.create = function (req, res) {
    let application = new App(req.body);
    console.log(req.body);

    application.save(function (error) {
        if (error) {
            res.status(400).send('Unable to save App to database');
        } else {
            res.redirect('/app/get');
        }
    });
};


exports.list = function (req, res) {
    App.find({}).exec(function (error, app) {
        
        if (error) {
            return res.send(500, error);
        }
        
        res.render('app/getApp', {
            app: app
        });
    });
};
