const argv = require('yargs')
const { Biere } = require('./models/bieres.js');
const { Brasseur } = require('./models/brasseurs.js');
const { TypeBiere } = require('./models/typeBiere.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.post('/brasseur', (req, res) => {
    const brasseur = new Brasseur({
        nom: req.body.nom,
        pays: req.body.pays,
        bieres: req.body.bieres
    });
    brasseur.save().then(brasseur => {
        res.send(brasseur);
    }, e => {
        res.status(500).send(e);
    });
});

app.post('/biere', (req, res) => {
    const biere = new Biere({
        nom: req.body.nom,
        brasseurid: req.body.brasseurid,
        tauxAlcool: req.body.tauxAlcool,
        typeBiereid: req.body.typeBiere,
    });
    biere.save().then(biere => {
        res.send(biere);
    }, e => {
        res.status(500).send(e);
    });
});

app.post('/typebiere', (req, res) => {
    const typeBiere = new TypeBiere({
        libelle: req.body.libelle,
        bieres: req.body.bieres
        
    });
    typeBiere.save().then(typeBiere => {
        res.send(typeBiere);
    }, e => {
        res.status(500).send(e);
    });
});


if (Number.isInteger() && !isNaN(inputPort)) {
    app.listen(argv.port);
    console.log(`Nous disposons votre serveur sur le port:${argv.port}`);
} else {
    console.log('Nous disposons votre serveur sur le port:3000');
    app.listen(3000);
};
