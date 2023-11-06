const express = require('express');
const {Factory} = require('../db/models');
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

factoryRouter.route('/:factoryId').get(async (req, res) => {
    try {
      const { factoryId } = req.params;
      const result = await Factory.findOne({ where: { id: factoryId } });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });


  module.exports = factoryRouter;