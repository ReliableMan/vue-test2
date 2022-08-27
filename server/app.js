require('dotenv').config();
const express = require('express'); 
// const cors = require('cors');
const morgan = require('morgan');

// requiring routes files

// middlewaries
const notFoundMiddleware = require('./middlewares/notfound404');
const errorMidlleware = require('./middlewares/error')

const { PORT } = process.env;
const dbcheck = require('./db/dbConnect');

const app = express();
dbcheck();

// middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  const accessList = [
    'http://localhost:8080'
  ];
  const origin = req.get('origin');
  if (accessList.includes(origin)) { // если в списке есть адрес того, кто обращается к серверу, то делаем для него заголовок
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS')
  }
  next();
});

// в случае, если не сработает ни один роут
app.use(notFoundMiddleware);
/* в случае, если в каком-то роуте 
   вызовется ф-я next('some value') с аргументом */
app.use(errorMidlleware);

app.listen(PORT ?? 3003, () => {
  console.log('Server started at http://localhost:%s/', PORT)
})
