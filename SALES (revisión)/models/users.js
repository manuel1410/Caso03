const { Schema, model } = require('mongoose');

const userSchema = new Schema(
{
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthdate: { type: Date, required: true },
    deleted: { type: Boolean, required: true }
})

module.exports = model('users', userSchema);


