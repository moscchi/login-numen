const loginService = require("../../service/auth/loginService");
const registerService = require("../../service/auth/registerService");

const loginController = async (req, res) => {
    const login = await loginService(req, res);
    res.json(login)
 };
 
 const registerController = async (req, res) => {
    const register = await registerService(req);
    res.json({register})
 }
 module.exports = {loginController, registerController}