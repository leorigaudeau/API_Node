const ObjectID = require('mongoose').Types.ObjectId;
const argv = require('yargs')
const { Biere } = require('./models/bieres.js');
const { Brasseur } = require('./models/brasseurs.js');
const { Pays } = require('./models/pays.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());



if (Number.isInteger()&& !isNaN(inputPort)) {
  app.listen(argv.port);
  console.log(`Nous disposons votre serveur sur le port:${argv.port}`);
} else {
  console.log('Nous disposons votre serveur sur le port:3000');
  app.listen(3000);
};
