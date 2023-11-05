require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const newsRouter = require('./routes/newsRouter');
// const userRouter = require('./routes/userRouter');
// const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET ?? 'test',
    resave: true,
    store: new FileStore(),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  }),
);

app.use('/api/news', newsRouter);
// function generateToken(data) {
//   return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
// }

// const authenticateJWT = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (authHeader) {
//       const token = authHeader.split(' ')[1];

//       jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
//           if (err) {
//               return res.sendStatus(403);
//           }

//           req.user = user;
//           next();
//       });
//   } else {
//       res.sendStatus(401);
//   }
// };

// app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
