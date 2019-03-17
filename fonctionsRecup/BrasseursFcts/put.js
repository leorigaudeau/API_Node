const { Brasseur } = require('../../models/brasseurs.js');


const putBrasseur = (req,res) => {
    const {id} = req.params;
    const brasseur = new Brasseur({
        nom: req.body.nom,
        pays: req.body.pays,
        bieres: req.body.bieres
    });
    
    Brasseur.findByIdAndUpdate(id,brasseur).then((brasseur)=>{
        if (!brasseur) {
            res.status(404).send();
        }
        res.send(brasseur);
    },e=>res.status(500).send(e))
};

module.exports={putBrasseur};