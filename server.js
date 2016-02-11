var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var mongoose          = require('mongoose');
var db = require('./config/db');
var port = process.env.PORT || 8080;
mongoose.connect(db.url);

app.use(bodyParser.json({ limit:'100mb'}));


app.use(bodyParser.urlencoded({limit:'100mb', extended: true }));


app.use(express.static(__dirname + '/public'));


require('./app/routes')(app);
app.listen(port);

exports = module.exports = app;
