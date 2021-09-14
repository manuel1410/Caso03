
const { Schema, model } = require('mongoose');

const itemSchema = new Schema({

    name:           String,
    description:    String,
    year:           Number,
    imgURL:         String,
    initialPrice:   Number,
    lastPrice:      Number,
    currency:       String,
    creationDate:   Date,
    maxDate:        Date,
    ownerName:      String,
    ownerId:        String,
    ownerEmail:     String,

    active: Boolean,

    buyer: {name: String, id: String}

})

module.exports = model('items', itemSchema);