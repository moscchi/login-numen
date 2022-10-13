const jwt = require('jsonwebtoken')
require('dotenv').config();

const generarJWT = (email) => {
   const payload = { email };
   return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '4h'})
}

module.exports = { generarJWT }