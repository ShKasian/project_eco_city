const express = require('express');
const { CategoryFactory } = require('../db/models');
const categoryRouter = express.Router();

categoryRouter.route('/').get(async (req, res) => {
  try {
    const category = await CategoryFactory.findAll();
    // console.log(category);
    return res.status(200).json(category);
  } catch ({ message }) {
    console.log(message);
    res.status(400).json({ message });
  }
});


categoryRouter.route('/filter/:value').post(async (req, res) => {
  try {
    const { value } = req.params;
    const data = await factory.findAll({
      where: { categoryId: value },
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = categoryRouter;
