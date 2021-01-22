const express = require('express');
const router = express.Router();

const data = require('../data/data.json');
const projectData = data.projects;

router.get('/', (req, res) => {
    res.render('index', {projectData} );
});

router.get('/about', (req, res) => {
    res.render('about', {projectData} );
});

module.exports = router;