const Axios = require('axios');
const Inventory = require('./index.js');

const seed = () => {
  Axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=Jordan&brand=nike')
    .then((res) => Inventory.create(res.data.results))
    .catch((err) => console.error(err));
};

seed();
