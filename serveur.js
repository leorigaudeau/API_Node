const argv = require('yargs')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// Brasseur require---------------------------------------------------------------------------------------------
const { postBrasseur} =  require("./fonctionsRecup/BrasseursFcts/post");
const { getBrasseur,getBrasseurById} =  require("./fonctionsRecup/BrasseursFcts/get");
const{ putBrasseur} = require("./fonctionsRecup/BrasseursFcts/put");
// Bieres require---------------------------------------------------------------------------------------------
const { postBiere} =  require("./fonctionsRecup/BiereFcts/post");
const { getBiere,getBiereById} =  require("./fonctionsRecup/BiereFcts/get");
const { putBiere } =  require("./fonctionsRecup/BiereFcts/put");
// Type Bieres require---------------------------------------------------------------------------------------------
const {postTypeBiere} = require("./fonctionsRecup/TypeFcts/post");
const {putTypeBiere} = require("./fonctionsRecup/TypeFcts/put");


//Routing-------------------------------------------------------------------------------------------------------
app.use(bodyParser.json());

// Brasseur routing---------------------------------------------------------------------------------------------
app.post('/brasseur', (req, res) => {
   postBrasseur(req,res);
});
app.get('/brasseur',(req,res)=>{
    getBrasseur(req,res);
});
app.get('/brasseur/:id',(req,res)=>{
    getBrasseurById(req,res);
});
app.put('/brasseur/:id',(req,res)=>{
    putBrasseur(req,res);
});

// Bieres Routing---------------------------------------------------------------------------------------------
app.post('/biere', (req, res) => {
   postBiere(req,res); 
});
app.get('/biere',(req,res)=>{
    getBiere(req,res);
});
app.get('/biere/:id',(req,res)=>{
    getBiereById(req,res);
});
app.put('/typebiere/:id',(req,res)=>{
    putBiere(req,res);
});
// Type Bieres routing---------------------------------------------------------------------------------------------
app.post('/typebiere', (req, res) => {
    postTypeBiere(req,res);
});
app.put('/brasseur/:id',(req,res)=>{
    putTypeBiere(req,res);
});


if (Number.isInteger() && !isNaN(inputPort)) {
    app.listen(argv.port);
    console.log(`Nous disposons votre serveur sur le port:${argv.port}`);
} else {
    console.log('Nous disposons votre serveur sur le port:3000');
    app.listen(3000);
};
