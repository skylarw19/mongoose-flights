const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket
};

// function create(req,res){
//     Flight.findById(req.params.id, function(err, flight){
//         console.log('hello')
//         Ticket.find({}, function(err,tickets){
            
//             tickets.push(req.body);
//             tickets.save(function(err){
//                 // console.log("hello")
//                 // console.log(tickets.flight + "hello");
//                 res.redirect(`/flights/${tickets.flight}`);
        
//             })
//         })
//     })
    
// }

// function newTicket(req, res){
//     console.log(req.params.id);
//     res.render('tickets/new', {id: req.params.id})
// }

function newTicket(req,res){
    console.log(req.params.id);
    Flight.findById(req.params.id, function(err,flight){
        res.render('tickets/new', {flight});
    });
}

// function create(req,res){
//     Flight.findById(req.params.id, function(err, flight){
//         console.log('hello')
//         Ticket.find({}, function(err,tickets){
            
//             tickets.save(function(err){
//                 res.redirect(`/flights/${tickets.flight}`);
        
//             })
//         })
//     })
// }

function create(req,res){
    console.log(req.body);
    console.log(req.params)
    req.body.flight = req.params.id;  //req.body has 2 props right now (seat and price). this line creates a new prop called flight that is the id
    Ticket.create(req.body, function(err, tickets){  //createing a new obj on the Ticket model with the 3 properties (seat,price,flight), so need to pass whole req.body
        res.redirect(`/flights/${req.params.id}`)
    })
    
}
