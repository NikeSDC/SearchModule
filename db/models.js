const Inventory = require('./index.js');

const db = {
  search: (queryName) => Inventory.find({ name: queryName }),
};

module.exports = db;
