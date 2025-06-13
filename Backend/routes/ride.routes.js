const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideConroller = require('../controllers/ride.controller');
const authMiddleware=require('../middlewares/auth.middleware');


router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid Destination address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('Invalid vehicle type'),
    rideConroller.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup Location'),
    query('destination').isString().isLength({min:3}).withMessage('Invalid Destination Location'),
    rideConroller.getFare
)

module.exports = router;