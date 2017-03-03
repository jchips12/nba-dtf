const express = require('express');
const router = express.Router();
const path = require('path');
const authManager = require('../utils/authentication-manager');

/* GET api listing. */
router.get('/', authManager.authenticate, (req, res) => {
    res.send('api works');
});

module.exports = router;