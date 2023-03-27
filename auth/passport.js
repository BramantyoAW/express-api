const passport = require("passport");
const passportJwt = require("passport-jwt");
const extractJwt = passportJwt.ExtractJwt;
const strategyJwt = passportJwt.Strategy;
const {Users}   = require('../models');

passport.use(
    new strategyJwt(
      {
        jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      function (jwtPayload, done) {
        return Users.findOne({ where: { id: jwtPayload.id } })
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(err);
          });
      }
    )
);