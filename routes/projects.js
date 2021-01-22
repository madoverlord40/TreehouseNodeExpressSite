const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;

router.get( '/', ( req, res ) => {

  res.redirect('/');
});

router.get('/:id', (req, res) => {
    const index = req.params.id;
    const templateData = projects[index];
    res.render( `project`, {templateData});
    
});

module.exports = router;