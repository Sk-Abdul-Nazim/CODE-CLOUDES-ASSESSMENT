const express = require('express');
const userData = require("../data/users");
const router = express.Router();


router.post('/auth', (req, res) => {

    const { email, password } = req.body;

    const isValidUser = userData.find(u => u.email === email);

    if (!isValidUser || isValidUser.password !== password) {
        return res.status(200).json({message: 'Invalid credentials'});
    }

    res.status(200).json({ id : isValidUser.id  , message: 'success' });

});


module.exports = router;