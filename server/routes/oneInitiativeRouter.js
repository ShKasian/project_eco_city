// const express = require('express');
// const router = express.Router();

// router.route('/').get(async (req, res) => {
//   try {
//     const { id } = req.params;
//     const initiative = await Initiative.findByPk(id);
//     console.log(JSON.stringify(initiative, null, 2));
//     res.status(200).json(initiative);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;

// router.route.get(async (req, res) => {
//     const initiative = await Initiative.findOne({ where: { id: req.params.id } });
//     console.log(JSON.stringify(initiative, null, 2));
//     res.json(initiative);
//   });
