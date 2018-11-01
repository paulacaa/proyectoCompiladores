let express = require('express');
let PlaceController = require('../controlador/PlaceController');
let UserController = require('../controlador/UserController');

let router = express.Router();

router.get('/places', PlaceController.show);

router.get('/places/:id', PlaceController.find);

router.post('/places', PlaceController.store);

router.put('/places/:id', PlaceController.update);

router.delete('/places/:id', PlaceController.destroy);


router.get('/user',UserController.show);

router.get('/user/:id',UserController.find);

router.post('/user', UserController.store);

module.exports = router;