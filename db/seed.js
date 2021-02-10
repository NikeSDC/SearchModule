// const Axios = require('axios');
// const Inventory = require('./index.js');
// const mongooge = require('mongoose');

// const seed = () => {
//   Axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=Jordan&brand=nike')
//     .then((res) => Inventory.create(res.data.results))
//     .then(() => mongoose.disconnect())
//     .catch((err) => console.error(err));
// };

// seed();

const fs = require('fs');
const faker = require('faker')
const csvWriter = require('csv-write-stream');
var writer = csvWriter();

const randomizer = (array) => {
  const output = Math.floor(Math.random() * Math.floor(array.length));
  return output;
};

const sports = ['basketball', 'soccer', 'football', 'tennis', 'running', 'baseball', 'golf', 'chess', 'counter-strike', 'league of legends']
const gender = ["men's", "women's"]
const shoeUrl = ['https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610040536',
'https://images.stockx.com/images/Air-Jordan-3-Retro-Rust-Pink-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611134373',
'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
'  https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-University-Blue-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611777406',
'  https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
'  https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
'  https://images.stockx.com/images/Air-Jordan-4-Retro-Taupe-Haze-GS.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610700742',
  'https://images.stockx.com/images/Air-Jordan-4-Retro-Taupe-Haze-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611952467',
  'https://images.stockx.com/images/Nike-Air-Force-1-Low-Rose-Pink.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612456230',
  'https://images.stockx.com/images/Nike-Air-Force-1-Low-Rose-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612456233',
  'https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-University-Blue-Black-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612467652',
  'https://images.stockx.com/images/Air-Jordan-3-Retro-Cool-Grey-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611079916',
  'https://images.stockx.com/images/Air-Jordan-6-Retro-Carmine-2020-TD.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611709744',
  'https://images.stockx.com/images/Air-Jordan-6-Retro-Carmine-2020-PS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611709742',
  'https://images.stockx.com/images/Air-Jordan-6-Retro-Carmine-2020-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611709713',
  'https://images.stockx.com/images/Nike-Air-Huarache-Scream-Green-2021.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746345',
  'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Silver-Toe-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611952888',
  'https://images.stockx.com/images/Air-Jordan-1-Zoom-Air-CMFT-PSG-Paris-Saint-Germain.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610407950',
  'https://images.stockx.com/images/Nike-Go-FlyEase-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350460',
  'https://images.stockx.com/images/Nike-Air-Tuned-Max-Celery.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746350',
  'https://images.stockx.com/images/Nike-Go-FlyEase-Celestine-Blue.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350430',
  'https://images.stockx.com/images/Nike-Go-FlyEase-Dynamic-Turquoise.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350463',
  'https://images.stockx.com/images/Nike-NDSTRKT-Air-Max-95-Neon.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606849772',
  'https://images.stockx.com/images/Air-Jordan-6-Retro-Carmine-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612286105',
  'https://images.stockx.com/images/adidas-T-Mac-20-EVO-All-Star-Blue.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746367',
  'https://images.stockx.com/images/adidas-T-Mac-20-EVO-All-Star-Red.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746369',
  'https://images.stockx.com/images/Nike-Air-Foamposite-One-Barely-Green.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610495746',
  'https://images.stockx.com/images/Nike-ACG-Mountain-Fly-Low-Black-Anthracite.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612456221',
  'https://images.stockx.com/images/Nike-Air-Force-1-Low-Silver-Snake-2021.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610700795',
  'https://images.stockx.com/images/Air-Jordan-14-Retro-Low-Clot-Terra-Blush.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611616067',
  'https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Neutral-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612286009',
  'https://images.stockx.com/images/adidas-Yeezy-500-High-Wakaran.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612456268',
  'https://images.stockx.com/images/Nike-Air-Force-1-Low-Experimental-Racer-Pink.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610190450',
  'https://images.stockx.com/images/Nike-Dunk-High-PRM-Dark-Russet-1.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611624984',
  'https://images.stockx.com/images/Air-Jordan-5-Retro-Anthracite.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1605650072',
  'https://images.stockx.com/images/Nike-Air-Max-90-Valentines-Day-2021-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612007922',
  'https://images.stockx.com/images/Air-Jordan-12-Low-SE-Superbowl-LV.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611707481',
  'https://stockx.imgix.net/images/Reebok-BB-4000-Dime-White-Navy.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609455513',
  'https://images.stockx.com/images/Reebok-BB-4000-Dime-Light-Brown.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609455510',
  'https://images.stockx.com/images/adidas-NMD-Hu-Pharrell-Williams-Cream.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350435',
  'https://images.stockx.com/images/Nike-Dunk-High-Ambush-Active-Fuchsia-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611778261',
  'https://images.stockx.com/images/adidas-Ultra-Boost-2021-Triple-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612007371',
  'https://images.stockx.com/images/adidas-Ultra-Boost-2021-Halo-Silver.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610535642',
  'https://images.stockx.com/images/adidas-ZX-8000-atmost-Setsubun.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350471',
  'https://images.stockx.com/images/adidas-ZX-2K-Boost-atmos-Setsubun.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350468',
  'https://images.stockx.com/images/Reebok-Zig-Kinetica-II-Digi-Scape-Orange-Flare.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746360',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://images.stockx.com/images/adidas-T-Mac-20-EVO-Paint-Splatter.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746371',
  'https://images.stockx.com/images/Reebok-DMX-Trail-Shadow-Approach-Triple-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612007365',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://images.stockx.com/images/adidas-T-Mac-2-Restomod-White-Royal-Blue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610700818',
  'https://images.stockx.com/images/adidas-Harden-Vol-5-Futurenatural-Core-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1608620102',
  'https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-70-Hi-Carhartt-Hamilton-Brown.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746336',
  'https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-70-Hi-Carhartt-Covert-Green.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746334',
  'https://images.stockx.com/images/Reebok-Classic-Leather-Tabi-Maison-Margiela-Bianchetto.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611134359',
  'https://images.stockx.com/images/Air-Jordan-3-Retro-Cool-Grey-2021-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611708462',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://images.stockx.com/images/Nike-Lebron-18-Dunkman.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610048739',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://images.stockx.com/images/adidas-Superstar-Blondey-McCoy-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612350465',
  'https://images.stockx.com/images/Air-Jordan-9-Retro-Dark-Charcoal-University-Gold.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1605650073',
  'https://images.stockx.com/images/adidas-ZX-8000-Frozen-Lemonade.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611746373',
  'https://images.stockx.com/images/New-Balance-991-Patta.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611008711',
  'https://images.stockx.com/images/New-Balance-Vision-Racer-White-Pink.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611134321',
  'https://images.stockx.com/images/Nike-Kyrie-7-Raygun.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1608619683',
  'https://images.stockx.com/images/New-Balance-991-Patta.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611442419',
  'https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-70-Concepts-Southern-Flame.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610700779',
  'https://images.stockx.com/images/Nike-Dunk-Low-Chinese-New-Year-Firecracker-2021.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610679874',
  'https://images.stockx.com/images/Converse-All-Star-BB-Evo-Concepts-Southern-Flame.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610700747',
  'https://images.stockx.com/images/adidas-Ultra-Boost-2021-Solar-Yellow.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612455968',
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0',
  'https://images.stockx.com/images/adidas-Ultra-Boost-2021-Solar-Yellow-Pink.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611224956',
  'https://images.stockx.com/images/Puma-Dreamer-2-J-Cole-Yellow.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611442421',
  'https://images.stockx.com/images/Nike-Dunk-Low-Medium-Curry-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612467009',
  'https://images.stockx.com/images/adidas-Ultra-Boost-2021-Core-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611915625',
  'https://images.stockx.com/images/Nike-Air-Foamposite-Pro-Volt-2021.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610190448',
  'https://images.stockx.com/images/Nike-Dunk-High-AB-Notre-Pearl-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611094056',
  'https://images.stockx.com/images/Air-Jordan-5-Retro-Low-Chinese-New-Year-2021-PS.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610700773',
  'https://images.stockx.com/images/adidas-Yeezy-Boost-700-Sun-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1612282094',
  'https://images.stockx.com/images/Air-Jordan-5-Retro-Low-Chinese-New-Year-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611766906',
  'https://images.stockx.com/images/Nike-LeBron-8-Graffiti.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611600142',
  'https://images.stockx.com/images/Air-Jordan-4-Retro-Starfish-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611766779',
  'https://images.stockx.com/images/Nike-Dunk-Low-Chinese-New-Year-Firecracker-2021-TD.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610700767',
  'https://images.stockx.com/images/adidas-Ultra-Boost-DNA-Patrick-Mahomes.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611599745',
  'https://images.stockx.com/images/Nike-Zoom-Freak-2-Alphabet.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609203426',
  'https://images.stockx.com/images/adidas-ZX-5000-Torsion.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611134366',
  'https://images.stockx.com/images/Nike-Dunk-Low-Disrupt-Chinese-New-Year-Firecracker-2021-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611625546',
  'https://images.stockx.com/images/Nike-Dunk-SB-Low-Street-Hawker-Special-Box.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610489443',
  'https://images.stockx.com/images/Nike-Dunk-Low-Chinese-New-Year-Firecracker-2021-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1610700802',
  'https://images.stockx.com/images/Nike-SB-Dunk-Low-CNY-Chinese-New-Year-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611767778',
  'https://images.stockx.com/images/Nike-PG-5-Black-Multicolor.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609203423',
  'https://images.stockx.com/images/Nike-Dunk-High-Notre-Light-Orewood-Brown-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1611094352']

const nikeTableCSV = () => {
  writer.pipe(fs.createWriteStream('db/testfile.csv'));
    for (var i = 0; i < 10000000; i++) {
      writer.write({
        shoe_name: `Nike ${faker.name.firstName()} ${faker.random.word()}`,
        shoe_subname: `${gender[randomizer(gender)]} ${sports[randomizer(sports)]} shoes`,
        shoe_image: `${shoeUrl[randomizer(shoeUrl)]}`,
        shoe_price: `$${faker.finance.amount(100, 500)}`
      })
    }
    writer.end()
}

nikeTableCSV();
