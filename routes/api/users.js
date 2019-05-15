const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');


// @route GET api/users
// @desc Test route
// @access Public
router.get('/', (req, res) => res.send('User route'));


module.exports = router;

// // Load User model
// const User = require('../../models/User');

// // @route   GET api/users/test
// // @desc    Tests users route
// // @access  Public
// router.get('/test', (req, res) => res.json({msg: "Users Works!"})
// );

// // @route   POST api/users/register
// // @desc    Register user
// // @access  Public
// router.post('/register', (req, res) => {
//   User.findOne({ email: req.body.email })
//   .then(user => {
//     if (user) {
//       return res.status(400).json({ email: 'Email already exists' });
//     } else {
//       const avatar = gravatar.url(req.body.email, {
//         s: '200', // Size
//         r: 'pg', // Rating
//         d: 'mm' // Default
//       });

//       const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         avatar: avatar, 
//         password: req.body.password
//       });

//       // takes in 10 as the size of the hash
//       // takes a callback and returns an error if there is one, if not...
//       // returns the salt. once we get the salt we hash the password (bcrypt.hash)
//       bcrypt.genSalt(10, (err, salt) => {
//         // takes in a callback and returns an error if there is one... if not
//         // returns a hash
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if(err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err))
//         })
//       })
//     }
//   })
// });


// module.exports = router;