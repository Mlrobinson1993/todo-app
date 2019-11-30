const express = require('express');
const router = express.Router();

//@route     GET api/contacts
//@desc      get all users todos
//@acces     Private
router.get('/', (req, res) => {
	res.send('Gets a users todos');
});

//@route     POST api/contacts
//@desc      Adds new todo
//@acces     Private
router.post('/', (req, res) => {
	res.send('Adds a new todo');
});

//@route     PUT api/contacts/:id
//@desc      Update todos
//@acces     Private
router.put('/:id', (req, res) => {
	res.send('Updates todos');
});

//@route     DELETE api/contacts/:id
//@desc      Deletes a todo
//@acces     Private
router.delete('/:id', (req, res) => {
	res.send('Deletes a todo');
});

module.exports = router;
