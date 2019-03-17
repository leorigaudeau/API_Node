const { Biere } = require('../../models/bieres.js');


const putBiere = (req,res) => {
    const {id} = req.params;
    const biere = new Biere({
        nom: req.body.nom,
        brasseurid: req.body.brasseurid,
        tauxAlcool: req.body.tauxAlcool,
        typeBiereid: req.body.typeBiere,
    });
    
    Biere.findByIdAndUpdate(id,biere).then((biere)=>{
        if (!biere) {
            res.status(404).send();
        }
        res.send(biere);
    },e=>res.status(500).send(e))
};

module.exports={putBiere};