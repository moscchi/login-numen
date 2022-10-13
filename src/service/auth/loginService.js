const bcryptjs = require("bcryptjs");
const UsuarioModel = require("../../models/Usuario.model");
const { generarJWT } = require("../../utils/generarJWT");

const loginService = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Verificamos si el usuario existe
    const user = await UsuarioModel.findOne({ email: email });
    console.log(user);
    if (!user)
      res.status(404).json({ message: "Email o contraseña inválidos." });
    //Verificamos la contraseña
    const validatePassword =  bcryptjs.compareSync(password, user.password);
    if (!validatePassword)
      res.status(404).json({ message: "Email o contraseña inválidos." });

    //Generamos el JWT
    const token = generarJWT(email);
    res.json({ user: email, token: token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = loginService;
