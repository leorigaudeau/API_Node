const { Biere } = require('../../models/bieres.js');

const delBiere = (req,res) => {
    const {id} = req.params;
    Biere.findOneAndRemove(id).then((biere)=>{
        if (!biere) {
            res.status(404).send();
        }
        res.send(biere)
    },e=>res.status(500).send(e))
};

module.exports={delBiere};