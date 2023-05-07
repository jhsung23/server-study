const express = require('express');
const app = express();
const PORT = 4000;

const cors = require('cors');
app.use(
  cors({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': 10,
  })
);

app.use(express.json());

const morgan = require('morgan');
app.use(morgan('dev'));
// app.use(morgan('combined'));

const userRouter = require('./routers/userRouter');
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Express Server listening on port ${PORT}`);
});
