const argv = require('yargs')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { postBrasseur} =  require("./fonctionsRecup/BrasseursFcts/post");
const { getBrasseur,getBrasseurById} =  require("./fonctionsRecup/BrasseursFcts/get");
const { postBiere} =  require("./fonctionsRecup/BiereFcts/post");
const { getBiere,getBiereById} =  require("./fonctionsRecup/BiereFcts/get");
const {postTypeBiere} = require("./fonctionsRecup/TypeFcts/post");

app.use(bodyParser.json());

app.post('/brasseur', (req, res) => {
   postBrasseur(req,res);
});
app.get('/brasseur',(req,res)=>{
    getBrasseur(req,res);
});
app.get('/brasseur/:id',(req,res)=>{
    getBrasseurById(req,res);
});
app.post('/biere', (req, res) => {
   postBiere(req,res); 
});
app.get('/biere',(req,res)=>{
    getBiere(req,res);
});
app.get('/biere/:id',(req,res)=>{
    getBiereById(req,res);
});
app.post('/typebiere', (req, res) => {
    postTypeBiere(req,res);
});


if (Number.isInteger() && !isNaN(inputPort)) {
    app.listen(argv.port);
    console.log(`Nous disposons votre serveur sur le port:${argv.port}`);
} else {
    console.log('Nous disposons votre serveur sur le port:3000');
    app.listen(3000);
};
