const NoteService = require('../services/NoteService');
const noteService = require('../services/NoteService');

class NoteController {
    ping(req, res) {
        return res.json({
            pong: true,
        });
    }

    async index(req, res) {
        const json = {
            error: '',
            result: [],
        };

        const notes = await NoteService.getAll();

        notes.map(note =>
            json.result.push({
                id: note.id,
                title: note.title,
            })
        );

        res.json(json);
    }

    show(req, res) {}

    create(req, res) {}

    update(req, res) {}

    delete(req, res) {}
}

module.exports = new NoteController();
