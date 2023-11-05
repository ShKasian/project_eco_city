const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
  const { userName, email, password } = req.body;

  console.log(req.body);
  console.log(req.body);
  if (userName && email && password) {
    try {
      console.log('iuytr');
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { userName, password: await bcrypt.hash(password, 10) },
      });
      if (!created) return res.status(401).json({ message: 'User already exists' });

      const sessionUser = JSON.parse(JSON.stringify(user));
      delete sessionUser.password;
      req.session.user = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.status(501).json({ message: 'Server error' });
    }
  }
  return res.sendStatus(502);
});

// userRouter.post('/signup', async (req, res) => {
//   const { userName, email, password } = req.body;
//   console.log("===========", req.body);

//   if (userName && email && password) {
//     try {
//       const [user, created] = await User.findOrCreate({
//         where: { email },
//         defaults: { userName, password: await bcrypt.hash(password, 10) },
//       });
//       if (!created) return res.Status(401);

//       const sessionUser = JSON.parse(JSON.stringify(user));
//       delete sessionUser.password;
//       req.session.user = sessionUser;
//       return res.json(sessionUser);
//     } catch (e) {
//       console.log(e);
//       return res.sendStatus(500);
//     }
//   }
//   return res.sendStatus(500);
// });

userRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.sendStatus(401);
      }

      const sessionUser = JSON.parse(JSON.stringify(user));
      delete sessionUser.password;
      req.session.user = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

userRouter.get('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

userRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = userRouter;