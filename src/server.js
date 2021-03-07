require('dotenv/config');

const app = require('./app');

const server = app.listen(process.env.PORT || 3333, () => {
    console.log(`Server runing in port ${server.address().port}`);
});
