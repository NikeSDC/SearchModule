const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('../db/models.js');

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', '/client/dist')));

app.get('/api/search/:search', (req, res) => {
  db.search(req.params.search)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
