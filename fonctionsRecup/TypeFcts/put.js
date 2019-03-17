const  {TypeBiere} = require('../../models/typeBiere.js');


const putTypeBiere = (req,res) => {
    const {id} = req.params;
    const typeBiere = new TypeBiere({
        nom: req.body.nom,
        pays: req.body.pays,
        bieres: req.body.bieres
    });
    
    TypeBiere.findByIdAndUpdate(id,typeBiere).then((typeBiere)=>{
        if (!typeBiere) {
            res.status(404).send();
        }
        res.send(typeBiere);
    },e=>res.status(500).send(e))
};

module.exports={putTypeBiere};