
const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  showUpdate,
  update
};
function index(req, res) {
  Flight.find({}, function(err, flights) {
    if (err) return next(err);
    res.render("flights/index", { flights });
  });
}
function newFlight(req, res) {
  res.render("flights/new");
}
function create(req, res) {
  if(!req.body.departs){
    var redate = new Date();
    redate.setFullYear(redate.getFullYear()+1);
    req.body.departs = redate;
  }
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render("flights/new");
    res.redirect("flights/");
  });
}
// function show(req,res){
//     Flight.findById(req.params.id, function(err, flight){
//         if (err) return next(err);
//         res.render("flights/show", {flight});
//     })
// }
function show(req,res){
  Flight.findById(req.params.id, function(err,flight){
    Ticket.find({flight: flight._id}, function(err, tickets){
      if (err) return next(err);
      console.log(tickets);
      res.render("flights/show", {flight, tickets})
    })
  })
}

function showUpdate(req,res){
  console.log(req.params.id);
  Flight.findById(req.params.id, function(err, flight){
    console.log(flight);
    res.render('flights/edit', {flight})
  })
}

function update(req,res){
  console.log('hello')
  // if(!req.body.departs){
  //   var redate = new Date();
  //   redate.setFullYear(redate.getFullYear()+1);
  //   req.body.departs = redate;
  // }
  Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flight){
    res.redirect('/flights/');
  })
}

// const Flight = require('../models/flight');

// module.exports = {
//     index,
//     new: newFlight,
//     create
// }

// function index(req,res){
//     Flight.find({},function(err,flights){
//         if (err) return next(err)
//         res.render('flights/index',{flights});
//     });
// }

// function newFlight(req,res){
//     res.render('flights/new')
// }

// function create(req,res){
//     const flight = new Flight(req.body);
//     flight.save(function(err){
//         // if (err){
//         //     console.log(err)
//         //     res.render('flights/new') }//returning flights/new page again
//         res.redirect('/flights');
//     })
// }

