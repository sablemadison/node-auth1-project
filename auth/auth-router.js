const router = require('express').Router();

const Users = require('../users/users-model');

const bcrypt = require('bcryptjs');


router.post('/register', (req, res) => {
    const credentials = req.body;
    const hash = bcrypt.hashSync(credentials.password, 10);

    hash = credentials.password;

    if(!user || !bcrypt.compareSync(credentials.password, user.password) ){
res.status()
    }

})