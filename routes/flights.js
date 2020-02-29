var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.put('/:id', flightsCtrl.update);
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id/edit', flightsCtrl.showUpdate);
router.get('/:id', flightsCtrl.show);


module.exports = router;