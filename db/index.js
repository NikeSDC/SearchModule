const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nikeSearch', { useNewUrlParser: true})
  .then(() => console.log('Mongoose is up and at em'))
  .catch((err) => console.error(err));

const searchSchema = new mongoose.Schema({
  id: String,
  colorway: String,
  gender: String,
  name: String,
  retailPrice: Number,
  shoe: String,
  title: String,
  media: {
    imageUrl: String,
    smallImageUrl: String,
    thumbUrl: String,
  },
});

const Inventory = mongoose.model('Inventory', searchSchema);

module.exports = Inventory;
