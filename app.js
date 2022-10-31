const express = require('express');
const morgan = require('morgan');

const touerRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(`${__dirname}/public`));

//app.get('/api/v1/tours', getAllTours);
//app.post('/api/v1/tours/', creatTour)
//app.get('/api/v1/tours/:id', getTour)
//app.patch('/api/v1/tours/:id', upDateTour)
//app.delete('/api/v1/tours/:id', deleteTour)

app.use('/api/v1/tours', touerRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
//end module.exports2