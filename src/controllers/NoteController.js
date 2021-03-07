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

        return res.json(json);
    }

    async show(req, res) {
        const { id } = req.params;

        const json = {
            error: '',
            result: {},
        };

        const note = await NoteService.findById(id);

        if (note) json.result = note;

        return res.json(json);
    }

    async create(req, res) {}

    async update(req, res) {}

    async delete(req, res) {}
}

module.exports = new NoteController();
