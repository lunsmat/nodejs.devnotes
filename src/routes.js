const express = require('express');
const routes = express.Router();

const noteController = require('./controllers/NoteController');

routes.get('/ping', noteController.ping);

routes.get('/notes', noteController.index);
routes.get('/notes/:id', noteController.show);
routes.post('/notes', noteController.create);
routes.put('/notes/:id', noteController.update);
routes.delete('/notes/:id', noteController.delete);

module.exports = routes;
