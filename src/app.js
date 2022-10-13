const app = require('./server/server');
require('dotenv').config();
require('./database/configuration.js')

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT}.`);
})