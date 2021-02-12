const express = require('express');
const path = require('path');
// const db = require('../db/models.js');
const db = require('../db/index.js')

const app = express();
const port = 3001;


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

app.get('/api/test', (req, res) => {
  var randomizer = (array) => {
    const output = Math.floor(Math.random() * Math.floor(array.length));
    return output;
  };
  var sports = ['basketball', 'soccer', 'football', 'tennis', 'running', 'baseball', 'golf', 'chess', 'counter-strike', 'league of legends']
  db.query(`Select * from Nike where (shoe_name||shoe_subname) like '%${randomizer(sports)}%' limit 5`)
      .then(result => res.status(200).send(result.rows))
      .catch(err => res.status(400).send(err))
})


app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});