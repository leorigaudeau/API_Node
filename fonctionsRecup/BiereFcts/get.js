const { Biere } = require('../../models/bieres.js');

const getBiere = (req,res) => {
    Biere.find().then((biere)=>{
        res.send(biere);
    },e=>res.status(500).send(e))
};

const getBiereById = (req,res) => {
    const {id} = req.params;
    Biere.findById(id).then((biere)=>{
        if (!biere) {
            res.status(404).send();
        }
        res.send(biere);
    },e=>res.status(500).send(e))
};

module.exports={getBiere,getBiereById};