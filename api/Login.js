var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();
const {Users}   = require('../models');
const jwt = require("jsonwebtoken");

router.post("/login", async(req, res) => {
    const schema = {
        email: 'string',
        password : 'string'
    }
      
    const validate = v.validate(req.body, schema);

    if (validate.length) {
      return res
      .status(400)
      .json(validate);
    };

    const userWithEmail = await Users.findOne({
        Where : {email: req.body.email}
    }).catch((err) => {
        console.log('Login Error as: ', err);
    });

    if (!userWithEmail) {
        return res.json({
            message: "Email or password does not match !"
        });
    }

    if (userWithEmail.password !== req.body.password) {
        return res.json({
            message: "Email or password does not match !"
        });
    }

    const JwtToken = jwt.sign({
        id : userWithEmail.id,
        email : userWithEmail.email
    }, process.env.JWT_SECRET );

    res.json({
        message : 'Logged in Succes!',
        token : JwtToken
    });
});

module.exports = router;