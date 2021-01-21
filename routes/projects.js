const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;

router.get( '/', ( req, res ) => {
  console.log("root projects!");
});

router.get('/:id', (req, res) => {
    const index = req.params.id;
    console.log(`projects id=${index}`);
    const templateData = projects[index];
    res.render( `project`, {templateData});
    
});

module.exports = router;