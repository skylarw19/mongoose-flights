const Flight = require('../models/flight');


module.exports = {
    index
}

function index(req,res){
    Flight.find({},function(err,flights){
        if (err) return next(err)
        res.render('flights/index',{flights});
    });
}