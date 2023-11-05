const express = require('express');
const { Initiative } = require('../db/models');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const Initiatives = await Initiative.findAll();
    res.json(initiatives);
  })
  .post(async (req, res) => {
    const newInitiative = await Initiative.create(req.body);
    res.json(newInitiative);
  });

router
  .route('/:id')
  .delete(async (req, res) => {
    try {
      await Initiative.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      await Initiative.update({ ...req.body }, { where: { id } });
      const updatedInitiative = await Initiative.findOne({ where: { id } });
      return res.json(updatedInitiative);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  });

module.exports = router;
