var mongoose = require('mongoose');


module.exports = mongoose.model('Patient', {
    name : {type : String},
    info :{type :Object}
});