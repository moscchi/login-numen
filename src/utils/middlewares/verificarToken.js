const jwt = require('jsonwebtoken');
const UsuarioModel = require('../../models/Usuario.model');

const validarToken = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) res.status(401).json({message: "Token no encontrado."})
 
    try {
        const {email} = jwt.verify(token, process.env.SECRET_KEY)
        const user = UsuarioModel.findOne({email: email})
 
        if(!user) res.status(401).json({message: "Token inválido."})
 
        req.user = email
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Token inválido."})
    }}
 
    module.exports = validarToken