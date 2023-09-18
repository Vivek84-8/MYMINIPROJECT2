const {Schema, model} = require('../connection');

const myschema = new Schema({
    name : String,
    email : String,
    password : String,
    age : Number,
    avatar : String,
});

module.exports = model( 'users', myschema );