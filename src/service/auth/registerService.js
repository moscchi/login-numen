const UsuarioModel = require("../../models/Usuario.model");
const bcryptjs = require("bcryptjs");

const registerService = async (req) => {
  try {
    const { email, password } = req.body;
    //Verificamos que email no exista. si existe mandamos ese msj al front
    const user = await UsuarioModel.findOne({ email });
    if (user) return { message: "Email registrado ya existe." };

    //Hasheamos la contraseña y guardamos el usuario. Retornamos un objeto con el msj usuario creado
    const hashPassword = bcryptjs.hashSync(password);
    await UsuarioModel.create({ email: email, password: hashPassword });
    return {message: "Usuario creado."}
  } catch (error) {
    //Caso de error notificamos el error.
    return {message: "Ocurrió un error"}
  }
};

module.exports = registerService;
