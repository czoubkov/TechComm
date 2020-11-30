const express = require('express');
const router = express.Router();
const db = require('../models');
const { Addnewposts } = db;


router.get('/', (req,res) => {
  Addnewposts.findAll({
    order:[
      ['id', 'DESC'],
    ]
  })
    .then(posts => res.json(posts));
});

router.post('/', (req, res) => {
   
  let { title,posttype,postdesc } = req.body;
 Addnewposts.create({
     title,
     posttype,
     postdesc,
  })
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;