const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
    email: {type: String, unique: true},
    password: {type: String}
})

const UsuarioModel = model("pruebitas", UsuarioSchema);

module.exports = UsuarioModel;