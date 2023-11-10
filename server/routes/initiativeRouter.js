const express = require('express');
const { Initiative, CommentInitiative } = require('../db/models');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const initiatives = await Initiative.findAll();
    console.log(JSON.stringify(initiatives, null, 2));
    res.json(initiatives);
  })

  .post(async (req, res) => {
    // console.log('123453432');
    try {
      const { title, body, img } = req.body;
      const initiativ = await Initiative.create({
        title,
        body,
        img,
      });
      res.status(201).json(initiativ);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);

    }
  });


router
  .route('/:id')
  .get(async (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const initiatives = await Initiative.findByPk(id, {
      include: {
        model: CommentInitiative,
      },
    });
    // console.log(initiatives);
    res.json(initiatives);
  })
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
