const bodyParser = require('body-parser')
const express = require("express")
const apiRouter =  require('../src/services/api')



const server = express();
// Middlware Généraux
server.use(bodyParser.json());
server.use(bodyParser.json({ type: 'application/json' }))

// Middlware fonctionnels
server.use(apiRouter);




server.listen(4000, function(){
    console.log("Appli marche sur le port 4000")
})