const express = require('express');
const { Factory } = require('../db/models');
const factoryRouter = express.Router();

factoryRouter.route('/').get(async (req, res) => {
  try {
    const allFactory = await Factory.findAll();
    // console.log(allFactory);
    return res.status(200).json(allFactory);
  } catch ({ message }) {
    console.log(message);
    res.status(400).json({ message });
  }
});



factoryRouter.route('/filter/:value').get(async (req, res) => {
  try {
    const { value } = req.params;
    // console.log(value);
    const data = await Factory.findAll({
      where: { categoryId: value },
    });
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = factoryRouter;
