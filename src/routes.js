const express = require('express');
const routes = express.Router();

const noteController = require('./controllers/NoteController');

routes.get('/ping', noteController.ping);

module.exports = routes;
