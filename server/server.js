require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const newsRouter = require('./routes/newsRouter');
const initiativeRouter = require('./routes/initiativeRouter');
// const oneInitiativeRouter = require('./routes/oneInitiativeRouter');
const userRouter = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');
const factoryRouter = require('./routes/factoryRouter');
const PrivateCabinetRouter = require('./routes/PrivateCabinetRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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

app.use('/api/category', categoryRouter);
app.use('/api/factory', factoryRouter);
app.use('/api/lk', PrivateCabinetRouter);
app.use('/api/user', userRouter);
app.use('/api/news', newsRouter);
app.use('/api/initiative', initiativeRouter);
// app.use('api/initiative/:id', oneInitiativeRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
