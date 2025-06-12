const rideModel= require('../models/ride.model');
const mapService=require('./maps.service');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

function getOtp(num){
    let otp = '';
    while (otp.length < num) {
        const byte = crypto.randomInt(0, 10);
        otp += byte.toString();
    }
    otp = otp.slice(0, num);

    const salt = bcrypt.genSaltSync(10);
    const hashedOtp = bcrypt.hashSync(otp, salt);

    return { otp, hashedOtp };
}

module.exports.createRide=async({user,pickup,destination,vehicleType})=>{
    if(!user||!pickup||!destination||!vehicleType){
        throw new Error('All fields are required');
    }
    const fare=await getFare(pickup,destination);

    const ride=rideModel.create({
        user,
        pickup,
        destination,
        fare:fare[vehicleType],
        otp: getOtp(6).otp
    })
    return ride;
}

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }
    const distanceTime = await mapService.getDistanceTime(pickup, destination);
    const { distance, duration } = distanceTime;

    // Check if distance and duration exist and have value
    if (!distance || !duration || typeof distance.value !== 'number' || typeof duration.value !== 'number') {
        throw new Error('Invalid distance or duration data from Google Maps API');
    }

    const distanceInKm = distance.value / 1000;
    const durationInMin = duration.value / 60;

    const fareRates = {
        car: { base: 50, perKm: 15, perMin: 2 },
        motorcycle: { base: 30, perKm: 8, perMin: 1 },
        auto: { base: 40, perKm: 10, perMin: 1.5 }
    };

    const fares = {};
    for (const type in fareRates) {
        const rate = fareRates[type];
        fares[type] = rate.base + (distanceInKm * rate.perKm) + (durationInMin * rate.perMin);
    }

    return fares;
}