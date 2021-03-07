const noteService = require('../services/NoteService');

class NoteController {
    ping(req, res) {
        return res.json({
            pong: true,
        });
    }

    index(req, res) {}

    show(req, res) {}

    create(req, res) {}

    update(req, res) {}

    delete(req, res) {}
}

module.exports = new NoteController();
