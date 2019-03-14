const { Brasseur } = require('../../models/brasseurs.js');

const getBrasseur = (req,res) => {
    Brasseur.find().then((brasseur)=>{
        res.send(brasseur);
    },e=>res.status(500).send(e))
};

const getBrasseurById = (req,res) => {
    const {id} = req.params;

    Brasseur.findById(id).then((brasseur)=>{
        if (!brasseur) {
            res.status(404).send();
        }
        res.send(brasseur);
    },e=>res.status(500).send(e))
};

module.exports={getBrasseur,getBrasseurById};