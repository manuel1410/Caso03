const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/caso03';

mongoose.connect(uri).catch( err => console.log(err));

mongoose.connection.on('open', _ => {
    console.log('Conection stablished to', uri)
})

mongoose.connection.on('error', err => {
    console.log(err);
})