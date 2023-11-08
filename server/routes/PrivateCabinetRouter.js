const express = require('express');
const { User } = require('../db/models');
const { upload } = require('../middlewares/multerMid');
const fs = require('fs/promises');
const sharp = require('sharp');

const PrivateCabinetRouter = express.Router();

PrivateCabinetRouter.get('/', async (req, res) => {
  console.log(req.params, '++++++++++++++++++++++++++++++++', req.body, '=========3sbvfbfvsgvsgv');

  try {
    const { id } = req.session.user;

    const userPrivateCabinetRouter = await User.findOne({ where: { id: id } });
    res.status(200).json(userPrivateCabinetRouter);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

PrivateCabinetRouter.post('/', upload.single('file'), async (req, res) => {
  console.log(req.file, '-------------------');
  try {
    const { id } = req.session.user;

    const checkUser = await User.findOne({ where: { id } });
    if (checkUser) {
    }
    const name = `${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    checkUser.img = name;

    await checkUser.save();
    res.status(200).json(checkUser);
  } catch (error) {
    console.error('Ошибка:', error);
  }
});

module.exports = PrivateCabinetRouter;
