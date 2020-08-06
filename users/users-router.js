const router = require('express').Router();
const Users = require('./users-model.js');


router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch( err => console.log('error:', err))
}) 
module.exports = router;