const express = require('express');
const { User } = require('../db/models');
const upload = require('../middlewares/multerMid');
const fs = require('fs/promises');
const sharp = require('sharp');
const { log } = require('console');

const PrivateCabinetRouter = express.Router();

// PrivateCabinetRouter.get('/', async (req, res) => {

//   try {
//     const { id } = req.session.user;

//     const userPrivateCabinetRouter = await User.findOne({ where: { id: id } });
//     res.status(200).json(userPrivateCabinetRouter);
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(500);
//   }
// });

PrivateCabinetRouter.patch('/', upload.single('file'), async (req, res) => {
  try {
    const { id } = req.session.user;

    const checkUser = await User.findOne({ where: { id } });
    if (checkUser) {
    }
    const name = `${Date.now()}.jpg`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    checkUser.img = name;
    req.session.user.img = name;
    await req.session.save();
    await checkUser.save();
    res.status(200).json({img:name});
  } catch (error) {
    console.error('Ошибка:', error);
  }
});

module.exports = PrivateCabinetRouter;
