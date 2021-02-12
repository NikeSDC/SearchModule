const express = require('express');
const path = require('path');
// const db = require('../db/models.js');
const db = require('../db/index.js')

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', '/client/dist')));

// app.get('/api/search/:search', (req, res) => {
//   db.search(req.params.search)
//     .then((data) => res.status(200).send(data))
//     .catch((err) => res.status(400).send(err));
// });

app.get('/api/search/:search', (req, res) => {
    db.query(`Select * from Nike where (shoe_name||shoe_subname) like '%${req.params.search}%' limit 5`)
      .then(result => res.status(200).send(result.rows))
      .catch(err => res.status(400).send(err))
})

app.get('/api/search/test', (req, res) => {
  var randomizer = (array) => {
    const output = Math.floor(Math.random() * Math.floor(array.length));
    return output;
  };
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  db.query(`Select * from Nike where (shoe_name||shoe_subname) like '%${randomizer(alphabet)}%' limit 5`)
      .then(result => res.status(200).send(result.rows))
      .catch(err => res.status(400).send(err))
})


app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});