const database = require('../database/connection');

class NoteService {
    getAll() {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM notes', (error, result) => {
                if (error) return reject(error);

                resolve(result);
            });
        });
    }
}

module.exports = new NoteService();
