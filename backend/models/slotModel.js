const {Schema, model} = require('../connection');

const myschema = new Schema({
    name : String,
    phone : String,
    slot: Number,
    vehicle : String,
    createdAt: Date
});

module.exports = model( 'slots', myschema );