const express = require('express');
const { User } = require('../db/models');

const PrivateCabinetRouter = express.Router();

PrivateCabinetRouter.get('/:id', async (req, res) =>{
    const userPrivateCabinetRouter = await User.findOne({where: {id: req.session.id}})
    res.json(userPrivateCabinetRouter)
})

module.exports = PrivateCabinetRouter;
