const express = require('express');
const router = express.Router();

const data = require('../data/data.json');
const projectData = data.projects;

router.get('/', (req, res) => {
    res.render('index', {projectData} );
});

module.exports = router;