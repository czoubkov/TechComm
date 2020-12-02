const router = require('express').Router();
// const table = require('../models');
const passport = require('../middlewares/authentication');
const {User} = require('../models');


router.post('/signup', (req, res) => {
  console.log("POST body: ", req.body);
  // let {firstName,lastName,dob,email,password} = req.body;
    User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => {
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.post('/login',
  passport.authenticate('local'), 
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
})

module.exports = router;