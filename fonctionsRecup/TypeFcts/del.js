const  {TypeBiere} = require('../../models/typeBiere.js');

const delTypeBiere = (req,res) => {
    const {id} = req.params;
    TypeBiere.findOneAndRemove(id).then((typebiere)=>{
        if (!typebiere) {
            res.status(404).send();
        }
        res.send(typebiere)
    },e=>res.status(500).send(e))
};

module.exports={delTypeBiere};