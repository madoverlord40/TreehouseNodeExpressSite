const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;

router.get( '/', ( req, res ) => {
  //if they try to go to the /projects route without an id, send them back to the main page.
  res.redirect('/');
});

router.get('/:id', (req, res) => {
    const index = req.params.id;
    //lets make sure we are navigating to a project id that is valid
    if(index < 0 || index > 4 || index == null) {
      const err = new Error('Sorry this project index is not valid! range is 0-4');
      err.status = 404;
      res.locals.error = err;
      res.status(err.status);
      res.render('error');
    }
    else {
      const templateData = projects[index];
      res.render( `project`, {templateData});
    }
    
});

module.exports = router;