const express = require('express');
const { CategoryFactory, Factory } = require('../db/models');
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


categoryRouter.route('/filter/:value').get(async (req, res) => {
  try {
    // const { value } = req.params;
    const data = await Factory.findAll({
      where: { categoryId: value },
    });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = categoryRouter;
