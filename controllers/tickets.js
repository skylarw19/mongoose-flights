const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket
};

function create(req,res){
    Ticket.find({}, function(err,tickets){
        tickets.push(req.body);
        tickets.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        })
    })
}

function newTicket(req, res){
    res.render('tickets/new', {id: req.params.id})
}
