const express = require('express');
const {Idea} = require('../db/models')

const ideaRouter = express.Router();

ideaRouter
  .route('/')
  .get(async (req, res) => {
    const ideas = await Idea.findAll();
    res.json(ideas);
  })
  .post(async (req, res) => {
    const newIdeas = await Idea.create(req.body);
    res.json(newIdeas);
  });

  ideaRouter
  .route('/:id')
  .delete(async (req, res) => {
    try {
      await Idea.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      await Idea.update({ ...req.body }, { where: { id } });
      const updatedIdeas = await Idea.findOne({ where: { id } });
      return res.json(updatedIdeas);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  });

module.exports = ideaRouter;
