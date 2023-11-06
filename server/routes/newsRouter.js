const express = require('express');
const { News } = require('../db/models');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    console.log('<------->');
    const newses = await News.findAll();
    res.json(newses);
  })
  .post(async (req, res) => {
    const newNews = await News.create(req.body);
    res.json(newNews);
  });

router
  .route('/:id')
  .delete(async (req, res) => {
    try {
      await News.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      await News.update({ ...req.body }, { where: { id } });
      const updatedNews = await News.findOne({ where: { id } });
      return res.json(updatedNews);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  });

module.exports = router;
