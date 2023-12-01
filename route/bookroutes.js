//Imports
const express = require('express');
const router = express.Route();
const bookController = require('../controllers/bookcontroller');

//Routes
router.get('/books', bookController.getAllBooks);

modules.export = router;

