const express = require('express');
const NodeGeocoder = require('node-geocoder'); // node-geocoder used for transforming a location into a latitude, longitude coordinate
const deafaultPlace = require("../data/places");

const lib = require('../util/distanceCalculation');

const router = express.Router();


const options = {
  provider: 'mapquest', // mapquest for access maps of any place in the world
  httpAdapter: 'https',
  apiKey: '7BhT3s2Wsz7OG7AQTVaPpKPyYe08ZHJm', 
  formatter: null
};

const geocoder = NodeGeocoder(options); 

router.post('/addDeafultPlace', async (req,res)=>{

    if (!req.body.placeName || req.body.placeName === '' ) {
        return res.status(200).json({message: 'Place cannot be empty.'});  
    }

    const response = await geocoder.geocode(req.body.placeName);
    const validCity = response.find(u => u.city.toLowerCase()  === req.body.placeName.toLowerCase());

    if (!validCity ) {
        return res.status(200).json({message: 'Invalid place'});
    }

    deafaultPlace.name = validCity.city;
    deafaultPlace.latitude = validCity.latitude;
    deafaultPlace.longitude = validCity.longitude;

    res.status(200).json({ message: 'success' , deafaultPlace: deafaultPlace});

});



router.post('/checkDistance', async (req,res)=>{

    if (!req.body.placeName || req.body.placeName === '' ) {
        return res.status(200).json({message: 'Place cannot be empty.'});
    }

    const response = await geocoder.geocode(req.body.placeName);
    const validCity = response.find(u => u.city.toLowerCase()  === req.body.placeName.toLowerCase());

    if (!validCity ) {
        return res.status(200).json({message: 'Invalid place'});
    }
    if (!deafaultPlace.name ) {
        return res.status(200).json({message: 'Please Set Default City In Admin'});
    }

    if (deafaultPlace.name.toLowerCase() ===  validCity.city.toLowerCase()) {
        return res.status(200).json({message: 'Both are same city'});
  }
  
    const distance = lib.getDistanceFromLatLonInKm(deafaultPlace.latitude,deafaultPlace.longitude, validCity.latitude , validCity.longitude);

    res.status(200).json({ message: 'success' , distance : distance  , display : (distance < 100 ? 'Yes' : 'No')});

});


module.exports = router;