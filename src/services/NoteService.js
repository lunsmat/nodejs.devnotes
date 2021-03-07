const database = require('../database/connection');

class NoteService {
    getAll() {
        return new Promise((resolve, reject) => {
            database.query('SELECT id, title FROM notes', (error, result) => {
                if (error) return reject(error);

                resolve(result);
            });
        });
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            database.query(
                'SELECT * FROM notes WHERE id = ?',
                [id],
                (error, result) => {
                    if (error) return reject(error);

                    if (result.length > 0) return resolve(result[0]);
                    return resolve(false);
                }
            );
        });
    }
}

module.exports = new NoteService();
