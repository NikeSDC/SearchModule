const Inventory = require('./index.js');

const db = {
  search: (name) => {
    return Inventory.find({ 'title': { $regex: name, $options: 'i'}}, 'colorway name title shoe retailPrice media').limit(5).exec()
  },
};

module.exports = db;
