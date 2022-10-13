const express = require("express");
const {loginController,registerController} = require('../../controller/auth/authController');
const validarToken = require("../../utils/middlewares/verificarToken");

const router = express.Router();

router.post('/login', loginController)
router.post('/register', registerController)

router.get('/saludo-user', validarToken, (req, res) => {
    res.json({message: `Bienvenido ${req.user}`})
})
module.exports = router