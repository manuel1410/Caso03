
const { Schema, model } = require('mongoose');

const itemSchema = new Schema({

    name:           { type: String, required: true },
    description:    { type: String, required: true },
    year:           { type: Number, required: true },
    imgURL:         { type: String, required: true },
    initialPrice:   { type: Number, required: true },
    offers:         [{amount: { type: Number, required: true }, buyername: { type: String, required: true }, buyerid: { type: String, required: true }}],
    lastPrice:      Number,
    currency:       { type: String, required: true },
    creationDate:   { type: Date, required: true },
    creationDatepretty: String,
    creationDateHour: String,
    maxDate:        { type: Date, required: true },
    maxDatepretty: String,
    maxDateHour: String,
    owner: {ownerName: { type: String, required: true }, ownerId: { type: String, required: true }, ownerEmail: { type: String, required: true }},

    sold: { type: Boolean, required: true },
    deleted: { type: Boolean, required: true }
})

module.exports = model('items', itemSchema);