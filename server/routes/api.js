const express = require('express');
const router = express.Router();
const path = require('path');
const authManager = require('../utils/authentication-manager');
const nbaService = require('../services/nba-service');

/* GET api listing. */
router.get('/', (req, res) => {
    nbaService.getDailyLeaders(null, (err, data) => {
        if (err) {
            res.send(data);
        } else {
            res.send(data.resultSets[0].rowSet);
        }
    })
});

module.exports = router;