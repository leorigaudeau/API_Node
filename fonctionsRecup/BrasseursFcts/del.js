const { Brasseur } = require('../../models/brasseurs.js');

const delBrasseur = (req,res) => {
    const {id} = req.params;
    Brasseur.findOneAndRemove(id).then((brasseur)=>{
        if (!brasseur) {
            res.status(404).send();
        }
        res.send(brasseur)
    },e=>res.status(500).send(e))
};

module.exports={delBrasseur};