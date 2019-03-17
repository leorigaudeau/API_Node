const { TypeBiere } = require('../../models/typeBiere.js');

const getTypeBiere = (req,res) => {
    TypeBiere.find().then((typeBiere)=>{
        res.send(typeBiere);
    },e=>res.status(500).send(e))
};

const getTypeBiereById = (req,res) => {
    const {id} = req.params;
    TypeBiere.findById(id).then((typeBiere)=>{
        if (!typeBiere) {
            res.status(404).send();
        }
        res.send(typeBiere);
    },e=>res.status(500).send(e))
};

module.exports={getTypeBiere,getTypeBiereById};