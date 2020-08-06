//import installed modules
const express = require('express'); 
const bcrypt = require('bcryptjs');



const server = express(); //create instance of server
server.use(express.json()); //expect/use json in requests and resolutions

server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.json({api: 'up, up and away!'})
}); //return json object

module.exports = server; //export server for use in index.js to set up port