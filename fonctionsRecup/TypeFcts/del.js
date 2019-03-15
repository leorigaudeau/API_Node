const  {TypeBiere} = require('../../models/typeBiere.js');

const delTypeBiere = (req,res) => {
    const {id} = req.params;
    TypeBiere.findOneAndDelete(id).then((typebiere)=>{
        if (!typebiere) {
            res.status(404).send();
        }
    },e=>res.status(500).send(e))
};

module.exports={delTypeBiere};