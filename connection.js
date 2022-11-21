const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb+srv://pppriyanka17:priyanka1617@cluster0.psdascw.mongodb.net/library';

async function main() {
    // Use connect method to connect to the server
    console.log('Connected successfully to server');
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    const mgDB = mongoose.connection;
    mgDB.on('connected', console.log.bind(console, 'MongoDB & Mongoose Connected'));
}

module.exports = main;