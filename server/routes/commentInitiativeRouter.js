const express = require('express');
const { CommentInitiative, User } = require('../db/models');

const router = express.Router();

router
  .route('/:id')
  .get(async (req, res) => {
    // console.log('------------------');
    const notes = await CommentInitiative.findAll({
      include: User,
      where: { initiativeId: req.params.id },
    });
    res.json(notes);
  })
  // исправить
  .delete(async (req, res) => {
    console.log(req.params, 'sbhdtnuebthv');
    const { id } = req.params;
    try {
      await CommentInitiative.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const newPost = await CommentInitiative.create({
      userId: req.session?.user?.id,
      body: req.body.body,
      initiativeId: req.params.id,
    });
    const sendedComment = await CommentInitiative.findOne({
      include: User,
      where: { id: newPost.id },
    });
    res.json(sendedComment);
  });
module.exports = router;
