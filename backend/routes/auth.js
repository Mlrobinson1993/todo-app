const express = require('express');
const router = express.Router();

//@route     GET api/auth
//@desc      Get logged in user
//@acces     Private
router.get('/', (req, res) => {
	res.send('Get a logged in user');
});

//@route     post api/auth
//@desc      Auth user & get token
//@acces     Public
router.post('/', (req, res) => {
	res.send('Log in user');
});

module.exports = router;
