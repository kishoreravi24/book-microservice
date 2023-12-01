//Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require('./route/bookroutes');

//App usage
const app = express();
app.use(bodyParser.json());

//Api usage
app.use('/api/v1', bookRoutes);

//404 handler
app.use((req,res) => {
  res.status(404).send({
    message: 'The requested url could not be found',
    statusCode: 404,
  });
});

const port = 8080;
app.listen(port, () => console.log('Book server started and listening on port'+port));

