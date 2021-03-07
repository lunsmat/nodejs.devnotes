const noteService = require('../services/NoteService');

class NoteController {
    ping(req, res) {
        return res.json({
            pong: true,
        });
    }
}

module.exports = new NoteController();
