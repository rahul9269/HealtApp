
var Patient = require('./models/patient');
module.exports = function(app) {

    app.post('/api/patient',function(req, res) {
        var patient = new Patient(req.body);
        patient.save(function (err,result){
            res.json(result);
        });

    });

    app.get('/api/patient',function(req, res) {
        Patient.find({},function(err,result)
        {
            res.json(result);

        });

        });


    app.get('*', function(req, res) {
        console.log(req)
        res.sendfile('./public/views/index.html');
    });

};
