const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routers/productRouter');
mongoose.set('strictQuery', false);
require('dotenv').config('.env');

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DataBase is connected Successfully!!');
  })
  .catch(() => {
    console.error('Error getting from DataBase');
  });

const port = process.env.PORT || 1997;

app.use(express.json()); // in built middleware
app.use('/product', productRoutes);

app.listen(port, () => {
  console.log(`Port is running on ${port}...`);
});
