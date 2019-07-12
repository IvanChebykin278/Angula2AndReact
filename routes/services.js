const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Appliances = require('../models/Appliance');


router.get('/AppliancesList', passport.authenticate('jwt', {session: false}), (req, res) => {
    Appliances.find({}, null, null, function(err, result) {
        res.json({data: result});
    });
});

router.post('/AppliancesDetail', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const id = req.body.id;
    Appliances.getApplianceById(id, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

module.exports = router;