const fs = require('fs');
const csvWriter = require('csv-write-stream');
const axios = require('axios')
var writer = csvWriter();

const nikeTableCSV = () => {
  writer.pipe(fs.createWriteStream('db/shoe.csv'));
    axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100')
      .then(data => {
        data.data.results.map((element) => {
          console.log(element.media.imageUrl)
        })
      })
      .catch(err => console.error(err))
    writer.end()
}

nikeTableCSV();