const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'please tell us your name!'],
    trim: true,
  },
  description: {
    type: String,
    require: [true, 'please provide product Description'],
    trim: true,
  },
  price: {
    type: Number,
    require: [true, 'please provide a product price'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
