const express = require('express');

const app = express();
app.get('/', (req, res) => res.json({ msg: 'Welcome to my todoApp API' }));

//define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
