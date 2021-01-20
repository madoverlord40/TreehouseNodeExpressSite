const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;

router.get( '/', ( req, res ) => {
  res.render( `project` )
});

router.get('/:id', (req, res) => {
    
    const { id } = req.params;
    return res.redirect(`/projects/${id}`);
});

module.exports = router;