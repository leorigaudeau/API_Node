const { Biere } = require('../../models/bieres.js');

const delBiere = (req,res) => {
    const {id} = req.params;
    Biere.findOneAndDelete(id).then((biere)=>{
        if (!biere) {
            res.status(404).send();
        }
    },e=>res.status(500).send(e))
};

module.exports={delBiere};