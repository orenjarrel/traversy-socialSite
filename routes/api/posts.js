const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Tests posts route
// @access  Public
// router.get('/test', (req, res) => res.json({msg: "Posts Works!"})
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;