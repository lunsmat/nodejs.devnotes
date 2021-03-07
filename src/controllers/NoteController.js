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

    async create(req, res) {
        const { title, body } = req.body;

        const json = {
            error: '',
            result: {},
        };

        if (title && body) {
            const noteId = await NoteService.add(title, body);

            json.result = {
                id: noteId,
                title,
                body,
            };
        } else {
            json.error = 'The field title or the field body was not sended';
        }

        return res.json(json);
    }

    async update(req, res) {}

    async delete(req, res) {}
}

module.exports = new NoteController();
